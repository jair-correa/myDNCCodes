"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class Medico {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    dizerOi() {
        console.log(`Medico ${this.nome} diz oi!`);
    }
}
class Enfermeiro {
    constructor(nome) {
        this.nome = nome;
    }
    nome;
    dizerOi() {
        console.log(`Enfermeiro ${this.nome} diz oi!`);
    }
}
const medico = new Medico('Jonas');
medico.dizerOi();
const enfermeiro = new Enfermeiro('Mathias');
enfermeiro.dizerOi();
//# sourceMappingURL=search05.js.map