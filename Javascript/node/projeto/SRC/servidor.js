const porta = 3003

const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDados = require('./bancoDados.js')

app.use(bodyParse.urlencoded({ extended: true}))
/*app.get('/produtos', (req, res, next)=>{
    console.log('Mid 1...')
    next() midlleware
})*/
app.get('/produtos', (req, res, next)=>{
    res.send(bancoDados.getProdutos())//convert para json
})
app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos',(req, res, next)=>{
    const produto  = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})
app.put('/produtos/:id',(req, res, next)=>{
    const produto  = bancoDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})
app.delete('/produto/:id',(req, res, next)=>{
    const produto = bancoDados.excluirProduto(req.params.id)
})
/*app.get('/produtos', (req, res, next)=>{
    res.send({nome: 'Notebook', preco: 123.45})//convert para json
})*/

app.listen(porta,()=>{
    console.log(`Servidor executando na porta ${porta}`)
})

