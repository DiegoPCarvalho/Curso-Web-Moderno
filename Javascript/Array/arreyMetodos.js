const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//ultimo removido
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)


//remover
pilotos.splice(3, 1)
console.log(pilotos)


const algunsPilotos = pilotos.slice(2)//novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)