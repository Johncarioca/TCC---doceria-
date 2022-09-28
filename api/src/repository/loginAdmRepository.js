import { con } from './conection.js'

export async function loginAdm (email, senha ){

    const comando = 
    `   select    id_admin         id,
                  ds_email         email
             from tb_admin_login
            where ds_email         = ?
              and ds_senha         = ?
    `
    const [linhas ] = await con.query(comando, [email,senha]);
    return linhas[0];

}
