import { con } from './conection.js'

export async function loginUsuario (email, senha ){

    const comando = 
    `   select    id_cliente         id,
                  ds_email         email
             from tb_cliente
            where ds_email         = ?
              and ds_senha         = ?
    `
    const [linhas ] = await con.query(comando, [email,senha]);
    return linhas[0];
}

export async function CadastroUsuar(cliente){

  
  const comando = 
  `
    insert into tb_cliente(nm_cliente, 
                           ds_email, 
                           ds_senha, 
                           ds_cpf, 
                           dt_nascimento, 
                           nr_telefone, 
                           ds_ConfirSenha)
                   values (? ,? ,? ,? ,? ,? ,? );
  `
  const [registro] = con.query(comando,[cliente.nome, 
                                        cliente.email,
                                        cliente.senha,
                                        cliente.cpf,
                                        cliente.nascimento,
                                        cliente.telefone,
                                        cliente.ConfirSenha
                                      ]);
  cliente.id = registro.isertid;
  return cliente;
}
