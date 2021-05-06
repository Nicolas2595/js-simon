/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// FUNZIONI
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function isInArray(element, array) {
    var check = false;
    for (var i = 0; i < array.lenght; i++) {
        if (element == array[i]) {
            check = true;
        }
    }
    return check;
}
// FINE FUNZIONI

// VARIABILI
var listaNumeriCasuali = [];
var listaNumeriPrompt = [];
var numeroCasuale;
var numeroPrompt;

// Un alert espone i 5 numeri generati casualmente
for (var i = 0; i < 5; i++) {
    numeroCasuale = getRandomNumber(1, 100);
    console.log(numeroCasuale);
    if (!isInArray(numeroCasuale, listaNumeriCasuali)) {
        listaNumeriCasuali.push(numeroCasuale);
        console.log(listaNumeriCasuali);
    }
}
alert("Memorizza questi 5 numeri: " + listaNumeriCasuali);

// Timer di 30 secondi più inserimento dei numeri
setTimeout(function() {
    for (var i = 0; i < 5; i++) {
        numeroPrompt = parseInt(prompt("Inserisci i numeri che hai visto in precedenza"));
        console.log(numeroPrompt);

        for (var a = 0; a < listaNumeriCasuali.length; a++) {
            if (numeroPrompt == listaNumeriCasuali[a]) {
                listaNumeriPrompt.push(numeroPrompt);
            }
        }
    }
    alert("Hai indovinato " + listaNumeriPrompt.length + " numero/i: il/i: " + listaNumeriPrompt)
    console.log(listaNumeriPrompt);

}, 30000);
