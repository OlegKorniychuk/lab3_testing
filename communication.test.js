const Game = require('./communication.js');

// mocking Handler
class mockHandler {
  constructor(data) {
    this.data = data;
  }

  pushFigureDown() {

  }

  rewriteGameField(height, width) {
    return this.data;
  }
}

//mocking consolePrinter
let outputStorage = [];
const mockConsolePrinter = (data) => outputStorage.push(data);

describe('Playing the whole game', () => {
  it('Should read a starting game field from file, play the game and print the final state', () => {
    const inputFilePath = 'test.txt';
    const mockInputParcer = (inputFilePath) => ['game field', 'height', 'width'];
    const tetris = new Game(inputFilePath, mockHandler, mockInputParcer, mockConsolePrinter);
    tetris.playGame();
    expect(outputStorage[0]).toStrictEqual('game field');
    outputStorage = [];
  })
  it('Should throw an error if Game class object can not be created', () => {
    //mocking inputParcer
    const mockInputParcer = (inputFilePath) => false;
    const inputFilePath = 'wrongFile.txt';
    expect(
      () => new Game(inputFilePath, mockHandler, mockInputParcer, mockConsolePrinter)
    ).toThrow('Error creating the game object');
  })
})