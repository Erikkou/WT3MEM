export const BACKEND_URL = 'http://localhost:8000';

export function initSettings(gameBoard) {
    sizeChecker();
    cardCharacterChecker();
    setupNewGameButton(gameBoard);
    initLeaderboard();
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
  const response = await fetch(`${BACKEND_URL}/scores`);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const scores = await response.json();
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