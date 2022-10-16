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
                            <p className="ps" >Sobre</p>
                            <p className="ps" >Cardápio</p>
                            <p className="ps" >Categoria</p>
                            <p className="ps" >Destaques</p>
                        </div>

                        <div className="icons">

                            <div className="divImagem">
                                <img className="logi" src="/assets/image/inconLogin.png" alt="" />
                            </div>

                            <div className="divImagem">
                                <img className="Carrinho" src="/assets/image/iconeCarrinho.png" alt="" />
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
                    <div> 
                        <img className='img-section2' src="/assets/image/oi.png" alt=""></img>
                    </div>
                    <div className='div-p1' >
                        <p>Somos uma confeitaria familiar tradicional da região de interlagos desde 1990.</p>
                    </div>
                    <div className='div-p2'>
                        <p>Nosso cardápio é recheado de bolos e salgadinhos pra festa, tortas doces e salgadas, lanches de metro, kits completos para comemorações coletivas ou caixinhas individuais, comidinhas congeladas e uma grande variedade de docinhos.</p>
                    </div>
                </div>
                <div className='d2'>
                    <img src="" alt="" />
                </div>
            </section>


        </main>
    );
}