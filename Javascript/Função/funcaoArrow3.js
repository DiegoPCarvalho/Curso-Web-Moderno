let compThis = function (param){
    console.log(this === param)
}

compThis(global)


const obj = {}
compThis = compThis.bind(obj)
compThis(global)
compThis(obj)


let compThisA = param => console.log(this === param)
compThisA(global)
compThisA(module.exports)


compThisA = compThisA.bind(obj)
compThisA(obj)
compThisA(module.exports)