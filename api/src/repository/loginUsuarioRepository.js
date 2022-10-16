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
    insert into tb_usuario( nm_usuario, ds_cpf, dt_nascimento, ds_telefone)
                   values (? ,? ,? ,? );
    `
  const [registro] = await con.query(comando, [cliente.nome, cliente.cpf, cliente.nascimento, cliente.telefone]);
  cliente.id = registro.insertId;
  return cliente;
}


export async function CadastroImagemUser(imangen, id){
  // console.log(Imagem, id);
  const comando =
  `
    update tb_usuario
       set img_usuario   = ?
     where id_usuario    = ? 
  `
  const [resposta] = await con.query(comando, [imangen, id]);
  return resposta;
}