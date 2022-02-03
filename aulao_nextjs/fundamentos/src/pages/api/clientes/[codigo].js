export default function handleGet(req, res){
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Maria ${codigo}`,
        email: `mona.damasceno${codigo}@zhaz.com`,
        idade: 33
    })
}