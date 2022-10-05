import './index.scss';

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState }  from 'react'



export default function LoginAdm(){

    const [Email, SetEmail ] = useState('');
    const [Senha, SetSenha ] = useState('');
    const [Erro, SetErro ] = useState('');

    const navigate = useNavigate();
    
    async function InserirClick (){
        try {
            const j = await axios.post('http://localhost:5000/adm/login', {email: Email, senha:Senha });
            navigate('/areaAdm');      
        } 
        catch (err) {
            if (err.response.status === 401) {
                SetErro(err.response.data.erro);
            }
        }
    }


    return(
        <main className="Login-adm" >

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
                        <button className="b-salvar" onClick={InserirClick}> Cadastrar </button>
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
                        <div className="erro">
                            {Erro}
                        </div>
                    </div>
                    
                </div>

            </section>
        </main>


    );
}