import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout"

export default function Exemplo(){
    return(
        <>
        <Layout titulo="Aprendendo Next.js">
        <div>
            <Cabecalho titulo="Aprenda Next.js na Prática"/>
            <Cabecalho titulo="Next.js & React"/>
        </div>
        </Layout>
        </>
    )
}