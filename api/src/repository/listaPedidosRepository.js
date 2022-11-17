import { con } from "./conection.js";

export async function ListarPedidos(){
    const comando=
    `
            select tb_pedido.id_pedido       	as id,
                    nm_usuario			   		as nome,
                    ds_telefone     			as contato,
                    qtd_produtos      			as qtdItens,
                    vl_total        			as total,
                    ds_status       			as status,
                    dt_pedido       			as data,
                    tp_pagamento    			as pagamento
            from tb_produto_pedido
        inner join tb_usuario on tb_usuario.nm_usuario = tb_usuario.nm_usuario
        inner join tb_pedido on tb_produto_pedido.id_pedido = tb_pedido.id_pedido;
    `
    const [resp]= await con.query(comando);
    return resp;
}   