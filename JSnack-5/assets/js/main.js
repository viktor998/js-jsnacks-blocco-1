var num = [""];

for (var i = 0; i < 6; i++) {
    var numPrompt= parseInt(prompt("inserisci numero:"));
    if(numPrompt%2 != 0){
        num.push(numPrompt);
    }
    
}

console.log(num);