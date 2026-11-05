
// Importando as bibliotecas
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

// Criar a conexão com o banco
const app = express();
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI);
const produtos = client.db('loja').collection('produtos');

// Criando os métodos HTTP
app.post('/produtos', async (req, res) => {
    const novo_produto = await produtos.insertOne(req.body);
    res.status(201).json(novo_produto);
});

app.get('/produtos', async (req, res) => {
    const lista_produtos = await produtos.find().toArray();
    res.json(lista_produtos);
});

app.get('/produtos/:id', async (req, res) => {
    const produto_especifico = await produtos.findOne({
        _id: new ObjectId(req.params.id)
    });
    res.json(produto_especifico);
});

app.put('/produtos/:id', async (req, res) => {
    const produto_atualizado = await produtos.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
    );
    res.json(produto_atualizado);
});

app.delete('/produtos/:id', async (req, res) => {
    const produto_apagado = await produtos.deleteOne({
        _id: new ObjectId(req.params.id)
    });
    res.json(produto_apagado);
});

client.connect()
    .then(() => {
        console.log('CONECTADO AO MONGODB');
        app.listen(process.env.PORT || 3000, () => console.log('API RODANDO'));
    })
    .catch((erro) => console.log('ERRO AO CONECTAR', erro.message));
