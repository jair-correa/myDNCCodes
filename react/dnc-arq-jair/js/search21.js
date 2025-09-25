const lista = [10,20,3,4,35,46,17,28,9,1]
const lista2 = ['g','s','d','q','u','a','t','e','n','r','v']

const listaOrdenada = lista.sort() //ordena o valor em crescente
const listaOrdenada2 = lista2.sort() //ordena o valor em crescente
const listaOrdenada3 = lista2.sort((firstValue, secondValue) => secondValue - firstValue) //ordena o valor em decrescente
const listaOrdenada4 = lista2.sort((firstValue, secondValue) => firstValue > secondValue ? -1 : 1) //ordena o valor em decrescente
const listaOrdenada5 = lista2.sort().reverse() //ordena o valor em decrescente

console.log(listaOrdenada);
console.log(listaOrdenada2);
console.log(listaOrdenada3);
console.log(listaOrdenada4);
console.log(listaOrdenada5);
