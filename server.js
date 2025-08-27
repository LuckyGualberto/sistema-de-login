// primeiro passo e importar o express
import express from 'express';

// é necessário criar uma variável para utilizar o express
const app = express();

// importante informar que utilizaremos o json para troca de informações
app.use(express.json());

// rota para envio de informações do usuário
const users = [];
app.post('/users',(req, res) =>{

    users.push(req.body);

    res.status(201).json(req.body);
});

// é necessário definir as rotas da API utilizando o método apropriado, (no exemplo abaixo estamos definindo uma rota GET para /users com método HTTP)
app.get('/users', (req, res) =>{
    res.status(200).json(users)
});

// é necessário iniciar o servidor na porta desejada
app.listen(3000)