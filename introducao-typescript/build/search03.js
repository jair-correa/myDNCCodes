"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function obterMensagensBoasVindas(nome, idade, telefoneFixo) {
    let mensagem = `Boas vindas ${nome}. Voce tem ${idade} anos de idade`;
    if (telefoneFixo) {
        mensagem = mensagem + `e seu numero de telefone fixo é ${telefoneFixo}`;
    }
    return mensagem;
}
const mensagemBoasVindas = obterMensagensBoasVindas('Mane', '22', '11932103322');
console.log(mensagemBoasVindas);
//# sourceMappingURL=search03.js.map