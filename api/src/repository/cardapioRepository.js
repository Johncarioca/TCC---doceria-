import { con } from "./conection.js";

//////////////////// cardapio Geral /////////////////////


export async function BuscarPeloNome(nome) {

   const comando =
      `
    select img_produto    as imagem,
           nm_produto     as nome,
           nr_estoque     as estoque,
           nr_preco       as preco,
           bt_destaque    as destaque
      from tb_produto
     where nm_produto like ?
   `
   const [registro] = await con.query(comando, [`%${nome}%`]);
   return registro;
}

export async function ProdutosDestaque() {

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

export async function CategoriaKits() {

   const comando =
   `
     select img_produto    	as imagem,
                 nm_produto     	as nome,
                 nr_estoque     	as estoque,
                 nr_preco       	as preco,
                 nm_categoria   	as categoria
            from tb_produto
      inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
           where nm_categoria like '%kits de festa%';
   `
   const [registro] = await con.query(comando);
   return registro;
}

export async function CategoriaSalgados() {
   const comando =
   `
     select img_produto    	as imagem,
                 nm_produto     	as nome,
                 nr_estoque     	as estoque,
                 nr_preco       	as preco,
                 nm_categoria   	as categoria
            from tb_produto
      inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
           where nm_categoria like '%salgado%';
   `

   const [registro] = await con.query(comando);
   return registro;
}

export async function CategoriaDoces() {

   const comando =
   `
     select img_produto    	as imagem,
                 nm_produto     	as nome,
                 nr_estoque     	as estoque,
                 nr_preco       	as preco,
                 nm_categoria   	as categoria
            from tb_produto
      inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
           where nm_categoria like '%doce%';
   `
   const [registro] = await con.query(comando);
   return registro;
}


export async function CategoriaBolo() {

   const comando =
   `
     select img_produto    	as imagem,
                 nm_produto     	as nome,
                 nr_estoque     	as estoque,
                 nr_preco       	as preco,
                 nm_categoria   	as categoria
            from tb_produto
      inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
           where nm_categoria like '%bolo%';
   `
   const [registro] = await con.query(comando);
   return registro;
}

export async function CategoriaTortas() {

   const comando =
   `
          select img_produto    	as imagem,
                 nm_produto     	as nome,
                 nr_estoque     	as estoque,
                 nr_preco       	as preco,
                 nm_categoria   	as categoria
            from tb_produto
      inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
           where nm_categoria like '%torta%';
   `
   const [registro] = await con.query(comando);
   return registro;
}