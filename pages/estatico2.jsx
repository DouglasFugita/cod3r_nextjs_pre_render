export function getStaticProps(){
    return {
        props: {
            num: Math.random()
        }
    }
}

export default function Estatico2(props){
    return <div>
        <h1>Estatico 2</h1>
        <p>{props.num}</p>
    </div>
}