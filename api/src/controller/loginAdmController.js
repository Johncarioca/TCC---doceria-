import {Router} from 'express';
const server = Router();

import { loginAdm, loginCliente } from '../repository/loginAdmRepository.js';

server.post('/adm/login', async (req,resp) => {
    try {
        const { email, senha } = req.body;

        const reposta =  await loginAdm(email,senha);
        if(!reposta){
            throw new Error('informações erradas');
        }
        resp.send(reposta)   
    } 
    catch (err) {
        resp.status(401).send({erro: err.message});
    }
});

server.post('/cliente/login', async (req,resp) => {
    try {
        const { email, senha } = req.body;

        const reposta =  await loginCliente(email,senha);
        if(!reposta){
            throw new Error('informações erradas');
        }
        resp.send(reposta)   
    } 
    catch (err) {
        resp.status(401).send({erro: err.message});
    }
});


export default server; 