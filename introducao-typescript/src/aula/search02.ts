function desejarBoasVindas(nome: string, idade: string, internado: boolean): void {
  console.log(`Boas vindas ${nome}`);
  console.log(`Voce tem ${idade} anos de idade`);

  if (internado == true) {
    console.log('Voce esta internado');
  } else {
    console.log('Voce nao esta internado');
  }
  console.log('---');
}

desejarBoasVindas('Jair', '34', false);
desejarBoasVindas('Maria', '55', true);
desejarBoasVindas('Luciano', '23', false);
