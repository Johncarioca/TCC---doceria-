import { con } from "./conection.js";

//////////////////// cardapio Geral /////////////////////

export async function ProdutosDestaque(){

   const comando =
   `
    select img_produto    as imagem,
           nm_produto     as nome,
           nr_estoque     as estoque,
           nr_preco       as preco,
           bt_destaque    as destaque
      from tb_produto
     where bt_destaque like '%1%';
   `
   const [registro] = await con.query(comando);
   return registro;
} 