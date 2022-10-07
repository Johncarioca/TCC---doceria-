import './index.scss';

import CardCabecario from '../../../components/cabecalhoCardapio';
import CardCardapioGeral from '../../../components/CorpoCardapioGeral'
import { useState } from 'react';

export default function CardapioGeral(){

    const [Produto, setProduto] = useState([]);

    

    return(

        <main className="geral">

            <header>
                <CardCabecario/>
            </header>

            <section className="CardapioGeral">

                <div className="dois">
                    
                    <div className="divPesguisa">
                        <div className="Pesquisa">
                            <input className="barra" type="text" placeholder='Pesquisa...' /> <div> <img className="lupe" src="/assets/image/lupa.png" alt="" /></div>
                        </div>
                    </div>

                    <div className="card-container">

                        {}
                        <CardCardapioGeral/> 
                        
                    </div>
                    
                </div>
                
                
            </section>

        </main>
    );
}