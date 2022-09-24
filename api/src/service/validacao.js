

export async function ValidarProduto(Cadastro){  
    if (!Cadastro.nome || Cadastro.nome === '' ) {
        throw new Error('Nome do produto obrigatorio');
    }
    if (!Cadastro.peso || Cadastro.peso <= 0 ) {
        throw new Error('O peso do produto é obrigatorio');
    }
    if (!Cadastro.preco || Cadastro.preco <= 0 ) {
        throw new Error('O valor do produto é obrigatorio');
    }
    if (!Cadastro.sinopse || Cadastro.sinopse === '') {
        throw new Error('Nome do produto obrigatorio');
    }
    if (!Cadastro.ingredientes || Cadastro.ingredientes === '') {
        throw new Error('Os ingredientes do produto obrigatorio');
    }
    if (!Cadastro.estoque || Cadastro.estoque <= 0) {
        throw new Error('A quantidade que tem no estoque do produto obrigatorio');
    }
    
    if (Cadastro.destaque === '' ) {
        throw new Error('È obrigatorio dizer se o produto está em destaque ou não');
    }
}


