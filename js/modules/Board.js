import Tile from './Tile.js';
import { showWinScreen } from './settings.js';

export class Board {
    constructor() {
        this.initialize();  
    }

    async initialize() {
        this.boardElement = document.getElementById('game-board');
        this.size = document.getElementById('board-size').value;
        console.log(this.size);
        this.tiles = [];
        
        this.symbolList = await this.generateSymbolList();
        console.log(this.symbolList);
        this.createBoard();
        this.firstMove = null;
        this.secondMove = null;
        this.newestMove = null; 
        document.getElementById('pairs').textContent = 0;
        this.pairsFound = 0;
        document.getElementById('timer').textContent = `${this.formatTime(0)}:${this.formatTime(0)}`;
        this.startTime = null;
        this.timerInterval = null;
        this.endTime = null;
    }

    createBoard() {
        this.boardElement.innerHTML = '';
        this.tiles = [];
        this.boardElement.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;

        for (let i = 0; i < this.size * this.size; i++) {
            const symbol = this.assignSymbol();
            const tile = new Tile(symbol, this);
            this.tiles.push(tile);
            this.boardElement.appendChild(tile.element);
        }
    }

    async generateSymbolList() {
        let symbolList = [];
        const symbolType = document.getElementById('play-character').value;
        console.log(symbolType);

        let apiUrl = '';

        if (symbolType == "pictures") {
            apiUrl = "https://picsum.photos/200";
        } else if (symbolType == "dogs") {
            apiUrl = "https://dog.ceo/api/breeds/image/random";
        } else if (symbolType == "cats") {
            apiUrl = "https://randomfox.ca/floof/";
        } 

        if (apiUrl) {
            symbolList = await this.fetchImages(symbolType, apiUrl);
        } else {
            let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            for (let i = 0; i < this.size * this.size / 2; i++) {
                const randomIndex = Math.floor(Math.random() * symbols.length);
                const randomSymbol = symbols[randomIndex];
                symbolList.push(randomSymbol);
                symbols = symbols.replace(randomSymbol, '');
            }
            symbolList = symbolList.concat(symbolList);
        }        
        return symbolList;
    }

    async fetchImages(symbolType, apiUrl) {
        const responses = await Promise.all(
            Array.from({ length: (this.size * this.size) / 2 }).map(async () => {
                let imageUrl = '';
                if (symbolType === 'pictures') {
                    imageUrl = `${apiUrl}?random=${Math.random()}`;
                } else if (symbolType === 'dogs') {
                    const dogResponse = await fetch(apiUrl);
                    const dogData = await dogResponse.json();
                    imageUrl = dogData.message;
                } else if (symbolType === 'cats') {
                    const catResponse = await fetch(apiUrl);
                    const catData = await catResponse.json();
                    imageUrl = catData.image;
                }
                return imageUrl;
            })
        );
        return [...responses, ...responses];
    }

    assignSymbol() {
        const randomIndex = Math.floor(Math.random() * this.symbolList.length);
        const symbol = this.symbolList[randomIndex];
        this.symbolList.splice(randomIndex, 1);
        
        return symbol;
    }

    makeMove() {
        if (!this.startTime) {
            this.startGame();
        }
        if (this.firstMove && this.secondMove) {
            this.newestMove = this.tiles.find(tile => tile.isOpen && !tile.isMatched && tile !== this.firstMove && tile !== this.secondMove);
            if (this.newestMove) {
                if (this.firstMove.element.textContent !== this.secondMove.element.textContent || 
                    (this.firstMove.element.textContent === '' &&
                     this.firstMove.element.querySelector('img').src !== this.secondMove.element.querySelector('img').src)) {
                    this.firstMove.resetTile();
                    this.secondMove.resetTile();
                }
                this.firstMove = this.newestMove;
                this.secondMove = null;
            }
        } else if (this.firstMove) {
            this.secondMove = this.tiles.find(tile => tile.isOpen && !tile.isMatched && tile !== this.firstMove);
            if (this.secondMove) {
                if ((this.firstMove.element.textContent === this.secondMove.element.textContent) && (this.firstMove.element.querySelector('img').src === this.secondMove.element.querySelector('img').src)) {
                this.firstMove.isMatched = true;
                this.firstMove.element.classList.add('matched');
                this.secondMove.isMatched = true;
                this.secondMove.element.classList.add('matched');
                this.pairsFound++
                document.getElementById('pairs').textContent = this.pairsFound;
                }
            } 
        } else {
            this.firstMove = this.tiles.find(tile => tile.isOpen && !tile.isMatched);
        }
        
        console.log('First Move:', this.firstMove);
        console.log('Second Move:', this.secondMove);
        console.log('Newest Move:', this.newestMove);
        console.log('Pairs Found:', this.pairsFound);
        this.checkGameEnd();
    }

    startGame() {
        this.startTime = Date.now(); 
        this.timerInterval = setInterval(() => {
            this.updateTimer(); 
        }, 1000);
    }

    updateTimer() {
        const elapsedTime = Date.now() - this.startTime; 
        const seconds = Math.floor(elapsedTime / 1000);
        const minutes = Math.floor(seconds / 60);
        const displaySeconds = seconds % 60;

         document.getElementById('timer').textContent = `${this.formatTime(minutes)}:${this.formatTime(displaySeconds)}`;
    }

    formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    checkGameEnd() {
        const allMatched = this.tiles.every(tile => tile.isMatched);
        if (allMatched) {
            clearInterval(this.timerInterval);
            this.endTime = document.getElementById('timer').textContent
            showWinScreen(this.endTime);
        }
    }

    resetBoard() {
        clearInterval(this.timerInterval);
        this.initialize();
    }


}




  