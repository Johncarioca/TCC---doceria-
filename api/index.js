import 'dotenv/config'
import express   from "express";
import cors from 'cors';

// importações do endpoints //
import loginAdmController from './src/controller/loginAdmController.js'
import loginUsuario from './src/controller/loginUserController.js'
import npController from './src/controller/npController.js'
import tabelasController from './src/controller/tabelasController.js'
import cardapioController from './src/controller/cardapioController.js'
import produtoController  from './src/controller/produtoController.js';
import enderecoController from './src/controller/enderecoController.js';
import pedidoController from './src/controller/pedidoController.js';
import ListaPedidosController from './src/controller/listaPedidosController.js';

const server = express();
server.use(cors());
server.use(express.json());

/// configuração dos endpoints ///

server.use(loginAdmController);
server.use(enderecoController);
server.use(npController);
server.use(loginUsuario);
server.use(tabelasController);
server.use(cardapioController);
server.use(produtoController);
server.use(pedidoController);
server.use(ListaPedidosController);

server.use('/storage/imagemProduto', express.static('storage/imagemProduto'));
server.use('/storage/cadastroLogin', express.static('storage/cadastroLogin'));

server.listen(process.env.PORT, () => console.log(` Api está online na porta ${process.env.PORT}`));