const express = require('express');

const app = express();
app.use(express.json());

let produtos = [
    {id:1,nome:'Teclado Gamer',quantidade:4},
    {id:2,nome:'Headset',quantidade:1},
    {id:3,nome:'Placa Mãe',quantidade:5},
    {id:4,nome:'Controle PS5',quantidade:2},
    {id:5,nome:'Ventilador',quantidade:11}
];

let nextId = 6;
//mostrando produtos no root
app.get('/', (req,res) => {
    res.json(produtos);
});
//procura por id
app.get('/produto/:id', (req,res) => {
const {id} = req.params;

const produtoEncontrado = produtos.find((p) => {
    return p.id == id;
});

if(!produtoEncontrado){
    return res.status(404).json({Erro:'Produto Não Encontrado!'});
}

return res.json(produtoEncontrado);
});

app.get('/totalProdutos' , (req,res) => {

});

//post novo produto
app.post('/', (req,res) => {
const {nome,quantidade} = req.body;
    if(!nome || quantidade === undefined){
        return res.status(402).json({Erro:'O campo nome e quantidade devem ser preenchidos..'});
    }

    const novoProduto = {
        id:nextId,
        nome:nome,
        quantidade:Number(quantidade)
    };
    
    produtos.push(novoProduto);
    nextId++;

    return res.status(201).json({novoProduto});
});

app.put('/atualizarProduto/:id', (req,res) => {
const {id} = req.params;
const {nome,quantidade} = req.body;

const produtoEncontrado = produtos.find((p) => {
    return p.id == id;
});

if(!produtoEncontrado){
    return res.status(404).json({Erro:"Produto Não Encontrado!"});
}

if(nome) produtoEncontrado.nome = nome;
if(quantidade !== undefined) produtoEncontrado.quantidade = quantidade;

return res.status(200).json({mensagem:"Produto Atualizado Com Sucesso!" , produto:produtoEncontrado});

});

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor Rodando Na Porta ${PORT}`));