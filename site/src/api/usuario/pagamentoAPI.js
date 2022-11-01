import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})


////////// Login do cliente ////////////////
export async function SalvarNovoPedido(idUsuario, nvPedido){

    const r = await api.post('/api/produto/' + idUsuario,nvPedido);
    return r.data;
};