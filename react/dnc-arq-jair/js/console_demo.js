console.clear(); // limpa o console
console.log("=== Demonstração dos métodos do console ===\n");

// 📜 Saída básica
console.log("1️⃣ console.log → Mensagem genérica");
console.info("2️⃣ console.info → Mensagem de informação");
console.warn("3️⃣ console.warn → Aviso (amarelo)");
console.error("4️⃣ console.error → Erro (vermelho)");
console.debug("5️⃣ console.debug → Mensagem de debug\n");

// 📊 Formatar dados
const frutas = [
    { nome: "Maçã", cor: "Vermelha", preco: 3.50 },
    { nome: "Banana", cor: "Amarela", preco: 2.20 },
    { nome: "Uva", cor: "Roxa", preco: 5.00 }
];
console.log("6️⃣ console.table → Tabela formatada:");
console.table(frutas);

console.log("7️⃣ console.dir → Visualização detalhada de um objeto:");
console.dir(frutas[0], { depth: null });

console.log("8️⃣ console.dirxml → Exibir em formato XML/DOM (mais útil no navegador)\n");

// ⏱ Medição de tempo
console.log("⏱ Testando console.time / console.timeLog / console.timeEnd");
console.time("Loop grande");
let total = 0;
for (let i = 0; i < 1_000_000; i++) { total += i; }
console.timeLog("Loop grande", "→ até aqui");
console.timeEnd("Loop grande");
console.log("Resultado final:", total, "\n");

// 🔄 Contadores
console.log("📊 Testando console.count / console.countReset");
console.count("contador");
console.count("contador");
console.count("contador");
console.countReset("contador");
console.count("contador");
console.log("");

// 📌 Verificações
console.log("🛑 Testando console.assert");
console.assert(2 + 2 === 4, "Não será exibido porque a condição é verdadeira");
console.assert(2 + 2 === 5, "Erro: 2 + 2 não é 5!");
console.log("");

// 🧭 Agrupar mensagens
console.log("📂 Testando console.group / console.groupCollapsed / console.groupEnd");
console.group("Grupo 1");
console.log("Mensagem 1");
console.log("Mensagem 2");
console.groupEnd();

console.groupCollapsed("Grupo recolhido");
console.log("Mensagem escondida até abrir");
console.groupEnd();
console.log("");

// 🔍 Rastreamento
console.log("🔍 Testando console.trace");
function a() { b(); }
function b() { c(); }
function c() { console.trace("Rastro da execução"); }
a();
console.log("");

// 📊 Perfil de execução (só no DevTools do navegador)
console.log("🎯 console.profile / console.profileEnd → Funciona melhor no navegador DevTools\n");

console.log("=== Fim da demonstração ===");
