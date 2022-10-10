import './index.scss'
import  CabeçarioLogin from '../../../components/cabecalhoLogin/index.js'
import { LoginCliente } from '../../../api/userAPI.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginUsuario(){

    const [email, SetEmail ] = useState('');
    const [senha, SetSenha ] = useState('');


    const navigate= useNavigate();

    async function Logar(email, senha) {
        try {
            const f = await LoginCliente(email, senha);
            
            toast("login realizado")
            navigate('/cardapiogeral')
        } catch (err) {
            if (err.response.status === 401) {
                toast.error(err.response.data.erro);
            }
        }
    }
    
    
    return(

        <main className="loginusuario">
            <ToastContainer/>
            <CabeçarioLogin/>    
            
            <section className='cont1-login'>

                <div className="subcont1-loginuser">
                    <img src="../assets/image/cardloginuser.png" />

                    <button  className="bt-loginuser" onClick={Logar} >  
                        Entrar
                    </button>
                    
                    
                    <div className="link-loginuser" >
                        <p>Não possui um cadastro ? </p>
                        <p>clique <a className="a-loginuser" href="../cadastrouser">aqui</a> </p>
                    </div>
                    

                </div>

                <div className='subcont2-loginuser'>
                    
                    <div className='inpucont-loginuser'>
                        <label >E-mail:</label>
                        <input className='input-loginuser' type="text" placeholder='@gmail.com' value={email}  onChange={e => SetEmail(e.target.value)} />
                    </div>

                    <div className='inpucont-loginuser'>
                        <label>Senha:</label>
                        <input className='input-loginuser' type="password" value={senha}  onChange={e => SetSenha(e.target.value)} />
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