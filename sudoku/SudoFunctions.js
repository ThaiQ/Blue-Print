class methods{

constructor(board){
	this.board = board;
}

//Print out game board
print()
{
	console.log("    1  2  3  4  5  6  7  8  9");
	console.log("    -------------------------");
	var char = "a";
	for(var i = 0 ; i<this.board.length; i++)
	{
		var line = char + " | ";
        	for (var j = 0 ; j<this.board[i].length; j++)
        	{
                	line = line + this.board[i][j] + "  ";
        	}
        	console.log(line);
		char = this.nextChar(char);
	}
}

//increment letter, uses for print
nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

//Check for validation
check(){

//Row
for (let i = 0 ; i < this.board.length; i++){
let line=[];
	for (let j = 0 ; j<this.board.length; j++){
		line.push(this.board[i][j])}
	if (!this.validLine(line))
		return false;
}

//Column
for (let i = 0 ; i < this.board.length; i++){
let line=[];
        for (let j = 0 ; j<this.board.length; j++){
                line.push(this.board[j][i])}
        if (!this.validLine(line))
                return false;
}

//3x3 box
var incrementRow = 0;
var incrementCol = 0;
for (let box = 0; box < 9 ; box ++){
let line =[];
	for (let col = 0 + incrementCol; col<3 + incrementCol; col ++){
		for (let row = 0 + incrementRow; row<3 + incrementRow; row ++){
			line.push(this.board[col][row]);
			if (!this.validLine(line))
							return false;
		}
	}
	 if(incrementRow<=9-1-3){incrementRow += 3;}
	 else {incrementRow = 0; incrementCol += 3;}
}

return true;
}

//Check for Zeros="." and Repeat
validLine(line){
	for (let i=0; i<line.length; i++){
	for (let j=i+1; j<line.length; j++){
		if(line[i]<1 || line[i]>9 || line[i]=="." || line[i]==line[j] || !Number.isInteger(line[i])){return false;}
	}}
	return true;
}

//assigns each 9 letters to 9 numbers
letterToNumber(letter){
	if (letter == "a")return 0;
	else if (letter == "b")return 1;
	else if (letter == "c")return 2;
	else if (letter == "d")return 3;
	else if (letter == "e")return 4;
	else if (letter == "f")return 5;
	else if (letter == "g")return 6;
	else if (letter == "h")return 7;
	else if (letter == "i")return 8;
	else return "Must be from a to i";
}

	inputBoard(input){
		let array = input.split("");
		if(array.length==4 && input.charAt(2)=='-'){
			let char1 = parseInt(array[0]);
			let char2 = this.letterToNumber(array[1]);
			let char4 = parseInt(array[3]);
			if(Number.isInteger(char1) &&  Number.isInteger(char2) && Number.isInteger(char4)){
				this.board[char2][char1-1] = char4;
				return true;
			}
		}
		return false;
	}

	clear(){
		console.log("clean")
		this.board=this.board_Origin;
	}

}

module.exports = methods;
