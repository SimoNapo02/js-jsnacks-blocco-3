// Crea un array vuoto
const numero = []
// chiedi all’utente un numero da inserire nell’array
let som = 0;
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
while(som < 50 ){
   const numeriUtente = Number(prompt("inserisci dei numeri"));
   numero.push(numeriUtente);
   som = som + numeriUtente;
}

console.log(numero, som)