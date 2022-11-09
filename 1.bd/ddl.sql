create database paticeri ;
use paticeri;
show tables ;
drop tables tb_pedido;
drop tables tb_pagamento_cartao;
drop tables tb_produto_pedido;

drop tables tb_login_usuario;

select * from tb_produto;
select * from tb_categoria;
select * from tb_usuario;
select * from tb_admin_login;




/*tabela de login do adm*/
create table tb_admin_login (
id_admin             int primary key auto_increment,
ds_email             varchar(200),
ds_senha             varchar(100)
);

/*tabela da categoria*/
create table tb_categoria(
id_categoria         int primary key auto_increment,
nm_categoria         varchar(100)
);

/*tabala de produto*/
create table tb_produto(
    id_produto           int primary key auto_increment,
    id_categoria         int,
    nm_produto           varchar(300),
    img_produto          varchar(500),
    nr_peso              decimal(5,3),
    nr_preco             decimal(5,2),
    ds_sinopse           varchar(300),
    ds_ingredientes      varchar(300),
    nr_estoque           int,
    bt_destaque          boolean,   
foreign key (id_categoria) references tb_categoria(id_categoria)
);

/*tabela de clientes */
create table tb_usuario(
id_usuario           int primary key auto_increment,
nm_usuario           varchar(500),
img_usuario          varchar(500),
ds_cpf               varchar(14),
dt_nascimento        date,
ds_telefone          varchar(40)
);


create table tb_login_usuario(
id_login_usuario  			 int primary key auto_increment,
id_usuario					 int,
ds_email					 varchar(800),
ds_senha					 varchar(800),
foreign key (id_usuario)  references tb_usuario(id_usuario)
);

create table tb_endereco(
	id_endereco 		int primary key auto_increment,
    id_usuario 			                  int,
    ds_rua                                varchar(500),
	ds_referencia         		     	  varchar(500),
	ds_complemento         		     	  varchar(500),
	nm_estado                     		  varchar(100),
	ds_cidade                             varchar(100),
	ds_bairro                             varchar(100),
    ds_cep	                              varchar(100),
	foreign key (id_usuario) references tb_usuario(id_usuario)
);

create table tb_pedido(
id_pedido             int primary key auto_increment,
id_endereco           int,
id_usuario			  int,
qtd_itens             int,
dt_pedido             datetime,
ds_status             varchar(100),
vl_total              decimal(15,2),
tp_pagamento          varchar(100),
foreign key (id_usuario) references tb_usuario(id_usuario),
foreign key (id_endereco) references tb_endereco(id_endereco)
);

create table tb_produto_pedido(
id_produto_pedido   int primary key auto_increment,
id_produto          int,
id_pedido           int,
qtd_produtos        int,
vl_produto          decimal(15,2),
foreign key (id_produto) references tb_produto(id_produto),
foreign key (id_pedido) references tb_pedido(id_pedido)
);


create table tb_pagamento_cartao (
	id_pagamento_cartao	int primary key auto_increment,
    id_pedido			int,
    nm_cartao			varchar(200),
    nr_cartao			varchar(200),
    dt_vencimento		varchar(200),
    cod_seguranca		varchar(200),
    nr_parcelas			int,
    ds_forma_pagamento	varchar(200),
    foreign key (id_pedido) references tb_pedido (id_pedido)
);

create table tb_pagamento_pix (
	id_pagamento_pix	int primary key auto_increment,
    id_pedido			int,
    ds_email            varchar(100),
    ds_cpf            	varchar(15),
    foreign key (id_pedido) references tb_pedido (id_pedido)
);

create table tb_pagamento_boleto (
	id_pagamento_boleto	int primary key auto_increment,
    id_pedido		       	int,
    nr_telefone           decimal(15),
    nr_cod_boleto         decimal(15),
    foreign key (id_pedido) references tb_pedido (id_pedido)
);