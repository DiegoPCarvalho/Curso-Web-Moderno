//usando o array
function rand ({min = 0, max =1000}){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
//console.log(rand({max: 50, min: 40}))
console.log(rand([50, 40]))
console.log(rand(obj))
console.log(rand([, 10]))
console.log(rand({min: 955}))
console.log(rand({}))

