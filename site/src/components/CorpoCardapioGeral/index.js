import './index.scss';

export default function CardCardapioGeral(){

    return(
        <main className="Card">

            <div className="vermelha">

                <div className="verdeClaro">
                    <img className="ima" src="../assets/image/cardCardapio/fotoTeste.png" alt="" />
                </div>

                
                    <button className="btVer"> Ver Produto </button>
                    


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
                    
            </div>
            

        </main>
        
    );
}