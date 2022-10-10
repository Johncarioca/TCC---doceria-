
import { Router } from "express";
import { BuscarNome, listaProduto } from "../repository/tebelasRepositorio.js";
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