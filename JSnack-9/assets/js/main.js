var sum = 0;
var media = 0;
var num= parseInt(prompt("inserisci un numero il programma calcolerà somma e media partendo da 1"));

for (var i = 1; i < num +1 ; i++) {
    sum += +i;
}

console.log("la somma dei valori è: "+sum, "la loro media è: "+sum/num);