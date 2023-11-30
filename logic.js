class GameHandler {
  constructor(fieldMatrix) {
    this.piece = [];
    this.landscape = [];
    this.lastRowIndex = fieldMatrix.length - 1 
    for (let i = 0; i < fieldMatrix.length; i++) {
      for (let j = 0; j < fieldMatrix[i].length; j++) {
        if (fieldMatrix[i][j] === 'p') {
          this.piece.push({ i: i, j: j });
        } else if (fieldMatrix[i][j] === '#') {
          this.landscape.push({ i: i, j: j });
        }
      }
    }
  }

  pushFigureDown() {
    let newPiece = [];
    for (let piecePoint of this.piece) {
      let newPiecePoint = { i: piecePoint.i + 1, j: piecePoint.j };
      if (
        this.landscape.some(point => point.i === newPiecePoint.i && point.j === newPiecePoint.j) ||
        newPiecePoint.i > this.lastRowIndex
        ) {
        // console.log('The piece can not move anymore');
        return false;
      } else {
        newPiece.push(newPiecePoint);
      }
    }
    this.piece = newPiece;
  }

  rewriteGameField(gameFieldHeight, gameFieldWidth) {
    let newGameField = [];
    for (let i = 0; i < gameFieldHeight; i++) {
      newGameField.push([]);
      for (let j = 0; j < gameFieldWidth; j++) {
        if (this.piece.some(point => point.i === i && point.j === j)) {
          newGameField[i].push('p');
        } else if (this.landscape.some(point => point.i === i && point.j === j)) {
          newGameField[i].push('#');
        } else {
          newGameField[i].push('.');
        }
      }
    }
    return newGameField;
  }
}


module.exports = GameHandler;
