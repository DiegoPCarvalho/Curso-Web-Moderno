import { divide } from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'

// const elemento = <h1>React 2</h1>
// ReactDOM.render(elemento, document.getElementById('root'))

// import Primeiro from './componente/Primeiro'
// ReactDOM.render(<Primeiro />, document.getElementById('root'))

// import BomDia from './componente/BomDia'
// ReactDOM.render(<BomDia nome="Diego" idade={26}/>, document.getElementById('root'))

// import { BoaTarde, BoaNoite } from './componente/Multiplos'
// // import multi from './componente/Multiplos'

// ReactDOM.render(<React.Fragment>
//     <BoaTarde nome="Diego" />,
//     <BoaNoite nome="Mona" />
// </React.Fragment>,
//     document.getElementById('root'))

// import Saudacao from './componente/Saudacao'

// ReactDOM.render(<Saudacao tipo="Bom dia" nome ="Mona"/>,
//  document.getElementById('root'))

import Pai from './componente/Pai'
import Filho from './componente/Filho'

ReactDOM.render(
    <div>
        <Pai nome ="Paulo" sobrenome = "Silva">
        {/* como passo os componentes filhos */}
            <Filho nome="Pedro" />            
            <Filho nome="Paulo" />            
            <Filho nome="Carla" />    
        </Pai>
    </div>
,document.getElementById('root'))