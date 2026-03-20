function* cores() {
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

function* pergunta() {
    const nome = yield 'Qual o seu nome?'
    const cor = yield 'Qual a sua cor favorita?'
    return 'Seu nome é ' + nome + ' e sua cor favorita é ' + cor
}

function* contador() {
    let i = 0 
    while(true) {
        yield i++
    }
}
const itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

const itp = pergunta()
console.log(itp.next().value) 
console.log(itp.next("Henrique").value)
console.log(itp.next("Azul").value)

const itcont = contador()
for (let i = 0; i < 10; i++) {
    console.log(itcont.next().value)
}

for (c of itcont) {
    console.log(c)
}