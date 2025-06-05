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