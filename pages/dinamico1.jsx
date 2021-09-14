export function getServerSideProps(){
    console.log('[Server] gerando props para o componente...')
    return { 
        props:{
            num: Math.random()
        }
    }
}

export default function Dinamico1(props){
    return <div>
        <h1>Dinamico 1</h1>
        <h2>{props.num}</h2>
    </div>
}