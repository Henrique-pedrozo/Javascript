let n = 0
let max = 1000
let pares = 0
let impares = 0
let paresContinue = 0
for(let i = n; i<max;i++) {
    if (i % 2 == 0) {
        pares++
    }else {
        impares++
    }

    if(i % 2 != 0) {
        continue
    }
    paresContinue++
}

console.log("Pares: " + pares)
console.log("Impares: " + impares)
console.log("Pares com continue: " + paresContinue)
console.log("Acabou")