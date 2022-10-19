
import { Router } from "express";
import { BuscarNome, BuscarProdutoId, listaProduto } from "../repository/tebelasRepositorio.js";
const server = Router();



server.get('/adm/produto',async(req, resp) => {
    try {
        const j = await listaProduto();
        resp.send(j);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/adm/busca', async (req,resp) => {
    try {
        
        const { nome } = req.query;

        const resposta = await BuscarNome(nome);
        
        if(!resposta)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } 
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.get('/adm/produto/:id', async (req,resp)=>{
    try {
        
        const id= req.params.id;
        const produto = BuscarProdutoId(id);
        console.log(id);
        console.log(produto);

        resp.send({
            info:produto
        })

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;