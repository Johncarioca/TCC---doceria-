import './index.scss';

// import CardCabecario from '../../../components/cabecalhoCardapio';
import CardCardapioGeral from '../../../components/CorpoCardapio/Geral'

import { useEffect, useState } from 'react';            
import { ProdutosDestaque, BuscarProdutoCardapio, CategoriaBolo, CategoriaDoces, CategoriaKits, CategoriaSalgados, CategoriaTortas} from '../../../api/usuario/cardapioAPI.js';

export default function CardapioGeral() {
    

    const [Produto, setProduto] = useState([]);
    const [Doces, setDoces] = useState([]);

    const [Filtros, setFiltros] = useState('');

////////////////////// Variaveis para a redenrização //////////////////////
    const [CTdoces, setCTdoces] = useState(false);
    const [CTtorta, setCTtorta] = useState(false);
    const [CTsalgados, setCTsalgados] = useState(false);
    const [CTbolo, setCTbolo] = useState(false);
    const [CTkits, setCTkits] = useState(false);
    const [CTdestaques , setCTdestaques] = useState(false);
    
    function exibirDoces(){
        setCTdoces(true)
    }

    async function BuscaCard() {
        const resposta = await BuscarProdutoCardapio(Filtros);
        setProduto(resposta);
    }

    async function cardDestaques() {
        const q = await ProdutosDestaque();
        setProduto(q);
    }

    async function cardDoces() {
        const q = await CategoriaDoces();
        setDoces(q);
    }

    useEffect(() => {
        cardDestaques();
    }, []);


    return (

        <main className="geral">    

            <header className="osTres">

                <div className="arroz">

                    <div className="SetaLogo">

                        <div>
                            <img className="setas" src="/assets/image/seta.png" alt="" />
                        </div>

                        <div>
                            <img className="logos" src="/assets/image/oi.png" alt="" />
                        </div>
                    </div>

                    <div className="sdcbk">

                        <div className="selecionado">
                            <p className="nomeCategoria"  >Salgados</p>
                            <hr />
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" onClick={exibirDoces} >Doces</p>
                            <hr />
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" >Geral</p>
                            <hr />
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" >Tortas</p>
                            <hr />
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" >Bolos</p>
                            <hr />
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" >Kits</p>
                            <hr />
                        </div>

                    </div>

                    <div className="imgsIcons">

                        <div>
                            <img className="inconLogin" src="/assets/image/inconLogin.png" alt="" />
                        </div>
                        <div>
                            <img className="inconCarrinho" src="/assets/image/iconeCarrinho.png" alt="" />
                        </div>

                    </div>

                </div>

            </header>

            <section className="CardapioGeral">

                <div className="dois">

                    <div className="divPesguisa">
                        <div className="Pesquisa">
                            <input className="barra" type="text" placeholder='Pesquisa...' value={Filtros} onChange={e => setFiltros(e.target.value)} />
                            <div> <img className="lupe" src="/assets/image/lupa.png" alt="" onClick={BuscaCard} /></div>
                        </div>
                    </div>

                    {CTdoces === true && 
                        <div className="card-container">

                            {Doces.map(item =>
                                <CardCardapioGeral item={item} />
                            )}

                        </div>
                    }

                </div>


            </section>

        </main>
    );
}