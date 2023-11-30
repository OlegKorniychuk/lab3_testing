const fs = require('fs');


const inputReader = (inputFilePath) => {
  try {
    const data = fs.readFileSync(inputFilePath, { encoding: 'utf8', flag: 'r' })
    if (!data) {
      console.log('The file is empty');
      return false;
    }
    const startingField = data.split('\n').map(row => row.trim().split(' '));
    const [gameFieldHeight, gameFieldWidth] = startingField.shift()

    if (!(
      typeof(parseInt(gameFieldHeight)) === 'number' && 
      typeof(parseInt(gameFieldWidth)) === 'number'
    )) {
      console.log('Input formatting is wrong');
      return false;
    }

    for (let row of startingField) {
      if (row.length != gameFieldWidth) {
        console.log('Game field is not a rectangle or wrong field size is provided');
        return false;
      }
      for (let symbol of row) {
        const acceptedSymbols = ['.', '#', 'p'];
        if (!acceptedSymbols.includes(symbol)) {
          console.log('Game field contains wrong symbols');
          return false;
        }
      }
    }

    return [startingField, gameFieldHeight, gameFieldWidth];
  } catch (error) {
    console.log(`Can't open file at ${inputFilePath}`);
  }
}

const consolePrinter = (matrix) => {
  for (let row of matrix) {
    console.log(row.join(' '));
  }
}

module.exports = { inputReader, consolePrinter };