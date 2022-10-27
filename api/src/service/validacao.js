

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
        throw new Error('Descrição do produto obrigatorio');
    }
    if (!Cadastro.ingredientes || Cadastro.ingredientes === '') {
        throw new Error('Os ingredientes do produto obrigatorio');
    }
    if (!Cadastro.estoque || Cadastro.estoque <= 0) {
        throw new Error('A quantidade de produtos no estoque é obrigatorio');
    }
     if (!Cadastro.categoria || Cadastro.categoria <= 0) {
        throw new Error('A categoria é obrigatoria');
    }
    
    if (Cadastro.destaque === '' ) {
        throw new Error('È obrigatorio dizer se o produto está em destaque ou não');
    }
   
}



export async function ValidarCadastro(cliente){  
    if (!cliente.nome || cliente.nome === '' ) {
        throw new Error('O nome é obrigatorio');
    }
    if (!cliente.cpf || cliente.cpf <= 0 ) {
        throw new Error('O cpf do é obrigatorio');
    }
    if (!cliente.nascimento || cliente.nascimento <= 0 ) {
        throw new Error('A data de nascimento é obrigatorio');
    }
    if (!cliente.cpf || cliente.cpf <= 0 ) {
        throw new Error('O cpf do é obrigatorio');
    }
    if (!cliente.telefone || cliente.telefone <= 0 ) {
        throw new Error('O telefone é obrigatorio');
    }
}


export async function ValidarCadastroEndereco(endereco){  
    if (!endereco.rua || endereco.rua === '' ) {
        throw new Error('O nome da rua é obrigatorio');
    }
    if (!endereco.estado || endereco.estado === '' ) {
        throw new Error('O nome do estado é obrigatorio');
    }
    if (!endereco.referencia || endereco.referencia === '' ) {
        throw new Error('A referencia é obrigatorio');
    }
    if (!endereco.bairro || endereco.bairro === '' ) {
        throw new Error('O nome do bairro é obrigatorio');
    }
    if (!endereco.cep || endereco.cep === '' ) {
        throw new Error('O CEP é obrigatorio');
    }
    // if (!endereco.cidade || endereco.cidade === '' ) {
    //     throw new Error('O nome da cidade é obrigatorio');
    // }
}