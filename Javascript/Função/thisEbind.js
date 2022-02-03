const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

//conflito entre paradigmas: funcional e OO
const falar = pessoa.falar
falar()

//amarra o this na sintaxe presente
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()