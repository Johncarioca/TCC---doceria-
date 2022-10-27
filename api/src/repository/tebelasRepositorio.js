import { con } from "./conection.js";

///////////////////// tebela produto ///////////////////////

export async function listaProduto() {

    const comando =
        `
        select tb_produto.id_produto    as id,
                nm_produto              as nome,
                nr_preco                as preco,
                nr_peso                 as peso,
                nr_estoque              as estoque,
                ds_sinopse              as sinopse,
                bt_destaque             as destaque,
                nm_categoria            as categoria
          from tb_produto
    inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria;
`
    const [registro] = await con.query(comando);
    return registro;
}


export async function BuscarNome(nome) {

    const comando =
    `
         select tb_produto.id_produto    as id,
                nm_produto              as nome,
                nr_preco                as preco,
                nr_peso                 as peso,
                nr_estoque              as estoque,
                ds_sinopse              as sinopse,
                bt_destaque             as destaque,
                nm_categoria            as categoria
           from tb_produto
     inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
          where nm_produto like ?
    `
    const [registro] = await con.query(comando, [`%${nome}%`]);
    return registro;
} 

export async function BuscarProdutoId(idProduto){
    const comando=`
    select  
    id_produto              as id,
    nm_produto              as nome,
    id_categoria            as categoria,
    img_produto             as imagem,
    ds_ingredientes         as ingredientes,
    nr_preco                as preco,
    nr_peso                 as peso,
    nr_estoque              as estoque,
    ds_sinopse              as sinopse,
    bt_destaque             as destaque
    from tb_produto
    where id_produto = ?  `

    const [registros] = await con.query(comando ,[idProduto]);
    return registros[0];
}

export async function RemoverImagemId(imagem){
    const comando=`
    delete img_produto 
    from tb_produto where img_produto NOT IN (?)
    `
}
