var n = prompt("di quanti valori vuoi calcolare il cubo partendo da 1?:");

// BONUS : i numeri vengono indicati dall'utente

// var n = prompt("quante volte vuoi inserire un numero?:");
// for (let i = 0; i < n; i++) {
//     var num = prompt("inserisci il numero di cui vuoi il cubo:");
//     console.log("il cuo di :" + num,  Math.pow(num, 3));
    
// }

for (let i = 1; i < n; i++) {
    console.log("il cubo di :" + i,  Math.pow(i, 3));
    
}