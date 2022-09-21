import './index.scss';

export default function LoginAdm(){


    return(
        <section >
             <h1> LOGIN DO ADMINISTRADOR</h1>

                <div className= 'f1-loginadm'>
                    
                    <div className='sub1-f1'>
                        <img className='seta' src="/assets/image/cardlogadm.png" alt="" />
                        <button className='bt-salvar'> Salvar </button>

                    </div>

                    <div className='sub2-f1'>
                        
                        <h3 > E-Mail: </h3>
                        <input type='text' />
                        <h3> Senha:</h3>     
                        <input type='text' />                    
                    </div>

                </div>
        </section>


    );
}