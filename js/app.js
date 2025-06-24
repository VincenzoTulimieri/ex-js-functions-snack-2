// snack 1

// funzione dichiarativa 
function somma(num1, num2){
    return num1 + num2
}

console.log(somma(2,3))

// funzione anonima assegnata ad una variabile
const somma2 = function (num1,num2) {
    return num1 + num2
}

console.log(somma2(2,5))

// arrow function 

const somma3 =(num1,num2)=>{
    return num1 + num2
}

console.log(somma3(4,5))

// Snack 2

const quadrato = (num)=> num * num 

console.log(quadrato(5))

//  Snack 3

const sum = (num1,num2) => num1 + num2
const moltiplicazione = (num1,num2) => num1 * num2

const eseguiOperazione = (num1,num2, operazione) => {
    return operazione(num1,num2)
}

console.log(eseguiOperazione(4,3, sum))
console.log(eseguiOperazione(4,3, moltiplicazione))