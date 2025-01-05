import { CONFIG } from './config.js';

export async function initSettings(gameBoard) {
    document.getElementById('loading').style.display = 'block'; 
    sizeChecker();
    cardCharacterChecker();
    await setupPreferences();
    document.getElementById('loading').style.display = 'none';
    gameBoard.initialize();
    setupNewGameButton(gameBoard);
    initLeaderboard();
  }
   
async function setupPreferences() {
  const token = localStorage.getItem('jwt'); 
  if (token) {
    const userId = JSON.parse(atob(token.split('.')[1])).sub;
    const playerData = await getPreferences(userId);
    console.log('Player data:', playerData);
    
    if (playerData) {
      const foundColor = playerData.color_found;
      const closedColor = playerData.color_closed;
      const preferredAPI = playerData.preferred_api;

      
      const apiDropdown = document.getElementById('play-character');
      const apiOption = Array.from(apiDropdown.options).find(option => option.value === preferredAPI);
      if (apiOption) apiDropdown.value = preferredAPI;  

      
      const foundColorDropdown = document.getElementById('color1');
      const foundColorOption = Array.from(foundColorDropdown.options).find(option => option.value === foundColor);
      if (foundColorOption) foundColorDropdown.value = foundColor;  

      
      const closedColorDropdown = document.getElementById('color2');
      const closedColorOption = Array.from(closedColorDropdown.options).find(option => option.value === closedColor);
      if (closedColorOption) closedColorDropdown.value = closedColor;  

      console.log('Found Color:', foundColor);  
      console.log('Closed Color:', closedColor);  
      applyColors(foundColor, closedColor);

    }
    
  }
}

async function getPreferences(userId) {
  try {
    const response = await fetch(`${CONFIG.BACKEND_URL}/api/player/${userId}/preferences`, { 
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch preferences');
    }

    const playerData = await response.json();

    return playerData;

  } catch (error) {
    console.error('Error fetching preferences:', error);
    return;
  }
}

function applyColors(foundColor, closedColor) {
  document.documentElement.style.setProperty('--found-color', foundColor);
  document.documentElement.style.setProperty('--closed-color', closedColor);
}

function sizeChecker() {
  const sizePicker = document.getElementById('board-size');

  sizePicker.addEventListener('change', () => {
    console.log('New selected size:', sizePicker.value);
  });
}

export function showWinScreen(endTime) {
  const winScreen = document.getElementById('win-screen');
  winScreen.classList.remove('hidden'); 
  const timeDisplay = document.getElementById('win-time');
  timeDisplay.textContent = endTime;
}

function setupNewGameButton(gameBoard) {
  document.querySelectorAll('.new-game-btn').forEach(button => {
    button.addEventListener('click', () => {
      console.log('New game button clicked');
      const winScreen = document.getElementById('win-screen');
      winScreen.classList.add('hidden'); 
      const foundColor = document.getElementById('color1').value;
      const closedColor = document.getElementById('color2').value;
      applyColors(foundColor, closedColor);
      gameBoard.resetBoard(); 


    });
  });
}

function cardCharacterChecker() {
  const cardCharacter = document.getElementById('board-characters');

  cardCharacter.addEventListener('change', () => {
    console.log('New card character:', cardCharacter.value);
  });
}

async function getScores() {
  const response = await fetch(`${CONFIG.BACKEND_URL}/scores`);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const scores = await response.json();
  console.log('Scores:', scores);
  return scores;
}

function sortScores(scores) {
  return scores
  .sort((a, b) => a.score - b.score)
  .reduce((acc, score, index) => {
    if (index < 5) {
      acc.push(score);
    }
    return acc;
  }, []);
}

function makeLeaderboard(scores) {
  const leaderboard = document.getElementById('leaderboard');
  leaderboard.innerHTML = '';
  scores.forEach(score => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.name} - ${score.score}`;
    leaderboard.appendChild(listItem);
  });
}

async function initLeaderboard() {
  const scores = await getScores();
  const topScores = sortScores(scores);
  makeLeaderboard(topScores);
}