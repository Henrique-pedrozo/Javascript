const elementos = document.getElementsByTagName("div")
const val = Array.prototype.map.call(elementos, ({innerHTML}) => 
    innerHTML
)
console.log(val)

let ele = document.getElementsByTagName("div")
ele = [...ele]
ele.map((e, i) => {
    e.innerHTML= "arroz"
})

//------------------------------------------------------------------

const convertInt = (e) => parseInt(e)
const kaiokenX2 = (e) => e * 2

const num = ['1', '2', '3', '4', '5'].map(convertInt)

console.log(num)
console.log(num.map(kaiokenX2))
