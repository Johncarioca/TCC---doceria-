import './index.scss';

export default function CabCarrinho(){

    return(
        <main className="cabcarrinho">
            
            <div className="cont1-car">
                    
                    <div className= "img-cab">
                            <div className="SetaLogo">

                            <div>
                                 <img className="setas"  src="/assets/image/seta.png" alt="" />
                            </div>

                            <div>
                                <img className="logos" src="/assets/image/oi.png"  alt="" />                            
                            </div>    
                    </div>

                    </div>
                    <div className="links-car">

                        <div className="selecionado">
                            <p className="linkperfil" >Perfil</p>
                            <hr/>
                        </div>
                        <div className="selecionado">
                            <p className="linkcarrinho" >Carrinho</p>
                            <hr/>
                        </div>
                        <div className="selecionado">
                            <p className="linkhome" >Home</p>
                            <hr/>
                        </div>
                    </div>
            </div>
        </main>
    );

}