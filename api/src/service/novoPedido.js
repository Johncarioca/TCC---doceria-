import randomString from 'randomstring'


export function CriarNotaFiscal(){

    return randomString.generate(11);
}

export function CriarNovoPedido( idUsuario, info){
    let agora = new Date();

    return{
        idEndereco: info.idEndereco, 
        idUsuario: idUsuario, 
        itens: info.itens,  
        data: agora, 
        status: info.status, 
        vlTotal: info.vlTotal, 
        tpPagamento: info.tpPagamento 
    };
}