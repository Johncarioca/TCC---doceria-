import storage  from 'local-storage';
import { useState } from 'react';
// import { DetalhesProdutoId } from '../../../api/usuario/produtoAPI';
import CabeçarioLogin from '../../../components/cabecalhoLogin';


import './index.scss'



export default function PagamentoUser(){



    const [itens, setItens] = useState([]);
    // const vlTotal = Valortotal() ;

    // async function CarregarItensCarrinho(){

    //     let carrinho = storage('carrinho');
    //     if (carrinho) {

    //         for(let produto of carrinho){
    //             const j = await DetalhesProdutoId(produto.id);
    //             const qtdIt = produto.qtd
    //             // console.log(j);
    //         }

            
    //         setItens(temporario);

    //     }
        
    // }
    // function Valortotal() {
    //     let total = 0 ;
    //     for(let item of itens){
    //         total = total + item.produto.preco * item.qtd;

    //     }
    //     return total;
    // }

    function CadastraPedido(){

        // let valor = vlTotal;
        
        let pedido = {
            idEndereco:1,
            itens: 2,
            status: "confirmando pagamento", 
            vlTotal: 120, 
            tpPagamento: "Cartão",
            cartao: {
                
                nome:"jonatas quintanilha",
                numero:"5555 4444 3333 2222",
                vencimento: "out/2030",
                codSeguranca: "55643",
                parcelas: 2 ,
                formaPagamento:"Débito" 
                
            },
            produtos: [
                {
                    "id":1 ,
                    "qtd": 3
                },
                {
                    "id":111 ,
                    "qtd": 5
                }
            ]   
        }
    }

    return(
        <main className="telaEndereco">
            <div>
                <CabeçarioLogin/>
            </div>
            <section className="sectionPrincipal">

                <div className="rosaEscura">

                    <div className="textImage">

                        <div className="Minhas">

                            <div >
                            
                                <img src="../assets/image/carrinhoPreto.png" alt="" />
                            
                            </div>
                            
                            <p> Minhas Compras </p>
    
                        </div>
                        <div className="Minhas">

                            <div >
                            
                                <img src="../assets/image/IconeCardapio.png" alt="" />
                            
                            </div>
                            <p>Cardápio</p>
    
                        </div>


                    </div>
                    
                </div>

                <div className="rosaCLar">

                    <div className="inf">

                        <div className="ph">
                            <h2 className="pag"> Pagamento </h2>
                            <p className="grc">
                                Olá! Bem-vindo a ultima parte antes de finalizamos sua compra. 
                                Insira os dados de acordo como e pedido abaixo
                            </p>
                        </div>

                        <section className="inputsPag">

                        
                            <div className="tpPagamento">

                                <div className=" imgTp">
                                    <div className='imgCartão'>
                                        <img className="cartão" src="../assets/image/iconCartão.png" alt="" />
                                    </div>
                                    <div className="tpTexte">
                                        <p>Cartão</p>
                                    </div>
                                </div>
                                
                                <div className=" imgTp">
                                    <div className='imgPix'>
                                        <img className="Pix" src="../assets/image/pix.png" alt="" />
                                    </div>
                                    <div className="tpTexte">
                                        <p>Pix</p>
                                    </div>
                                </div>

                                <div className=" imgTp">
                                    <div className='img'>
                                        <img className="i" src="../assets/image/boleto.png" alt="" />
                                    </div>
                                    <div className="tpTexte">
                                        <p>Boleto</p>
                                    </div>
                                </div>
                            
                            </div>
                            <div className='inputsParagrafo'>
                                
                                <div className="SeisInputs">

                                    <div className="tresInputs">
                                        <div className="li">
                                            <label> Nº do cartão</label>
                                            <input placeholder='Rua...' type="text" />
                                        </div>
                                        <div className="li">
                                            <label> Nome do cartão</label>
                                            <input placeholder='Rua...' type="text" />
                                        </div>
                                        <div className="li">
                                            <label>CPF ou CNPJ </label>
                                            <input placeholder='Rua...' type="text" />
                                        </div>
                                    </div>    

                                    <div className="tresInputs">
                                        <div className="li">
                                            <label> Código de segurança</label>
                                            <input placeholder='Rua...' type="text" />
                                        </div>
                                        <div className="li">
                                            <label> Parcelas</label>
                                            <select>
                                                <option value="" key=""></option>
                                            </select>
                                        </div>
                                        <div className="li">
                                            <label>Formas de Pagamento</label>
                                            <select>
                                                <option value="" key=""> Débito </option>
                                                <option value="" key=""> Crédito </option>
                                            </select>
                                        </div>
                                    </div>     
                                </div>

                            </div>
                            
                            
                        </section>

                        <div className="infos">

                            <div className="botão">
                                <button> Finalizar</button>
                            </div>

                        </div>

                    </div>
                    
                </div>

                <div className="rosaEscu">
                    
                </div>

            </section>

        </main>
    );
}