//Funções parametrizadas
const valorPadrao = 0

let valor = 0

function add(v) {
    return valor + v
}

valor = add(10)
console.log(valor)

valor = add(5)
console.log(valor)

valor = add(7)
console.log(valor)

function soma(n1 = valorPadrao, n2 = valorPadrao) {
    let res
    res = n1 + n2
    return res
}

let resultadoSoma = soma(5, 5)
console.log(resultadoSoma)