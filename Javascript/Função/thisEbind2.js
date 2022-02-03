function pessoa(){
    this.idade = 0

    const self = this//outro modelo
    setInterval(function(){
        self.idade++// this.idade++
        console.log(self.idade)//this.idade
    }/*.bind(this)*/, 1000)
}

new pessoa