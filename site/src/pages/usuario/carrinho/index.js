
import './index.scss'

import CabCarrinho from '../../../components/cabecarioCarrinho';
import ItemCarrinho from '../../../components/itemcarrinho';

import { useState, useEffect } from 'react'
import storage from 'local-storage';
import { DetalhesProdutoId } from '../../../api/usuario/produtoAPI';

export default function CarrinhoUsuario(){

    const [itens, setItens] = useState([]);

    function Valortotal() {
        let total = 0 ;
        for(let item of itens){
            total = total + item.produto.preco * item.qtd;

        }
        return total;
    }
    function ItensQtd() {
        return itens.length
        
    }


    function RemoverItem(id){
        
        let carrinho = storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        storage('carrinho', carrinho)
        CarregarCarrinho()
    } 

    async function CarregarCarrinho(){

        let carrinho = storage('carrinho');
        if (carrinho) {

            let temporario = [];

            for(let produto of carrinho){
                const j = await DetalhesProdutoId(produto.id);
                // console.log(j);

                temporario.push({
                    produto: j,
                    qtd: produto.qtd
                });
            }

            // console.log(temporario);
            setItens(temporario);

        }
        
    }


    useEffect(() => {
        CarregarCarrinho();
        Valortotal()
    }, [])
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

                                {itens.map( item =>

                                    <ItemCarrinho 
                                    item ={item} 
                                    RemoverItem={RemoverItem} 
                                    CarregarCarrinho={CarregarCarrinho}/>
                                    
                                )}
                                
                                

                            </div>
                            <div className="grup-desc">

                                <div>
                                    <div>
                                        <h1> SubTotal</h1>
                                        
                                    </div>
                                    <div>
                                        <div>                            
                                            <h5> Total de itens: </h5>{ItensQtd()} itens
                                        </div>
                                        <div>
                                            <h5> Total estimado:  </h5> <p>R$: {Valortotal()}</p>
                                        </div>
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
