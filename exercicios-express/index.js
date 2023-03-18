const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

const saudacao = require("./saudacaoMid");
const usuarioApi = require("./api/usuario")
require("./api/produto")(app, "com param!!")

app.post("/usuario", usuarioApi.salvar)
app.get("/usuario", usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use(saudacao("Diego"))

app.use ("/home", (req, res, next) => {
    console.log("Antes ...")
    next()
})

app.get("/clientes/relatorio", (req, res) =>{
    res.send(`Cliente Relatório -> completo =  ${req.query.completo} ,  ano = ${req.query.ano}`)
})

app.post("/corpo", (req, res) =>{
    // let corpo = "";
    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // req.on("end", function(){
    //     res.send(corpo)
    // })

    res.send(req.body)
})



app.get("/clientes/:id", (req, res) =>{
    res.send(`Cliente ${req.params.id} Selecionado!`)
})



app.get("/home", (req, res, next)=>{
    // res.send("estou bem")

    // res.json({
    //     name:"ipad 32gb",
    //     price: 1899.00 ,
    //     discount: 0.12
    // })

    // res.json([
    //     {id: 1, name: "Bida", position: 1},
    //     {id: 2, name: "Carlos", position: 2},
    //     {id: 3, name: "Diogo", position: 3}
    // ])

    console.log("Durante ...")

    res.json({
        data: [
                {id: 1, name: "Bida", position: 1},
                {id: 2, name: "Carlos", position: 2},
                {id: 3, name: "Diogo", position: 3}
            ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    next()
})

app.use ("/home", (req, res) => {
    console.log("Depois ...")
})

// app.use("/", (req, res) =>{
//     res.send("olá mundo")
// })

app.listen(port, () => {
    try{
        console.log("Servidor Rodando http://localhost:" + port)
    }
    catch(error){
        console.log("Erro : " + error)
    }
})

//observações
/* use -> serve para todas as requisições (GET, POST, PUT E DELETE)
*/