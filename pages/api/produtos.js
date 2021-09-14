// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numAleatorio(min = 1, max = 100000){
    return Math.floor(Math.random() * (max - min)) + min;
}

export default function handler(req, res) {
  res.status(200).json([
    {id: numAleatorio(), nome: 'Produto 5', preco: 5},
    {id: numAleatorio(), nome: 'Produto 1', preco: 10.00},
    {id: numAleatorio(), nome: 'Produto 2', preco: 20.00},
    {id: numAleatorio(), nome: 'Produto 3', preco: 30.00},
    {id: numAleatorio(), nome: 'Produto 4', preco: 40.00},
  ])
}
