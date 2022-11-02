import './index.scss'

import CabCarrinho from '../../../components/cabecarioCarrinho';
import BarraLateral from '../../../components/lateralPerfil';

export default function PerfilUser(){
    return(
        <main className="perfil-user">

            <header>
              <CabCarrinho/>
            </header>

            <div className="cont0-per">

                 <div className="cont1-per">
                    <BarraLateral/>
                </div>

            <div className="cont2-per">
                    <div className="bar-per">
                        <p></p>
                    </div>
                    <div 
                    className="info-cliente">

                        <div className="infoclin-1">
                        
                            <img className="imguser" src="../assets/image/ftperfil.png" alt="" />

                            <p className="nmuser"> <b>@Killua</b></p>

                            <img  src="../assets/image/alterarperfil.png" alt="" />
                        </div>

                            <p className="infoCli"> E-mail:</p>
                            <p className="infoCli"> CPF:</p>
                            <p className="infoCli"> Nome completo:</p>
                            <p className="infoCli"> Telefone:</p>
                            <p className="infoCli"> Sexo:</p>
                            <p className="infoCli"> Data de nascimento:</p>

                            <div className="bt-perfil">
                                <a className="btperfil" href="../perfil/alterar">
                                    <p>Salvar</p>
                                </a>
                            </div>
                            </div>

            </div>

            <div className="cont3-per">
                
            </div>

        </div>
            

        </main>



    )
}



