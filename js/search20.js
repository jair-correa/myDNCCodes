const gaveta =[
    {name: 'camisa', price: 50, material: 'elastana'},
    {name: 'calça', price: 80, material: 'algodão'},
    {name: 'sapato', price: 120, material: 'couro'},
    {name: 'meia', price: 10, material: 'algodão'},
    {name: 'cinto', price: 30, material: 'couro'},
];

const hasElastana = gaveta.some((item) => item.material === 'elastana')
console.log(hasElastana);

const allClothesAreBelow100 = gaveta.every((item) => item.price < 130)
console.log(allClothesAreBelow100, gaveta);

const hasCouro = gaveta.every((item)=> item.material.every ==='couro') //verifica se todos os itens tem couro
console.log(hasCouro);
/*
//some 
let lista = [1,2,3,4,5,6,7,'8'];

const isEqualOrGreaThan8 = lista.some((item) => {
    // veifica se pelo menos um item do aray é verdadeiro
    if(typeof item !== 'number') item >= 8
})
console.log(isEqualOrGreaThan8);


//every
const isNumber = lista.every((item) => {
    // verifica se todos os itens do array são verdadeiros
    return typeof item === 'number';
})
console.log(isNumber);
*/
