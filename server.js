// primeiro passo e importar o express
import express from 'express';
// é necessário criar uma variável para utilizar o express
const app = express();

const users = [];

app.post('/users',(req, res) =>{
    console.log(req)

    res.send('Ok, aqui deu certo')
});
// é necessário definir as rotas da API utilizando o método apropriado, (no exemplo abaixo estamos definindo uma rota GET para /users com método HTTP)
app.get('/users', (req, res) =>{
    res.send('Ok, deu bom')
});
// é necessário iniciar o servidor na porta desejada
app.listen(3000)