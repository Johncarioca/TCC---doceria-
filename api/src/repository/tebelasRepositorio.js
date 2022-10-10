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