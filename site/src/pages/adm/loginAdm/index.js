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
        <main >

            <header>
                
                <div>
                    <img src="/assets/image/oi.png" alt="" />
                </div>

            </header>
             

            <section>
                    
                <div className='sub1-f1'>

                    <div>
                        <img className='seta' src="/assets/image/cardlogadm.png" alt="" />
                    </div>

                    <div className="button">
                        <button onClick={InserirClick}> Salvar </button>
                    </div>

                </div>

                <div className='sub2-f1'>
                    <div>    
                        <h3 > E-Mail: </h3>
                        <input type='text' placeholder='Email' value={Email}  onChange={ e => SetEmail(e.target.value)}/>
                    </div>
                    
                    <h3> Senha:</h3>     
                    <input type='password' placeholder='***' value={Senha}  onChange={ e => SetSenha(e.target.value)}/>
                    
                </div>

            </section>
        </main>


    );
}