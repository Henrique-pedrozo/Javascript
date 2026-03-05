let n = 10
let x = 5
let fat = 1

while(n < 10) {
    console.log(++n)   
}

while (x >= 1) {
    fat *= x
    x--
}

console.log(fat)