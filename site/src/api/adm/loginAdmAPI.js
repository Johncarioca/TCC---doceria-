import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function LoginAdmin(Email,Senha) {
    const r = await api.post('/adm/login', {
        email: Email, 
        senha:Senha 
    });
    return r.data;
}

