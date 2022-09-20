import './index.scss';

export default function LoginAdm(){


    return(
        <section className= 'login-adm'>
             

                <div classname= 'f1-loginadm'>
                    
                    <div classname='sub1-f1'>
                        <img className='seta' src="/assets/image/cardlogadm.png" alt="" />
                        <button className='bt-salvar'> Salvar </button>

                    </div>

                    <div classname='sub2-f1'>
                        
                        <h3 > E-Mail: </h3>
                        <input type='text' />
                        <h3> Senha:</h3>     
                        <input type='text' />                    
                    </div>

                </div>
        </section>


    );
}