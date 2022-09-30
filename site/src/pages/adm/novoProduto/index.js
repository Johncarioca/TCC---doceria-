import './index.scss';
import {useState} from 'react'

import{NovoProduto,ImagemProduto,ListarCategorias}from '../../../api/admAPI.js'

export default function NovoProduto(){
    const [nome,setNome]= useState("");
    const [peso,setPeso]= useState();
    const [preco,setPreco]= useState();
    const [sinopse,setSinopse]= useState("");
    const [ingredientes,setIngredientes]= useState("");
    const [estoque,setEstoque]= useState();
    const [destaque,setDestaque]= useState(false);
    //const [categoria,setCategoria]= useState("");
   //const [imagem,setImagem]= useState("");


   async function CadastrarProduto(){
     try {
      const r= await NovoProduto(nome,peso,preco,sinopse,ingredientes,estoque,destaque,categoria);

    alert('Produto cadastrado');  
     } catch (err) {
        alert(err.message);
     }
   }; 

   async function ListarCategorias(){
    try {
        const r=await ListarCategorias();
        
    } catch (err) {
                          
    }
   }

    return(
        <main className="novo-pedido">

            <header className='vermelho'>

                <div className='f-1'>

                    <img className='seta' src="/assets/image/seta.png" alt="" />

                    <img className='logo' src="/assets/image/logoAreaAdm.png" alt="" />
                </div>

                <div>
                    <a className='ab'> Lista de pedidos </a>
                    <a className='ab'> Home</a>
                </div>
            </header>


            <section className="robson">

                <section className="cleito">
                    <div className='div-1'>

                        <div className="dois">
                            <p> Imagem do produto: </p>

                            <div className="inserir-imagem">
                                <button className="colocar"  />
                            </div>
                        </div>
                        <div className='cadas'>
                            <button className="button" > SALVAR </button>
                        </div>

                    </div>

                    <div className='div-2'>
                        <div className="roger">
                            <p > Nome do produto:  </p>
                            <input type='text' placeholder='coxinha...'  className="infos"   value={nome} onChange={e=>setNome(e.target.value)}/>
                        </div>

                        <div className="roger">
                            <p > Peso:  </p>
                            <input type='text' placeholder='10g...'  className="infos" value={peso} onChange={e => setPeso(e.target.value)} />
                        </div>

                        <div className="roger">
                            <p>  Ingredientes:  </p>
                            <input type='text' placeholder='ingredientes...' className="infos ingrediente" value={ingredientes} onchange={e => setIngredientes(e.target.value)}/>
                        </div>

                        <div className='div-destaque'>
                            <input className="destaque" type="checkbox"  value={destaque} onChange={e => setDestaque(e.target.value)} />
                            <p>Em destaque</p>
                        </div>
                    </div>

                    <div className='div-3'>

                        <div className="roger">
                            <p> Categoria: </p>
                            <select  >
                                <option selected disabled hidden>Selecione</option>
                                <option>Doces</option>
                                <option>Salgados</option>
                                <option>Bolos</option>
                            </select>
                        </div>

                        <div className="roger">
                            <p >  Preço:  </p>
                            <input type='text' placeholder='R$2,00...' className="infos" value={preco} onChange={e => setPreco(e.target.value)}/>
                        </div>

                        <div className="roger">
                            <p>  Estoque:  </p>
                            <input type='text' placeholder='500...' className="infos" value={estoque} onChange={e => setEstoque(e.target.value)} />
                        </div>
                            
                        <div className="roger">
                            <p> Descrição </p>
                            <input type='text' placeholder='gostosinho...' className="infos descricao"  value={sinopse} onChange={e => setSinopse(e.target.value)} />
                        </div>

                    </div>
                </section>
            </section>
        </main>
    );
}