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
                            <img className="logos" src="/assets/image/oi.png"  alt="" />                            
                        </div>    
                    </div>

                    <div className="sdcbk">

                        <div className="selecionado">
                            <p className="nomeCategoria" >Salgados</p>
                            <hr/>
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" >Doces</p>
                            <hr/>
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" >Geral</p>
                            <hr/>
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" >Tortas</p>
                            <hr/>
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" >Bolos</p>
                            <hr/>
                        </div>
                        <div className="selecionado">
                            <p className="nomeCategoria" >Kits</p>
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