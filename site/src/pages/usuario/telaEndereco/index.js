import CabeçarioLogin from '../../../components/cabecalhoLogin';
import './index.scss'



export default function TelaEndereco(){

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

                                <img src="../assets/image/loginPreto.png" alt="" />
                            
                            </div>
                            <p> Minha Conta</p>
    
                        </div>
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

                    <div className="infos">

                        <div className="h4P">
                            <h2> Endereço </h2>
                            <p>Olá, seja bem vindo, preenchar as informações nécessaria para continuar </p>
                        </div>

                        <div className="inputs">

                            <div className="iptu">
                                <p>Rua</p> <input placeholder='Rua...' type="text" />
                            </div>

                            <div className="iptu">
                                <p>Estado</p> <input placeholder='São paulo' type="text" />
                            </div>

                            <div className="iptu">
                                <p>Bairro</p> <input placeholder='Jd.Orion' type="text" />
                            </div>

                            <div className="textArea">
                                <p>Complemento</p> <textarea placeholder='Descrição...' cols="30" rows="10"/> 
                            </div>

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