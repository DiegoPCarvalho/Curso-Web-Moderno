
function falarDepois(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepois(3, 'Que legal')
.then(frase => frase.concat('?!?!?!?!?'))
.then(outraFrase => console.log(outraFrase))

//promise #1

let p = new Promise(function(cumprir){
    cumprir({
        x: 7,
        y: 2,
        z: 14,
        g: ['Bia', 'Ana', 'Gustavo']
    })
})

/*p.then(function(valor){
    console.log(valor)
})*/
//o processo then e passado de um para o outro 
p.then(valor => console.log(valor))