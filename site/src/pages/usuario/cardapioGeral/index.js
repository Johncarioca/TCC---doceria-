import './index.scss';

import CardCabecario from '../../../components/cabecalhoCardapio';
import CardCardapioGeral from '../../../components/CorpoCardapioGeral'

export default function CardapioGeral(){

    return(

        <main>

            <header>
                <CardCabecario/>
            </header>

            <section>
                <CardCardapioGeral/>
            </section>

        </main>
    );
}