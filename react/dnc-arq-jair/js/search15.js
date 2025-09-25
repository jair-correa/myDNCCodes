const armario = [
    'camisetas',
    'calcas',
    'meias',
    'blusas',
    'chapeu'
];
console.log('\n----------FOR---------\n');
for(let i = 0; i <armario.length; i++) console.log(armario[i], i);

console.log('\n---------FOR OF----------\n');
for (const item of armario) console.log(item, armario.indexOf(item));

console.log('\n---------FOR EACH----------\n');
armario.forEach((item, index) =>{
    console.log(item, index);
})

//armario.push({item:'sapatos'});
//armario.pop();
//armario.unshift({item:'jaqueta'});
//console.log(armario);
//armario.shift();
//console.log(armario);
//armario.splice(2, 1, {item: 'camisetas'})
//console.log(armario);
//
//console.log(armario.length);
