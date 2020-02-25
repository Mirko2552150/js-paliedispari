// verifica se una parola inserita è palindroma
// Svolgimento:
// 1. Prompt inserimento parola
// 2. Inverti la parola in una funzione (Es length-1 i-- )
// 3. Confronta parola invertita con quella inserita
// 4. if == palindroma se no NON PALINDROMA usando il log

var inserimentoParola = prompt("inserisci una parola per capire se è palindroma");

var parolaRovescio = parolaInvertita(inserimentoParola); // palindrome nome fuzione
console.log(parolaRovescio); // prende il valore da palindrome

if (inserimentoParola == parolaRovescio ) {
    console.log("la parola " + inserimentoParola + " è palindroma");
} else {
    console.log("la parola " + inserimentoParola + " non è palindroma" );
}

// FUNZIONE
function parolaInvertita(parola) {
    var parolaReverse = "";
    // length -1 perche la posizione parte da 0 non da uno
    for (var i = parola.length-1; i >= 0; i--) { // parola length -1 (ultimo carattere-1)
        parolaReverse += parola[i]; // forma contratta, assegno la parolaReverse a parola [i]iesimo, prendiamo la iesima lettere della parola e le inverto
    }
    return parolaReverse;
}
