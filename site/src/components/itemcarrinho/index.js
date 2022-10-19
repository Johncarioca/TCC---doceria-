import './index.scss';

export default function ItemCarrinho () {
    return(

        <main>
            <section className="intemCar">
                <div className="nomeproduto">
                        <p className="nmproduto"> Bolo de camada dupla:</p>
                     </div>
                <div className="info-produtos">
                    
                    
                    <img className="imgPoroduto" src="/assets/image/boloCamada.png "alt="" />
                   
                    <div className="dados-produto ">

                       <div className="sub-dados">
                          <p className="dados1">Disponivel:</p>
                          <p className="dados2">sim </p>
                        
                       </div>
                       <div className="sub-dados">
                          <p className="dados1">Cada:</p>
                          <p className="dados2"> R$:160,00 </p>
                        
                       </div>

                       <div className="sub-dados">
                          <p className="dados1">Total:</p>
                          <p className="dados2">R$:160,00 </p>
                        
                       </div>

                    </div>

                    <div className="dropCar">
                         <img src="/assets/image/lixo.png" alt="" />
                    </div>

                </div>
            </section>
        </main>
    )
    
}