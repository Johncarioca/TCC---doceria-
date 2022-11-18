
use paticeri;
show tables;


    select img_produto    as imagem,
           nm_produto     as nome,
           nr_estoque     as estoque,
           nr_preco       as preco,
           bt_destaque    as destaque
      from tb_produto
     where nm_produto like ?;
     
         select id_produto		as id,
           img_produto    as imagem,
           nm_produto     as nome,
           nr_estoque     as estoque,
           nr_preco       as preco,
           bt_destaque    as destaque
      from tb_produto
     where bt_destaque like '%1%';
     
               select id_produto		as id,
                 img_produto    	as imagem,
                 nm_produto     	as nome,
                 nr_estoque     	as estoque,
                 nr_preco       	as preco,
                 nm_categoria   	as categoria
            from tb_produto
      inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
           where nm_categoria like '%kits de festa%';
           
           
                       select id_produto		as id, 
                 img_produto    	as imagem,
                 nm_produto     	as nome,
                 nr_estoque     	as estoque,
                 nr_preco       	as preco,
                 nm_categoria   	as categoria
            from tb_produto
      inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
           where nm_categoria like '%salgado%';
           
                     select id_produto		as id, 
                 img_produto    	as imagem,
                 nm_produto     	as nome,
                 nr_estoque     	as estoque,
                 nr_preco       	as preco,
                 nm_categoria   	as categoria
            from tb_produto
      inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
           where nm_categoria like '%doce%';
           
                    select  id_produto		as id, 
                 img_produto    	as imagem,
                 nm_produto     	as nome,
                 nr_estoque     	as estoque,
                 nr_preco       	as preco,
                 nm_categoria   	as categoria
            from tb_produto
      inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
           where nm_categoria like '%bolo%';
           
           
                     select id_produto		as id,
                 img_produto    	as imagem,
                 nm_produto     	as nome,
                 nr_estoque     	as estoque,
                 nr_preco       	as preco,
                 nm_categoria   	as categoria
            from tb_produto
      inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
           where nm_categoria like '%torta%';
       
------------------------------------------------------ endereco  --------------------------------------------------------------------------------------------
           
insert into tb_endereco( id_usuario, ds_rua, ds_complemento, nm_estado, ds_referencia, ds_bairro, ds_cep, ds_cidade )
				 values( ?, ?, ?, ?, ?, ?, ?, ?);
                 
	   select id_endereco 			as id,
              ds_rua				as rua,
              ds_complemento 		as complemento,
              nm_estado 			as estado,
              ds_cidade 			as cidade,
              ds_referencia			as referencia,
              ds_bairro 			as bairro,
              ds_cep				as cep
          from tb_endereco
        where id_usuario = ?;
        
	  select id_endereco 		as idEnd,
             ds_rua				as rua          
        from tb_endereco
       where id_usuario = ?;

delete 
	   from tb_endereco
      where id_endereco     = ?;
      
------------------------------------------------------ tabela de Pedidos ------------------------------------------------------
      
			select tb_pedido.id_pedido       	as id,
                    nm_usuario			   		as nome,
                    ds_telefone     			as contato,
                    qtd_produtos      			as qtdItens,
                    vl_total        			as total,
                    ds_status       			as status,
                    dt_pedido       			as data,
                    tp_pagamento    			as pagamento
            from tb_produto_pedido
        inner join tb_usuario on tb_usuario.nm_usuario = tb_usuario.nm_usuario
        inner join tb_pedido on tb_produto_pedido.id_pedido = tb_pedido.id_pedido;


------------------------------------------------------ Login ADM  ------------------------------------------------------

        select    id_admin         id,
                  ds_email         email
             from tb_admin_login
            where ds_email         = ?
              and ds_senha         = ?;
              
              
insert into tb_admin_login (ds_email,ds_senha)
					values ("adm@gmail.com","1234");
              
------------------------------------------------------ Login Usuario  ------------------------------------------------------

		select  tb_usuario.id_usuario     as id,
	 	        nm_usuario       		  as nome
		   from tb_usuario
		  where ds_email = ?
		    and ds_senha =  md5(?);
            
    insert into tb_usuario( nm_usuario, ds_cpf, dt_nascimento, ds_telefone, ds_email, ds_senha)
                   values (? ,? ,? ,? ,?, md5(?)  );
                   
                   
		  update tb_usuario
            set  nm_usuario   		= ?,
				 ds_cpf			    = ?,
                 dt_nascimento 		= ?,
                 ds_telefone		= ?
		      where id_usuario   	= ? ;
              
              
			update tb_usuario
			   set ds_email			  = ?,
				   ds_senha			  = md5(?)
		      where id_usuario   = ? ;
              
              
                  update tb_usuario
					 set img_usuario   = ?
				   where id_usuario    = ?;
                   
				 select tb_usuario.id_usuario  		    as id,
                        img_usuario						as imagem,
                        ds_cpf     						as cpf,
                        ds_rua           				as rua,
                        nm_usuario       				as nome,
                        ds_telefone						as cell,
                        dt_nascimento    				as nascimento, 
                        ds_email         				as email
                   from tb_usuario
             inner join tb_endereco on tb_endereco.ds_rua = tb_endereco.ds_rua
                  where tb_usuario.id_usuario = ?;
                  
                  
