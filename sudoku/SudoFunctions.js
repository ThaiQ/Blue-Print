class methods{

constructor(board){
	this.board = board;
}

//Print out game board
print()
{
	for(var i = 0 ; i<this.board.length; i++)
	{
		var line ="";
        	for (var j = 0 ; j<this.board[i].length; j++)
        	{
                	line = line + this.board[i][j] + " ";
        	}
        	console.log(line)
	}
}

//Check for validation
check(){

//Row
for (var i = 0 ; i < this.board.length; i++){
var line=[];
	for (var j = 0 ; j<this.board.length; j++){
		line.push(this.board[i][j])}
	console.log(line);
	if (!this.validLine(line))
		return false;
}

//Column
for (var i = 0 ; i < this.board.length; i++){
var line=[];
        for (var j = 0 ; j<this.board.length; j++){
                line.push(this.board[j][i])}
        console.log(line);
        if (!this.validLine(line))
                return false;
}

return true;
}

//Check for Zeros="." and Repeat
validLine(line){
	for (var i=0; i<line.length; i++){
	for (var j=i+1; j<line.length; j++){
		if(line[i]<1 || line[i]>9 || line[i]=="." || line[i]==line[j] || !Number.isInteger(line[i])){return false;}
	}}
	return true;
}

}

module.exports = methods;
