const express = require('express');
const db = require('./config/database');

const app = express();
app.use(express.json());

app.get('/allProducts', async(req,res) => {
try{
    const [produtos] = await db.query(
        'SELECT * FROM produtos'
    );

    return res.status(200).json(produtos);

}catch(erro){
    return res.status(500).json({
            erro:'Erro ao buscar o Produto!',
            message:Error
        });
    }
});

app.get('/selectProduct/:id', async(req,res) => {
const {id} = req.params;

if(!id || isNaN(Number(id))){                                                                                                               
    return res.status(400).json({Erro:"ID Inválido!"});
}

try{
    const [produtos] = await db.query(
        `SELECT * FROM produtos WHERE ID = ?`,[id]
    );

    if(produtos.length === 0){
        return res.status(404).json({
            messagem:"Produto Não Encontrado.."
        })
    }

    return res.status(200).json(produtos);

}catch(erro){
        res.status(500).json({
            erro:'Erro Ao Buscar Produto!',
            message:Error
        });
    }
});



const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor Rodando Na Porta ${PORT}`));