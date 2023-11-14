'use strict';

/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.
*/

//while
let somma = 0;
const numeri = [];
while(somma < 50){
    const numero = Number(prompt('Inserisci il numero'));
    somma += numero;
    numeri.push(numero);
    console.log('Numero:', numero);
}
console.log('While - Somma:', somma);

/*

//do while
let somma2 = 0;
do{
    const numero = Number(prompt('Inserisci il numero'));
    somma2 += numero;
    console.log('Numero:', numero);
}while(somma2 < 50);
console.log('Do while - Somma:', somma2);

//for
let somma3 = 0;
for(let i = 0; somma3 < 50; i++){
    const numero = Number(prompt('Inserisci il numero'));
    somma3 += numero;
    console.log('Numero:', numero);
}
console.log('For - Somma:', somma3);

*/