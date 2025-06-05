let isCorrect = false;
let selectedNumber = Math.floor(Math.random() * 10) + 1;

console.log(`O computador escolheu o número ${selectedNumber}. Tente adivinhar!`);

while (!isCorrect){
    let guess = prompt("Qual valor foi escolhido pelo computador? (1 a 10)");

    if (Number(guess) === selectedNumber) isCorrect = true;
}