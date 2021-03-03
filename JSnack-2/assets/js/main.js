var par1 = prompt("inserisci la prima parola:");
var par2 = prompt("inserisci la secondo parola:");

if(par1.length > par2.length){
    console.log("la seconda parola e più corta", par2 + ":" + par2.length, par1 + ":" + par1.length);
}else if(par2.length > par1.length){
    console.log("la prima parola e più corta:", par1 + ":" + par1.length, par2 + ":" + par2.length);
}else{
    console.log("la lunghezza delle parole è uguale", par1 + ":" + par1.length, par2 + ":" + par2.length);
}