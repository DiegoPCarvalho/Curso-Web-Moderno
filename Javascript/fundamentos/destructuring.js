// novo recurso do ES2015
const cliente ={
    nome: 'Sebastião',
    idade:32,
    peso: 90,
    endereco: {
        lagradouro: 'Rua Iolanda',
        numero:555
    } 
}

const{ nome, idade} = cliente
console.log(nome,idade)

const{nome: n, idade: i} = cliente
console.log(n, i)
 