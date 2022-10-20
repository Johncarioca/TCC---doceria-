import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})




export async function DetalhesProdutoId(id){
    
    const r = await api.get('/api/detalhe/' + id);
    return r.data; 
} 