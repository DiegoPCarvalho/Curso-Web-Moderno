console.log("Exercicio 3")

function conta(base, expoente){
    console.log(`base = ${base} elevado = ${expoente}`)
}
conta(5, 8)

console.log("Exercicio 4")

function mat1(dividendo, divisor){
    console.log(`Divisão = ${dividendo/ divisor} sobrando = ${dividendo % divisor}`)
}

mat1(10, 5)

console.log("Exercicio 5")

const num = function (num1, num2){
    return num1 + num2
}

console.log(num(0.1, 0.2).toFixed(2))


console.log('Exercicio 6')

function jurosSimples(capInicial, taxaJuros, tempApli){
    this.capInicial = capInicial
    this.taxaJuros = taxaJuros
    this.tempApli = tempApli
    let resultado 
    return resultado = (((capInicial * taxaJuros) + capInicial ) * tempApli)
}


function jurosCom(taxaJuros){
    let resul
    return resul = (((capInicial * taxaJuros) + capInicial ) * tempApli)
}


console.log('Total por juros simples: ' + jurosSimples(10000, 0.05, 36))
console.log('Total por juros composto: ' + jurosCom(0.1))

console.log('Exercicio 7')

function fbask(ax2, bx, c){
    let dta
    dta = ((bx*bx) - (4 * ax2 * c))

if(dta > 0)
{
    console.log('Delta é: ' + dta)
}
else if(dta < 0){
    console.log('Delta é: ' +  dta + ' Negativo')
} else if(dta == null){//somente para erro 
    console.log('NAN')
}
}


fbask(3, -5, 12)
fbask(6, -15, 12)
fbask(3, 5, 4)
fbask(3, 15, 4)

console.log('Exercicio 9')
Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const nota = function(n1,n2,n3){
    
   resul2 = (n1 * 0.1) + (n2 * 0.3) + (n3 * 0.6)
    
   if(resul2.entre(80,100)){
       console.log('Nota: ' + resul2 + ' Aluno Aprovado com merito')
   }
   else if(resul2.entre(79.99, 60)){
       console.log('Nota: ' + resul2 + ' Aluno Aprovado')
   }
   else if(resul2.entre(59.99, 40)){
       console.log('Nota: ' + resul2 + ' Aluno de Recuperação')
   }
   else if(resul2.entre(39.99, 0)){
       console.log('Nota: ' + resul2 + ' Aluno Reprovado')
   }
   else if (resul2 == null){
       console.log('Deu erro')
   }
}

nota(70, 70, 70)
