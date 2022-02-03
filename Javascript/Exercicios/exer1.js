/*function mat(val1, val2){
    console.log(`Soma  ${val1 + val2}`)
    console.log(`Subtração  ${val1 - val2}`)
    console.log(`Divisão  ${val1 / val2}`)
    console.log(`Multiplicação ${val1 * val2}`)
    console.log(`Resto da Divisão ${val1 % val2}`)
}

mat(1, 2)*/


//exercicio 25

const alunos = {
    id: 1,
    nome: 'Gustavo'
}

    
    const media = (id, n1, n2, n3) => {
        let resultado
           resultado = ((n1 * 0.3) + (n2 * 0.3) + (n3 * 0.4))
        
        if(resultado > 5 && id == alunos.id){
            console.log(`Id: ${alunos.id}
                         Nome: ${alunos.nome}
                         Nota 1: ${n1}
                         Nota 2: ${n2}
                         Nota 3: ${n3}
                         Situação: Aprovado!!!`)
        }
        else if(resultado < 5 && id == alunos.id){
            console.log(`Id: ${alunos.id}
            Nome: ${alunos.nome}
            Nota 1: ${n1}
            Nota 2: ${n2}
            Nota 3: ${n3}
            Situação: Reprovado!!!`)
        }else{
            console.log('Aluno não existe')
        }
    }


media(1, 10,10,10)
media(1, 5,4,3)
media(2, 10,10,10)


