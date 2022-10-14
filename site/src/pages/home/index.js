import './index.scss';

export default function Home() {


    return (
        <main className="home">

            <header className="cabeçalho">

                <div className="duasDivs">

                    <div >
                        <img src="/assets/image/oi.png" alt="" />
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



        </main>
    );
}