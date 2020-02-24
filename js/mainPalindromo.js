
// COMPITO UNO
// Una funzione per capire se la parola è palindroma
// COMPITO UNO SVOLGIMENTO:
// inserire parola
// girare parola con ordine lettura con i--, se === allora palindroma
// controllare se parola inserita e parola girata sono uguali

var inputCheck = prompt("inserisci una parola per controllare se è palindroma")

var controlloPalindromo = checkPalindrome(inputCheck); // checkPalindrome prende il contenuto da returnWorldReverse preso dalla funzione
// assegnamo la parola scritta al contrario a controlloPalidromo e la confrontiamo con inputCheck
if (controlloPalindromo == inputCheck){ //confronto palindromo con parola inserita
    console.log(inputCheck + ' è un palindromo');
} else {
    console.log(inputCheck + ' non è un palindromo');
}

//FUNZIONE CON FOR PER CICLARE ED ESTRARRE PAROLE AL CONTRARIO
function checkPalindrome(inputCheck) {
    var wordReverse = [] // Arrey contenente le parole inserite dagli eventuali input
    for (var i =  inputCheck.length -1; i >=0 ; i--) { //partenza a length-1 (ultima lettera della parola) + arrivo a 0 (prima lettera della parola) + (contatore -1)
        wordReverse += inputCheck;
    }
    return wordReverse; // restituisce il valore alla funzione
}
