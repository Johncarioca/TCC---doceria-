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

export async function InserirPagamentoPix(idPedido, nvPagamentoPix){

    const comando = 
    `
        insert into tb_pagamento_pix(id_pedido, ds_email, ds_cpf)
                              values(?, ?, ?);
    `
    const [infos] = await con.query(comando, [

        idPedido,
        nvPagamentoPix.email,
        nvPagamentoPix.cpf

    ]);
    return infos.affectedRows;
}

export async function InserirPagamentoBoleto(idPedido, nvPagamentoBoleto){

    const comando = 
    `
        insert into tb_pagamento_boleto(id_pedido, nr_telefone, nr_cod_boleto)
                                 values(?, ?, ?);
    `
    const [infos] = await con.query(comando, [

        idPedido,
        nvPagamentoBoleto.telefone,
        nvPagamentoBoleto.cod_boleto

    ]);
    return infos.affectedRows;
}

export async function CardPedidos() {
    const comando =
    `   
       select tb_pedido.id_pedido     		as id,
                        img_produto  		as imagem,
                        qtd_itens 		as itens,
                        vl_total 			as itens,
                        ds_status 		as status,
                        ds_rua			as rua
                    from tb_pedido
            inner join tb_endereco on tb_endereco.ds_rua = tb_endereco.ds_rua
            inner join tb_produto on tb_produto.img_produto = tb_produto.img_produto
                    where tb_pedido.id_pedido = 1;
    `
    const [registro] = await con.query(comando);
    return registro;
}