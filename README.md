[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13010971&assignment_repo_type=AssignmentRepo)

## Tetris
#### Korniichuk Oleh, IM-13

### Setup

  ```npm  install```

### Run tests

  ```npm test```

### Usage

  Object of Game class takes filePath string, Handler class, inputReader (string => Array[Array[x][x], Int, Int]) function and printer (string => func(string)) function as arguments.
  While input and output functions can be customized, Handler must be GameHandler class as it contains all the logic.
  The game will 'play' the tetris untill the piece falls and returns this state.
