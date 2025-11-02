//Interface

interface Paciente {
  nome: string;
  idade: string;
  internado: boolean;
}

const paciente1: Paciente = {
  nome: 'Uta',
  idade: '95',
  internado: true,
};

console.log(paciente1);
