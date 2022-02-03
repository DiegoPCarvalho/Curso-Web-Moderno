const soma = function(x, y){
    return x + y
}

const impresul = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}
impresul(3,4)
impresul(3,4, soma)
impresul(3,4,  function(x,y){
    return x - y
})
impresul(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function (){
        console.log('Opa')
    }
}

pessoa.falar()