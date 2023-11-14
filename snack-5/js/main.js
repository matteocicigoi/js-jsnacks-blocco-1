'use strict';

/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.
*/
const numero = +prompt('inserisci un numero');
for(let i = 0; i < numero; i++){
    console.log(i);
    const numeri = [];
    for(let y = 0; y < 10; y++){
        numeri.push(Math.floor(Math.random() * 100 + 1));
    }
    alert(`Array: ${i} - ${numeri}`);
}