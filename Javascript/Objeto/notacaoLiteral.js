const a = 1 
const b = 2
const c = 3

const obj = { a:a, b:b, c:c}
const obj2 = {a,b,c}
console.log(obj, obj2)

const nomeAt = 'Nota'
const ValorAT = 7.87

const obj3 = {}
obj3[nomeAt] = ValorAT
console.log(obj3)

const obj4 = {[nomeAt]: ValorAT}
console.log(obj4)

    const obj5 = {
        funcao: function (){
            //funcao antiga
        },
        funcao2(){
            // versao mis nova
        }
    }
    console.log(obj5)