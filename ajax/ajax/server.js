const bodyParse = require ('body-parser')
const express = require ('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())

app.get('/teste', (req, res) => res.send('OK'))

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callbak){
        callbak(null, './upload')
    },
    filename: function (req, file, callbak){
        callbak(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) =>{
    upload(req, res, err =>{
        if(err){
            return res.end('ocorreu um erro ')
        }

        res.end('Concluido com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))