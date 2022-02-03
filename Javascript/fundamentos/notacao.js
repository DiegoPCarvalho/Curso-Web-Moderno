console.log(typeof console)
console.log(Math.ceil(7.3))


const obj1 ={}
obj1.nome = 'bola'
obj1['nome1'] = ' bola 2'//modelos de notação

console.log(obj1.nome + obj1.nome1)

function obj(nome){
    this.nome = nome
    this.exec = function (){
        console.log('exec...')
    }
}

const obj2 = new obj ('cadeira')
const obj3 = new obj ('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
