import {Router} from 'express';
const server = Router();

import { loginUsuario } from '../repository/loginUsuarioRepository.js';

server.post('/user/login', async (req,resp) => {
    try {
        const { email, senha } = req.body;


        const reposta =  await loginUsuario(email,senha);

        if(!reposta){
            throw new Error('informações erradas');
        }
        resp.status(200).send(reposta)   
    } 
    catch (err) {
        resp.status(401).send({erro: err.message});
    }
});

export default server; 