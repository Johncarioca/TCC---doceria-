import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})


////////// Login do cliente ////////////////
export async function loginUsuario(email,senha){

    const r = await api.post('/user/Login',{ email, senha});
    return r.data;
};

////////// cadastro do cliente ////////////////

export async function CadastroUsuar(Nome,CPF,Nascimento,Telefone){
    const r = await api.post('/user/cadastro/', {
        nome:Nome,
        cpf:CPF,
        nascimento: Nascimento,
        telefone:Telefone,
    });
    return r.data;
}

export async function ImagemCadastroUser(imangen,id){
    let form= new FormData();
    form.append('imagem',imangen);

    const r = await api.put('/user/cadastro/' + id, form, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
    return r.data;
};