const GameHandler = require('./logic.js');

describe('Pushing a figure down', () => {
  it('Should map the gaming field correctly', () => {
    const matrix = [
      ['.', 'p', 'p', 'p', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['#', '.', '.', '.', '.', '.', '.'],
      ['#', '#', '#', '#', '#', '#', '#'],
    ]
    const gameHandler = new GameHandler(matrix);
    const expectedLandscape = [
      { i: 5, j: 0 },
      { i: 6, j: 0 },
      { i: 6, j: 1 },
      { i: 6, j: 2 },
      { i: 6, j: 3 },
      { i: 6, j: 4 },
      { i: 6, j: 5 },
      { i: 6, j: 6 }
    ];
    const expectedPiece = [
      { i: 0, j: 1 },
      { i: 0, j: 2 },
      { i: 0, j: 3 }
    ];
    expect(gameHandler.landscape).toStrictEqual(expectedLandscape);
    expect(gameHandler.piece).toStrictEqual(expectedPiece);
  })

  it('Should push a piece down when possible', () => {
    const matrix = [
      ['.', 'p', 'p', 'p', '.', '.', '.'],
      ['.', '.', 'p', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['#', '.', '.', '.', '.', '.', '.'],
      ['#', '#', '#', '#', '#', '#', '#'],
    ]
    const gameHandler = new GameHandler(matrix);
    const expectedPiece = [
      { i: 1, j: 1},
      { i: 1, j: 2},
      { i: 1, j: 3},
      { i: 2, j: 2},
    ];
    gameHandler.pushFigureDown();
    expect(gameHandler.piece).toStrictEqual(expectedPiece);
  })
  it('Should not push a figure if it touches landscape', () => {
    const matrix = [
      ['p', '.', '.', '.', '.', '.', '.'],
      ['p', '.', '.', '.', '.', '.', '.'],
      ['p', 'p', '.', '.', '.', '.', '.'],
      ['#', '.', '.', '.', '.', '.', '.'],
      ['#', '#', '.', '.', '.', '.', '.'],
      ['#', '#', '#', '.', '.', '.', '.'],
      ['#', '#', '#', '#', '#', '#', '#'],
    ]
    const gameHandler = new GameHandler(matrix);
    const expectedPiece = [
      { i: 0, j: 0},
      { i: 1, j: 0},
      { i: 2, j: 0},
      { i: 2, j: 1},
    ];
    gameHandler.pushFigureDown();
    expect(gameHandler.piece).toStrictEqual(expectedPiece);
  })
  it('Should not push a figure if it touches the bottom of the field', () => {
    const matrix = [
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', 'p', '.', '.', '.', '.', '.'],
      ['.', 'p', '#', '.', '.', '.', '.'],
      ['p', 'p', '#', '#', '#', '#', '#'],
    ]
    const gameHandler = new GameHandler(matrix);
    const expectedPiece = [
      { i: 4, j: 1},
      { i: 5, j: 1},
      { i: 6, j: 0},
      { i: 6, j: 1},
    ];
    gameHandler.pushFigureDown();
    expect(gameHandler.piece).toStrictEqual(expectedPiece);
  })
  it('Should do nothing if there is no figure on the field', () => {
    const matrix = [
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '#', '.', '.', '.', '.', '.'],
      ['#', '#', '#', '.', '.', '.', '.'],
      ['#', '#', '#', '#', '#', '#', '#'],
    ]
    const gameHandler = new GameHandler(matrix);
    const expectedPiece = [];
    gameHandler.pushFigureDown();
    expect(gameHandler.piece).toStrictEqual(expectedPiece);
  })
})

describe('Updating the game field', () => {
  it('Should create a matrix with a new figure', () => {
    const gameHandler = new GameHandler([]);
    gameHandler.landscape = [
      { i: 5, j: 0 },
      { i: 6, j: 0 },
      { i: 6, j: 1 },
      { i: 6, j: 2 },
      { i: 6, j: 3 },
      { i: 6, j: 4 },
      { i: 6, j: 5 },
      { i: 6, j: 6 }
    ];
    gameHandler.piece = [
      { i: 0, j: 1 },
      { i: 0, j: 2 },
      { i: 0, j: 3 }
    ];
    const matrixHeight = 7;
    const matrixWidth = 7;
    const expectedMatrix = [
      ['.', 'p', 'p', 'p', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['#', '.', '.', '.', '.', '.', '.'],
      ['#', '#', '#', '#', '#', '#', '#'],
    ];
    expect(gameHandler.rewriteGameField(matrixHeight, matrixWidth)).toStrictEqual(expectedMatrix);
  })
})