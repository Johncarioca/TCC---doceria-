import {Router} from 'express';
import { CadastroEndereco, EnderecoId, ListarEnderecoId } from '../repository/enderecoRepository.js';
import { ValidarCadastroEndereco } from '../service/validacao.js';

const server = Router();

server.get('/user/listar/endereco/:id', async (req,resp) => {
    try {
        const id = req.params.id;

        const j = await ListarEnderecoId(id);
        resp.send(j);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })    
    }
});


server.post('/user/:id/endereco', async (req,resp) => {
    try {
        
        const id = req.params.id;
        const endereco = req.body;
        
        const i = await CadastroEndereco(id,endereco);
       
        resp.status(204).send();
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
}); 

server.get('/buscar/endereco/:idUser/:idEnder', async (req,resp) => {
    try {
        const idUser = req.params.idUser;
        const idEnder = req.params.idEnder;

        const j = await EnderecoId(idUser,idEnder);
        resp.send({j});
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })    
    }
});

export default server;