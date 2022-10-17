import './index.scss';
// import api from '../../../api/usuario/cardapioGeralAPI';


export default function CardCardapioDoces(props){

    function exibir(imagem){
        if (!imagem) {
            return`/assets/image/caixa.png`;
        }
        else
            return `http://localhost:5000/${imagem}`
    }

    return(
        <main className="Card">

            <div className="vermelha">

                <div className="verdeClaro">
                    <img className="ima" src={exibir(props.item.imagem)} alt="" />
                </div>

                <button className="btVer"> Ver Produto </button>
                    
                <div className="verdeEscuro">

                    <div className="amarela">
                        
                    </div>
                    
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