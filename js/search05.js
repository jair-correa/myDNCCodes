//calculo de IMC utilizando funcao e objeto
function calculateIMC(person){ //funcao calculateIMC recebe um metodo person
    let height = person.height;
    let weight = person.weight;

    const conversionFactor = 0.01; //fator de conversao de centimetros para metros
    height *= conversionFactor; //converte a altura para metros

    let imc = weight / Math.pow(height, 2); //calcula o IMC
    imc.toFixed(2); //arredonda o resultado do IMC para duas casas decimais
    const result = 'O resultado do IMC é: ' + imc.toFixed(2); //arredonda o resultado do IMC para duas cassas decimais
    const isHealthy = imc >= 18.5 && imc < 24.9; //verifica se o IMC está na faixa saudável

    return {
        name: person.name,
        imc, 
        result,
        isHealthy,
    }
}

const person = {
    name: 'Joao',
    height: 180,
    weight: 75,
}

console.log(calculateIMC(person)); //chama a função calculateIMC passando o objeto person como parâmetro
