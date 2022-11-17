import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function CabCarrinho() {

    return (
        <main className="cabcarrinho">

            <div className="cont1-car">

                <div className="img-cab">
                    <div className="SetaLogo">
                        <a href="../">
                             <img className="setas" src="/assets/image/setinha.png" alt="" />
                        </a>
                        <img className="logos" src="/assets/image/oi.png" alt="" />

                    </div>

                </div>

                <div className="links-car">

                    <div className="selecionado">

                        <a className="a-car" href="../perfil">
                            <p className="linkperfl" >Perfil</p>
                        </a>
                        <hr /> 
                    </div>

                    <div className="selecionado">

                        <a className="a-car" href="../meuspedidos">
                            <p className="linkperfil" >Pedidos</p>
                        </a>
                        <hr /> 
                    </div>
                    
                    <div className="selecionado">
                        <a className="a-car" href="../carrinho">
                            <p className="linkcarrinho" >Carrinho</p>
                        </a>
                        <hr />
                    </div>

                    <div className="selecionado">
                        <a className="a-car" href="../">
                             <p className="linkhome" >Home</p>
                        </a>
                       <hr />
                    </div>
                    
                </div>
                
            </div>
        </main>
    );

}