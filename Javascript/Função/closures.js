const x ='global'

function fora(){
    const x = 'local'
    function dentro(){
        return x 
    }
    return dentro
}

const minhafunc = fora()

console.log(minhafunc())