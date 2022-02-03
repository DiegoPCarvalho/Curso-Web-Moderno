 const pessoa = new Object
 pessoa.nome = 'Carlos'
 pessoa.idade = 32
 pessoa.peso = 56
 pessoa.endereco = {}
 pessoa.endereco.rua = 'Alameda'
 pessoa.endereco.numero = 15
 pessoa.endereco.telefone = {}
 pessoa.endereco.telefone.celular = 96365258
 
 console.log(pessoa)



 //herança
 const ferrari = {
    nome:  'F40',
    velMax: 250
 }

 const volvo = {
     modelo: 'V40',
     velMax: 200
 }


 console.log(ferrari.__proto__)
 console.log(ferrari.__proto__ === Object.prototype)
 console.log(volvo.__proto__ === Object.prototype)
 
