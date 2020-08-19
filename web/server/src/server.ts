import express from 'express';

const app = express();

app.use(express.json());

//GET: busca ou listar uma informaçao
//POST: criar alguma nova informaçao
//PUT: Atualizar uma informaçao existente
//DELETE: deletar uam informaçao existente  

//corpo(request Body): dados pra craçao ou atualizar registro
//Router Params: Indentificar qual recurso eu quero atualizar ou deletar
//query Parms: paginaçao, filtros, ordenaçao


app.get('/', (request,response) => {
    return response.json({ menssagens:'Hello Wsorld' })
});

app.listen(3333);

