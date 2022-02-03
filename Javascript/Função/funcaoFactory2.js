function criarProd(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProd('Notebook', 12356))
