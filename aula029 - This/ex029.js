//Aprendendo this
function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;

    this.dados_anonimos=function() { // Não funciona pois cria uma nova instancia, aonde não    existe nome e nota.
        setTimeout(function(){
            console.log(this.nome, this.nota)
        }, 1000)
    }
    
    this.dados_arrow=function() { // Funciona pois ele usa o conceito do Pai(root). Ou seja, ele não cria um novo contexto e preserva o contexto léxico(Do pai).
        setTimeout(() => {
            console.log(this.nome, this.nota)
        }, 1000)
    }
}


const aluno1 = new aluno("Farofa", 100) 
aluno1.dados_anonimos(); //Função dentro da classe
aluno1.dados_arrow(); //Função dentro da classe