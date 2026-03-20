function soma(n1, n2) {
    return n1+n2
}

function spread(...valores) {
    let tam = valores.length
    let soma = 0
    for (let i = 0 ; i < tam; i++) {
        soma += valores[i]
    }
    return soma
}

console.log(soma(5, 5))
console.log(spread(1, 2, 3, 4, 5))