------------------------------------------------------ 	Novo Produto  --------------------------------------------------------------------------------------------
                   
	 insert into tb_produto(nm_produto, nr_peso ,nr_preco ,ds_sinopse ,ds_ingredientes ,nr_estoque ,bt_destaque,id_categoria )
                    values (? ,? ,? ,? ,? ,? ,? ,?);
                    
	        update tb_produto
			   set img_produto   = ?
			 where id_produto    = ?;
             
		   select 
				id_categoria   as id,
				nm_categoria   as categoria
			from tb_categoria;
    
            delete from tb_produto
            where id_produto = ?;
            
               insert into tb_categoria(nm_categoria) values('Doces') ; 
		     insert into tb_categoria(nm_categoria) values('Salgado') ;
			insert into tb_categoria(nm_categoria) values('Kits') ;
			insert into tb_categoria(nm_categoria) values('Tortas') ;
			insert into tb_categoria(nm_categoria) values('Bolos') ; 
            
------------------------------------------------------ 	Pedido  --------------------------------------------------------------------------------------------


        insert into tb_pedido( id_endereco, id_usuario, qtd_itens, dt_pedido, ds_status, vl_total, tp_pagamento)
                       values(?, ?, ?, ?, ?, ?, ?);
                       
		 insert into tb_produto_pedido(id_produto, id_pedido, qtd_produtos, vl_produto)
		                        values(?, ?, ?, ?);
                                
		insert into tb_pagamento_cartao(id_pedido, nm_cartao, nr_cartao, dt_vencimento, cod_seguranca, nr_parcelas, ds_forma_pagamento )
		                         values(?, ?, ?, ?, ?, ?, ?);
                                 
                                 
		insert into tb_pagamento_pix(id_pedido, ds_email, ds_cpf)
                              values(?, ?, ?);
                              
	    insert into tb_pagamento_boleto(id_pedido, nr_telefone, nr_cod_boleto)
                                 values(?, ?, ?);
                                 
				 select tb_pedido.id_pedido     		as id,
                        img_produto  		as imagem,
                        qtd_itens 		    as itens,
                        vl_total 			as vlTotal,
                        ds_status 		    as status,
                        ds_rua			    as rua
                    from tb_pedido
            inner join tb_endereco on tb_endereco.ds_rua = tb_endereco.ds_rua
            inner join tb_produto on tb_produto.img_produto = tb_produto.img_produto
                    where tb_pedido.id_pedido = ?;



------------------------------------------------------ 	Produto  --------------------------------------------------------------------------------------------

	   select id_produto		as id, 
              img_produto    	as imagem,
              nm_produto     	as nome,
              nr_estoque     	as estoque,
              nr_preco       	as preco,
              ds_sinopse		as descricao,
              nr_peso			as peso,
              ds_ingredientes	as ingrediente
         from tb_produto
        where id_produto = ? ;
        
     update tb_produto 
        set nm_produto 			=?,
            nr_peso 			=?,
            ds_ingredientes 	     =?,
            nr_preco 			=?,
            nr_estoque 			=?,
            ds_sinopse 			=?,
            id_categoria 		=?,
            bt_destaque 		     =?
        where id_produto 		=?;
        
	delete img_produto 
	  from tb_produto where img_produto NOT IN (?);

      
		 select tb_produto.id_produto    as id,
                nm_produto               as nome,
                nr_preco                 as preco,
                nr_peso                  as peso,
                nr_estoque               as estoque,
                ds_sinopse               as sinopse,
                bt_destaque              as destaque,
                nm_categoria             as categoria
          from tb_produto
    inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria;
    
    
		 select tb_produto.id_produto    as id,
                nm_produto              as nome,
                nr_preco                as preco,
                nr_peso                 as peso,
                nr_estoque              as estoque,
                ds_sinopse              as sinopse,
                bt_destaque             as destaque,
                nm_categoria            as categoria
           from tb_produto
     inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
          where nm_produto like ?;
          
		select  id_produto              as id,
				nm_produto              as nome,
				id_categoria            as categoria,
				img_produto             as imagem,
				ds_ingredientes         as ingredientes,
				nr_preco                as preco,
				nr_peso                 as peso,
				nr_estoque              as estoque,
				ds_sinopse              as sinopse,
				bt_destaque             as destaque
		   from tb_produto
          where id_produto = ?;