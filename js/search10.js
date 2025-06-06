let pessoa = {
    name:"Joao",
    age: 45,
    height: 1.75,
    document: 1234556789,
}
let veiculo = {
    model: "Fusca",
    year: 1970,
    color: "blue",
    plate: "ABC-1234",
    km: 100000,
}

Object.prototype.surname = "teste"

for (let key in veiculo){
    console.log(key, "|", veiculo[key]);
}