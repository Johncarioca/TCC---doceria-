import {Router} from 'express';
import { ListarPedidos } from '../repository/listaPedidosRepository.js';

const server=Router();

server.get('/adm/listaPedidos',async(req,resp)=>{
    try {
        const r=ListarPedidos();

        resp.status(200).send({
            info:r
        })
        
    } catch (err) {
        resp.status(401).send({erro: err.message});
    }
});


export default server;