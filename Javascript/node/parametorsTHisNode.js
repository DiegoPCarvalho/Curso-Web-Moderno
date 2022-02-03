console.log(this === global)
console.log(this === module)
console.log(this === exports)
console.log(this === module.exports)


function dentroFunc(){
    console.log('Dentro da Função é...')
    console.log(this === global)
    console.log(this === module)
    console.log(this === exports)
    console.log(this === module.exports)
}

dentroFunc()