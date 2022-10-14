import { con } from './conection.js'

export async function loginUsuario(email, senha) {
  const comando =
    `   
    select  tb_usuario.id_usuario		  id,
	          nm_usuario 		    			  nome
       from tb_usuario
       inner join tb_login_usuario on tb_login_usuario.id_usuario = tb_usuario.id_usuario
    where ds_email = ?
	    and ds_senha = md5(?)
  `
  const [registro] = await con.query(comando, [email, senha]);
  return registro[0];
}




export async function CadastroUsuar(cliente) {

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
  const [registro] = await con.query(comando, [cliente.nome, cliente.email, cliente.senha, cliente.cpf, cliente.nascimento, cliente.telefone, cliente.ConfirSenha]);
  cliente.id = registro.insertId;
  return cliente;
}
