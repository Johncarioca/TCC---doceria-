import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})


export async function CadastroEndereco(id, rua, complemento, estado, referencia, bairro, cep, cidade){
    const resposta = await api.post('/user/' + id + '/endereco', {rua, complemento, estado, referencia, bairro, cep, cidade})
    return resposta.data;
}

export async function ListarEnderecoId(id){
    const resposta = await api.get('/user/listar/endereco/' + id)
    return resposta.data;
}

export async function EnderecoId(idUser,idEnder){
    const resposta = await api.get('/buscar/endereco/'+ idUser + '/' + idEnder)
    return resposta.data;
}