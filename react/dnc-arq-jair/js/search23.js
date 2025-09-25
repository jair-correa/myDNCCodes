//Lista ordenada

const lista = [11, 92, 343, 24, 5, 2, 37, 57, 29, 16, 8];
const listaString = ['a','s','y','t','b','n','c'];

listaObj =[
    {id: 11, nome: 'Ana'},
    {id: 92, nome: 'Bruno'},
    {id: 343, nome: 'Carlos'},
    {id: 24, nome: 'Daniela'},
    {id: 5, nome: 'Eduardo'},
    {id: 2, nome: 'Fabiana'},
]
//Ordenando a lista
const listaCrescente = [...lista].sort((value1,value2)=>value1-value2); // Funcao de comparacao de numeros
const listaDecrescente = [...lista].sort((value1,value2)=>value2-value1); // Funcao de comparacao de numeros
const orderObjList = [...listaObj].sort((value1,value2)=>value1.id-value2.id); // Funcao de comparacao de numeros
listaString.sort();

//Imprimindo a lista ordenada
console.log(listaCrescente);
console.log(listaDecrescente);
console.log(listaString);
console.table(orderObjList);

