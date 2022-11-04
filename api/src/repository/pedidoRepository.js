import { con } from "./conection.js";


export async function NovoPedido(nvPedido){

    const comando = 
    `
        insert into tb_pedido( id_endereco, id_usuario, qtd_itens, dt_pedido, ds_status, vl_total, tp_pagamento)
                       values(?, ?, ?, ?, ?, ?, ?);
    `
    const [ infos ] = await con.query(comando, [ 
        
        nvPedido.idEndereco, 
        nvPedido.idUsuario, 
        nvPedido.itens,  
        nvPedido.data, 
        nvPedido.status, 
        nvPedido.vlTotal, 
        nvPedido.tpPagamento
    ]);
    return infos.insertId;
}   

export async function InserirPedidoItem(idPedido, idProduto, qtd, preco ){

    const comando = 
    `
        insert into tb_produto_pedido(id_produto, id_pedido, qtd_produtos, vl_produto)
		                       values(?, ?, ?, ?);
    `
    const [infos] = await con.query(comando, [idProduto, idPedido, qtd, preco]);
    return infos.affectedRows;

}


export async function InserirPagamentoCartao(idPedido, nvPagamento){

    const comando = 
    `
        insert into tb_pagamento_cartao(id_pedido, nm_cartao, nr_cartao, dt_vencimento, cod_seguranca, nr_parcelas, ds_forma_pagamento )
		                         values(?, ?, ?, ?, ?, ?, ?);
    `
    const [infos] = await con.query(comando, [

        idPedido,
        nvPagamento.nome,
        nvPagamento.numero,
        nvPagamento.vencimento,
        nvPagamento.codSeguranca,
        nvPagamento.parcelas,
        nvPagamento.formaPagamento

    ]);
    return infos.affectedRows;
}

export async function InserirPagamentoPix(idPedido, nvPagamento){

    const comando = 
    `
        insert into tb_pagamento_pix(id_pedido, ds_email, ds_cpf)
                              values(?, ?, ?);
    `
    const [infos] = await con.query(comando, [

        idPedido,
        nvPagamento.email,
        nvPagamento.cpf

    ]);
    return infos.affectedRows;
}