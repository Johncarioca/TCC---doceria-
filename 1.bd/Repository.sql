
/////////////////////////////// login Adm ///////////////////////////////
`
select    id_admin         id,
                  ds_email         email
             from tb_admin_login
            where ds_email         = ?
              and ds_senha         = ?
`

/////////////////////////////// login Usuario ///////////////////////////////
`
select    id_cliente         id,
                  ds_email         email
             from tb_cliente
            where ds_email         = ?
              and ds_senha         = ?
`
/////////////////////////////// tabela Produto ///////////////////////////////

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
    inner join tb_produto_categoria on tb_produto_categoria.id_produto = tb_produto.id_produto
    inner join tb_categoria on tb_categoria.id_categoria = tb_produto_categoria.id_categoria

`
/////////////////////////////// Novo Produto ///////////////////////////////

`
    select 
    id_categoria   as id,
    nm_categoria   as categoria
    from tb_categoria
`

`
    update tb_produto
    set img_produto   = ?
    where id_produto    = ?
`

`
    insert into tb_produto(nm_produto, nr_peso ,nr_preco ,ds_sinopse ,ds_ingredientes ,nr_estoque ,bt_destaque,id_categoria )
                    values (? ,? ,? ,? ,? ,? ,? ,?)
`




