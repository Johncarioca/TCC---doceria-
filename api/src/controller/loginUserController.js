import {Router} from 'express';
const server = Router();

import { CadastroUsuar, loginUsuario, CadastroImagemUser, PerfilUser,  } from '../repository/loginUsuarioRepository.js';
import { ValidarCadastro } from '../service/validacao.js';

import multer from 'multer'; 
const upload = multer({dest: 'storage/cadastroLogin' });






server.post('/user/Login', async (req,resp) => {
    try {
        const { email, senha } = req.body;

        const reposta =  await loginUsuario(email,senha);
        if(!reposta){
            throw new Error('informações erradas');
        }
        resp.send({
            id: reposta.id,
            nome: reposta.nome
        })
    } 
    catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
});

server.post('/user/cadastro', async (req,resp) => {
    try {
        const cliente = req.body;
        await ValidarCadastro(cliente);
        // console.log(cliente);
        const reposta = await CadastroUsuar(cliente);

        resp.send(reposta);
    } 
    catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
});


server.put('/user/cadastro/:id', upload.array('imagem'),async (req, resp) => {
    try {
            
        const imangen = req.files;
        const id = req.params.id;

        for(const imagem of imangen){
            
            await CadastroImagemUser(imagem.path, id);
        }

        resp.status(204).send();
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});



server.get('/api/PerfilUser/:idUser', async (req, resp) => {

    try {
        const idUser = req.params.idUser;
        const r = await PerfilUser(idUser);
        // console.log(r);

        resp.send(r);
    } 
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }

});

export default server; 