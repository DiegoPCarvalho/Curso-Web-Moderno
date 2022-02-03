function gerarNumero(min, max, numeroProibidos){
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator  = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numeroProibidos.includes(aleatorio)){
            reject('Numero Repitido')
        }else{
            resolve(aleatorio)
        }
        })
}
async function gerarMegaSena(qtdNumeros, tentativa = 1){
    try{
        const numeros = []
    for(let _ of Array(qtdNumeros).fill()){
        numeros.push(await gerarNumero(1, 60, numeros))
    }
    return numeros
    }catch(e){
        if(tentativa > 10){
            throw 'Não deu Certo'
        }else{
            return gerarMegaSena(qtdNumeros, tentativa + 1)
        }
    }
}

gerarMegaSena(10)
    .then(console.log)
    .catch(console.log)