import './index.scss'
import storage from 'local-storage';

import CabCarrinho from '../../../components/cabecarioCarrinho';
import BarraLateral from '../../../components/lateralPerfil';
import { useEffect, useState } from 'react';
import { UsePerfil } from '../../../api/usuario/loginUserAPI.js';
import RodapeLand2 from '../../../components/rodapeLand-2';
import Block from '../../../components/block';
import {API_URL} from '../../../api/config.js'



export default function PerfilUser() {


    const[infos, setInfos] = useState([]);
    const[imagem,setImagem]=useState();

    async function CarregarInforUser(){

        let id = storage('Cliente-logado').id;
        const r = await UsePerfil(id);
        setInfos([r]);

        if(r.imagem)
            setImagem(r.imagem);
    } 

    function ExibirImagem(imagem){
        if (imagem === undefined) {
            return '/assets/image/login2.png';
        } 
        else if (typeof (imagem) == 'string') {
            return `${API_URL}/${imagem}`
        }
        else {
          return URL.createObjectURL(imagem);
      
      }
    }


    useEffect(() => {
        CarregarInforUser();
    }, []);



    return (
        <main className="perfil-user">
            <Block />

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
                    {infos.map( item =>
                        <div className="info-cliente">

                            <div className="infoclin-1">

                                <img className="imguser" src={ExibirImagem(imagem)} alt="" />

                                <div className='infoC-1'>

                                    <p className="nmser"> @{item.nome}</p>

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
                                            
                                                <p className="infoCli">{item.email}</p>


                                                <div>
                                                    <img src="../assets/image/olho.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="frase">

                                            <h3 className="ifoCli"> Cpf:</h3>

                                            <div className='ifelse'>
                                                <p className="infoCli">{item.cpf}</p>

                                                <div>
                                                    <img src="../assets/image/olho.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="frase">

                                            <h3 className="ifoCli"> Rua:</h3>
                                            
                                            <div className='ifelse'>
                                            
                                                <p className="infoCli">{item.rua}</p>

                                                <div>
                                                    <img src="../assets/image/olho.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="frase">

                                            <h3 className="ifoCli"> telefone:</h3>
                                            
                                            <div className='ifelse'>

                                                <p className="infoCli">{item.cell}</p>

                                                <div>
                                                    <img src="../assets/image/olho.png" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="frase">

                                            <h3 className="ifoCli">Data Nasc:</h3>
                                            
                                            <div className='ifelse'>

                                                <p className="infoCli">{item.nascimento.substr(0,10)}</p>

                                                <div>
                                                    <img src="../assets/image/olho.png" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                
                            </div>
                            
                        </div>
                    )}
                </div>

                <div className="cont3-per">
                    <p></p>
                </div>

            </div>
            <RodapeLand2/>


        </main>



    )
}



