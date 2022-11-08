import './index.scss';



export default function Home() {


    return (
        <main className="home">

            <header className="cabeçalho">

                <div className="duasDivs">

                    <div >
                        <img className='logi' src="/assets/image/oi.png" alt="" />
                    </div>

                    <div className="iconTexto">

                        <div className="text">

                            <a className='a-home' href="">
                                <p className="ps" >Sobre</p> 
                            </a>
                            <a className='a-home' href="../cardapio">
                                <p className="ps" >Cardápio</p> 
                            </a>
                            <a className='a-home' href="">
                                <p className="ps" >Categoria</p> 
                            </a>
                            <a className='a-home' href="">
                                <p className="ps" >Destaques</p> 
                            </a>
                            <a className='a-home' href="../login">
                                <p className="ps" >Login</p> 
                            </a>
                            <a className='a-home' href="../cadastro">
                                <p className="ps" >Cadastro</p> 
                            </a>



                        </div>

                        <div className="icons">

                            <div className="divImagem">
                                
                                <a href="/perfil">
                                    <img className="logi" src="/assets/image/inconLogin.png" alt="" />
                                </a>
                                
                            </div>

                            <div className="divImagem">
                                <a href="../carrinho">   <img className="Carrinho" src="/assets/image/iconeCarrinho.png" alt=""   /></a>
                              
                            </div>

                        </div>
                    </div>

                </div>
            </header>


            <section className='section1-landing-page'>

                <div className='div-section1-land'>
                    <p className='p-section1-land'>Bem-Vindo</p>
                </div>

                <div className='div-texto-section1'>
                    <p> A nossa doceria delicious gourmet aqui você encontra os melhores tipos de doces!!! </p>
                </div>

                <div className='div-button-section1'>
                    <button className='button-cardapio-section1'> Cardapio </button>
                </div>

            </section>

            <section className='section2-landing-page'>
                
                 <div className='d1'>
                    <div className="img-d2-4">
                        <div>
                        <img src="/assets/image/image189.png" alt=""></img>
                        </div>
                        <div>
                        <img src="/assets/image/image191.png" alt=""></img>
                        </div>
                    </div>
                    <div className="img-d2-4">
                        <div>
                        <img src="/assets/image/image220.png" alt=""></img>
                        </div>
                        <div>
                        <img src="/assets/image/image217.png" alt=""></img>
                        </div>
                    </div>
                </div>

                <div className='d2'>
                    <div> 
                        <img className='img-section2-d1' src="/assets/image/oi.png" alt=""></img>
                    </div>
                    <div className='div-p1' >
                        <p>Somos uma confeitaria familiar tradicional da  região de interlagos desde 1990.</p>
                    </div>
                    <div className='div-p2'>
                        <p>Nosso cardápio é recheado de bolos e salgadinhos pra festa, tortas doces e salgadas, lanches de metro, kits completos para comemorações coletivas ou caixinhas individuais, comidinhas congeladas e uma grande variedade de docinhos.</p>
                    </div>
                </div>
               

                {/* <div className='d2-img'>
                    <div>
                        <img src="/assets/image/image189.png" alt=""></img>
                    </div>
                    <div>
                        <img src="/assets/image/image191.png" alt=""></img>
                    </div>
                <div/>    

                <div className="d3-img">
                    <div>
                        <img src="/assets/image/image220.png" alt=""></img>
                    </div>
                    <div>
                        <img src="/assets/image/image217.png" alt=""></img>
                    </div>
                </div>
                </div> */}
            </section>

            <section className="Land-sec3">

                <div className="sec3-img1">
                    <img src="./assets/image/Land-sec3-img1.png" alt="" />
                    
                </div>

                <div className="sec3-img2">
                    <img src="./assets/image/Land-sec3-img2.png" alt="" />
                </div>

                <div className="sec3-img3">
                    <img src="./assets/image/Land-sec3-img3.png" alt="" />
                        
                   
                </div>

                <div className="sec3-info">
                    <h1>
                    Sabores inesquecíveis
                    </h1>

                    <p>
                    NOSSOS BOLOS E DOCES SÃO
                    FEITOS ARTESANALMENTE
                    PARA AGRADAR OLHOS E PALADARES
                    </p>

                    <div className="sec3-but">
                        <button>
                        Ver cardapio
                        </button>
                    </div>
                
                </div>

            </section>

            <section className="section4-landing-page">
                <div className="sec-card ">
                    <div className="sec4-card1">
                        <img src="./assets/image/bolinho-sec4.png" alt="" />
                        <h3>Bolos</h3>
                        <p>Os bolo de chocolate com pedaços morangos  </p>
                    </div>

                    <div className="sec4-card2">
                        <img src="./assets/image/trufa-sec4.png" alt="" />
                        <h3>Trufas</h3>
                        <p>Trufas recheadas </p>
                    </div>

                    <div className="sec4-card3">
                        <img src="./assets/image/torta-sec4.png" alt="" />
                        <h3>Tortas</h3>
                        <p>torta de limão com raspa de limão emcima  </p>
                    </div>
                    
                </div>

            </section>


        </main>
    );
}