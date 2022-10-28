import CabeçarioLogin from '../../../components/cabecalhoLogin';
// import CardEndereco from '../../../components/cardEndereco';

import './index.scss'



export default function PagamentoUser(){



    return(
        <main className="telaEndereco">
            <div>
                <CabeçarioLogin/>
            </div>
            <section className="sectionPrincipal">

                <div className="rosaEscura">

                    <div className="textImage">

                        <div className="Minhas">

                            <div >
                            
                                <img src="../assets/image/carrinhoPreto.png" alt="" />
                            
                            </div>
                            
                            <p> Minhas Compras </p>
    
                        </div>
                        <div className="Minhas">

                            <div >
                            
                                <img src="../assets/image/IconeCardapio.png" alt="" />
                            
                            </div>
                            <p>Cardápio</p>
    
                        </div>


                    </div>
                    
                </div>

                <div className="rosaCLar">

                    <div className="inf">

                        <div className="ph">
                            <h2 className="pag"> Pagamento </h2>
                            <p className="grc">
                                Olá! Bem-vindo a ultima parte antes de finalizamos sua compra. 
                                Insira os dados de acordo como e pedido abaixo
                            </p>
                        </div>

                        <section className="inputsPag">

                        
                            <div className="tpPagamento">

                                <div className=" imgTp">
                                    <div className='imgCartão'>
                                        <img className="cartão" src="../assets/image/iconCartão.png" alt="" />
                                    </div>
                                    <div className="tpTexte">
                                        <p>Cartão</p>
                                    </div>
                                </div>
                                
                                <div className=" imgTp">
                                    <div className='imgPix'>
                                        <img className="Pix" src="../assets/image/pix.png" alt="" />
                                    </div>
                                    <div className="tpTexte">
                                        <p>Pix</p>
                                    </div>
                                </div>

                                <div className=" imgTp">
                                    <div className='img'>
                                        <img className="i" src="../assets/image/boleto.png" alt="" />
                                    </div>
                                    <div className="tpTexte">
                                        <p>Boleto</p>
                                    </div>
                                </div>
                            
                            </div>
                            <div className='inputsParagrafo'>
                                
                                <div className="SeisInputs">

                                    <div className="tresInputs">
                                        <div className="li">
                                            <label> Nº do cartão</label>
                                            <input type="text" />
                                        </div>
                                        <div className="li">
                                            <label> Nº do cartão</label>
                                            <input type="text" />
                                        </div>
                                        <div className="li">
                                            <label> Nº do cartão</label>
                                            <input type="text" />
                                        </div>
                                    </div>    

                                    <div className="tresInputs">
                                        <div className="li">
                                            <label> Nº do cartão</label>
                                            <input type="text" />
                                        </div>
                                        <div className="li">
                                            <label> Nº do cartão</label>
                                            <input type="text" />
                                        </div>
                                        <div className="li">
                                            <label> Nº do cartão</label>
                                            <input type="text" />
                                        </div>
                                    </div>     
                                </div>

                            </div>
                            
                            
                        </section>

                        <div className="infos">

                            <div className="botão">
                                <button> Finalizar</button>
                            </div>

                        </div>

                    </div>
                    
                </div>

                <div className="rosaEscu">
                    
                </div>

            </section>

        </main>
    );
}