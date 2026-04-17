const divTodas = document.getElementsByTagName("div")
const cursoTodos = [...document.getElementsByClassName("curso")]
const cursoC1 = [...document.getElementsByClassName("c1")]
const cursoC2 = [...document.getElementsByClassName("c2")]


const queryDiv = document.querySelector("div, p")
    const queryExemplo = document.querySelectorAll("div > p")
const queryDivTodas = [...document.querySelectorAll(".curso")]
const queryC1 = [...document.querySelectorAll(".c1")]
const queryC2 = [...document.querySelectorAll(".c2")]
const queryId = document.querySelector("#c1")

console.log(queryDiv);
console.log(queryDivTodas);
console.log(queryC1);
console.log(queryC2);
console.log('queryId :>> ', queryId);

// console.log(divTodas)
// console.log(cursoTodos)
// console.log(cursoC1)
// console.log(cursoC2)
// console.log(cursoEspecial)

// cursoC2.map((el) => {
//     el.classList.add("Opa")
// })