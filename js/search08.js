//FOR

for(nbr = 1; nbr <=10; nbr++){
    console.log(`Table de multiplication de ${nbr}`);
    //console.log("Table de multiplication de " + nbr);
    
    for(let mult = 0; mult <= 10; mult++){
        console.log(`${nbr} x ${mult} = ${nbr * mult}`);
        
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