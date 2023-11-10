'use strict';

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let numeri = 0;
const numeriArray = [];
for(let i = 0; i < 10; i++){
    const numero = Number(prompt('inserisci il numero'));
    numeri += numero;
    numeriArray.push(numero);
}
console.log('la somma dei numeri inseriti è: ' + numeri);
console.log(numeriArray);