'use strict';

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let somma = 0;
let numeri = 'numeri: ';
for(let i = 0; i < 10; i++){
    const numero = prompt('inserisci il numero');
    somma += Number(numero);
    numeri += numero + ' ';
}
console.log('la somma dei numeri inseriti è: ' + somma);
console.log(numeri);