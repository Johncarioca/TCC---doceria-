import './index.scss';

export default function CardCabecarioUser(){

    return(
        <main className="CardCabecario">
            
        
            <header className="osTres">

                <div className="arroz">
                    
                    <div className="SetaLogo">

                        <div>
                            <img className="setas"  src="../assets/image/setinha.png" alt="" />
                        </div>

                        <div>
                            <img className="logos" src="/assets/image/oi.png"  alt="" />                            
                        </div>    
                    </div>

                    <div className="sdcbk">

                        <div className="selecionado">
                            <p className="nomeCategoria" >Cardapio</p>
                            <hr/>
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" >Perfil</p>
                            <hr/>
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" >Home</p>
                            <hr/>
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" >  Pedidos</p>
                            <hr/>
                        </div>
                    </div>

                    <div className="imgsIcons">

                        <div>
                            <img className="inconLogin" src="/assets/image/inconLogin.png" alt="" />
                        </div>
                        <div>    
                            <img className="inconCarrinho" src="/assets/image/iconeCarrinho.png" alt="" />
                        </div>

                    </div>

                </div>
   
            </header>

        </main>
    );

}