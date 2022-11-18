import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CabCarrinho(props) {


    const [Selecionado, setSelecionado] = useState(props.selecionado);

    const Navigate = useNavigate();
    function Selecionarpag(menu) {
        setSelecionado(menu)
    }


    function verificar(menu) {
        if (menu === Selecionado) {
            return 'selecionado:hover'
        }
        else{
            return'';  
        }
    }

    function home() {
        Navigate('/')
    }


    return (
        <main className="cabcarrinho">

            <div className="cont1-car">

                <div className="img-cab">
                    <div className="SetaLogo">
                        <a href="../">
                            <img className="setas" src="/assets/image/setinha.png" alt="" onClick={home} />
                        </a>
                        <img className="logos" src="/assets/image/oi.png" alt="" onClick={home}/>

                    </div>

                </div>

                <div className="links-car">

                    <div className="selecionado" onClick={() => Selecionarpag('Perfil')}>
                        <div  className={verificar('perfil')}>

                            <a className="a-car" href="../perfil" >
                                <p className="linkperfl" >Perfil</p>
                            </a>
                            <hr />
                        
                        </div>
                    </div>

                    <div className="selecionado" onClick={() => Selecionarpag('meusPedidos')}>
                        <div className={ verificar('MeusPedidos')}>

                            <a className="a-car" href="../meuspedidos">
                                <p className="linkperfil" >Pedidos</p>
                            </a>
                            <hr />
                        
                        </div>
                    </div>

                    <div className="selecionado" onClick={() => Selecionarpag('Carrinho')}>
                        <div className={verificar('Carrinho')}>
                        
                            <a className="a-car" href="../carrinho">
                                <p className="linkcarrinho" >Carrinho</p>
                            </a>
                            <hr />
                        
                        </div>
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