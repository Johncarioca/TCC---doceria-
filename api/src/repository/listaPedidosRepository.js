import { con } from "./conection.js";

export async function ListarPedidos(){
    const comando=`
    select 
    tb_pedido.id_pedido       as pedido,
    tb_usuario.id_usuario      as cliente,
    ds_telefone     as contato,
    dt_pedido       as data,
    ds_status       as status,
    tp_pagamento    as pagamento,
    qtd_produtos      as  qtdItens,
    vl_total        as total
    from tb_produto_pedido
    inner join tb_usuario on tb_usuario.id_usuario = tb_usuario.id_usuario
    inner join tb_pedido on tb_produto_pedido.id_pedido = tb_pedido.id_pedido;
    `
    const [resp]=await con.query(comando);
    return resp;
}