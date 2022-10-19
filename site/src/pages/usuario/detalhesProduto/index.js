import './index.scss'
import CardDetalhes from "../../../components/cabecalhoDT";




export default function DetalhesProdutos(){

    return (
        <main>
            <CardDetalhes/>

            <section className="DetalhesProdutos">
                
                <section className="sectionPrincipal">
                    
                    <div className="div1">
                        
                        <div className="h">
                            <h1>Bolo de camada dupla</h1>
                        </div>

                        <div className="gmi">

                            <img className="g" src="/assets/image/boloCamada.png" alt="" />
                        
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
                                    <p>Ovo, Açúcar, Farinha de trigo, Fermento, Chocolate em pó, Manteiga sem sal.</p>
                                </div>

                                <div className="tt">
                                    <h1>Descrição</h1>
                                    <p>Um delicioso bolo de camada dupla com pedaços de morango.</p>
                                </div>

                                <div className="tt">
                                    <p>300g</p>
                                    <p>R$ 160,00</p>
                                </div>

                            </div>
                            <div className="botãoInput">
                                
                                <div className="bottão">

                                    <div><button>Adicionar Carrinho</button></div>
                                
                                </div>
                                <div className="qtdInput">

                                    <div>Quantidade: <input type="number" /></div>
                                
                                </div>
                            </div>

                        </div>

                    </div>



                </section>
            
            </section>
        </main>
    );
}