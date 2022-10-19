import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function BuscarProdutoPelaTabela(nome){
    // console.log(nome);
    const resposta = await api.get(`/adm/busca?nome=${nome}`);
    return resposta.data;

}

export async function listaProduto(){
    const j = await api.get('/adm/produto');
    return j.data;
}

export async function DeletarProduto(id){
    const r=await api.delete('/adm/produto/'+id);
    return r.data;
}

export async function BuscarProdutoId(id){
    const r=await api.get(`/adm/produto/${id}`);
    return r.data;
}
 