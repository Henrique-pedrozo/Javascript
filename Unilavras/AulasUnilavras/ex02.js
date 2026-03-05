let x = null
console.log(x || 10) // Output: 10 (x is falsy)
console.log(x && 10) // Output: null (x is falsy, short-circuits)
console.log(x ?? 10) // Output: 10 (x is null/undefined)

console.log("2" == 2)
console.log("2" === 2)

/*let count = 0
while(count < 3) {
    count++
    console.log(count)
}*/

for (let i = 0; i < 3; i++) {
    if (i === 3) continue
    console.log(i)
}