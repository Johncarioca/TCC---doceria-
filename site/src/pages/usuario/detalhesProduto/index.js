import './index.scss'
import CardDetalhes from "../../../components/cabecalhoDT";
import { useParams } from 'react-router-dom';
import { DetalhesProdutoId } from '../../../api/usuario/produtoAPI';
import { useEffect, useState } from 'react';



export default function DetalhesProdutos(){

    const [Produto, setProduto] = useState({});

    const { id } = useParams();

    async function CarregarPagina(){
        const r = await DetalhesProdutoId(id);
        console.log(r );
        setProduto(r)
    }

    function exibir(imagem){
        if (!imagem) {
            return`/assets/image/caixa.png`;
        }
        else
            return `http://localhost:5000/${imagem}`
    }


    useEffect(() => {
        CarregarPagina();
    }, [])

    return (
        <main>
            <CardDetalhes/>

            <section className="DetalhesProdutos">
                
                <section className="sectionPrincipal">
                    
                    <div className="div1">
                        
                        <div className="h">
                            <h1>{Produto.nome}</h1>
                        </div>

                        <div className="gmi">

                            <img className="g" src={exibir(Produto.imagem)} alt="" />
                        
                        </div>
                    
                    </div>

                    <div className="div2">
                        
                        <div className="ctb">

                            <div className="chapeu"> 

                                <div> <img className="chefe"  src="/assets/image/masterchefe.png" alt="" /> </div>
                            
                            </div>
                            <div className="divTextos">

                                <div className="tt">
                                    <h1>Ingredientes</h1> 
                                    <p>{Produto.ingrediente}.</p>
                                </div>

                                <div className="tt">
                                    <h1>Descrição</h1>
                                    <p>{Produto.descricao}.</p>
                                </div>

                                <div className="tt">
                                    <p>{Produto.peso}g</p>
                                    <p>R$ {Produto.preco},00</p>
                                </div>

                            </div>
                            <div className="botãoInput">
                                
                                <div className="bottão">

                                    <div className="bt">
                                        <button>Adicionar Carrinho</button>
                                    </div>
                                
                                </div>
                                <div className="qtdInput">

                                    <div className="a">Quantidade: <input type="number" /></div>
                                
                                </div>
                            </div>

                        </div>

                    </div>



                </section>
            
            </section>
        </main>
    );
}