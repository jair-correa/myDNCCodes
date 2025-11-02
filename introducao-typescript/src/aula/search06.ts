//TYPE
type Identificacao = {
  id: string;
  setor: string;
  ala: number;
};

let identificacao: Identificacao = {
  id: '42',
  setor: 'Norte',
  ala: 25,
};

console.log(identificacao);

//UNION TYPE
type Identificacao2 = {
  id: string | number;
};

const identificacao2: Identificacao2 = {
  id: '123456789',
};

console.log(identificacao2);

console.log('------------------------');

type TipoSanguineo = 'O+' | 'O-' | 'AB-';

let meuTipoSanguineo: TipoSanguineo = 'AB-';

function exibirTipoSanguineo(tipoSanguineo: TipoSanguineo): void {
  console.log(`Meu tipo sangioneo é ${tipoSanguineo}`);
}

exibirTipoSanguineo('O+');
