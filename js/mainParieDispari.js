// domando utente pari o dispari
// chiedo anche un numero da 1 a 5
// genero un numero RANDOM da 1 a 5
// sommo i numeri e controllo chi ha vinto (pari o dispari)

var scommessaUtente = prompt("scrivi pari o dispari");
var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
var numeroRandom = generaRandomMinMax(min, max);
var sommaNumeri = somma(numeroUtente, numeroRandom); // non utili ma per esercizio
var risultato = pariDispari(sommaNumeri); // entra somma numeri e mi restituisce se pari o pariDispari

if (risultato === scommessaUtente.toLowerCase()) { // check, confrontiamo la scommessa con l'output dato dalla funzione paridispari
    console.log("COMPLIMENTI HAI VINTO");
} else {
    console.log("MI SPIACE, HAI PERSO");
}

// FUNZIONI
function pariDispari(val) { // ingresso do la somma e valuto se è pari o meno
    if (val %2 === 0)  {
    // entra la variabile somma e la divido per 2 per capire se è pari o dispari
        return "pari"; // se è vera torna la stringa pari
    } else {
        return "dispari";
    }
}

function somma (valUno, valDue) {
    return valUno + valDue;
}

function generaRandomMinMax(min, max){
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
