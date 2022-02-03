function aula(nome, video){
    this.nome = nome,
    this.video = video
}

const aula1 = new aula('Bem vindo', 123)
const aula2 = new aula('Até Breve', 456)
console.log(aula1, aula2)

//simular o operador new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(aula, 'Estamos tendo Problemas', 569)
console.log(aula3)