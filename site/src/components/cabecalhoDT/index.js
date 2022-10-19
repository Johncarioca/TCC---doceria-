import './index.scss';

export default function CardDetalhes(){

    return(
        <main className="CardDetalhes">
            
            <header className="osTres">

                <div className="arroz">
                    
                    <div className="SetaLogo">

                        <div>
                            <img className="setas"  src="/assets/image/seta.png" alt="" />
                        </div>

                        <div>
                            <img className="logos" src="/assets/image/oi.png"  alt="" />                            
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