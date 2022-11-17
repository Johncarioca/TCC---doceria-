import './index.scss'
import { useEffect, useRef, useState } from 'react';
import CabeçarioLogin from '../../../components/cabecalhoLogin/index.js'
import { loginUsuario } from '../../../api/usuario/loginUserAPI.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Storage from 'local-storage';
import LoadingBar from 'react-top-loading-bar';
import storage from 'local-storage'




export default function LoginUsuario() {

    const [email, SetEmail] = useState('');
    const [senha, SetSenha] = useState('');
    const [Carregando, SetCarregando] = useState(false);
    

    const ref = useRef();
    const Navigate = useNavigate()

    async function LogarU() {
        ref.current.continuousStart();
        SetCarregando(true);

        try {
            const f = await loginUsuario(email,senha);
            Storage('Cliente-logado', f);
            toast.dark('Usuario Logado', { autoClose: 1800, hideProgressBar: true});

            setTimeout(() => {
                Navigate('/perfil')
            }, 3000);

        }
        catch (err) {
            ref.current.complete();
            SetCarregando(false);
            toast.error(err.response.data.erro, { autoClose: 700, hideProgressBar: true});

        }
    }


    useEffect(() =>{
        if (storage('Cliente-logado')) {
            Navigate('/perfil')
        }
    })

    return (

        <main className="loginusuario">
            <LoadingBar color='#FDE5DE' ref={ref}/>   
            <CabeçarioLogin />

            <section className='cont1-login'>

                <div className="subcont1-loginuser">

                    <div className="oir">
                        <img className="oir" src="../assets/image/cardloginuser.png" />
                    </div>

                    <div className=" btLinks">
                        <div className="bt">
                            <button className="bt-loginuser" onClick={LogarU} disabled={Carregando}>Entrar</button>
                        </div>
                        <div className="link-loginuser" >
                            <p>Não possui um cadastro ? </p>
                            <a className="a-loginuser" href="../cadastro"> Clique aqui</a>
                        </div>

                    </div>

                </div>

                <div className='subcont2-loginuser'>

                    <div className="vid">

                        <div className='inpucont-loginuser'>
                            <label>E-mail:</label>
                            <input className='input-loginuser' type="text" placeholder='@gmail.com' value={email} onChange={e => SetEmail(e.target.value)} />
                        </div>

                        <div className='inpucont-loginuser'>
                            <label>Senha:</label>
                            <input className='input-loginuser' placeholder='***' type="password" value={senha} onChange={e => SetSenha(e.target.value)} />
                        </div>

                        <div className="link-loginuser" >
                            <p>Esqueceu a Senha ? </p>
                            <p>clique <a className="a-loginuser" href="">aqui</a> </p>
                        </div>
                    </div>
                    

                </div>


            </section>
            

        </main>
    );
}