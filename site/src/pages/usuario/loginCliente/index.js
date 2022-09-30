import './index.scss'
//import  CabeçarioLogin from '../../../components/cabecalhoLogin/'

export default function LoginUsuario(){

    return(

        <main className="loginusuario">
            <CabeçarioLogin/>    
            
            <section className='cont1-login'>

                <div>
                    <img src="../assets/image/cardloginuser.png" />

                    <button>  
                        Entrar
                    </button>

                    <p>Não possui um cadastro ? </p>
                    <p>clique <a href="">aqui</a> </p>

                </div>

                <div>

                    <label>E-mail:</label>
                    <input type="text" placeholder='@gmail.com' />

                    <label>Senha:</label>
                    <input type="password" />

                    <p>Esqueceu a senha ? </p>
                    <p>clique <a href="">aqui</a> </p>
                </div>
               

            </section>

        </main>
    );
}