//operador ... rest(juntar)/spread(espalhado)
//usar o rest com parametro de função

//usar spread com objeto
const funcionario = {nome: 'João', salario: 7785.99}

const clone = {ativo: true, ...funcionario}

console.log(clone)

//usar spread com array
const grupoA = ['João', 'Gustavo', 'Maria', 'Joana']
const grupoFinal = ['Pedro', 'Gabriel', ...grupoA]

console.log(grupoFinal)