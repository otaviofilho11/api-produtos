const express = require('express');
const db = require('./config/database');

const app = express();
app.use(express.json());

//retornar todos produtos
app.get('/', async(req,res) => {
try{
    const [produtos] = await db.query(
        'SELECT * FROM produtos'
    );

    if(produtos.length === 0){
        return res.status(400).json({message:"Produto Não Encontrado!"});
    }

    return res.status(200).json(produtos);

}catch(erro){
    return res.status(500).json({
            erro:'Erro ao buscar o Produto!',
            message:Error
        });
    }
});

//get por id
app.get('/selectProduct/:id', async(req,res) => {
const {id} = req.params;

if(!id || isNaN(Number(id))){                                                                                                               
    return res.status(400).json({Erro:"ID Inválido!"});
}

try{
    const [produtos] = await db.query(
        'SELECT * FROM produtos WHERE ID = ?',[id]
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

//calcular total de algum produto

app.get('/totalPrice/', async(req,res) => {

try{
    const [produtos] = await db.query(
        "SELECT SUM(preco) AS total FROM produtos"
    );

    if(produtos.length === 0){
        return res.status(400).json({message:"Produto Não Encontrado"});
    }

return res.status(200).json(produtos);

}catch(erro){
    return res.status(500).json({
        erro:"Erro Ao Buscar O produto!",
        message:Error
    });
}

});

app.get('/avgPrice', async(req,res) => {

try{

    const [produtos] = await db.query(
        `SELECT avg(preco)
         AS media 
         FROM produtos
        `
    )

        if(produtos.length === 0){
            return res.status(400).json({message:"Produto Não Encontrado"});
        }

    return res.status(200).json(produtos);

}catch(erro){

        res.status(500).json({
            Erro:"Erro Ao Buscar os Produtoss",
            message:Error
        });
    }
});

//insert
app.post('/insertProduct', async(req,res) =>{
const {nome,quantidade,preco} = req.body;

try{
    const [produtos] = await db.query(
        `
            INSERT INTO produtos (nome,quantidade,preco) 
            VALUES (?,?,?) 
        `,[nome,quantidade,preco]
    );

    if(produtos.affectedRows === 0){
        return res.status(400).json({message:"Produto Não Encontrado!"});
    }

        return res.status(200).json({
            message:"Produto Inserido Com Sucesso!"
        }); 

}catch(erro){
        return res.status(500).json({
            erro:'Erro ao Inserir O Produto',
            message:erro
        });
    }
});

app.put('/updateProductPrice/:id', async(req,res) => {
const {id} = req.params;
const {preco} = req.body;

try{

    const [produtos] = await db.query(
        `UPDATE produtos
         SET preco = ?
         WHERE ID = ?

        `,[preco,id]
    );

if(produtos.affectedRows === 0){
    res.status(400).json({
        message:"Produto Não Encontrado!"
    });
}

return res.status(200).json({
    message:"produto alterado com sucesso!"
});

} catch(erro){
        return res.status(500).json({
            Erro:erro,
            message:erro.message
        });
    }
});

app.delete('/deleteProduct/:id', async(req,res) => {
const {id} = req.params;

if(isNaN(Number(id))){
    return res.status(400).json({
        message:"ID Inválido!"
    });
}

try{

    const [produtos] = await db.query(
        `
        DELETE FROM PRODUTOS
        WHERE ID = ?
        `,[id]
    )

    if(produtos.affectedRows === 0){
        return res.status(404).json({
            message:"Produto Não Encontrado!"
        });
    }

    res.status(200).json({message:"Produto Alterado Com Sucesso!"});
    
} catch(erro){
    console.log("Erro ao deletar o prdouto:",erro);
    return res.status(500).json({
            message:"Erro Interno do Servidor!"
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor Rodando Na Porta ${PORT}`));