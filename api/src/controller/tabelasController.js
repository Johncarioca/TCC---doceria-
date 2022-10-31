
import { Router } from "express";

import { ImagemProduto } from "../repository/npRepository.js";
import { AlterarProduto, RemoverImagemId } from "../repository/produtoRepository.js";
import { BuscarNome, BuscarProdutoId, listaProduto } from "../repository/tebelasRepositorio.js";
const server = Router();


server.get('/adm/produto',async(req, resp) => {
    try {
        const j = await listaProduto();
        resp.send(j);
    } 
    catch (err) {
        resp.send({
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
        const produto = await BuscarProdutoId(id);
        // console.log(produto);

        resp.send({
            info:produto
        })

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/adm/produto/:id/alt',async (req,resp)=>{
    try {

        const produto=req.body;
        const id = req.params.id;

        await AlterarProduto(id,produto)

        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;