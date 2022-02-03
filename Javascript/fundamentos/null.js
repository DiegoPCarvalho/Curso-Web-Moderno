let valor 
console.log(valor)

valor = null //ausencia de valor

console.log(null)
//console.log(valor.toString()) gera um erro

const produto = {}
console.log(produto.preco)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto) 

produto.preco = null //sem preço
console.log(produto) 