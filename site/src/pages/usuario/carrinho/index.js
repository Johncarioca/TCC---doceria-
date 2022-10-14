
import './index.scss'

import CabCarrinho from '../../../components/cabecarioCarrinho';

export default function CarrinhoUsuario(){
    return(

        <main className="carrimhousuario">
            <header>
            <CabCarrinho/>
            </header>
            <section className = "cont1-carrinho">
                
                <div className="subcont1-carrinho"> 
                    <h1> Itens</h1>
                    
                    <div className="grup-produto"> 
                    
                    </div>
                    <div className="grup-desc">
                        <h3> Entrega </h3>
                        <h5> Total de itens: </h5>
                        <h5> Total estimado: </h5>

                        <button> Continuar</button>
                    </div>
                </div>

            </section>
        </main>

    )

}
