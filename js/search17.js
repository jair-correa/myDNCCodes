const armario = [
    'camisetas',
    'calcas',
    'meias',
    'blusas',
    'chapeu'
];

const mesa = [
    'livros',
    'canetas',
    'cadernos',
    'laptop',
    'colher',
    'garfo',
    'prato'
    
];

console.log('\n---------push-> adiciona ao final da lista---------');
// [inicio, fim].push(alguma) => [inicio, fim, alguma]
armario.push('sapatos'); 
armario.push('meias');
armario.push('jaqueta');


console.log("armario\t\t\t|mesa\n-------------------------");

const maxLength = Math.max(armario.length, mesa.length);

for (let i = 0; i < maxLength; i++) {
    const itemArmario = armario[i] ?? '';
    const itemMesa = mesa[i] ?? '';
    console.log(`${itemArmario.padEnd(15)}\t|${itemMesa}`);
}

console.log('\n---------pop-> remove ultimo item da lista---------');
// [inicio, meio, fim].pop() => [inicio, meio]
armario.pop(); 
mesa.pop();


console.log("armario\t\t\t|mesa\n-------------------------");

for (let i = 0; i < maxLength; i++) {
    const itemArmario = armario[i] ?? '';
    const itemMesa = mesa[i] ?? '';
    console.log(`${itemArmario.padEnd(15)}\t|${itemMesa}`);
}

console.log('------------------------------------------------------');

armario.push('sapatos')
const novoArmario = armario.map(itemArmario => ({name: itemArmario, isDirty : itemArmario === 'sapatos'}));
console.log(novoArmario);

console.log('\n---------shift-> remove item ao comeco da lista---------');
armario.shift(); 
mesa.shift();

console.log("armario\t\t\t|mesa\n-------------------------");

for (let i = 0; i < maxLength; i++) {
    const itemArmario = armario[i] ?? '';
    const itemMesa = mesa[i] ?? '';
    console.log(`${itemArmario.padEnd(15)}\t|${itemMesa}`);
}
