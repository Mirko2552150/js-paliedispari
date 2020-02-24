// pari e dispari, inserisci 2 volori, utente 1 e 2 randomici, confrontali e comunica il vincitore

//SCELGO PARI O DISPARI senza CHECK

var sceltaPaDiUtenteUno = prompt("Utente Uno scegli pari o dispari");
var sceltaPaDiUtenteDue = prompt("Utente Due scegli pari o dispari");

var sceltaNumeriUtenteUno = parseInt(prompt("utente unos cegli un un numero da 1 a 5"));
var sceltaNumeriUtenteDue = parseInt(prompt("utente due scegli un un numero da 1 a 5"));
//TIRI RANDOMICI
var tiroUtenteUno = getRndInteger(1, 6);
console.log(tiroUtenteUno);
var tiroUtenteDue = getRndInteger(1, 6);
console.log(tiroUtenteDue);

var sommaUtenteUno = tiroUtenteUno + sceltaNumeriUtenteUno;
console.log(sommaUtenteUno);
var sommaUtenteDue = tiroUtenteDue + sceltaNumeriUtenteDue;
console.log(sommaUtenteDue);

if (sommaUtenteUno %2 == 0) {
    console.log(sommaUtenteUno + "è un numero pari");
} else {
    console.log(sommaUtenteUno + "è un numero dispari");
}

if (sommaUtenteDue %2 == 0) {
    console.log(sommaUtenteDue + "è un numero pari");
} else {
    console.log(sommaUtenteDue + "è un numero dispari");
}









// tiro randomico da 1 a 5
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
