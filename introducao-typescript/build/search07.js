"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//GENERICS
class Pessaoa {
    identidade;
    constructor(identidade) {
        this.identidade = identidade;
    }
}
class Medico extends Pessaoa {
}
class Enfermeiro extends Pessaoa {
}
class Seguranca extends Pessaoa {
}
const medido1 = new Medico('a12343555454321');
const enfermeiro1 = new Enfermeiro('a12343555454321');
const seguranca = new Seguranca('a12343555454321');
function obterIdentidade(id) {
    console.log(`Identidade obtida ${id}`);
}
obterIdentidade;
//# sourceMappingURL=search07.js.map