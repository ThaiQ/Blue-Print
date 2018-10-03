//print
console.log("print");
console.dir('return object, properties');

//function
function print(a){
  console.log(a);
}

//Call DOM from Html
document.getElementsByClassName('ArrayClassName');
document.getElementById('id123');
document.getElementsByTagName('p');
document.querySelectorAll('#id123, .ArrayClassName')
document.querySelectorAll('h1[data-content="data123"]')

//change Text
document.getElementsByTagName('p')[0].innerText += " - from js";
document.getElementsByTagName('p')[1].innerHTML += "<span> - span: from js </span>";
document.getElementsByTagName('p')[0].outerHTML = '<p class="ArrayClassName"> heading 1, ClassArray 1 </p>';
document.getElementById('style').style.background = "green";
document.getElementById('style').style.cssText = "background: red; color: white"

//Event
var select = document.getElementById('button');
select.addEventListener("click", function(){print("a");}, true);
select.addEventListener("click", function(){print("b");}, false);
//create child
var el = document.createElement ('div');
var target = document.getElementById('id123');
el.style.cssText = "width:200px; height:200px; color:red; background:yellow";
document.body.appendChild (el);
document.body.insertBefore (el, target );

//module
module.exports.VariableName = NameOfVariableOrActualFunctionAndVariable;
var variable = require('./other export name');
variable.NameofFuntion();
//event+util
var variable = require('events');
var variable = require('util');
util.inherits(objectVar, event.EventEmitter);

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
