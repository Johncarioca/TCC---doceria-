import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../api/config';
import './index.scss';







export default function CardapioKits(props){

    const navigate = useNavigate()


    function exibir(imagem){
        if (!imagem) {
            return`/assets/image/caixa.png`;
        }
        else
            return `${API_URL}/${imagem}`
    }

    function AbrirDetalhe(id){
        navigate('/detalhe/produto/' + id)
    }

    return(
        <main className="Card">

            <div className="vermelha">

                <div className="verdeClaro">
                    <img className="ima" src={exibir(props.item.imagem)} alt="" />
                </div>

                <button className="btVer" onClick={() => AbrirDetalhe(props.item.id)}> Ver Produto </button>
                    
                <div className="verdeEscuro">

                    <div className="amarela">
                    </div>
                    
                    <div className="azul">
                        <div className="textu">
                            <p className="textu1">{props.item.nome}</p>
                            <p>{props.item.estoque}uni.</p>
                        </div>

                        <div className="textu">
                            <p className="r">R$ {props.item.preco},00</p>
                        </div>
                    
                    </div>
                    
                    <div className="roxo"></div>
                
                </div>
                    
            </div>
            

        </main>
        
    );
}