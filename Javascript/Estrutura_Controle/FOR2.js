const notas = [6.6, 7.7, 4.7, 8.5, 9.9]

for(let i in notas)
{
    console.log(i, notas[i])
}
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva', 
    idade: 65, 
    peso: 76
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

