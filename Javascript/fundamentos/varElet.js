//var ignora a blocos simples sem funcao

{ { { { { { var numero = 1 } } } } } }

console.log(numero)

//var entre blocos 

var numero = 2 
{
    var numero = 3
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

// var com funcao 
var numero = 4

function df (){
    var numero = 5
    console.log('dentro = ', numero)
}//so mostra o de dentro quando funcao e chamada
df()//chamando funcao simples
console.log('fora = ', numero)

//diferença de var e let
var numero = 6
{
    let numero = 7
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//blocos let não conflitam
/*let numero = 8
{
    let numero = 9
    console.log('dentro =', numero)
}
console.log('fora =', numero)*/