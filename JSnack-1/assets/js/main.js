var num1 = prompt("inserisci il primo numero:");
var num2 = prompt("inserisci il secondo numero:");

if(num1 > num2){
    console.log("il primo numero e più grande", num1);
}else if(num2 > num1){
    console.log("il secondo numero e più grande:", num2);
}else{
    console.log("i numeri sono uguali");
}