import './index.scss';

import CardCabecario from '../../../components/cabecalhoCardapio';
import CardCardapioGeral from '../../../components/CorpoCardapioGeral'
import { useEffect, useState } from 'react';
import { ProdutosDestaque } from '../../../api/userAPI';

export default function CardapioGeral(){

    const [Produto, setProduto] = useState([]);

    async function cardDestaques(){
        const q = await ProdutosDestaque();
        setProduto(q);
    } 

    useEffect( () => {
        cardDestaques();
    }, []);
    

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

                        {Produto.map(item => 
                            <CardCardapioGeral item={item}/> 
                        )}
                        
                    </div>
                    
                </div>
                
                
            </section>

        </main>
    );
}