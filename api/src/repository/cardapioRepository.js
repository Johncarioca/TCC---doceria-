import { con } from "./conection.js";

//////////////////// cardapio Geral /////////////////////

export async function ProdutosDestaque(){

   const comando =
   `
    select img_produto,
           nm_produto,
           nr_estoque,
           nr_preco,
           bt_destaque
      from tb_produto
     where bt_destaque like '%1%';
   `
   const [registro] = await con.query(comando);
   return registro;
} 