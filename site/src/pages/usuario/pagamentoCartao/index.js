import storage  from 'local-storage';
import { useEffect, useState } from 'react';
import {useNavigate}  from 'react-router-dom';
import { toast } from 'react-toastify';
import { EnderecoId, ListarEnderecoId } from '../../../api/usuario/enderecoAPI.js';
import { SalvarNovoPedido } from '../../../api/usuario/pagamentoAPI.js';
import { DetalhesProdutoId } from '../../../api/usuario/produtoAPI.js';
import CabeçarioLogin from '../../../components/cabecalhoLogin';
import { idEndereco } from '../services/funcoesEntrePag.js';



import './index.scss'


export default function PagamentoUser(){

    const ender = idEndereco();
    const [idEnder, setidEnder ] = useState();


    const [Numero, setNumero] = useState('');
    const [Nome, setNome] = useState('');
    // const [CNPJ, setCNPJ] = useState('');
    const [codSeguranca, setcodSeguranca] = useState('');
    const [Parcelas, setParcelas] = useState('');
    const [FormaPag, setFormaPag] = useState('');
    const [Vencimento, setVencimento] = useState('');


    const [itens, setItens] = useState([]);
    const vlTotal = Valortotal(0) ;
    const QTD = ItensQtd(0);   

    const Navigate = useNavigate();

    async function CarregarItensCarrinho(){

        let carrinho = storage('carrinho');
        

        if (carrinho) {

            let temporario = [];

            for(let produto of carrinho){
                const j = await DetalhesProdutoId(produto.id);
                // console.log(j);

                temporario.push({
                    produto: j,
                    qtd: produto.qtd
                });
            }
            setItens(temporario);
            
        }
        
    }

    function ItensQtd() {
        return itens.length
        
    }

    function Valortotal() {
        let total = 0 ;
        for(let item of itens){
            total = total + item.produto.preco * item.qtd;

        }
        return total;
    }
    async function buscarIdEndereco(){
        let id = storage('Cliente-logado').id;
        
        
        const ID = await EnderecoId(id);

        

    }
    

    useEffect(() => {
        CarregarItensCarrinho();
        Valortotal();
        buscarIdEndereco();
    }, [])

    async function CadastraPedido(){

        try {
            let Produtos = storage('carrinho');
            let id = storage('Cliente-logado').id;

            let pedido = {
                // idEndereco:idEnder,
                itens: QTD,
                status: "confirmando pagamento", 
                vlTotal: vlTotal, 
                // tpPagamento: "Cartão",
                cartao: {
                    
                    nome:Nome,
                    numero:Numero,
                    vencimento: Vencimento,
                    codSeguranca: codSeguranca,
                    parcelas: Parcelas ,
                    formaPagamento: FormaPag 
                    
                },
                produtos: Produtos
            }
                const r = await SalvarNovoPedido(id, pedido); 
                toast.dark('pedido feito com sucesso');
                storage('carrinho', []);
                Navigate('/');
            } 
        catch (err) {
            toast.error(err.response.data.erro);

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
                                            <input  placeholder='Rua...' type="text" value={Numero} onChange={e => setNumero(e.target.value)}/>
                                        </div>
                                        <div className="li">
                                            <label> Nome do cartão</label>
                                            <input placeholder='Rua...' type="text" value={Nome} onChange={e => setNome(e.target.value)}/>
                                        </div>
                                        <div className="li">
                                            <label>Vencimento </label>
                                            <input placeholder='Rua...' type="text" value={Vencimento} onChange={e => setVencimento(e.target.value)}/>
                                        </div>
                                    </div>    

                                    <div className="tresInputs">
                                        <div className="li">
                                            <label> Código de segurança</label>
                                            <input placeholder='Rua...' type="text" value={codSeguranca} onChange={e => setcodSeguranca(e.target.value)}/>
                                        </div>
                                        <div className="li">
                                            <label>Parcelas:</label>
                                            <select value={Parcelas} onChange={e => setParcelas(e.target.value)}  >
                                                <option disabled hidden selected>Selecione</option>
                                                <option value={1}>01x à Vista</option>
                                                <option value={1}>01x sem Juros</option>
                                                <option value={2}>02x sem Juros</option>
                                                <option value={3}>03x sem Juros</option>
                                            </select>
                                        </div>

                                        <div className="li">
                                            <label>Formas de Pagamento:</label>
                                            <select value={FormaPag} onChange={e => setFormaPag(e.target.value)}   >
                                                <option disabled hidden selected>Selecione</option>
                                                <option>Crédito</option>
                                                <option>Débito</option>
                                            </select>
                                        </div>
                                    </div>     
                                </div>

                            </div>
                            
                            
                        </section>

                        <div className="infos">

                            <div className="botão">
                                <button onClick={CadastraPedido}> Finalizar</button>
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