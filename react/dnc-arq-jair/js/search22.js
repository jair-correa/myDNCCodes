const gaveta = [
    {name: "camiseta 1", material: "elastano", price: 29.99, color: "azul", size: "M"},
    {name: "camiseta 2", material: "algodao", price: 29.99, color: "azul claro", size: "G"},
    {name: "camiseta 3", material: "linho", price: 29.99, color: "amarelo", size: "G"},
    {name: "camiseta 4", material: "elastano", price: 29.99, color: "azul", size: "P"},
    {name: "camiseta 5", material: "elastano", price: 29.99, color: "roxo", size: "M"},
    {name: "camiseta 6", material: "elastano", price: 29.99, color: "preto", size: "GG"},
]


//Verificando se algum material contem elastano
const hasElastano = gaveta.some(item => item.material === 'elastano');//algum item tem elastano
const namesElastano = gaveta.filter(item => item.material === 'elastano')
const allItens = gaveta;
console.log('Itens com elastano');
console.table(namesElastano) //Tabela com itens que tem elastano
console.log(`Tem elastano? ${hasElastano ? 'sim' : 'não'}`);
const everyItemHasElastano = gaveta.every(item => item.material === 'elastano') //todos os itens têm elastano
console.log(`Todos itens da gaveta contem elastano? ${everyItemHasElastano ? 'sim' : 'não'}`);

console.table(allItens);//Tabela com todos os itens da gaveta

/*Itens com elastano
┌─────────┬──────────────┬────────────┬───────┬─────────┬──────┐
│ (index) │ name         │ material   │ price │ color   │ size │
├─────────┼──────────────┼────────────┼───────┼─────────┼──────┤
│ 0       │ 'camiseta 1' │ 'elastano' │ 29.99 │ 'azul'  │ 'M'  │
│ 1       │ 'camiseta 4' │ 'elastano' │ 29.99 │ 'azul'  │ 'P'  │
│ 2       │ 'camiseta 5' │ 'elastano' │ 29.99 │ 'roxo'  │ 'M'  │
│ 3       │ 'camiseta 6' │ 'elastano' │ 29.99 │ 'preto' │ 'GG' │
└─────────┴──────────────┴────────────┴───────┴─────────┴──────┘
Tem elastano? sim
Todos itens da gaveta contem elastano? não
┌─────────┬──────────────┬────────────┬───────┬──────────────┬──────┐
│ (index) │ name         │ material   │ price │ color        │ size │
├─────────┼──────────────┼────────────┼───────┼──────────────┼──────┤
│ 0       │ 'camiseta 1' │ 'elastano' │ 29.99 │ 'azul'       │ 'M'  │
│ 1       │ 'camiseta 2' │ 'algodao'  │ 29.99 │ 'azul claro' │ 'G'  │
│ 2       │ 'camiseta 3' │ 'linho'    │ 29.99 │ 'amarelo'    │ 'G'  │
│ 3       │ 'camiseta 4' │ 'elastano' │ 29.99 │ 'azul'       │ 'P'  │
│ 4       │ 'camiseta 5' │ 'elastano' │ 29.99 │ 'roxo'       │ 'M'  │
│ 5       │ 'camiseta 6' │ 'elastano' │ 29.99 │ 'preto'      │ 'GG' │
└─────────┴──────────────┴────────────┴───────┴──────────────┴──────┘

*/