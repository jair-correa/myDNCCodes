let pessoa = {
    name:"Joao",
    age: 45,
    height: 1.75,
    document: 1234556789,
}

Object.prototype.surname = "teste"

for (let key in pessoa){
    console.log(key, "|", pessoa[key]);
}