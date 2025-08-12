const armario = [
    { tipo: 'livros', itens: [
        { nome: 'Harry Potter', qtd: 5 },
        { nome: 'Senhor dos Anéis', qtd: 3 },
        { nome: 'O Hobbit', qtd: 10 },
        { nome: '1984', qtd: 1 }
    ] },
    { tipo: 'canetas', itens: [
        { nome: 'bic', qtd: 100 },
        { nome: 'pentel', qtd: 50 }
    ] },
    { tipo: 'cadernos', itens: [
        { nome: 'Tilibra', qtd: 25 },
        { nome: 'Capa Dura', qtd: 15 },
        { nome: 'Espiral', qtd: 30 }
    ] },
    { tipo: 'laptop', itens: [
        { nome: 'Dell', qtd: 5 },
        { nome: 'HP', qtd: 3 },
        { nome: 'Apple', qtd: 2 },
        { nome: 'Lenovo', qtd: 4 }
    ] },
];

let fraseInicial = 'As gavetas que possuem 4 itens';

// Passo 1: Ordena e adiciona count
const sortedArmario = [...armario]
    .sort((a, b) => b.itens.length - a.itens.length)
    .map(gaveta => ({ ...gaveta, count: gaveta.itens.length }))
    .filter(gaveta =>
        gaveta.tipo === 'livros' ||
        gaveta.itens.some(item => item.qtd >= 25)
    );

// Passo 2: Cria a frase final (sem perder o array)
const fraseFinal = sortedArmario.reduce((prev, next) => {
    return prev + ` ${next.tipo}`;
}, fraseInicial);

// Passo 3: Cria tabela expandida
const tabelaExpandida = sortedArmario.flatMap(secao =>
    secao.itens.map(item => ({
        tipo: secao.tipo,
        nome: item.nome,
        quantidade: item.qtd,
        count: secao.count
    }))
);

console.log(fraseFinal);
console.dir(sortedArmario, { depth: null });
console.table(tabelaExpandida);
