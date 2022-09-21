
import {Router} from 'express';
import { loginAdm } from '../repository/loginAdmRepository.js';

const server = Router();


server.post('/login', (req,resp) => {
    const {email, senha} = req.body;

    const reposta =  loginAdm(email,senha);
    
    

});