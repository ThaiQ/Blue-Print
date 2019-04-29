var methodsFile = require('./SudoFunctions.js');
var input = require('readline-sync');;

//Boards
var board_Empty = [
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."]]

var board1 = [
[1,2,3,".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."]]

var test = [
[1,2,3,4,5,6,7,8,9],
[7,8,9,1,2,3,4,5,6],
[4,5,6,7,8,9,1,2,3],
[3,1,2,8,4,5,9,6,7],
[6,9,7,3,1,2,8,4,5],
[8,4,5,6,9,7,3,1,2],
[2,3,1,5,7,4,6,9,8],
[9,6,8,2,3,1,5,7,4],
[5,7,4,9,6,8,2,3,1]]

// Game Logic
var board = board1;
var methods = new methodsFile(board);
var userInput;
console.log("start");
methods.print();
userInput = input.question("command (type 'help' for helps): ");

//Interactive
while (userInput != "exit" && methods.check()==false){

  if (userInput == "print"){
    methods.print(console.log("Complete & Correct: " + methods.check()));
  }
  else if (userInput == "status"){
    if (methods.check()==false){
      methods.print();
      console.log("Complete & Correct: " + methods.check());
     }
      else break;
  }
  else if (userInput == "help"){
    console.log("ColumnRow-Number: use format to set number to the board")
    console.log("     Ex: 1a-1 will set column 1, row a to 1")
    console.log("status : check for completion");
    console.log("print : print game board");
    console.log("exit : exit game");
  }
  else if (userInput.length == 4 && userInput.charAt(2)=="-"){
    methods.inputBoard(userInput);
    methods.print();
  }

  userInput = input.question("command: ");
}

if(methods.check()==true){
  console.log("Complete & Correct: " + methods.check())
  console.log("Well Played")
}
else
  console.log("Shut Down")
