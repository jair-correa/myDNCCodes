//FOR

for(nbr = 1; nbr <=10; nbr++){
    console.log(`Table de multiplication de ${nbr}`);
    //console.log("Table de multiplication de " + nbr);
    
    for(let mult = 0; mult <= 10; mult++){
        console.log(`${nbr} x ${mult} = ${nbr * mult}`);
        
    }
}

console.log("-------------------##-------------------");

for(nbr = 10; nbr >= 1; nbr--){
    console.log(`Table de division de ${nbr}`);
    
    for(let div = 10; div >= 0; div--){
        console.log(`${nbr} / ${div} = ${(nbr / div).toFixed(3)}`);
        
    }
}
console.log("-------------------##-------------------");
console.log("Table of Sqrt:");

// Função para verificar se um número é primo
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

for (let nbr = 100; nbr >= 1; nbr--) {
    let raiz = Math.sqrt(nbr).toFixed(3);
    let primo = isPrime(nbr) ? " (primo)" : "";
    console.log(`${nbr} => √${nbr} = ${raiz}${primo}`);
}



//for(let i = 0; i <= 10 ; i++){
//    let search = document.getElementById("search" + i);
//    if (search) {
//        search.addEventListener("keyup", function(event) {
//            if (event.key === "Enter") {
//                event.preventDefault();
//                document.getElementById("searchButton" + i).click();
//            }
//        });
//    }
//}