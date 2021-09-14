export async function getStaticPaths(){
    const resp = await fetch(`http://localhost:3000/api/alunos/tutores`);
    const tutoresId = await resp.json();

    const paths = tutoresId.map(tutorId => {
        return {
            params: {id: `${tutorId}`}
        }
    });

    return{
        // paths: [
        //     {params: {id: '1'}},
        //     {params: {id: '2'}},
        //     {params: {id: '3'}},
        // ],
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const id = context.params.id;
    const resp = await fetch(`http://localhost:3000/api/alunos/${id}`);
    const aluno = await resp.json();

    return{
        props: {aluno: aluno}
    }
}

export default function AlunoPorId(props){
    const {aluno} = props;
    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            <ul>
                <li>Nome: {aluno.nome}</li>
                <li>Email: {aluno.email}</li>
            </ul>
        </div>
    )
}