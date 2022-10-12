import './index.scss';


import { useNavigate } from 'react-router-dom'
import { useState, Ref, useRef }  from 'react'
import LoadingBar from 'react-top-loading-bar'

import { LoginAdmin } from '../../../api/admAPI.js'

export default function LoginAdm(){

    const [Email, SetEmail ] = useState('');
    const [Senha, SetSenha ] = useState('');
    const [Erro, SetErro ] = useState('');
    const [Carregando, SetCarregando ] = useState(false);
    

    const navigate = useNavigate();
    const ref = useRef();


    async function InserirClick (){
        ref.current.continuousStart();
        SetCarregando(true);

        try {
            const j = await LoginAdmin(Email,Senha);

            setTimeout(() => {
                navigate('/adm/areaadm');    
            }, 3000);
                  
        } 
        catch (err) {
            ref.current.complete();
            SetCarregando(false)
            if (err.response.status === 401) {
                SetErro(err.response.data.erro);
            }
        }
    }


    return(
        <main className="Login-adm" >

            <LoadingBar color='#FDE5DE' ref={ref}/>

            <header className="cabeçalho">
                
                <div>
                    <img src="/assets/image/oi.png" alt="" />
                </div>

            </header>
             

            <section className=" estrutura">
                    
                <div className='sub1-f1'>

                    <div className="igm-bottão">
                        <img className='imagem-1' src="/assets/image/cardlogadm.png" alt="" />
                    </div>

                    <div className="igm-bottão" >
                        <button className="b-salvar" onClick={InserirClick} disabled={Carregando}> Cadastrar </button>
                    </div>

                    <div className="erro">
                        {Erro}
                    </div>

                </div>

                <div className='sub2-f1'>

                    
                    <h1> Login do administrador</h1>
                    
                    <div className="japão">
                        <div className="dois">    
                            <p> E-mail: </p>
                            <input type='text'  className="info" value={Email}  onChange={ e => SetEmail(e.target.value)}/>
                        </div>


                        <div className="dois">
                            <p> Senha:</p>     
                            <input type='password'  className="info" value={Senha}  onChange={ e => SetSenha(e.target.value)}/>
                        </div>
                        
                    </div>
                    
                </div>

            </section>
        </main>


    );
}