import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})



export async function BuscarProdutoCardapio(nome){
    // console.log(nome);
    const resposta = await api.get(`/adm/busca?nome=${nome}`);
    return resposta.data;

}

export async function ProdutosDestaque(){
    const j = await api.get('/api/cardapio/geral');
    return j.data;
}

export async function CategoriaTortas(){
    const j = await api.get('/api/cardapio/tortas');
    return j.data; 
}

export async function CategoriaBolo(){
    const j = await api.get('/api/cardapio/bolos'); 
    return j.data; 
}

export async function CategoriaKits(){
    const j = await api.get('/api/cardapio/kits'); 
    return j.data; 
}

export async function CategoriaSalgados(){
    const j = await api.get('/api/cardapio/salgados'); 
    return j.data; 
}

export async function CategoriaDoces(){
    const j = await api.get('/api/cardapio/doces'); 
    return j.data; 
}

export default api;