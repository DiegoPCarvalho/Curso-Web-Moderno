const { res } = require ('express');
const express = require('express');
const { engine } = require('express-handlebars')
const app = express();
const port = 3000




app.get('/', (req, res) => {
    res.send('Este é o seu diretorio Index!');
})

app.get('/contatos', (req, res) => {    
    res.redirect
})

app.get('/:nome', (req, res) => {
    const nome = req.params.nome
    res.send('Nome:' + nome)
})

app.listen(port, (err) => {
    try{
        console.log('Server in Runnin http://localhost:' + port)
    }
    catch{
        console.log("deu erro" + err)
    }
})