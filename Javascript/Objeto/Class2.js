class avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo{
    constructor(sobrenome, profissao = 'Advogado'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends pai{
    constructor(){
        super('Carvalho')
    }
}


const Filho = new filho
console.log(Filho)