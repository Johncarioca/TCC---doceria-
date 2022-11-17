import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})




export async function Listapedidos(idUsuario){
    
    const r = await api.get('/api/cardsPedidos/' + idUsuario);
    return r.data; 
} 