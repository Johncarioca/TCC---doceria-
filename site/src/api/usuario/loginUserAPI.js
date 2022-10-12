import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})


////////// Login do cliente ////////////////
export async function LoginCliente(email,senha){

    const resposta = await api.post('/user/login',{
        email:email,
        senha:senha
    });
    return resposta.data;
};

////////// cadastro do cliente ////////////////

export async function cadastrarCliente(nome,email,senha,cpf,nascimento,telefone,ConfirSenha){
    const r = await api.get('/user/cadastro', + {
        nome:nome,
        email:email,
        senha:senha,
        cpf:cpf,
        nascimento: nascimento,
        telefone:telefone,
        ConfirSenha:ConfirSenha
        
    });
    return r.data;
}

