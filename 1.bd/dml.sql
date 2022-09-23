use paticeri;


--- login do adm  
select    id_admin         id,
                  ds_email         email
             from tb_admin_login
            where ds_email         = "adm@gmail.com"
              and ds_senha         = "1234";


insert into tb_admin_login (ds_email,ds_senha) 
            values ("adm@gmail.com","1234");
            

/*inserir nova categoria*/
insert into tbm_categoria(nm_categoria)
                values(" ? ");

/*inserir novo produto*/
insert into tb_produto(id_produto, nm_produto ,nr_peso ,nr_preco ,ds_produto ,ds_ingredientes ,nr_estoque ,bt_destaque )
            values (" ? "," ? ", ? , ? , ? ," ? "," ? ", ? , ?);

/*cadastro de clientes*/
insert into tb_cliente(nm_cliente,img_cliente,ds_cpf,dt_nascimento,nr_telefone)
            values (" ? "," ? "," ? ", ? , " ? ");

/*login do cliente*/
insert into tb_login (id_cliente,ds_email,ds_senha)
            values( ? ," ? "," ? ");

/*adicionar novo pedido */
insert into tb_pedido(id_cliente ,ds_contato ,qtd_produtos ,vl_total )
            values ( ? ," ? ", ? , ? );
        /*eu acho q o resto dos valores dessa tabela são alterados/adicionados posteriormente por um adm*/

