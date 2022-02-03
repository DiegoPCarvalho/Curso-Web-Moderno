// funcao literal
function fun1(){ }

//armazenar em uma variavel
const fun2 = function (){ }

//armazenar em um array
const array = [function (a, b){ return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um objeto
const obj = {}
obj.falar = function (){ return 'opa'}
console.log(obj.falar())

//passar funcao como paranetro
function run(fun){
    fun()
}

run(function (){console.log('Executando...')})

// uma funcao pode retornar/conter um funcao
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const cin = soma(2, 3)
cin(4)