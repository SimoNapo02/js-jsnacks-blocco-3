// Fai inserire un numero all'utente
let numero;
do{
    numero = Number(prompt("quanti array si vogliono generare?"))
}

// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo
while(isNaN(numero))

do{   
    const array = []
    for(let i = 0 ; i<10; i++){
        array.push(Math.floor(Math.random()*100 +1))
    }
    console.log(array)
    numero--;
}while(numero>0)
