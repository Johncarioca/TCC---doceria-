

import { InserirPagamentoBoleto, InserirPagamentoCartao, InserirPagamentoPix, InserirPedidoItem, NovoPedido } from '../repository/pedidoRepository.js';
import { DetalhesProdutoId } from '../repository/produtoRepository.js';
import { CriarNovoPedido } from '../service/novoPedido.js';

import {Router} from 'express';
const server = Router();


server.post('/pedido/cartao/:idUsuario', async (req,resp) => {
    try {

        const { idUsuario } = req.params;
        const info = req.body;
        const nvPedido = CriarNovoPedido( idUsuario, info)

        const idPedidoAdicionado = await NovoPedido(nvPedido);
        const idPagAdicionado = await InserirPagamentoCartao(idPedidoAdicionado, info.cartao);

        for( let item of info.produtos){
            const prod = await DetalhesProdutoId(item.id);
            const idPedidoItemAdicionado = await InserirPedidoItem(idPedidoAdicionado, prod.id, item.qtd, prod.preco);
        }
        resp.status(204).send();

    } 
    catch (err) {
        resp.status(401).send({erro: err.message});
    }
});

server.post('/pedido/pix/:idUsuario', async (req,resp) => {
    try {

        const { idUsuario } = req.params;
        const info = req.body;
        console.log(info);
        const nvPedido = CriarNovoPedido( idUsuario, info)

        const idPedidoAdicionado = await NovoPedido(nvPedido);
        const idPagAdicionado = await InserirPagamentoPix(idPedidoAdicionado, info.pix);

        for( let item of info.produtos){
            const prod = await DetalhesProdutoId(item.id);
            const idPedidoItemAdicionado = await InserirPedidoItem(idPedidoAdicionado, prod.id, item.qtd, prod.preco);
        }
        resp.status(204).send();

    } 
    catch (err) {
        resp.status(401).send({erro: err.message});
    }
});

server.post('/pedido/boleto/:idUsuario', async (req,resp) => {
    try {

        const { idUsuario } = req.params;
        const info = req.body;
        const nvPedido = CriarNovoPedido( idUsuario, info)

        const idPedidoAdicionado = await NovoPedido(nvPedido);
        const idPagAdicionado = await InserirPagamentoBoleto(idPedidoAdicionado, info.boleto);

        for( let item of info.produtos){
            const prod = await DetalhesProdutoId(item.id);
            const idPedidoItemAdicionado = await InserirPedidoItem(idPedidoAdicionado, prod.id, item.qtd, prod.preco);
        }
        resp.status(204).send();

    } 
    catch (err) {
        resp.status(401).send({erro: err.message});
    }
});

export default server; 