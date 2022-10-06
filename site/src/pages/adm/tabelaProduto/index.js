import { useEffect, useState } from 'react';
import { listaProduto } from '../../../api/admAPI';
import './index.scss';



export default function TabelaProduto(){

    const [Produto, setProduto] = useState([]);

    async function carregarProduto(){
        const i = await listaProduto();
        setProduto(i)
    }


    useEffect( () => {
        carregarProduto();
    }, []);

    return (
        <main className="page-tabela">

            <header className='cabeçalho'> 
                
                <div className="div-principal">

                    <div className="sub-div1">
                        
                        <div className="sub">

                            <img className="oie" src="/assets/image/seta.png" alt="" />
                            <img className="oi" src="/assets/image/oi.png" alt="" />
                        </div>
                        
                        
                        <h2 className="lista">Lista de produtos</h2>
                        
                    </div>

                    <div className="sub-div2">
                        <a href="/" className="oi">Lista de pedidos</a>
                        <a href="/">Home</a>
                    </div>
                </div>
                
            </header>

            <section className="corpo">

                <div className="barraPesquisa">

                    <input type="text" placeholder='Pesquisa...' /> 

                    
                    <img src="/assets/image/lupa.png" alt="" />
                    

                </div>

                <div className="tabela">
                    <table> 
                        <thead>
                            <tr key="">
                                <th>Id produto</th>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Peso</th>
                                <th>Estoque</th>
                                <th>Descrição</th>
                                <th>categoria</th>
                                <th>destaque</th>
                                <th>Ações</th>

                            </tr>
                        </thead>
                        <tbody>
                            {Produto.map( item =>

                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.preco}</td>
                                    <td>{item.peso}</td>
                                    <td>{item.estoque}</td>
                                    <td>{item.sinopse}</td>
                                    <td>{item.categoria}</td>
                                    <td>{item.destaque ? 'Sim' : 'Não'}</td>
                                    <td className="imgs">
                                    <button className="but"><img src="/assets/image/alterar.png" alt="editar" className='editar'/></button>
                                    <button><img src="/assets/image/apagar.png" alt="nao" className='nao'/></button>

                                    </td>
                                </tr>
                            )}
                            
                        </tbody>
                    </table>
                </div>

            </section>
        </main>
    );

}