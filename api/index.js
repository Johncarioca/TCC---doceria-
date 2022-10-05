import 'dotenv/config'
import express   from "express";
import cors from 'cors';

// importações do endpoints //
import loginAdmController from './src/controller/loginAdmController.js'
import loginUsuario from './src/controller/loginUserController.js'
import npController from './src/controller/npController.js'

const server = express();
server.use(cors());
server.use(express.json());

/// configuração dos endpoints ///
server.use(loginAdmController);
server.use(npController);
server.use(loginUsuario);


server.listen(process.env.PORT, () => console.log(` Api está online na porta ${process.env.PORT}`));