import 'dotenv/config'
import express   from "express";
import { json } from 'express'
import cors from 'cors';

// importações do endpoints //
import loginAdmController from './src/controller/loginAdmController.js'

const server = express();
server.use(cors);
server.use(json());

/// configuração dos endpoints ///
server.use(loginAdmController);


server.listen(process.env.PORT, () => console.log(` Api está online na porta ${process.env.PORT}`));