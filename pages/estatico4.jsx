export async function getStaticProps(){
    console.log('[Server] gerando props para o componente...')
    const res = await fetch('http://localhost:3000/api/produtos')
    const produtos = await res.json()

    return {
        props: {
            revalidate: 7,
            produtos: produtos
        }
    }
}

export default function Estatico4(props){
    console.log("[Cliente] renderizando componente...")
    return <div>
        <h1>Estatico 4</h1>
        <ul>
            {props.produtos.map(produto => <li key={produto.id}>{produto.nome} - {produto.preco}</li>)}
        </ul>
    </div>
}