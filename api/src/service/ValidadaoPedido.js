


export async function validarCartao(pagamento){

    if ( pagamento.nome === '' ) {
        throw new Error('O nome do Cartão é obrigatorio');
    }
    if ( pagamento.numero === 0 ) {
        throw new Error('O numero do Cartão é obrigatorio');
    }
    if ( pagamento.vencimento === '' ) {
        throw new Error('O data de vencimento é obrigatorio');
    }
    if ( pagamento.codSeguranca === '' ) {
        throw new Error('O codigo de segurança é obrigatorio');
    }
    if ( pagamento.parcelas === 0 ) {
        throw new Error('A quantidade de parcelas é obrigatorio');
    }
    if ( pagamento.formaPagamento === '' ) {
        throw new Error('A forma de pagamento é obrigatorio');
    }
}

export async function validarPix(pagamento){

    if ( pagamento.email === '' ) {
        throw new Error('O email é obrigatorio');
    }
    if ( pagamento.cpf === '' ) {
        throw new Error('O cpf é obrigatorio');
    }
}

export async function validarBoleto(pagamento){

    if ( pagamento.telefone >= 0 ) {
        throw new Error('O telefone é obrigatorio');
    }
    if ( pagamento.cod_boleto >= 0 ) {
        throw new Error('O codigo do boleto é obrigatorio');
    }
}