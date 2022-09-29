import './index.scss';


export default function TabelaProduto(){

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
                                <th>Ações</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>brigadeiro de apaixonado</td>
                                <td>02,00</td>
                                <td>2kg</td>
                                <td>500</td>
                                <td>500</td>
                                <td className="imgs">
                                   <button className="but"><img src="/assets/image/alterar.png" alt="editar" className='editar'/></button>
                                   <button><img src="/assets/image/apagar.png" alt="nao" className='nao'/></button>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>
        </main>
    );

}