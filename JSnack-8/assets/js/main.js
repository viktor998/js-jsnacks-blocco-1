
var num=prompt("inserisci numero:");
var numArray=Array.from(num) ;
var sum = 0;
// var i= parseInt(prompt("inserisci numero:"));
 for (var i = 0; i < 4; i++) {
    sum += + numArray[i];
 }

console.log(sum );