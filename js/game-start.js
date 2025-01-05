import { Board } from './modules/Board.js';
import { initSettings } from './modules/settings.js';

document.addEventListener('DOMContentLoaded', () => {
  let gameBoard = new Board();
  initSettings(gameBoard);
});