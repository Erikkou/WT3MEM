

export function initSettings(gameBoard) {
    sizeChecker();
    cardCharacterChecker();
    setupNewGameButton(gameBoard);
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
      console.log('New game button clicked!');
      const winScreen = document.getElementById('win-screen');
      winScreen.classList.add('hidden'); 
      gameBoard.resetBoard(); 
    });
  });
}

function cardCharacterChecker() {
  const cardCharacter = document.getElementById('board-characters');

  cardCharacter.addEventListener('change', () => {
    console.log('New selected card character:', cardCharacter.value);
  });
}