import { con } from "./conection.js";

export async function DetalhesProdutoId(id){
    const comando = 
    `   
       select id_produto		as id, 
              img_produto    	as imagem,
              nm_produto     	as nome,
              nr_estoque     	as estoque,
              nr_preco       	as preco,
              ds_sinopse		as descricao,
              nr_peso			as peso,
              ds_ingredientes	as ingrediente
         from tb_produto
        where id_produto = ? ;

    `
    const [registro] = await con.query(comando, [id])
    return registro[0];    
}

export async function AlterarProduto(id,produto){
    const comando=`
    update tb_produto 
        set nm_produto =?,
            nr_peso =?,
            ds_ingredientes =?,
            nr_preco =?,
            nr_estoque =?,
            ds_descricao =?,
            id_categoria =?,
            bt_destaque =?,
            ds_peso =?
        where id_produto = ?
    `
    const [resp]=await con.query(comando,[
        produto.nome,
        produto.peso,
        produto.ingredientes,
        produto.preco,
        produto.estoque,
        produto.sinopse,
        produto.categoria,
        produto.destaque,
        produto.peso,
        id
    ])
    return resp.affectedRows;

}

export async function RemoverImagemId(imagem){
    const comando=`
    delete img_produto 
    from tb_produto where img_produto NOT IN (?)
    `
    const [resp]=await con.query(comando,[imagem])
    return resp.affectedRows;
}
