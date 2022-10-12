import { buscarFilmes } from '../../api/adm/novoProdutoAPI';
import './index.scss';


export default function CardCardapioGeral(props){

    return(
        <main className="Card">

            <div className="vermelha">

                <div className="verdeClaro">
                    <img className="ima" src={buscarFilmes(props.item.imagem)} alt="" />
                </div>

                <button className="btVer"> Ver Produto </button>
                    
                <div className="verdeEscuro">

                    <div className="amarela">
                        <img className="ima" src="../assets/image/destaqueNovoProduto.png" alt="" />
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