//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99 , tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)

//Object.seal
const pessoa = {nome: 'juliana', idade: 32}
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
pessoa.idade = 45
console.log(pessoa)

//Object.freeze = seal + valores constantes

