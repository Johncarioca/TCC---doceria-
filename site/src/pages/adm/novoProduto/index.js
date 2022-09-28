import './index.scss';
import {usestate} from 'react'

export default function NovoProduto(){
    const [nome,setNome]= usestate("");
    const [peso,setPeso]= usestate();
    const [preco,setPreco]= usestate();
    const [sinopse,setSinopse]= usestate("");
    const [ingredientes,setIngredientes]= usestate("");
    const [estoque,setEstoque]= usestate();
    const [destaque,setDestaque]= usestate(false);
    const [categoria,setCategoria]= usestate("");
    const [imagem,setImagem]= usestate("");



    return(
        <main>  

            <header >

                <div className='f-1'>

                    <img className='seta' src="/assets/image/seta.png" alt="" />

                    <img className='logo' src="/assets/image/logoAreaAdm.png" alt="" />
                </div>
                    
                <div>
                    <a className='ab'> Lista de pedidos </a>
                    <a className='ab'> home</a>
                </div>
            </header>

                
            <section >

                <div className='div-1'>

                    <h3> Imagem do produto: </h3>
                    <input type='file' vaue ={imagem} onChange={e => setImagem(e.target.value)} />
                    
                    <div className='cadas'>
                        <button > cadastrar </button>
                    </div>

                </div>

                <div className='div-2'>
                    
                    <h3 > Nome do produto:  </h3>
                    <input  type='text' value={nome} onChange={e=>setNome(e.target.value)} />

                    <h3 > Peso:  </h3>
                    <input  type='text' value={peso} onChange={e => setPeso(e.target.value)} />
                        
                    <h3>  Ingredientes:  </h3>
                    <input  type='text' value={ingredientes} onchange={e => setIngredientes(e.target.value)}/>

                    
                    <input className="destaque" type="checkbox" value={destaque} onChange={e => setDestaque(e.target.value)}/> Em Destaque 

                </div>

                <div className='div-3'>

                    <h3> Categoria: </h3>
                    <select  >
                        <option selected disabled hidden>Selecione</option>
                        <option>doces</option>
                        <option>Salgados</option>
                        <option>Bolos</option>
                    </select>

                    <h3 >  Preço:  </h3>
                     <input type='text' value={preco} onChange={e => setPreco(e.target.value)}/>

                    <h3>  Estoque:  </h3>
                    <input  type='text' value={estoque} onChange={e => setEstoque(e.target.value)}/>

                    <h3> Descrição </h3>
                    <input  type='text' value={sinopse} onChange={e => setSinopse(e.target.value)}/>
                        
                        
                </div>

            </section>
        </main>
    );
}