function obterMensagensBoasVindas(nome: string, idade: string, telefoneFixo?: string): string {
  let mensagem = `Boas vindas ${nome}. Voce tem ${idade} anos de idade`;

  if (telefoneFixo) {
    mensagem = mensagem + `e seu numero de telefone fixo é ${telefoneFixo}`;
  }

  return mensagem;
}

const mensagemBoasVindas = obterMensagensBoasVindas('Mane', '22', '11932103322');
console.log(mensagemBoasVindas);
