let energia = 10
let clima = "sol"

if (energia >= 50 ?? clima == "sol") {
    console.log("Vou a praia")
} else {
    console.log("Fico em casa dormindo")
}

const notificacoes = 0;

// Com || (OR Lógico)
const resultadoOR = notificacoes || "Sem dados"; 
console.log(resultadoOR); // Saída: "Sem dados" ❌ (Erro: 0 é falsy)

// Com ?? (Coalescência Nula)
const resultadoNullish = notificacoes ?? "Sem dados";
console.log(resultadoNullish); // Saída: 0 ✅ (Correto!)