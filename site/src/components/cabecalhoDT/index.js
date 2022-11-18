import { useNavigate } from 'react-router-dom';
import './index.scss';

export default function CardDetalhes(){


    const Navigate= useNavigate();

    function carrinho() {
        Navigate('/carrinho')
    }
    function login() {
        Navigate('/login')
    }
    function home() {
        Navigate('/')
    }
    function cardapio() {
        Navigate('/cardapio')
    }
    return(
        <main className="CardDetalhes">
            
            <header className="osTres">

                <div className="arroz">
                    
                    <div className="SetaLogo">

                        <div>
                            <img className="setas"  src="/assets/image/seta.png" alt="" onClick={cardapio}/>
                        </div>

                        <div>
                            <img className="logos" src="/assets/image/oi.png"  alt="" onClick={home}/>                            
                        </div>    
                    </div>

                    <div className="imgsIcons">

                        <div>
                            <img className="inconLogin" src="/assets/image/inconLogin.png" alt="" onClick={login}/>
                        </div>
                        <div>    
                            <img className="inconCarrinho" src="/assets/image/iconeCarrinho.png" alt="" onClick={carrinho}/>
                        </div>

                    </div>

                </div>
   
            </header>

        </main>
    );

}