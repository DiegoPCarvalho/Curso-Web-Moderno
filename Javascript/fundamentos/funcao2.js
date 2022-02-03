//arrmazenando uma informação na variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

//armazenando uma funcao arrow em uma variavel
// => arrow function
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito
const sub = (a, b) => a - b 

console.log(sub(2, 3))