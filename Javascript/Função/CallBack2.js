const notas = [7.7, 8.9, 6.5, 5.5, 9.9]

//sem usar o callback
let notasBai = []
for (let i in notas){
    if(notas[i] < 7){
        notasBai.push(notas[i])
    }
}

console.log(notasBai)

// usando o callback
const notasBai2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBai2)

// com arrow func
const ntb3 = notas.filter(nota => nota < 7)
console.log(ntb3)