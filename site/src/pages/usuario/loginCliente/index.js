import './index.scss'
<<<<<<< HEAD
import  CabeçarioLogin from '../../../components/cabecalhoLogin/index.js'
=======
//import  CabeçarioLogin from '../../../components/cabecalhoLogin/'
>>>>>>> 723d5f4257e09414a25e9881db43239acbfb0070

export default function LoginUsuario(){

    return(

        <main className="loginusuario">
            <CabeçarioLogin/>    
            
            <section className='cont1-login'>

                <div className="subcont1-loginuser">
                    <img src="../assets/image/cardloginuser.png" />

                    <button className="bt-loginuser">  
                        Entrar
                    </button>
                    
                    <div className="link-loginuser" >
                        <p>Não possui um cadastro ? </p>
                        <p>clique <a className="a-loginuser" href="">aqui</a> </p>
                    </div>
                    

                </div>

                <div className='subcont2-loginuser'>
                    
                    <div className='inpucont-loginuser'>
                        <label >E-mail:</label>
                        <input className='input-loginuser' type="text" placeholder='@gmail.com' />
                    </div>

                    <div className='inpucont-loginuser'>
                        <label>Senha:</label>
                        <input className='input-loginuser'type="password" />
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