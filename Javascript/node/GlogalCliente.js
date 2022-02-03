const { subtract } = require('lodash')

require('./global')
console.log(MinhaApp.saudacao())

console.log(MinhaApp.nome)

MinhaApp.nome = 'Diego!!'

console.log(MinhaApp.nome)

//para tornar o objeto imutavel usar o ObjectFreeze()