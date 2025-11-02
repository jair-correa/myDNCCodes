"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function desejarBoasVindas(nome, idade, internado) {
    console.log(`Boas vindas ${nome}`);
    console.log(`Voce tem ${nome} anos de idade`);
    if (internado == true) {
        console.log('Voce esta internado');
    }
    else {
        console.log('Voce nao esta internado');
    }
    console.log('---');
}
desejarBoasVindas('Jair', '34', false);
desejarBoasVindas('Maria', '55', true);
desejarBoasVindas('Luciano', '23', false);
//# sourceMappingURL=search02.js.map