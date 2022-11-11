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

export async function CadastroUsuar(Nome,CPF,Nascimento,Telefone,Email,Senha){
    const r = await api.post('/user/cadastro/', {
        nome:Nome,
        cpf:CPF,
        nascimento: Nascimento,
        telefone:Telefone,
        email:Email,
        senha:Senha,
    });
    return r.data;
}

export async function AlterarUsuar(id,Nome,CPF,Nascimento,Telefone){
    const r = await api.put('/user/alterarUser/' + id, {
        nome:Nome,
        cpf:CPF,
        nascimento: Nascimento,
        telefone:Telefone,
    });
    return r.data;
}

export async function AlterarESUsuar(id,Email,Senha){
    const r = await api.put('/user/alterarES/' + id, {
        email:Email,
        senha:Senha,
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

export async function AlterarImagemUser(imangen,id){
    let form= new FormData();
    form.append('imagem',imangen);

    const r = await api.put('/user/alterarImg/' + id, form, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
    return r.data;
};


export async function UsePerfil(idUser){
    const resposta = await api.get('/api/PerfilUser/'+ idUser )
    return resposta.data;
}