let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito

// => arow function

console.log(dobro(Math.PI))


ola = () => 'ola'
ola = _ => 'ola'

console.log(ola())

