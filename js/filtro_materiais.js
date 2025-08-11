const prompt = require("prompt-sync")({ sigint: true });

const gaveta = [
    { name: "camiseta 1", material: "elastano", price: 29.99, color: "azul", size: "M" },
    { name: "camiseta 2", material: "algodao", price: 29.99, color: "azul claro", size: "G" },
    { name: "camiseta 3", material: "linho", price: 29.99, color: "amarelo", size: "G" },
    { name: "camiseta 4", material: "elastano", price: 29.99, color: "azul", size: "P" },
    { name: "camiseta 5", material: "elastano", price: 29.99, color: "roxo", size: "M" },
    { name: "camiseta 6", material: "elastano", price: 29.99, color: "preto", size: "GG" },
];

// Lista de materiais disponíveis
const materiaisDisponiveis = [...new Set(gaveta.map(item => item.material))];

console.log("Materiais disponíveis:");
materiaisDisponiveis.forEach((mat, i) => console.log(`${i + 1} - ${mat}`));

// Usuário escolhe
const escolha = Number(prompt("Digite o número do material desejado: ")) - 1;

if (escolha >= 0 && escolha < materiaisDisponiveis.length) {
    const materialEscolhido = materiaisDisponiveis[escolha];
    const filtrados = gaveta.filter(item => item.material === materialEscolhido);

    console.log(`\nItens com material: ${materialEscolhido}`);
    console.table(filtrados);
} else {
    console.log("Opção inválida!");
}
