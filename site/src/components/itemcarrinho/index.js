import './index.scss';

export default function ItemCarrinho() {
    return (

        <main className="Geralll">
            <section className="intemCar">

                <div className="div-branca">

                    <div className="info-produtos">

                        <div className="nomeproduto">

                            <h5 className="nmproduto"> Bolo de camada dupla</h5>
                        
                        </div>

                        <div className="dados-produtos">

                            <div className="imgPoroduto">
                                <img  src="/assets/image/boloCamada.png "alt="" />
                            </div>
                            <div className="dados">

                                <div className="sub-dados">
                                    <h5 className="dados1">Disponivel:</h5>
                                    <p className="dados2">sim </p>
                                </div>

                                <div className="sub-dados">
                                    <h5 className="dados1">Preço:</h5>
                                    <p className="dados2">R$: 160,00</p>
                                </div>

                                <div className="sub-dados">
                                    <h5 className="dados1">Peso:</h5>
                                    <p className="dados2">3k</p>
                                </div>

                            </div>
                            <div className="iput">
                                <h5>Qtd:</h5>
                                <input type="number" />
                            </div>


                        </div>

                    </div>

                </div>
                <div className="dropCar">
                    <img src="/assets/image/lixo.png" alt="" />
                </div>
            </section>
        </main>
    )

}