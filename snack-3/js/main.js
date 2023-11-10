'use strict';

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let numeri = 0;

for(let i = 0; i < 10; i++){
    numeri += Number(prompt('inserisci il numero'));
}
console.log('la somma dei numeri inseriti è: ' + numeri);