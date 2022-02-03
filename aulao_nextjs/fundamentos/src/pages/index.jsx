import Link from 'next/link'
import Navegador from '../components/Navegador'
export  default function Inicio(){
    // return "Inicio"

    return (
        <div style = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
            flexWrap: 'wrap'
        }}>
                <Navegador texto ="Estiloso" destino="/estiloso" />
                <Navegador texto ="Exemplo" destino="/Exemplo" cor ="crimson" />
                {/* <Navegador texto ="JSX" destino="/jsx"/> */}
                <Navegador texto ="Cliente" destino="/cliente/753" cor = "green"/>
                <Navegador texto ="Estado" destino="/Estado" cor = "blue"/>
                <Navegador texto ="Integração" destino="/Integracao_1" cor = "brown"/>
                <Navegador texto ="Conteudo Estatico" destino="/Estatico" cor = "#fa054a"/>
                <Navegador texto ="Conteudo Dinamico" destino="/Dinamico" cor = "#62d723"/>
        </div>
    )
}