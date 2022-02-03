function gerarNumero(min, max, tempo){
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setInterval(function (){
        const fator  = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNum(){
    return Promise.all([
        gerarNumero(1, 60, 1000),
        gerarNumero(1, 60, 500),
        gerarNumero(1, 60, 100),
    ])
}

console.time('Promise')
gerarVariosNum()
    .then(numeros => console.log(numeros))
    .then(() => console.timeEnd('Promise'))