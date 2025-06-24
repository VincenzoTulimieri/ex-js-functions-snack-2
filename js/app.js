// snack 1

// funzione dichiarativa 
function somma(num1, num2) {
    return num1 + num2
}

console.log(somma(2, 3))

// funzione anonima assegnata ad una variabile
const somma2 = function (num1, num2) {
    return num1 + num2
}

console.log(somma2(2, 5))

// arrow function 

const somma3 = (num1, num2) => {
    return num1 + num2
}

console.log(somma3(4, 5))

console.log('--------')
// Snack 2

const quadrato = (num) => num * num

console.log(quadrato(5))

console.log('--------')
//  Snack 3

const sum = (num1, num2) => num1 + num2
const moltiplicazione = (num1, num2) => num1 * num2

const eseguiOperazione = (num1, num2, operazione) => {
    return operazione(num1, num2)
}

console.log(eseguiOperazione(4, 3, sum))
console.log(eseguiOperazione(4, 3, moltiplicazione))

console.log('--------')
// snack 4 

function creaTimer(time) {
    return function () {
        console.log(`avvio il timer ${time} ms`)
        setTimeout(() => {
            console.log('tempo scaduto')
        }, time)
    }
}

const timer = creaTimer(1000)
timer()

console.log('--------')
// snack 5

function stampaOgniSecondo(){
    let stampaMessaggio = setInterval(()=> console.log('sono il messaggio'), 1000) 
    const stopMessaggio = setTimeout(()=> clearInterval(stampaMessaggio), 5000)
}

stampaOgniSecondo()