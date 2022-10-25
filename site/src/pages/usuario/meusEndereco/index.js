import CabeçarioLogin from '../../../components/cabecalhoLogin';
import './index.scss'



export default function MeusEndereco(){



    return(
        <main className="telaEndereco">
            <div>
                <CabeçarioLogin/>
            </div>
            <section className="sectionPrincipal">

                <div className="rosaEscura1">

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

                <div className="rosaCLara">

                    <div className="info">

                        <div className="ph4">
                            <h2> Meu Perfil </h2>
                            <p className="gerencie">
                                Gerencie e Proteja sua conta 
                            </p>
                            <p className="escolha">
                                Escolha um endereço para finalizar a compra, se caso não tiver aperte o botão de novo para cadastrar 
                            </p>
                        </div>

                        <div className="cardEndereco">

                        </div>

                        <div className="info">

                            <div className="botão">
                                <button> Salvar</button>
                            </div>

                        </div>

                    </div>
                    
                </div>

                <div className="rosaEscura2">
                    
                </div>

            </section>

        </main>
    );
}