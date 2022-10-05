import './index.scss'
import  CabeçarioLogin from '../../../components/cabecalhoLogin/index.js'
import { LoginCliente } from '../../../api/admAPI';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginUsuario(){

    const [email, SetEmail ] = useState('');
    const [senha, SetSenha ] = useState('');
    const [Erro, SetErro ] = useState('');


    const navigate= useNavigate();

    async function Logar(email, senha) {
        try {
            const f = await Logar(email , senha)
            navigate('/cardapiogeral')
        } catch (err) {
            if (err.response.status === 401) {
                SetErro(err.response.data.erro);
            }
        }
    }
    
    
    return(

        <main className="loginusuario">
            <CabeçarioLogin/>    
            
            <section className='cont1-login'>

                <div className="subcont1-loginuser">
                    <img src="../assets/image/cardloginuser.png" />

                    <button onClick={Logar} className="bt-loginuser">  
                        Entrar
                    </button>
                    <div className='erro'>
                        {Erro}
                    </div>
                    
                    <div className="link-loginuser" >
                        <p>Não possui um cadastro ? </p>
                        <p>clique <a className="a-loginuser" href="../cadastrouser">aqui</a> </p>
                    </div>
                    

                </div>

                <div className='subcont2-loginuser'>
                    
                    <div className='inpucont-loginuser'>
                        <label >E-mail:</label>
                        <input value={email} className='input-loginuser' type="text" placeholder='@gmail.com' onChange={e => SetEmail(e.target.value)} />
                    </div>

                    <div className='inpucont-loginuser'>
                        <label>Senha:</label>
                        <input value={senha} className='input-loginuser'type="password" onChange={e => SetSenha(e.target.value)} />
                    </div>

                    <div className="link-loginuser" >
                        <p>Esqueceu a senha ? </p>
                        <p>clique <a className="a-loginuser" href="">aqui</a> </p>
                    </div>
                    
                </div>
               

            </section>

        </main>
    );
}