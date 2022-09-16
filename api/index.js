
import express, { json }  from "express";
import cors from 'cors';

const serve = express();
serve.use(cors);
serve.use(json());




serve.listen(process.env.PORT, 
    () => console.log(`Api na porta ${process.env.PORT}`));