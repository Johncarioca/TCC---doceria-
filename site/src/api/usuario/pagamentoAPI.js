import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})


////////// Login do cliente ////////////////
export async function SalvarNovoPedido(idUsuario, pedido){

    const r = await api.post('/user/pedido/' + idUsuario, pedido);
    return r.data;
};