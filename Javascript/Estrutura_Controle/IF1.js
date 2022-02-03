function boaNOti(nota){
    if(nota >= 7){
        console.log('Aprovado!!! ' + nota)
    }
}

boaNOti(8.1)
boaNOti(6.1)// SÓ APARECE A FRASE QND O ESTIVER DENTRO DA CONDICAO

function seforV(valor){
    if(valor){
        console.log('É verdadeiro... ' + valor)
    }
}

seforV()
seforV(null)
seforV(undefined)
seforV(NaN)
seforV('')
seforV(0)
seforV(-1)

// SÓ PASSA O QUE FOR VERDADE