const animal = {
    tipo : "animal",
    emitirSom() {
        console.log("auauaua")
    } 
    };

const cachorro = Object.create(animal);
cachorro.emitirSom();
cachorro.nome = "Bob";
cachorro.tipo = "cachorro";

let book = {
    'main title': "Javascript",
    'sub title': "The Good Parts",
    for: "All audiences",
    author :{
        fistname: "David",
        lastname: "Flanagan"
    }
}

console.log(book.author.fistname)

let o = new Object();

let heranca = Object.create(book)

console.log(heranca.author.lastname)

delete heranca.author.lastname

console.log(heranca.author.lastname)