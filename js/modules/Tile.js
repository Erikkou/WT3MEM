export default class Tile {
  constructor(symbol, board) {
    this.symbol = symbol;  
    this.isOpen = false; 
    this.isMatched = false;
    this.board = board;
    this.symbolElementSymbol = document.getElementById('board-characters').value;
    this.element = this.createTileElement();
  }

  createTileElement() {
    const tile = document.createElement('div');
    tile.classList.add('tile', 'closed');
    const symbolElement = document.createElement('span');
    symbolElement.textContent = this.symbolElementSymbol;
    tile.appendChild(symbolElement);
    tile.addEventListener('click', () => this.flipTile());
    return tile;
  }

  flipTile() {
    this.isOpen = !this.isOpen || !this.isMatched;
    if (this.isOpen) {
      this.element.classList.add('open');
      const symbolElement = this.element.querySelector('span');
      symbolElement.classList.add('symbol');
      symbolElement.textContent = this.symbol;
      this.board.makeMove();
    } 
  }

  resetTile() {
    this.isOpen = false;
    this.element.classList.remove('open');
    const symbolElement = this.element.querySelector('span');
    symbolElement.removeAttribute('class');
    symbolElement.textContent = this.symbolElementSymbol;
  }
}