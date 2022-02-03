for(let letra of 'AC.Milan'){
    console.log(letra)
}

const assuntosE = ['Map', 'Set', 'Promise']

for(let i in assuntosE){
    console.log(i)
}

for(let assunto of assuntosE){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {aborado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()){
    console.log(valor)
}

for(let[ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c', 'd', 'e'])

for(let lt of s){
    console.log(lt)
}