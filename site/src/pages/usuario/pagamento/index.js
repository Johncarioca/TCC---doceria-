
import storage from 'local-storage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { SalvarNovoPedido } from '../../../api/usuario/pagamentoAPI.js';
import { DetalhesProdutoId } from '../../../api/usuario/produtoAPI.js';
import Block from '../../../components/block/index.js';
import CabeçarioLogin from '../../../components/cabecalhoLogin';
import RodapeLand2 from '../../../components/rodapeLand-2/index.js';



import './index.scss'


export default function     Pagamento() {


 ////////////////// pagamento Cartão //////////////////
    const [Numero, setNumero] = useState(0);
    const [Nome, setNome] = useState('');
    const [codSeguranca, setcodSeguranca] = useState('');
    const [Parcelas, setParcelas] = useState('');
    const [FormaPag, setFormaPag] = useState('');
    const [Vencimento, setVencimento] = useState('');
    

 ////////////////// pagamento Pix  //////////////////
    const [CPF, setCpf] = useState('');
    const [Email, setEmail] = useState('');

 ////////////////// pagamento Boleto //////////////////
    const [NumeroCell, setNumeroCell] = useState(0);
    const [codBoleto, setCodBoleto] = useState('');


    const [itens, setItens] = useState([]);
    const vlTotal = Valortotal(0);
    const QTD = ItensQtd(0);

    const Navigate = useNavigate();

    const [MostrarCartão, setMostrarCartão] = useState(false);
    const [MostrarPix, setMostrarPix] = useState(false);
    const [MostrarBoleto, setMostrarBoleto] = useState(false);


    function exibirCartao() {
        setMostrarCartão(true);
        setMostrarPix(false);
        setMostrarBoleto(false);
    }
    function exibirPix() {
        setMostrarPix(true);
        setMostrarCartão(false);
        setMostrarBoleto(false);
    }
    function exibirBoleto() {
        setMostrarBoleto(true);
        setMostrarPix(false);
        setMostrarCartão(false);
    }

    async function CarregarItensCarrinho() {

        let carrinho = storage('carrinho');


        if (carrinho) {

            let temporario = [];

            for (let produto of carrinho) {
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
        let total = 0;
        for (let item of itens) {
            total = total + item.produto.preco * item.qtd;

        }
        return total;
    }
  
 
    function telaCardapio(){
        Navigate('/cardapio')
    }
    function telaMeusPedidos(){
        Navigate('/meuspedidos')
    }

    



    async function CadastraPedido() {

        try {
            let Produtos = storage('carrinho');
            let idUsuario = storage('Cliente-logado').id;
            let idEnd = storage('endereco-selecionado').idEnder;

            
            let Pagamento;
            let tipoPag;

            if (MostrarCartão === true && MostrarBoleto === false && MostrarPix === false ) {
                tipoPag = 'cartao';
                Pagamento = {
                    nome: Nome,
                    numero: Numero,
                    vencimento: Vencimento,
                    codSeguranca: codSeguranca,
                    parcelas: Parcelas,
                    formaPagamento: FormaPag
                }
            }
            else if (MostrarBoleto  === true && MostrarCartão === false && MostrarPix === false) {

                tipoPag = 'boleto';
                Pagamento = {
    
                    telefone: NumeroCell,
                    cod_boleto: codBoleto
                }
            }
            else {
                tipoPag = 'pix';
                Pagamento = {
                    email: Email,
                    cpf:CPF
                }
            }

            let pedido = {
                itens: QTD,
                endereco: idEnd,
                status: "confirmando pagamento",
                vlTotal: vlTotal,
                tpPagamento: tipoPag,
                pagamento: Pagamento,
                produtos: Produtos
            }
            
            const r = await SalvarNovoPedido(idUsuario, pedido);
            
            toast.dark('pedido feito com sucesso');
            storage('carrinho', []);
            Navigate('/');
        }
        catch (err) {
            if (err.response)

                toast.error(err.response.data.erro);
            else {
                toast.error(err.message)
            }

        }


    }
    useEffect(() => {
        CarregarItensCarrinho();
        Valortotal();
        exibirCartao();
    }, [])


    return (
        <main className="telapagamento">
            <Block />
            <div>
                <CabeçarioLogin />
            </div>
            <section className="sectionPrincipal">

                <div className="rosaEscura">

                    <div className="textImage">

                        <div className="Minhas" onClick={telaMeusPedidos} >

                            <div onClick={telaMeusPedidos} >

                                <img src="../assets/image/carrinhoPreto.png" alt="" />

                            </div>

                            <p onClick={telaMeusPedidos}> Minhas Compras </p>

                        </div>
                        <div className="Minhas">

                            <div onClick={telaCardapio}>

                                <img src="../assets/image/IconeCardapio.png" alt="" />

                            </div>
                            <p onClick={telaCardapio}> Cardápio</p>

                        </div>


                    </div>

                </div>

                <div className="rosaCLar">

                    <div className="infas">

                        <div className="pha">
                            <h2 className="pag"> Pagamento </h2>

                            <p className="grci">
                                Olá! Bem-vindo a ultima parte antes de finalizamos sua compra.
                                Insira os dados de acordo como e pedido abaixo
                            </p>
                        </div>

                        <section className="inputsPag">


                            <div className="tpPagamentos">

                                <div className=" imgTp" onClick={exibirCartao} style={{ backgroundColor: MostrarCartão === true && MostrarBoleto === false && MostrarPix === false ? '#C6B0AD': '' }}>


                                    <div className='imgCartão' >
                                        <img onClick={exibirCartao} className="cartão" src="../assets/image/iconCartão.png" alt="" />
                                    </div>

                                    <div className="tpTexte">
                                        <p onClick={exibirCartao}>Cartão</p>
                                    </div>

                                </div>

                                <div className=" imgTp" onClick={exibirPix} style={{ backgroundColor: MostrarCartão === false && MostrarBoleto === false && MostrarPix === true ? '#C6B0AD': '' }}>
                                    <div className='imgPix'>
                                        <img className="Pix" src="../assets/image/pix.png" alt="" />
                                    </div>
                                    <div className="tpTexte">
                                        <p>Pix</p>
                                    </div>
                                </div>

                                <div className=" imgTp" onClick={exibirBoleto}  style={{ backgroundColor: MostrarCartão === false && MostrarBoleto === true && MostrarPix === false ? '#C6B0AD': '' }}>
                                    <div className='img'>
                                        <img className="i" src="../assets/image/boleto.png" alt="" />
                                    </div>
                                    <div className="tpTexte">
                                        <p>Boleto</p>
                                    </div>
                                </div>

                            </div>

                            
                            {MostrarCartão === true &&
                                <div className='itParagrafo'>



                                    <div className="MostraCartão">

                                        <div className="tresInputs">
                                            <div className="li">
                                                <label> Nº do cartão</label>
                                                <input placeholder='0' type="text" value={Numero} onChange={e => setNumero(e.target.value)} />
                                            </div>
                                            <div className="li">
                                                <label> Nome do cartão</label>
                                                <input placeholder='Visa' type="text" value={Nome} onChange={e => setNome(e.target.value)} />
                                            </div>
                                            <div className="li">
                                                <label>Vencimento </label>
                                                <input placeholder='10/out' type="text" value={Vencimento} onChange={e => setVencimento(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="tresInputs">
                                            <div className="li">
                                                <label> Código de segurança</label>
                                                <input placeholder='0' type="text" value={codSeguranca} onChange={e => setcodSeguranca(e.target.value)} />
                                            </div>
                                            <div className="li">
                                                <label>Parcelas:</label>
                                                <select value={Parcelas} onChange={e => setParcelas(e.target.value)}  className="select" placeholder='Rua...' >
                                                    <option>Selecione</option>
                                                    <option value={1}>01x à Vista</option>
                                                    <option value={1}>01x sem Juros</option>
                                                    <option value={2}>02x sem Juros</option>
                                                    <option value={3}>03x sem Juros</option>
                                                </select>
                                            </div>

                                            <div className="li">
                                                <label>Formas de Pagamento:</label>
                                                <select value={FormaPag} onChange={e => setFormaPag(e.target.value)} className="select"  >
                                                    <option>Selecione</option>
                                                    <option>Crédito</option>
                                                    <option>Débito</option>
                                                </select>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="botãoCt">
                                        <button className="Ct" onClick={CadastraPedido}> 
                                            Finalizar
                                        </button>
                                    </div>

                                </div>
                            }

                            {MostrarPix === true &&
                                <div className='itParagrafo'>

                                    <div className="Pix">
                                        <h1> Chaves Pix</h1>
                                    </div>

                                    <div className="SeisInputs">

                                        <div className="doisInputs">


                                            <div className="li">
                                                <label> CPF</label>
                                                <input placeholder='255' type="text"  value={CPF} onChange={e => setCpf(e.target.value)}/>
                                            </div>
                                            <div className="li">
                                                <label> Email</label>
                                                <input placeholder='@gmail.com' type="text" value={Email} onChange={e => setEmail(e.target.value)}/>
                                            </div>

                                        </div>

                                        <div className='QrSalvar'>
                                            <div className="Qr">
                                                <img src="../assets/image/QRcode.png" alt="" />
                                            </div>

                                            <div className="botão" onClick={CadastraPedido}>
                                                <button className='buttonPB'> Finalizar</button>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            }

                            {MostrarBoleto === true &&
                                <div className='itParagrafo'>

                                    <div className="Pix">
                                        <h1> Boleto</h1>
                                    </div>

                                    <div className="MostrarBoleto">

                                        <div className="doisInputsBoleto">


                                            <div className="lib">
                                                <label> Numero</label>
                                                <input placeholder='0.' type="text" value={NumeroCell} onChange={e => setNumeroCell(e.target.value)}/>
                                            </div>
                                            <div className="lib">
                                                <label> codigo do boleto</label>
                                                <input placeholder='0' type="text" value={codBoleto} onChange={e => setCodBoleto(e.target.value)}/>
                                            </div>

                                        </div>

                                        <div className='Boleto'>
                                            <div className="blt">
                                                <img className='bolet' src="../assets/image/blto.png" alt="" />
                                            </div>

                                            <div className="botão"onClick={CadastraPedido}>
                                                <button className='buttonPB'> Finalizar</button>
                                            </div>
                                        </div>


                                    </div>


                                </div>

                            }



                        </section>

                        <div className="infos">



                        </div>

                    </div>

                </div>

                <div className="rosaEscu">

                </div>

            </section >
            <div className="roda">
                    <RodapeLand2/>

            </div>
        </main>
    );
}