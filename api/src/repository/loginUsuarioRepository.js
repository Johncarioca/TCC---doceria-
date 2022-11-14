import { con } from './conection.js'

export async function loginUsuario(email, senha) {
  const comando =
    `   
    select  tb_usuario.id_usuario     as id,
		        nm_usuario       		  as nome
		 from tb_usuario
		where ds_email = ?
		  and ds_senha =  md5(?);
  `
  const [registro] = await con.query(comando, [email, senha]);
  return registro[0];
}


export async function CadastroUsuar(cliente) {
  const comando =
    `
    insert into tb_usuario( nm_usuario, ds_cpf, dt_nascimento, ds_telefone, ds_email, ds_senha)
                   values (? ,? ,? ,? ,?, md5(?)  );
    `
  const [registro] = await con.query(comando, [cliente.nome, cliente.cpf, cliente.nascimento, cliente.telefone, cliente.email, cliente.senha]);
  cliente.id = registro.insertId;
  return cliente;
}


export async function AlterarCadsUsuar(id, cliente) {
  const comando =
    `
      update tb_usuario
            set  nm_usuario   	= ?,
                ds_cpf			    = ?,
                dt_nascimento 	= ?,
                ds_telefone		  = ?
		      where id_usuario   = ? ;
    `
  const [registro] = await con.query(comando, [  
                                                cliente.nome, 
                                                cliente.cpf, 
                                                cliente.nascimento, 
                                                cliente.telefone,
                                                id 
                                              ]);
  cliente.id = registro.insertId;
  return cliente;
}


export async function AlterarESUsuar(id, cliente) {
  const comando =
    `
      update tb_usuario
            set ds_email			  = ?,
                ds_senha			  = md5(?)
		      where id_usuario   = ? ;
    `
  const [registro] = await con.query(comando, [ 
                                                cliente.email, 
                                                cliente.senha,
                                                id 
                                              ]);
  cliente.id = registro.insertId;
  return cliente;
}



export async function CadastroImagemUser(imangen, id) {
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


export async function PerfilUser(idUser) {
  const comando =
    `   
      select tb_usuario.id_usuario  		    as id,
                        img_usuario					as imagem,
                        ds_cpf     					as cpf,
                        ds_rua           		as rua,
                        nm_usuario       		as nome,
                        ds_telefone					as cell,
                        dt_nascimento    		as nascimento, 
                        ds_email         		as email
                   from tb_usuario
             inner join tb_endereco on tb_endereco.ds_rua = tb_endereco.ds_rua
                  where tb_usuario.id_usuario = 1;
  `
  const [registro] = await con.query(comando, [idUser]);
  return registro[0];
}

