import { con } from "./conection.js";

export async function NovoProduto(cadastro){

    const comando = 
    `
    insert into tb_produto(nm_produto ,nr_peso ,nr_preco ,ds_sinopse ,ds_ingredientes ,nr_estoque ,bt_destaque )
                    values (? ,? ,? ,? ,? ,? ,? )
    `
    const [resposta] = await con.query(comando, [cadastro.nome, cadastro.peso, cadastro.preco, cadastro.sinopse, cadastro.ingredientes, cadastro.estoque, cadastro.destaque ]);
    cadastro.id = resposta.insertid;

    return cadastro; 
}

export async function ImagemProduto(Imagem, id){
    console.log(Imagem, id);
    const comando =
    `
        update tb_produto
           set img_produto   = ?
        where id_produto    = ?
    `
    const [resposta] = await con.query(comando, [Imagem, id]);
    return resposta.affectedRows;
}


export async function SalvarCategoriaProduto (idProduto, idCategoria){

    const comando = 
    `
    insert into tb_produto_categoria (id_categoria, id_produto)
                            values (?, ?)
    `
    const [resposta] = await con.query(comando, [ idProduto, idCategoria]);


}
////////////////////////// Categoria ///////////////////////////////////////

                                                                                                   n

