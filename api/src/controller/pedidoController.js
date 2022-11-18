

import { CardPedidos, InserirPagamentoBoleto, InserirPagamentoCartao, InserirPagamentoPix, InserirPedidoItem, NovoPedido } from '../repository/pedidoRepository.js';
import { DetalhesProdutoId } from '../repository/produtoRepository.js';
import { CriarNovoPedido } from '../service/novoPedido.js';

import {Router} from 'express';
import { validarBoleto, validarCartao, validarPix } from '../service/ValidadaoPedido.js';

const server = Router();


server.post('/user/pedido/:idUsuario', async (req,resp) => {
    try {

        const { idUsuario } = req.params;
        const info = req.body;
        const nvPedido = CriarNovoPedido( idUsuario, info)
        
        const idPedidoAdicionado = await NovoPedido(nvPedido);
        

        if (info.tpPagamento === 'cartao') {
            
            await validarCartao(info.pagamento);
            await InserirPagamentoCartao(idPedidoAdicionado, info.pagamento);
        }
        if (info.tpPagamento === 'pix') {
               await validarPix(info.pagamento);
            await InserirPagamentoPix(idPedidoAdicionado, info.pagamento);
            
        } else {
            await validarBoleto(info.pagamento);
            await InserirPagamentoBoleto(idPedidoAdicionado, info.pagamento);
        } 

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

server.get('/api/cardsPedidos/:idUsuario', async (req, resp) => {

    try {
        const {idUsuario} = req.params; 
        const r = await CardPedidos(idUsuario);
        
        resp.send(r);
    } 
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }

});



export default server; 