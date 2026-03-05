const obj = document.getElementsByTagName("div")

let num = [10, 20, 30, 40, 50]

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

console.log("-----------------------")

for (o in obj) {
    console.log(obj[o])
}

console.log("-----------------------")

for (o of obj) {
    console.log(o)
}