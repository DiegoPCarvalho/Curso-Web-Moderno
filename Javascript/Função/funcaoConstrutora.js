function carro(veloMaxi = 200, delta = 5){
        //atributo privado
        let veloAtual = 0

        //metodo publico
        this.acelerar = function()
        {
            if(veloAtual + delta <= veloMaxi)
            {
                veloAtual += delta
            }
            else{
                veloAtual = veloMaxi
            }
        }

        //metodo publico
        this.getVeloAtual = function(){
            return veloAtual 
        }
}

const gol = new carro 
gol.acelerar()
console.log(gol.getVeloAtual())


const ferrari = new carro(350, 30)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVeloAtual())