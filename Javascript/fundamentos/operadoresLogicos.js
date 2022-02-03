function comprar(trab1, trab2){
    const comSorv = trab1 || trab2
    const comTv50 = trab1 && trab2
    //const comTV32 = !!(trab1 ^ trab2)
    const comTv32 = trab1 != trab2
    const manSaud = !comSorv
    
    return {comSorv, comTv50, comTv32, manSaud}
}

console.log(comprar(true, true))
console.log(comprar(false,  true))
console.log(comprar(true, false))
console.log(comprar(false, false))