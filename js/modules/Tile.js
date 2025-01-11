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
    const imageElement = document.createElement('img');
    imageElement.src = '';
    tile.appendChild(imageElement);
    tile.appendChild(symbolElement);
    tile.addEventListener('click', () => this.flipTile());
    return tile;
  }

  flipTile() {
    this.isOpen = !this.isOpen || !this.isMatched;
    const symbolElement = this.element.querySelector('span');
    if (this.isOpen) {
      this.element.classList.add('open');
      symbolElement.classList.add('symbol');
      if (this.symbol.length == 1) {
      symbolElement.textContent = this.symbol;
      } else {
        const imageElement = this.element.querySelector('img');
        imageElement.classList.add('tile-image');
        imageElement.src = this.symbol;
        symbolElement.textContent = '';
        console.log(this.element);
      }
      this.board.makeMove();
    } 
  }

  resetTile() {
    this.isOpen = false;
    this.element.classList.remove('open');
    const symbolElement = this.element.querySelector('span');
    symbolElement.removeAttribute('class');
    symbolElement.textContent = this.symbolElementSymbol;
    const imageElement = this.element.querySelector('img');
    imageElement.removeAttribute('class');
    imageElement.src = '';

  }
}