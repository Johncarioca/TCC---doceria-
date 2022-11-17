import { con } from "./conection.js";

export async function NovoProduto(cadastro){

    const comando = 
    `
    insert into tb_produto(nm_produto, nr_peso ,nr_preco ,ds_sinopse ,ds_ingredientes ,nr_estoque ,bt_destaque,id_categoria )
                    values (? ,? ,? ,? ,? ,? ,? ,?)
    `
    const [resposta] = await con.query(comando, [cadastro.nome, cadastro.peso, cadastro.preco, cadastro.sinopse, cadastro.ingredientes, cadastro.estoque, cadastro.destaque,cadastro.categoria ]);
    return resposta.insertId;
}

export async function ImagemProduto(imagen, id){
    // console.log(Imagem, id);
    const comando =
    `
        update tb_produto
           set img_produto   = ?
        where id_produto    = ?;
    `
    const [resposta] = await con.query(comando, [imagen, id]);
    return resposta;
}



export async function ListarCategorias(){
    const comando =`
    select 
    id_categoria   as id,
    nm_categoria   as categoria
    from tb_categoria
    `
    const[resposta]= await con.query(comando);
    return resposta;
}

export async function DeletarProduto(idProduto){
    const comando=`
        delete from tb_produto
            where id_produto = ?
    `
    const [resp]=await con.query(comando,[idProduto])
    return resp.affectedRows;

}

