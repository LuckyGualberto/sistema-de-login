/*
   Comandos utilizados no terminal do vscode para criação do projeto (alguns adaptados para meu setup)
   npm init -y
   
   BR
   
   Pular navegação
   Pesquisar
   
   
   
   
   Criar
   
   
   Imagem do avatar
   
   npm install express
   npm install prisma --save-dev
   npx prisma init
   npx prisma db push
   npm install @prisma/client
   npx prisma studio
*/

// primeiro passo e importar o express
import express from 'express';

import{ PrismaClient } from '@prisma/client';


const prisma = new PrismaClient(); 

// é necessário criar uma variável para utilizar o express
const app = express();

// importante informar que utilizaremos o json para troca de informações
app.use(express.json());


const users = [];
// rota para envio de informações do usuário

app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    });

    res.status(201).json(req.body);
});

// é necessário definir as rotas da API utilizando o método apropriado, (no exemplo abaixo estamos definindo uma rota GET para /users com método HTTP)
app.get('/users', (req, res) =>{
    res.status(200).json(users)
});

// é necessário iniciar o servidor na porta desejada
app.listen(3000);

// iniciando a integração com mongoDB xDDIEoQkzR67JJ3Q