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


export async function ImagemProduto(imagen,id){
    let form= new FormData();
    form.append('imagem',imagen);

    const r = await api.put('/adm/produto/' + id, form, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });

    return r.data;
};

export async function ListarCategorias(){
    const resposta=await api.get('/adm/listarcategoria');
    return resposta.data;
}

export  function buscarFilmes(imagem){
    return `${api.getUri()}/${imagem}` 
}

export async function AlterarProduto(nome,peso,ingredientes,preco,estoque,sinopse,categoria,destaque,id){
    await api.put(`/adm/cadastro/${id}/alt`,{
        nome: nome ,
        peso: peso,
        ingredientes: ingredientes,
        preco: preco,
        estoque: estoque,
        sinopse: sinopse,
        categoria: categoria,
        destaque: destaque,
        id:id
    })

};