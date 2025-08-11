const armario = [
    {tipo: 'livros',itens: [{nome: 'Harry Potter', qtd:5}, {nome: 'Senhor dos Anéis', qtd: 3},{nome: 'O Hobbit', qtd:10}, {nome: '1984', qtd:1}] },
    {tipo: 'canetas',itens: [{nome: 'bic', qtd:100}, {nome: 'pentel', qtd:50}]},
    {tipo: 'cadernos', itens:[{nome: 'Tilibra',qtd: 25}, {nome: 'Capa Dura', qtd: 15}, {nome: 'Espiral', qtd: 30}]},
    {tipo: 'laptop', itens: [{nome: 'Dell', qtd: 5}, {nome: 'HP', qtd: 3}, {nome: 'Apple', qtd: 2}, {nome: 'Lenovo', qtd: 4}]},
]

const armarioSorteado = [...armario.sort((a,b)=> a.itens.length - b.itens.length)];

const tabelaExpandida = armarioSorteado.flatMap(secao =>
    secao.itens.map(item => ({
        tipo: secao.tipo,
        nome: item.nome,
        quantidade: item.qtd
    }))
);

console.dir(armarioSorteado, {depth: null});

console.table(tabelaExpandida);