
import './index.scss'

import CabCarrinho from '../../../components/cabecarioCarrinho';
import ItemCarrinho from '../../../components/itemcarrinho';

export default function CarrinhoUsuario(){
    return(

        <main className="carrimhousuario">
            <header>
            <CabCarrinho/>
            </header>
            <div className = "cont1-carrinho">
                
                <div className="subcont1-carrinho"> 
                    

                    <div className="asDuas">

                        <div className='ite'>
                            <h1> Itens</h1>
                        </div>
                        <div className='delado'>
                            
                            <div className="grup-produto">
                                <ItemCarrinho/>
                                <ItemCarrinho/>
                                
                                
                                
                                
                                
                            </div>
                            <div className="grup-desc">

                                <div>
                                    <div>
                                        <h3> Entrega </h3>
                                        <input type="text" />
                                    </div>
                                    <div>                            
                                        <h5> Total de itens: </h5>
                                        <h5> Total estimado: </h5>

                                    </div>
                                    <div>
                                        <button> Continuar</button>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </main>

    )

}
