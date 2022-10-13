import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function ProdutosDestaque(){
    const j = await api.get('/api/cardapioGeral');
    return j.data;
}

export async function BuscarProdutoCardapio(nome){
    console.log(nome);
    const resposta = await api.get(`/adm/busca?nome=${nome}`);
    return resposta.data;

}

export default api;