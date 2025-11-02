/*
interface Paciente {
  nome: string;
  idade: string;
  internado: boolean;
  endereco: Endereco;
}
interface Endereco {
  rua: string;
  bairro: string;
  numero: string;
  telefone: string;
}

const paciente1: Paciente = {
  nome: 'Joao',
  idade: '22',
  internado: true,
  endereco: {
    bairro: 'Vila Menck',
    numero: '22',
    rua: 'Estrada do Aderno',
    telefone: '11932103322',
  },
};

console.log(paciente1);

*/

interface Pessoa {
  nome: string;
  dizerOi(): void;
}

class Medico implements Pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  dizerOi(): void {
    console.log(`Medico ${this.nome} diz oi!`);
  }
}

class Enfermeiro implements Pessoa {
  constructor(nome: string) {
    this.nome = nome;
  }
  nome: string;
  dizerOi(): void {
    console.log(`Enfermeiro ${this.nome} diz oi!`);
  }
}

const medico = new Medico('Jonas');
medico.dizerOi();
const enfermeiro = new Enfermeiro('Mathias');
enfermeiro.dizerOi();
