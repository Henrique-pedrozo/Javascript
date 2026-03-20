let f = function (v1, v2) {
    return v1 + v2
}

let f2 = new Function("v1", "v2", "return v1 + v2") // Função construtor anonimas.

f(5, 5)

if (f(5,5) == 10) {
    console.log("Esta errado!")
}