const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    nome: 'Ferrari',
    preco: 89000,
    modelo: 'FZ3',
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            rua: 'rua são joao',
            numero: 5
        }
    },
    consutores: [{
        nome: 'junior',
        idade: 25
     }, {
            nome: 'gustavo',
            idade: 78
        
    }],
    calcularValorSeguro: function(){

    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['rua'] = 'Av santos'

console.log(carro)