

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
    if (!cliente.email || cliente.email === '' ) {
        throw new Error('A email é obrigatorio');
    }
    if (!cliente.senha || cliente.senha === '' ) {
        throw new Error('A senha é obrigatorio');
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
    if (!cliente.ConfirSenha || cliente.ConfirSenha === '' ) {
        throw new Error('A confirmação senha é obrigatorio');
    }
}