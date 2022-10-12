import './index.scss';

import CardCabecario from '../../../components/cabecalhoCardapio';
import CardCardapioGeral from '../../../components/CorpoCardapioGeral'
import { useEffect, useState } from 'react';
import { ProdutosDestaque,BuscarProdutoCardapio } from '../../../api/usuario/cardapioGeralAPI.js';

export default function CardapioGeral(){

    const [Produto, setProduto] = useState([]);
    const [Filtros, setFiltros] = useState('');

    async function BuscaCard(){
        const resposta = await BuscarProdutoCardapio(Filtros);
        setProduto(resposta);
    }   

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
                            <input className="barra" type="text" placeholder='Pesquisa...' value={Filtros}  onChange={e => setFiltros(e.target.value)} /> 
                            <div> <img className="lupe" src="/assets/image/lupa.png" alt="" onClick={BuscaCard} /></div>
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