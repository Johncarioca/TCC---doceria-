
import multer from 'multer'; 
import { Router } from "express";
import { ImagemProduto, NovoProduto } from "../repository/npRepository.js";
const server = Router();
const upload = multer({dest: 'storage/imagem' });

server.post('/adm/cadastro', async (req,resp) => {
    
    try {
        const Cadastro = req.body;
            if (!Cadastro.nome) {
                throw new Error('Nome do produto obrigatorio');
            }
            if (!Cadastro.peso) {
                throw new Error('O peso do produto é obrigatorio');
            }
            if (!Cadastro.preco) {
                throw new Error('O valor do produto é obrigatorio');
            }
            if (!Cadastro.sinopse) {
                throw new Error('Nome do produto obrigatorio');
            }
            if (!Cadastro.ingredientes) {
                throw new Error('Os ingredientes do produto obrigatorio');
            }
            if (!Cadastro.estoque) {
                throw new Error('A quantidade que tem no estoque do produto obrigatorio');
            }
            if (!Cadastro.ingredientes) {
                throw new Error('Os ingredientes do produto obrigatorio');
            }
            if (!Cadastro.destaque) {
                throw new Error('È obrigatorio dizer se o produto está em destaque ou não');
            }

        const Produto  = await NovoProduto(Cadastro);
        resp.send(Produto);
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
