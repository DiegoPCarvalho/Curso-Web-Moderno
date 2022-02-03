//cadeia de prototipos
Object.prototype.attr0 = 'Z'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


//----//
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    Status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}


const ferrari = { 
    modelo: 'F40',
    velMax: 350
}

const volvo = { 
    modelo: 'V40',
    Status (){
        return `${this.modelo}: ${super.Status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar(150)
console.log(volvo.Status())
ferrari.acelerar(325)
console.log(ferrari.Status())
