const pai = { nome: 'Pedro', corcabelo: 'Preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corcabelo)

const filha2 = Object.create(pai,{
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Joana'
console.log(filha2.nome)

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por Herança: ${key}`)
}