const obj = document.getElementsByTagName("div")
const obj2 = [...document.getElementsByTagName("div")]/*Cria um array de elementos html*/ 
console.log(obj)

/*Node não reconhece o document/
/*--------------------------------------------------------------------*/
let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1,...n2]

console.log("n1 = " + n1)
console.log("n2 = " + n2)
console.log("n3 = " + n3)

/*--------------------------------------------------------------------*/

const jogador1 = {
    nome: "henrique",
    energia: 1000,/*Sou muito mais forte que Ramon Dino, shirr*/ 
    vida: 2000,
    musculo: 9999999
}

const jogador2 = {
    nome: "Ramondino",
    energia: 10,
    vida: 20,
    bomba: 1123123123
}

const jogador3 = { /*Junta os atributos dos dois jogadores*/ 
    ...jogador1,
    ...jogador2
}

/*-----------------------------------------------------------------------*/

const soma = (v1,v2,v3) => {
    return v1+v2+v3
}
let valores=[1,5,4]

console.log("Soma: " + soma(...valores))