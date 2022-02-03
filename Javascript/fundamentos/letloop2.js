const funcs = []

for(let i = 0; i < 50; i++){
        funcs.push(function(){
            console.log(i)
        })
}
funcs[2]()
funcs[8]()
funcs[46]()
funcs[1]()