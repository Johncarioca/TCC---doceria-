
import { Router } from "express";
import { listaProduto } from "../repository/tebelasRepositorio.js";
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


export default server;