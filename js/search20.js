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
