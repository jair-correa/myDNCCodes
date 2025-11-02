//GENERICS
class Pessaoa {
  identidade: string;

  constructor(identidade: string) {
    this.identidade = identidade;
  }
}

class Medico extends Pessaoa {}
class Enfermeiro extends Pessaoa {}
class Seguranca extends Pessaoa {}

const medico1 = new Medico('a12343555454321');
const enfermeiro1 = new Enfermeiro('a12343555454321');
const seguranca = new Seguranca('a12343555454321');

function obterIdentidade<T extends Pessaoa>(id: T): void {
  console.log(`Identidade obtida ${id}`);
}

obterIdentidade;
