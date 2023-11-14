'use strict';

/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.
*/

let somma = 0;
while(somma < 50){
    const numero = Number(prompt('Inserisci il numero'));
    somma += numero;
    console.log(somma);
}
console.log('Somma:', somma);