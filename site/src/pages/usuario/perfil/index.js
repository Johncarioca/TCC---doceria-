import './index.scss'

import CabCarrinho from '../../../components/cabecarioCarrinho';
import BarraLateral from '../../../components/lateralPerfil';

export default function PerfilUser() {
    return (
        <main className="perfil-user">

            <header>
                <CabCarrinho />
            </header>

            <div className="cont0-per">

                <div className="cont1-per">
                    <BarraLateral />
                </div>

                <div className="cont2-per">
                    <div className="bar-per">

                    </div>
                    <div className="info-cliente">

                        <div className="infoclin-1">

                            <img className="imguser" src="../assets/image/ftperfil.png" alt="" />

                            <div className='infoC-1'>

                                <p className="nmser"> @Killua</p>

                                <a className="btperfil" href="../perfil/alterar">
                                    <img src="../assets/image/alterarperfil.png" alt="" />
                                </a>
                            </div>


                        </div>

                        <div className="info-per">

                            <div className="seisP">
                                <div className="frase">

                                    <h3 className="ifoCli"> E-mail:</h3>
                                    
                                    <div className='ifelse'>
                                    
                                        <p className="infoCli">killua123@gmail.com</p>

                                        <div>
                                            <img src="../assets/image/olho.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="frase">

                                    <h3 className="ifoCli"> Cpf:</h3>

                                    <div className='ifelse'>
                                        <p className="infoCli">130.036.037-28</p>

                                        <div>
                                            <img src="../assets/image/olho.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="frase">

                                    <h3 className="ifoCli"> Rua:</h3>
                                    
                                    <div className='ifelse'>
                                    
                                        <p className="infoCli">Rua teixeira de souza</p>

                                        <div>
                                            <img src="../assets/image/olho.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="frase">

                                    <h3 className="ifoCli"> Nome:</h3>
                                    
                                    <div className='ifelse'>
                                        <p className="infoCli">Jonatas quintanilha balga</p>

                                        <div>
                                            <img src="../assets/image/olho.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="frase">

                                    <h3 className="ifoCli"> telefone:</h3>
                                    
                                    <div className='ifelse'>

                                        <p className="infoCli">(21)999449242</p>

                                        <div>
                                            <img src="../assets/image/olho.png" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="frase">

                                    <h3 className="ifoCli">Data Nasc:</h3>
                                    
                                    <div className='ifelse'>

                                        <p className="infoCli">15/05/1995</p>

                                        <div>
                                            <img src="../assets/image/olho.png" alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className="cont3-per">
                    <p></p>
                </div>

            </div>


        </main>



    )
}



