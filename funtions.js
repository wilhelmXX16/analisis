console.log('<----------01--------->')
console.log("Calculando el área de un Cuadrado")
let lc = 5
let resC = lc * lc
console.log('si el lado es ', lc)
console.log('el área del cuadrado es:',resC)
console.log('<----------02--------->')
console.log("Calculando el área de un Triángulo")
let bt = 4
let ht = 3
resT = (bt*ht)/2
console.log('el área del Triángulo es:',resT)
console.log('<----------03--------->')
console.log("Calculando el área de un Rectángulo")
let br = 5
let hr = 4
resR = (br * hr)/2
console.log('el área del Rectángulo es:',resR)
console.log('<----------04--------->')
console.log("Calculando el área de un Rombo")
let Dm = 6
let dm = 4
let resRm = (Dm * dm)/2
console.log('el área del Rombo es:',resRm)

function areaTrian (bt,ht){
    return resT = (bt*ht)/2
}

console.log(areaTrian(5,6))
console.log(areaTrian(7,8))