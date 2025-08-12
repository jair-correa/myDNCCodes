
let promise = new Promise((resolve, reject) =>{
    let sucess = true
    if(sucess){
        resolve('operacao bem sucedida')
    }else{
        reject('Operacao falhou')
    }
});

console.log(promise)