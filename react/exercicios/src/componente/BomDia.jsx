import React, {Fragment} from 'react'

export default props =>
    <Fragment>
        <h1>Bom dia {props.nome}</h1>
        <h2>Qual a sua idade? {props.idade}</h2>
        <h3>Até Breve!!!!</h3>
    </Fragment>


//utilizando ARRAY
// export default props =>[
//     <h1 key="h1">Bom dia {props.nome}</h1>,
//     <h2 key="h2">Qual a sua idade? {props.idade}</h2>,
//     <h3 key="h3">Até Breve!!!!</h3>]

//utilizando a Div
// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}</h1>
//         <h2>Qual a sua idade? {props.idade}</h2>
//         <h3>Até Breve!!!!</h3>
//     </div>