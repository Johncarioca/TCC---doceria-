
import express, { json }  from "express";
import cors from 'cors';

const server = express();
server.use(cors);
server.use(json());




server.listen(process.env.PORT, 
    () => console.log(` Api na porta ${process.env.PORT}`));