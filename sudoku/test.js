function num() {

this.i = 1;
this.p = function(){
return this.i=this.i+1;
}

}

var obj = new num();

console.log(obj.i);
console.log(obj.p());
console.log(obj.i);
