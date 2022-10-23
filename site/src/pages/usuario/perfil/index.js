import CabeçarioLogin from '../../../components/cabecalhoLogin';
import './index.scss'



export default function PerfilUser(){

    // function escolherImagem(inputId){
    //     document.getElementById(inputId).click();
    // }

    // function ExibirImagem(imangen){
    //     if (imangen === undefined) {
    //         return '/assets/image/SelecionarImagem.png'
    //     } else {
    //         return URL.createObjectURL(imangen);
    //     }
    // }

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

                    <div className="infos">

                        <div className="h4P">
                            <h2> Meu Perfil </h2>
                            <p>Gerencie e Proteja sua conta </p>
                        </div>

                        <div className="inpucont-cadastro">
                            <p> Foto de perfil </p>
                            <div className="inserir-imagem">
                                <img  alt="" src="/assets/image/SelecionarImagem.png"/>

                                <input type="file" id="imagem"  />
                            </div>
                        </div>

                        <div className="ESE">
                            <div className='pa'>
                                <p>E-mail</p>
                                <a href="">Clique para alterar</a>
                            </div>

                            <div className='pa'>
                                <p>Senha</p>
                                <a href="">Clique para alterar</a>
                            </div> 

                            <div className='pa'>
                                <p>Endereço</p>
                                <a href="">Clique para alterar</a>
                            </div> 
                        </div>

                        <div className="inputs">

                            <div className="iptu">
                                <p className='nome'>
                                    Nome Completo
                                </p> 
                                <input className="put" placeholder='Rua...' type="text" />
                            </div>
                            <div className="iptu">
                                <p className="cpf">
                                    CPF
                                </p> 
                                <input className='upt' placeholder='Rua...' type="text" />
                            </div>

                            <div className="pitu">
                                <div className="DN">
                                    <p className="data">
                                        Data de Nascimento
                                    </p> 
                                    
                                    <input placeholder='07/10/2004' type="text" />
                                </div>
                                <div className="cell">
                                    <p>
                                        Número
                                    </p> 
                                    
                                    <input placeholder='()' type="text" />
                                </div>
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