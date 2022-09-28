
import multer from 'multer'; 
import { Router } from "express";
import { ImagemProduto, NovoProduto } from "../repository/npRepository.js";
import { ValidarProduto } from '../service/validacao.js';
const server = Router();
const upload = multer({dest: 'storage/imagem' });

server.post('/adm/cadastro', async (req,resp) => {
    
    try {
        const Cadastro = req.body;
        
        await ValidarProduto(Cadastro); 

        const Produto  = await NovoProduto(Cadastro);
        

        resp.send(Cadastro);
    } 
    catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
});

server.put('/adm/:id/imagem', upload.single('imagem'),async (req, resp) => {

    try {
        const { id } = req.params;
        const Imagem = req.file.path;

        const resposta = await ImagemProduto(Imagem, id);
        if(resposta != 1){
            throw new Error('A imagem não foi salva.');
        }

        resp.status(204).send();
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

export default server;


