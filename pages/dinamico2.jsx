export async function getServerSideProps(){
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

export default function Dinamico2(props){
    console.log("[Cliente] renderizando componente...")
    return <div>
        <h1>Dinamico 2</h1>
        <ul>
            {props.produtos.map(produto => <li key={produto.id}>{produto.nome} - {produto.preco}</li>)}
        </ul>
    </div>
}