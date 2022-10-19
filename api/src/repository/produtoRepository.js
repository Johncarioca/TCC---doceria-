import { con } from "./conection.js";

export async function DetalhesProdutoId(id){
    const comando = 
    `   
       select id_produto		as id, 
              img_produto    	as imagem,
              nm_produto     	as nome,
              nr_estoque     	as estoque,
              nr_preco       	as preco,
              ds_sinopse		as descriçao,
              nr_peso			as peso,
              ds_ingredientes	as ingrediente
         from tb_produto
        where id_produto = ? ;

    `
    const [registro] = await con.query(comando, [id])
    return registro[0];    
}