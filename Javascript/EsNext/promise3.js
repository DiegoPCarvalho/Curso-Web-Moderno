const { compact } = require("lodash")

function funcionarOunao(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        try{
            com.log('Será que vai')
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro...')
            }
            else{
                resolve(valor)
            }

        }catch(e){
            reject(e)
        }
       
    })
}

funcionarOunao('Testando...', 0.1)
    .then(v => console.log(`Valor: ${v}`))
    .then(err => console.log(`Erro Esp: ${err}`))
    .catch(erro => console.log(`Erro Geral: ${erro}`))
    .then(() => console.log('Fim..'))