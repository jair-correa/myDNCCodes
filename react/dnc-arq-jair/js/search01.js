function somaValores(listaValores) {
    let total = 0

    for (let valor of listaValores) {
        total += valor;
    };
    return total
}

console.log(somaValores([1, 2, 3, 4, 5]));
console.log(somaValores([5, 10, 15, 20, 25]));
