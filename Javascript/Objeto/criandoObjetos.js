//usando a notação literal 
const obj1 ={}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcoes construtoras
function produto(nome, preco, desc){
    this.nome = nome
    this.getPreco = () => {
        return preco *(1 - desc)
    }
}


const p1 = new produto('caneta', 7.99, 0.15)
const p2 = new produto('Caderno', 15.30, 0.30)
console.log(p1.getPreco().toFixed(2),p2.getPreco().toFixed(2))


//funcao factory
function criarFunc(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        gatSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFunc('Claudio', 1350, 5)
const f2 = criarFunc('Julia', 3789, 10)
console.log(f1.nome, ' = ', f1.gatSalario().toFixed(2))
console.log(f2.nome, ' = ', f2.gatSalario().toFixed(2))


//object.create
const filha = Object.create(null)
filha.nome = 'Maria'
console.log(filha)