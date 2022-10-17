import './index.scss';

export default function CardapioSalgados(props){

    return(
        <main className="Card">

            <div className="vermelha">

                <div className="verdeClaro">
                    <img className="ima" src="../assets/image/cardCardapio/fotoTeste.png" alt="" />
                </div>

                <button className="btVer"> Ver Produto </button>
                    
                <div className="verdeEscuro">

                    

                    
                    <div className="azul">
                        <div className="textu">
                            <p className="textu1">{props.item.nome}</p>
                            <p>{props.item.estoque} unidades</p>
                        </div>

                        <div className="textu">
                            <p className="r">R${props.item.preco},00</p>
                        </div>
                    
                    </div>
                    
                    <div className="roxo"></div>
                
                </div>
                    
            </div>
            

        </main>
        
    );
}