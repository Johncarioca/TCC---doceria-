import { Router } from "express";
import { BuscarPeloNome, ProdutosDestaque } from "../repository/cardapioRepository.js";

const server = Router()


server.get('/api/cardapioGeral', async (req,resp) => {
    try {
        const i = await ProdutosDestaque();
        resp.send(i);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })    
    }
});

server.get('/cardapio/busca', async (req,resp) => {
    try {
        
        const { nome } = req.query;

        const resposta = await BuscarPeloNome(nome);
        
        if(resposta.length === 0)
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



export default server;