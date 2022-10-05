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
