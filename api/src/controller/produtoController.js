import { Router } from "express";
import { DetalhesProdutoId } from "../repository/produtoRepository.js";

    


const server = Router();


server.get('/api/detalhe/:id', async (req, resp) => {

    try {
        const id = req.params.id;
        const r = await DetalhesProdutoId(id);
        console.log(r);

        resp.send(r);
    } 
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }

});

export default server;