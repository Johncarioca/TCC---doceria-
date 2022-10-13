import './index.scss';

export default function Home() {


    return (
        <main className="home">

            <header className="cabeçalho">

                <div className="duasDivs">

                    <div className="logo">
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
        </main>
    );
}