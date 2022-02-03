const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) 
console.log(Number.isInteger(peso2)) 

const aval1 = 9.871
const aval2 = 6.871



const total = aval1 * peso1 + aval2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2.)) // number
console.log(media.toString(2)) // binario
console.log(typeof media)


/* Number -> com letra maiscula funcao
* number -> com letra minuscula tipo de dado ou objeto
*/