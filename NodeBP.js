//module, extra script
module.exports.VariableName = NameOfVariableOrActualFunctionAndVariable;
var variable = require('./other export name');
variable.NameofFuntion();
//event+util
var eventV = require('events');
var variable = require('util');
var emitter = new eventV.EventEmitter();
emitter.on('nameofCustomEven', function(){});
emitter.emit('nameofCustomEven', inputdataForFunction)
util.inherits(objectVar, eventV.EventEmitter);

//read file
var fs = require('fs');
var variable = fs.readFileSync('text.txt', 'utf8');
//writeNewFile
fs.writeFileSync('nameNewFile',variableOrcontent);
//noBlockingCode
fs.readFile('text.txt','utf8', function(err, data){});
fs.writeFile('text.txt',content);

//Directory, create delete
fs.mkdirSync('name.whatever');
fs.rmdirSync('name.whatever');
//noBlockingCode
fs.mkdir('name.whatever');
fs.rmdir('name.whatever');
//alsoRemove
fs.unlink('./dir');

//Server Http
var http = require('http');
var statusNumber = 200;
var port = 1234;
var server = http.createServer(function(request, response){
  response.writeHead (statusNumber, {'Content-Type': 'text/plain'})
  response.end("message, response");
});
server.listen(port, '10.0.0.19');

//Stream, Buffer: transfer small chunks of data
var fs = require('fs');
var streamR = fs.createReadStream(__dirname + '/inPut.txt', 'utf8');
var streamW = fs.createWriteStream(__dirname + '/outPut.txt')
//event
streamR.on('data', function(chunk){
  streamW.write(chunk);
});
