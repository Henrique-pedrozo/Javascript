let n1 = 1 
let n2 = "1"

console.log(n1 == n2)

//Só funciona em inteface gráfica:

let nome = prompt("Digite seu nome: ")
console.log(nome)

//Saber aonde que esta rodando o programa

if (
    navigator.userAgent.match(/Android/i)
||  navigator.userAgent.match(/webOS/i)
||  navigator.userAgent.match(/iPhone|iPad|iPod/i)
||  navigator.userAgent.match(/BlackBerry/i)
||  navigator.userAgent.match(/Windows Phone/i)
||  navigator.userAgent.match(/Opera Mini/i)
||  navigator.userAgent.match(/IEMobile/i)
){
    console.log("Celular")
}else {
    console.log("PC")
}
