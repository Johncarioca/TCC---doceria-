import './index.scss';

export default function LoginAdm(){


    return(
        <main >

            <header>
                
                <div>
                    <img src="/assets/image/logoLoginAdm.png" alt="" />
                </div>

            </header>
             

            <section>
                    
                <div className='sub1-f1'>

                    <div>
                        <img className='seta' src="/assets/image/cardlogadm.png" alt="" />
                    </div>

                    <div className="button">
                        <button > Salvar </button>
                    </div>

                </div>

                <div className='sub2-f1'>
                        
                    <h3 > E-Mail: </h3>
                    <input type='text' />
                    <h3> Senha:</h3>     
                    <input type='text' />                    
                </div>

            </section>
        </main>


    );
}