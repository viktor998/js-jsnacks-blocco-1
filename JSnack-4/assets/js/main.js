var nomeInvitato = prompt("Dimmi il tuo nome:");
var invitati= ["Mario", "Luigi", "Raffa", "Fabrizio", "Alessandro", "mario", "luigi", "raffa", "fabrizio", "alessandro"];

var buttaFuori= false;

for (let i = 0; i < invitati.length; i++) {
    if(nomeInvitato == invitati[i]){
        buttaFuori= true;
    }    
}

if(buttaFuori){
    console.log("l'invitato " + nomeInvitato + " può entrare");
}else{
    console.log( nomeInvitato + " non può entrare");
}