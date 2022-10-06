import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function LoginCliente(email,senha){

    const resposta =await api.post('/user/login',{
        email:email,
        senha:senha
    });
    return resposta;
};

