import './index.scss';

export default function CardCardapioGeral(){

    return(
        <main className="Card">

            <section className="vermelha">

                <div className="verdeClaro">
                    <img className="ima" src="../assets/image/cardCardapio/fotoTeste.png" alt="" />
                </div>

                <div className="verdeEscuro">

                    <div className="amarela">
                        <img className="ima" src="../assets/image/destaqueNovoProduto.png" alt="" />
                    </div>

                    <div className="azul">
                        <div className="textu">
                            <p> beijinhos </p>
                            <p>50 unidades</p>
                        </div>

                        <div className="textu">
                            <p className="r">R$ 25,00</p>
                        </div>
                    
                    </div>
                    
                    <div className="roxo"></div>
                
                </div>
                    
            </section>


        </main>
        
    );
}