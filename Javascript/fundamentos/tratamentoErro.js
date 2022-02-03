function tratarerro(erro){
    throw new Error ("Programe direito")
}

function gritar(obj){
try{
    console.log(obj.nome.toUpperCase() + '!!!')
}
catch (e)
{
    tratarerro(e)
}
finally
{
    console.log('Final')
}
}

const obj = {nome: 'Diego'}
gritar(obj)