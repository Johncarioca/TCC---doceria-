import './index.scss';


import CardCardapioDoces from '../../../components/CorpoCardapio/doces';
import CardapioTorta from '../../../components/CorpoCardapio/tortas';
import CardCardapioGeral from '../../../components/CorpoCardapio/Geral'
import CardapioBolos from '../../../components/CorpoCardapio/bolo'
import CardapioKits from '../../../components/CorpoCardapio/Kits'
import CardapioSalgados from '../../../components/CorpoCardapio/salgados'



import { ProdutosDestaque, BuscarProdutoCardapio, CategoriaBolo, CategoriaDoces, CategoriaKits, CategoriaSalgados, CategoriaTortas } from '../../../api/usuario/cardapioAPI.js';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RodapeLand2 from '../../../components/rodapeLand-2';

export default function Cardapio() {



    const Navigate = useNavigate();

    const [Doces, setDoces] = useState([]);
    const [Tortas, setTortas] = useState([]);
    const [Salgados, setSalgados] = useState([]);
    const [Bolos, setBolos] = useState([]);
    const [Kits, setKits] = useState([]);
    const [Produto, setProduto] = useState([]);

    const [Filtros, setFiltros] = useState('');

    ////////////////////// Variaveis para a redenrização //////////////////////
    const [CTdoces, setCTdoces] = useState(false);
    const [CTtorta, setCTtorta] = useState(false);
    const [CTsalgados, setCTsalgados] = useState(false);
    const [CTbolo, setCTbolo] = useState(false);
    const [CTkits, setCTkits] = useState(false);
    const [CTdestaques, setCTdestaques] = useState(true);


    function exibirDoces() {
        setCTdoces(true);
        setCTbolo(false);
        setCTdestaques(false);
        setCTkits(false);
        setCTsalgados(false);
        setCTtorta(false);
    }

    async function cardDoces() {
        const q = await CategoriaDoces();
        setDoces(q);
    }


    function exibirTorta() {
        setCTtorta(true);
        setCTdoces(false);
        setCTbolo(false);
        setCTdestaques(false);
        setCTkits(false);
        setCTsalgados(false);
    }

    async function cardTortas() {
        const q = await CategoriaTortas();
        setTortas(q);
    }

    function exibirDestaques() {
        setCTtorta(false);
        setCTdoces(false);
        setCTbolo(false);
        setCTdestaques(true);
        setCTkits(false);
        setCTsalgados(false);
    }

    async function cardDestaques() {
        const q = await ProdutosDestaque();
        setProduto(q);
    }


    function exibirBolos() {
        setCTtorta(false);
        setCTdoces(false);
        setCTbolo(true);
        setCTdestaques(false);
        setCTkits(false);
        setCTsalgados(false);
    }

    async function cardBolos() {
        const q = await CategoriaBolo();
        setBolos(q);
    }

    function exibirKits() {
        setCTtorta(false);
        setCTdoces(false);
        setCTbolo(false);
        setCTdestaques(false);
        setCTkits(true);
        setCTsalgados(false);
    }

    async function cardKits() {
        const q = await CategoriaKits();
        setKits(q);
    }

    function exibirSalgados() {
        setCTtorta(false);
        setCTdoces(false);
        setCTbolo(false);
        setCTdestaques(false);
        setCTkits(false);
        setCTsalgados(true);
    }


    async function cardSalgados() {
        const q = await CategoriaSalgados();
        setSalgados(q);
    }



    async function BuscaCard() {
        const resposta = await BuscarProdutoCardapio(Filtros);
        setProduto(resposta);
    }


    function home() {
        Navigate('/')
    }


    useEffect(() => {
        cardDoces();
        cardDestaques();
        cardTortas();
        cardBolos();
        cardKits();
        cardSalgados();
    }, []);


    return (

        <main className="cardapios">

            <header className="osTres">

                <div className="arroz">

                    <div className="SetaLogo">

                        <div>
                            <a href="/perfil">
                                <img className="setas" src="/assets/image/setinha.png" alt="" onClick={home}/>
                            </a>

                        </div>

                        <div>
                            <img className="logos" src="/assets/image/oi.png" alt="" onClick={home}/>
                        </div>
                    </div>

                    <div className="sdcbk">

                        <div className="selecionado" onClick={exibirSalgados}

                            style={{
                                height: CTsalgados === true && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? '3rem' : '',
                                display: CTsalgados === true && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? 'flex' : '',
                                flexDirection: CTsalgados === true && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? 'collumn' : '',
                                alignItems: CTsalgados === true && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? 'center' : '',
                                justifyContent: CTsalgados === true && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? 'space-evenly' : '',
                            }}>

                            <p className="nomeCategoria" onClick={exibirSalgados} >Salgados</p>

                            <hr style={{
                                width: CTsalgados === true && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? '7rem' : '',
                                height: CTsalgados === true && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? '0.20rem' : '',
                                backgroundColor: CTsalgados === true && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? '#944230' : ''
                            }} />
                        </div>
                        <div className="selecionado" onClick={exibirDoces}
                            style={{
                                height: CTsalgados === false && CTdoces === true && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? '3rem' : '',
                                display: CTsalgados === false && CTdoces === true && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? 'flex' : '',
                                flexDirection: CTsalgados === false && CTdoces === true && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? 'collumn' : '',
                                alignItems: CTsalgados === false && CTdoces === true && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? 'center' : '',
                                justifyContent: CTsalgados === false && CTdoces === true && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? 'space-evenly' : '',
                            }}
                        >
                            <p className="nomeCategoria" onClick={exibirDoces}>Doces</p>
                            <hr style={{
                                width: CTsalgados === false && CTdoces === true && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? '6rem' : '',
                                height: CTsalgados === false && CTdoces === true && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? '0.20rem' : '',
                                backgroundColor: CTsalgados === false && CTdoces === true && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === false ? '#944230' : ''
                            }} />
                        </div>
                        <div className="selecionado" onClick={exibirDestaques}
                            style={{
                                height: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === true && CTkits === false && CTtorta === false ? '3rem' : '',
                                display: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === true && CTkits === false && CTtorta === false ? 'flex' : '',
                                flexDirection: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === true && CTkits === false && CTtorta === false ? 'collumn' : '',
                                alignItems: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === true && CTkits === false && CTtorta === false ? 'center' : '',
                                justifyContent: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === true && CTkits === false && CTtorta === false ? 'space-evenly' : '',

                            }}>
                            <p className="nomeCategoria" onClick={exibirDestaques}>Geral</p>
                            <hr style={{
                                width: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === true && CTkits === false && CTtorta === false ? '6rem' : '',
                                height: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === true && CTkits === false && CTtorta === false ? '0.20rem' : '',
                                backgroundColor: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === true && CTkits === false && CTtorta === false ? '#944230' : ''
                            }} />
                        </div>
                        <div className="selecionado" onClick={exibirTorta}
                            style={{
                                height: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === true ? '3rem' : '',
                                display: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === true ? 'flex' : '',
                                flexDirection: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === true ? 'collumn' : '',
                                alignItems: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === true ? 'center' : '',
                                justifyContent: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === true ? 'space-evenly' : '',
                            }}>
                            <p className="nomeCategoria" onClick={exibirTorta} >Tortas</p>
                            <hr style={{
                                width: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === true ? '6rem' : '',
                                height: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === true ? '0.20rem' : '',
                                backgroundColor: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === false && CTtorta === true ? '#944230' : ''
                            }} />
                        </div>
                        <div className="selecionado" style={{
                            height: CTsalgados === false && CTdoces === false && CTbolo === true && CTdestaques === false && CTkits === false && CTtorta === false ? '3rem' : '',
                            display: CTsalgados === false && CTdoces === false && CTbolo === true && CTdestaques === false && CTkits === false && CTtorta === false ? 'flex' : '',
                            flexDirection: CTsalgados === false && CTdoces === false && CTbolo === true && CTdestaques === false && CTkits === false && CTtorta === false ? 'collumn' : '',
                            alignItems: CTsalgados === false && CTdoces === false && CTbolo === true && CTdestaques === false && CTkits === false && CTtorta === false ? 'center' : '',
                            justifyContent: CTsalgados === false && CTdoces === false && CTbolo === true && CTdestaques === false && CTkits === false && CTtorta === false ? 'space-evenly' : '',
                        }}>
                            <p className="nomeCategoria" onClick={exibirBolos}>Bolos</p>
                            <hr style={{
                                width: CTsalgados === false && CTdoces === false && CTbolo === true && CTdestaques === false && CTkits === false && CTtorta === false ? '6rem' : '',
                                height: CTsalgados === false && CTdoces === false && CTbolo === true && CTdestaques === false && CTkits === false && CTtorta === false ? '0.20rem' : '',
                                backgroundColor: CTsalgados === false && CTdoces === false && CTbolo === true && CTdestaques === false && CTkits === false && CTtorta === false ? '#944230' : ''
                            }} />
                        </div>
                        <div className="selecionado" style={{
                            height: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === true && CTtorta === false ? '3rem' : '',
                            display: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === true && CTtorta === false ? 'flex' : '',
                            flexDirection: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === true && CTtorta === false ? 'collumn' : '',
                            alignItems: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === true && CTtorta === false ? 'center' : '',
                            justifyContent: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === true && CTtorta === false ? 'space-evenly' : '',
                        }}>
                            <p className="nomeCategoria" onClick={exibirKits} >Kits</p>
                            <hr style={{
                                width: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === true && CTtorta === false ? '4rem' : '',
                                height: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === true && CTtorta === false ? '0.20rem' : '',
                                backgroundColor: CTsalgados === false && CTdoces === false && CTbolo === false && CTdestaques === false && CTkits === true && CTtorta === false ? '#944230' : ''
                            }} />
                        </div>

                    </div>

                    <div className="imgsIcons">

                        <div>
                            <a href="../perfil">
                                <img className="inconLogin" src="/assets/image/inconLogin.png" alt="" />
                            </a>

                        </div>
                        <div>
                            <a href="carrinho">
                                <img className="inconCarrinho" src="/assets/image/iconeCarrinho.png" alt="" />
                            </a>

                        </div>

                    </div>

                </div>

            </header>

            <section className="CardapioGeral">

                <div className="dois">

                    <div className="divPesguisa">
                        <div className="Pesquisa">
                            <input className="barra" type="text" placeholder='Pesquise um item...' value={Filtros} onChange={e => setFiltros(e.target.value)} />
                            <div> <img className="lupe" src="/assets/image/lupa.png" alt="" onClick={BuscaCard} /></div>
                        </div>
                    </div>

                    {CTdoces === true &&

                        <div className="card-container">

                            {Doces.map(item =>
                                <CardCardapioDoces item={item} />
                            )}

                        </div>
                    }

                    {CTtorta === true &&

                        <div className="card-container">

                            {Tortas.map(item =>
                                <CardapioTorta item={item} />
                            )}

                        </div>
                    }
                    {CTdestaques === true &&

                        <div className="card-container">

                            {Produto.map(item =>
                                <CardCardapioGeral item={item} />
                            )}

                        </div>
                    }
                    {CTbolo === true &&

                        <div className="card-container">

                            {Bolos.map(item =>
                                <CardapioBolos item={item} />
                            )}

                        </div>
                    }

                    {CTkits === true &&

                        <div className="card-container">

                            {Kits.map(item =>
                                <CardapioKits item={item} />
                            )}

                        </div>
                    }

                    {CTsalgados === true &&

                        <div className="card-container">

                            {Salgados.map(item =>
                                <CardapioSalgados item={item} />
                            )}

                        </div>
                    }

                </div>


            </section>

            <RodapeLand2 />

        </main>
    );
}