import { Router } from "express";
import { ProdutosDestaque } from "../repository/cardapioRepository.js";

const server = Router()


server.get('/cardapioGeral', async (req,resp) => {
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





export default server;