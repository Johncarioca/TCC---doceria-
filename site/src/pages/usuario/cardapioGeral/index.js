import './index.scss';

import CardCabecario from '../../../components/cabecalhoCardapio';
import CardCardapioGeral from '../../../components/CorpoCardapioGeral'

export default function CardapioGeral(){

    return(

        <main className="geral">

            <header>
                <CardCabecario/>
            </header>

            <section className="CardapioGeral">

                <div className="dois">
                    <div className="Pesquisa">
                        <input className="barra" type="text" placeholder='Pesquisa...' /> <div> <img className="lupe" src="/assets/image/lupa.png" alt="" /></div>
                    </div>

                    
                    <CardCardapioGeral/>
                    
                </div>
                
            </section>

        </main>
    );
}