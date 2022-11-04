use paticeri;
show tables;

select * from tb_pedido;
select * from tb_pagamento_cartao;
select * from tb_produto_pedido;


select * from tb_produto;
select * from tb_endereco;
select * from tb_categoria;
select * from tb_usuario;
select * from tb_login_usuario;
select * from tb_admin_login;


insert into tb_pagamento_pix(id_pedido, ds_email, ds_cpf)
		                 values(4,"aaa", "bbb");

select id_endereco 			as id,
	   ds_rua				as rua,
       ds_complemento 		as complemento,
       nm_estado 			as estado,
       ds_cidade 			as cidade,
       ds_referencia		as referencia,
       ds_bairro 			as bairro,
       ds_cep				as cep
  from tb_endereco
 where id_usuario = 1 
   and id_endereco = 2;


insert into tb_pedido( id_endereco, id_usuario, qtd_itens, dt_pedido, vl_total, tp_pagamento)
				 values(?, ?, ?, ?, ?, ?);

insert into tb_produto_pedido(id_produto, id_pedido, qtd_produtos, vl_pedido)
		       values(?, ?, ?, ?);
               
insert into tb_pagamento_cartao(id_pedido, nm_cartao, nr_cartao, dt_vencimento, cod_seguranca, nr_parcelas, ds_forma_pagamento )
		                 values(?, ?, ?, ?, ?, ?, ?);



insert into tb_endereco( id_usuario, ds_rua, ds_complemento, nm_estado, ds_referencia, ds_bairro,ds_cep ,ds_cidade )
				 values(2, 'Rua A', 'bloco 3','SP', 'CASA', 'Interlago', '1111-111', 'Rio de janeiro');

select id_endereco 			as id,
	   ds_rua				as rua,
       ds_complemento 		as complemento,
       nm_estado 			as estado,
       ds_cidade 			as cidade,
       ds_referencia		as referencia,
       ds_bairro 			as bairro,
       ds_cep				as cep
  from tb_endereco
 where id_usuario = 2;
	   


	select id_produto		as id, 
		   nm_produto     	as nome,
		   img_produto   	as imagem,
           ds_ingredientes	as ingrediente,
           ds_sinopse		as descriçao,
           nr_peso			as peso,
           nr_preco       	as preco,
           nr_estoque     	as estoque
      from tb_produto
     where id_produto like  135;


select id_produto		as id, 
		   img_produto    	as imagem,
           nm_produto     	as nome,
           nr_estoque     	as estoque,
           nr_preco       	as preco,
           ds_sinopse		as descriçao,
           nr_peso			as peso,
           ds_ingredientes	as ingrediente
      from tb_produto
     where id_produto = 130;




update tb_usuario
         set img_usuario   = ?
      where id_usuario    = ? ;

insert into tb_usuario( nm_usuario, ds_cpf, dt_nascimento, ds_telefone)
                    values ("quintanilha " ,"51","2004-05-10","()");




select  tb_usuario.id_usuario		  id,
	    nm_usuario 					  nome
   from tb_usuario
   inner join tb_login_usuario on tb_login_usuario.id_usuario = tb_usuario.id_usuario
  where ds_email = 'john@gmail.com'
	and ds_senha = md5('123');
  





select md5('123');

	select id_produto		as id, 
		   img_produto    	as imagem,
           nm_produto     	as nome,
           nr_estoque     	as estoque,
           nr_preco       	as preco,
           nm_categoria   	as categoria
      from tb_produto
inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
     where nm_categoria like '%Kits de festa%';





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
          where nm_produto like '%t%';
          
          
----- login Adm -----

		select    id_admin         id,
                  ds_email         email
             from tb_admin_login
            where ds_email         = ?
              and ds_senha         = ?;


	---- login Usuario -----

		select    id_cliente         id,
                  ds_email         email
             from tb_cliente
            where ds_email         = 'john@gmail.com'
              and ds_senha         = "1234";
              




    select 
    id_categoria   as id,
    nm_categoria   as categoria
    from tb_categoria;
    
    ----- ADICIONAR IMG -----

    update tb_produto
    set img_produto   = ?
    where id_produto    = ?; 


    insert into tb_produto(nm_produto, nr_peso ,nr_preco ,ds_sinopse ,ds_ingredientes ,nr_estoque ,bt_destaque,id_categoria )
                    values (? ,? ,? ,? ,? ,? ,? ,?);




          



/*login do cliente*/
insert into tb_admin_login (ds_email,ds_senha)
            values ("adm@gmail.com","1234");


/*inserir nova categoria*/
insert into tbm_categoria(nm_categoria)
                values(" ? ");

/*inserir novo produto*/
insert into tb_produto(id_produto, nm_produto ,nr_peso ,nr_preco ,ds_produto ,ds_ingredientes ,nr_estoque ,bt_destaque )
            values (" ? "," ? ", ? , ? , ? ," ? "," ? ", ? , ?);


/*cadastro de clientes*/
insert into tb_cliente(nm_cliente, ds_email, ds_senha )
            values ("cliente1","cliente@gmail.com", "1234");

      