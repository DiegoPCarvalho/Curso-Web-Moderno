const pessoa = {
    nome: 'Anderson',
    idade: 43,
    peso: 90
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})


//pessoa.dataNacimento = '01/01/2017'
console.log(pessoa.dataNacimento)
console.log(Object.keys(pessoa))

//Object.assign (ecmascript 2015)
const dest = {a: 1}
const q1 = {b: 2}
const q2 = {c: 3, a: 4}
const obj = Object.assign(dest, q1, q2)
console.log(obj)

Object.freeze(obj)

obj.c = 1234

console.log(obj)