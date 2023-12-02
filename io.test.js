const fs = require('fs');
const { inputReader, consolePrinter } = require('./io');


//  mocking console.log
let logStorage = [];
console.log = (message) => {
  logStorage.push(message);
}

describe('Reading input file and checking formatting', () => {
  it('Should read a correctly formatted file and return its contents', () => {
    // Overriding readFileSync method to return what is needed
    const fileContents = 
    '7 7\n'+
    '. . . p p . .\n'+
    '. . . p p . .\n'+
    '. . . . . . .\n'+
    '. . . . . . .\n'+
    '# . . . . . .\n'+
    '# # . . . . .\n'+
    '# # # # # # #';
    fs.readFileSync = (inputFilePath, options) => fileContents;
    const filePath = 'input.txt';
    const expectedOutput = [
      [
        ['.', '.', '.', 'p', 'p', '.', '.'],
        ['.', '.', '.', 'p', 'p', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.'],
        ['#', '#', '.', '.', '.', '.', '.'],
        ['#', '#', '#', '#', '#', '#', '#'],
      ],
      '7',
      '7'
    ];
    expect(inputReader(filePath)).toStrictEqual(expectedOutput)
  })

  it('Should return false and print a message to console if the file is empty', () => {
    // Overriding readFileSync method to return what is needed
    const fileContents = '';
    fs.readFileSync = (inputFilePath, options) => fileContents;
    const filePath = 'input.txt';
    const expectedMessage = 'The file is empty';
    expect(inputReader(filePath)).toBeFalsy();
    expect(logStorage[0]).toStrictEqual(expectedMessage);
    logStorage = [];
  })

  it('Should return false and print a message to console if no field size is given', () => {
    // Overriding readFileSync method to return what is needed
    const fileContents = 
    '. . . p p . .\n'+
    '. . . p p . .\n'+
    '. . . . . . .\n'+
    '. . . . . . .\n'+
    '# . . . . . .\n'+
    '# # . . . . .\n'+
    '# # # # # # #';
    fs.readFileSync = (inputFilePath, options) => fileContents;
    const filePath = 'input.txt';
    const expectedMessage = 'Game field is not a rectangle or wrong field size is provided';
    expect(inputReader(filePath)).toBeFalsy();
    expect(logStorage[0]).toStrictEqual(expectedMessage);
    logStorage = [];
  })

  it('Should return false and print a message to console if field size is wrong', () => {
    // Overriding readFileSync method to return what is needed
    const fileContents = 
    '7 5\n'+
    '. . . p p . .\n'+
    '. . . p p . .\n'+
    '. . . . . . .\n'+
    '. . . . . . .\n'+
    '# . . . . . .\n'+
    '# # . . . . .\n'+
    '# # # # # # #';
    fs.readFileSync = (inputFilePath, options) => fileContents;
    const filePath = 'input.txt';
    const expectedMessage = 'Game field is not a rectangle or wrong field size is provided';
    expect(inputReader(filePath)).toBeFalsy();
    expect(logStorage[0]).toStrictEqual(expectedMessage);
    logStorage = [];
  })

  it('Should return false and print a message to console if field is not a rectangle', () => {
    // Overriding readFileSync method to return what is needed
    const fileContents = 
    '7 7\n'+
    '. . . p p . .\n'+
    '. . . p p . .\n'+
    '. . . . .\n'+
    '. . . . . . .\n'+
    '# . . . . . .\n'+
    '# # . . . . .\n'+
    '# # # # # # #';
    fs.readFileSync = (inputFilePath, options) => fileContents;
    const filePath = 'input.txt';
    const expectedMessage = 'Game field is not a rectangle or wrong field size is provided';
    expect(inputReader(filePath)).toBeFalsy();
    expect(logStorage[0]).toStrictEqual(expectedMessage);
    logStorage = [];
  })

  it('Should return false and print a message to console if game field contains wrong symbols', () => {
    // Overriding readFileSync method to return what is needed
    const fileContents = 
    '7 7\n'+
    '. . . p p . .\n'+
    '. . . p p . .\n'+
    '. . . . . . .\n'+
    '. . . . . . .\n'+
    '# . . . . . .\n'+
    '# # . . . . x\n'+
    '# # # # # # #';
    fs.readFileSync = (inputFilePath, options) => fileContents;
    const filePath = 'input.txt';
    const expectedMessage = 'Game field contains wrong symbols';
    expect(inputReader(filePath)).toBeFalsy();
    expect(logStorage[0]).toStrictEqual(expectedMessage);
    logStorage = [];
  })

  it('Should return false and print a message to console if file can not be read', () => {
    // Overriding readFileSync method to return what is needed
    fs.readFileSync = (inputFilePath, options) => {
      throw new Error('Error when opening file')
    };
    const filePath = 'input.txt';
    const expectedMessage = `Can't open file at ${filePath}`;
    expect(inputReader(filePath)).toBeFalsy();
    expect(logStorage[0]).toStrictEqual(expectedMessage);
    logStorage = [];
  })
})

describe('Printing output to console', () => {
  it('Should printed a given matrix to console', () => {
    const matrix = [
      ['.', '.', '.', 'p', 'p', '.', '.'],
      ['.', '.', '.', 'p', 'p', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['#', '.', '.', '.', '.', '.', '.'],
      ['#', '#', '.', '.', '.', '.', '.'],
      ['#', '#', '#', '#', '#', '#', '#'],
    ];
    const expectedOutput = [
      '. . . p p . .',
      '. . . p p . .',
      '. . . . . . .',
      '. . . . . . .',
      '# . . . . . .',
      '# # . . . . .',
      '# # # # # # #'
    ]
    consolePrinter(matrix);
    expect(logStorage).toStrictEqual(expectedOutput);
    logStorage = [];
  })
})