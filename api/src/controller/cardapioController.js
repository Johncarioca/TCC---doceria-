import { Router } from "express";
import { BuscarPeloNome, ProdutosDestaque, CategoriaBolo, CategoriaKits, CategoriaDoces, CategoriaSalgados, CategoriaTortas} from "../repository/cardapioRepository.js";

const server = Router()



server.get('/cardapio/busca', async (req,resp) => {
    try {
        
        const { nome } = req.query;

        const resposta = await BuscarPeloNome(nome);
        
        if(resposta.length === 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } 
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.get('/api/cardapio/geral', async (req,resp) => {
    try {
        const i = await ProdutosDestaque();
        resp.send(i);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })    
    }
});

server.get('/api/cardapio/bolos', async (req,resp) => {
    try {
        const i = await CategoriaBolo();
        resp.send(i);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })    
    }
});


server.get('/api/cardapio/tortas', async (req,resp) => {
    try {
        const i = await CategoriaTortas();
        resp.send(i);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })    
    }
});


server.get('/api/cardapio/kits', async (req,resp) => {
    try {
        const i = await CategoriaKits();
        resp.send(i);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })    
    }
});


server.get('/api/cardapio/salgados', async (req,resp) => {
    try {
        const i = await CategoriaSalgados();
        resp.send(i);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })    
    }
});


server.get('/api/cardapio/doces', async (req,resp) => {
    try {
        const i = await CategoriaDoces();
        resp.send(i);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })    
    }
});



export default server;