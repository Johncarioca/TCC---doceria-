import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function CadastrarProduto(nome,peso,preco,sinopse,ingredientes,estoque,destaque,categoria){
    const resposta=await api.post('/adm/cadastro',{
        nome: nome ,
        peso: peso,
        preco: preco,
        sinopse: sinopse,
        ingredientes: ingredientes,
        estoque: estoque,
        destaque: destaque,
        categoria: categoria
    })

    return resposta.data;
};

export async function ImagemProduto(id,imagem){
    const formData= new FormData();
    formData.append('imagem',imagem);

    const resposta = await api.put(`/adm/${id}/imagem`, formData, {
        headers:{
            "content-type":"multipart/form-data"
        },
    });

    return resposta.status;
};

export async function ListarCategorias(){
    const resposta=await api.get('/adm/listarcategoria');
    return resposta.data;
}

export async function LoginCliente() {
    const r = await api.post('/cliente/login');
    return r.data;
}



////////// tabela de produto ////////////////

export async function listaProduto(){
    const j = await api.get('/adm/produto');
    return j.data;
}

export async function DeletarProduto(id){
    const r=await api.delete('/adm/produto/'+id);
    return r.data;
}