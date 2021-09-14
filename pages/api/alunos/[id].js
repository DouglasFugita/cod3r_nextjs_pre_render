

export default function handler(req, res){
    const id = +req.query.id;

    res.status(200).json({
        id: id, nome: `Aluno1 ${id}`, email:`aluno1${id}@email.com`
    })
}