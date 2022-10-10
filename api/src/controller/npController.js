
import multer from 'multer'; 
import { Router } from "express";
import { ImagemProduto, NovoProduto ,ListarCategorias ,DeletarProduto} from "../repository/npRepository.js";
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

            if(!req.file)
                    throw new Error('Escolha a imagem do produto')
        const { Id } = req.params;
        const imagem = req.file.path;

        const resposta = await ImagemProduto(imagem, Id);
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





server.get('/adm/listarcategoria', async(req,resp)=>{
    try {
        const cat=await ListarCategorias();
        resp.send(cat);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.delete('/adm/produto/:id',async(req,resp)=>{
    try {
        const id=req.params.id;

        await DeletarProduto(id)

        resp.status(204).send();
        
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
        
    }
})

export default server;


