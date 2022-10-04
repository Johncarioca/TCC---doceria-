import './index.scss';

export default function CardCabecario(){

    return(
        <main className="CardCabecario">
            
        
            <header className="osTres">

                <div className="arroz">
                    
                    <div className="SetaLogo">

                        <div>
                            <img className="setas"  src="/assets/image/seta.png" alt="" />
                        </div>

                        <div>
                            <img className="logos" src="/assets/image/oi.png" alt="" />                            
                        </div>    
                    </div>

                    <div className="sdcbk">

                        <p className="nomeCategoria" >Salgado</p>
                        <p className="nomeCategoria" >Doces</p>
                        <p className="nomeCategoria" >Cardapio</p>
                        <p className="nomeCategoria" >Bolos</p>
                        <p className="nomeCategoria" >kits</p>
        
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