import { useEffect, useState } from 'react';

import { listaProduto , DeletarProduto, BuscarProdutoPelaTabela } from '../../../api/adm/tabelasAdmAPI.js';
import { ToastContainer, toast } from 'react-toastify';


import './index.scss';
import { useNavigate } from 'react-router-dom';


export default function TabelaProduto(){

    const [Produto, setProduto] = useState([]);
    const [Filtro, setFiltro] = useState('');

    const navigate = useNavigate();

    async function FiltraProduto (){
        const reposta = await BuscarProdutoPelaTabela(Filtro);
        console.log(Filtro);
        setProduto(reposta);
    }


    async function carregarProduto(){
        const i = await listaProduto();
        setProduto(i)
    }


    async function removerProduto(id){
        try {
            await DeletarProduto(id);
            await carregarProduto();
            toast("produto deletado!")
            
        } catch (err) {
            toast.error(err.message.response.data)
        }
    }

    function editar(id){
        navigate(`/adm/novoproduto/${id}`)
    }

    useEffect( () => {
        carregarProduto();
    }, []); 

    return (
        <main className="page-tabela">
            <ToastContainer/>

            <header className='cabeçalho-TP'> 
                
                <div className="div1-cabTP">

                    <div className="sub-div1-cabTP">
                        
                        <img className="seta-cabTP" src="/assets/image/setinha.png" alt="" />
                        <img className="oi" src="/assets/image/oi.png" alt="" />
                    
                    </div>

                    <div className='tit-cabTP'>
                        
                        <h2 className="lista-cabTP">Lista de produtos</h2>
                        
                    </div>

                    <div className="sub-div2-cabTP">
                        <a className='a-sub-div2-cabTP' href="/">Lista de pedidos</a>
                        <a className='a-sub-div2-cabTP' href="/">Home</a>
                    </div>
                    
                </div>
                
            </header>

            <section className="corpo">

                <div className="barraPesquisa">

                    <input type="text" placeholder='Pesquisa...' value={Filtro} onChange={e => setFiltro(e.target.value)} /> 

                    <img src="/assets/image/lupa.png" alt="" onClick={FiltraProduto}/>
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
                                    <button className="but" onClick={()=>editar(item.id)} ><img src="/assets/image/alterar.png" alt="editar" className='editar'/></button>
                                    <button onClick={()=>removerProduto(item.id)}><img src="/assets/image/apagar.png" alt="nao" className='nao'/></button>

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