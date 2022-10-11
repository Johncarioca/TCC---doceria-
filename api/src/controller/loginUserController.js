import {Router} from 'express';
const server = Router();

import { CadastroUsuar, loginUsuario } from '../repository/loginUsuarioRepository.js';
import { ValidarCadastro } from '../service/validacao.js';

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

server.post('/user/cadastro', async (req,resp) => {
    try {
        const cliente = req.body;
        
        await ValidarCadastro(cliente);
        console.log(cliente);
        const reposta = await CadastroUsuar(cliente);

        resp.send(reposta);
    } 
    catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
});





export default server; 