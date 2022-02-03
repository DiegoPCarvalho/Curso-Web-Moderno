import Layout from '../components/Layout'

export default function Dinamico(props){
    return(
        <Layout titulo = "Conteudo Dinamico">
            <div>{props.numero}</div>
        </Layout>
    )
}

export function getStaticProps(){
    return{
        props: {
            numero: Math.random()
        }
    }
}