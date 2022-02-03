const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
       nome: 'Ana',
       nota: 9.3 
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]
}]

 const GetNotaDoAluno = aluno => aluno.nota
 const getNOtaDaTurma = turma => turma.alunos.map(GetNotaDoAluno)

 const notas = escola.map(getNOtaDaTurma)
 console.log(notas)

 console.log([].concat([ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]))

 Array.prototype.flatMap = function(callback){
     return Array.prototype.concat.apply([], this.map(callback))
 }
 
 const notas2 = escola.flatMap(getNOtaDaTurma)
 console.log(notas2)