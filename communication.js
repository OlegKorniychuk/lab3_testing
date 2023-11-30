const GameHandler = require('./logic.js');
const { inputReader, consolePrinter } = require('./io.js');


class Game {
  constructor(inputFilePath, Handler, inputParcer, printer) {
    const input = inputParcer(inputFilePath);
    if (!input) {
      throw new Error('Error creating the game object');
    }
    [this.gameField, this.gameFieldHeight, this.gameFieldWidth] = input;
    this.gameHandler = new Handler(this.gameField);
    this.printer = printer;
  }

  // //This method is currently not used
  // nextStep() {
  //   this.gameHandler.pushFigureDown();
  //   this.gameField = this.gameHandler.rewriteGameField(this.gameFieldHeight, this.gameFieldWidth);
  //   this.printer(this.gameField);
  // }

  playGame() {
    const oldField = this.gameField;
    this.gameHandler.pushFigureDown();
    this.gameField = this.gameHandler.rewriteGameField(this.gameFieldHeight, this.gameFieldWidth);

    if (JSON.stringify(oldField) === JSON.stringify(this.gameField)) {
      this.printer(this.gameField)
    } else {
      this.playGame();
    }
  }
}

const tetris = new Game('test.txt', GameHandler, inputReader, consolePrinter);
tetris.playGame();