//imprime o nome e o vallor de cada propriedade de o. Retorna undefined.
function printprots(o){
    for(var p in o)
        console.log(p+":"+o[p]+"\n");
}

//Calcula a distancia entre pontos cartesianos (x1,y1) e (x2,y2)
function distance(x1,y1,x2,y2){
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}

//uma funcao recursiva (que chama a si mesma) que calcula fatoriais
//Lembre-se que x! é o produto de x e todos os inteiros positivos menores do que ele.
function factorial(x){
    if(x <= 1) return 1;
    return x * factorial(x-1);
}

//Esta expressao de funcao define uma funcao que eleva seu argumento ao quadrado
//Note que a atribuimos a uma variavel
var square = function(x) { return x*x; }

//As expressoes de funcao podem incluir nomes, o que é útil para recursividade.
var f = function fact(x){
    if( x <= 1) return 1; else return x*fact(x-1);
};

//As expressoes de funcao tambem podem ser usadas como argumentos de outras funcoes:
//data.sort(function(a,b){return a-b;});

//Funcoes aninhadas
function hypotenuze(a,b){
    function square(x){return x*x}
    return Math.sqrt(square(a)+square(b))
}

printprots({x:1});
var total = distance(0,0,2,1)+distance(2,1,3,5);
var probability = factorial(5)/factorial(13);

//console.log(probability);
//console.log(hypotenuze(2,10));

//Define e chama uma funcao para determinar se estamos no modo restrito
var strict = (function(){return !this;}());
console.log(strict);
