
import multer from 'multer'; 
import { Router } from "express";


import { ImagemProduto, NovoProduto ,ListarCategorias ,DeletarProduto} from "../repository/npRepository.js";
import { ValidarProduto } from '../service/validacao.js';


const server = Router();
const upload = multer({dest: 'storage/imagemProduto' });

server.post('/adm/cadastro', async (req,resp) => {
    
    try {
        const Cadastro = req.body;
        
        await ValidarProduto(Cadastro); 

        const Produto  = await NovoProduto(Cadastro);

        resp.send({
            id: Produto
        });
    } 
    catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
});



server.put('/adm/produto/:id', upload.array('imagem'),async (req, resp) => {

    try {
            
        const imagen = req.files;
        const id = req.params.id;

        for(const imagem of imagen){
            
            await ImagemProduto(imagem.path, id);
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


