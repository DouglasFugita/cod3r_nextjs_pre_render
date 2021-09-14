export function getStaticProps(){
    return {
        revalidate: 7,
        props: {
            num: Math.random()
        }
    }
}

export default function Estatico3(props){
    return <div>
        <h1>Estatico 3</h1>
        <p>{props.num}</p>
    </div>
}