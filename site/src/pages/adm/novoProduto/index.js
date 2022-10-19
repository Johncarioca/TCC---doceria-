import './index.scss';
import {useState ,useEffect} from 'react'


import{CadastrarProduto, ListarCategorias, ImagemProduto }from '../../../api/adm/novoProdutoAPI.js'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { BuscarProdutoId } from '../../../api/adm/tabelasAdmAPI';
import{API_URL} from '../../../api/config';

export default function NovoProduto(){

    const [nome,setNome]= useState("");
    const [peso,setPeso]= useState();
    const [preco,setPreco]= useState();
    const [sinopse,setSinopse]= useState("");
    const [ingredientes,setIngredientes]= useState("");
    const [estoque,setEstoque]= useState();
    const [destaque,setDestaque]= useState(false);
    const [categoria,setCategoria]= useState([0]);
    const [idCategoria,setIdCategoria]=useState(0);

    const {id}=useParams();

    const [imagen,setImagem]= useState();

   useEffect(() => {
        ListCategoria();
        CadastrarProduto();
    }, [])

    async function Produto(){
        try {

            if(!imagen)
                throw new Error('Escolha a img do produto');

            const r = await CadastrarProduto(nome,peso,preco,sinopse,ingredientes,estoque,destaque,idCategoria);
            
            await ImagemProduto(imagen, r.id);
            //  console.log(r.Id);
            toast.dark("Produto Cadastrado")
        } 
        catch (err) {

            if (err.response) {
                toast.error(err.response.data.erro);
            }
            else
                toast.error(err.message);
        }   
    }

    async function ListCategoria(){
    try {
        const r=await ListarCategorias();
        setCategoria(r);
    } 
    catch (err) { }
    }
 
    function escolherImagem(inputId){
        document.getElementById(inputId).click();
    }

    function ExibirImagem(imagem){
        if (imagem === undefined) {
            return '/assets/image/SelecionarImagem.png'
        } 
        else if(typeof(imagem)== "string"){
            return `${API_URL}/${imagem}`
        }
        else {
            return URL.createObjectURL(imagem);
        }
    }

    function CarregarProduto(){
        if (!id) return ;
        const r=BuscarProdutoId(id);
        setNome(r.info.produto);
        setPeso(r.info.peso);
        setPreco(r.info.preco);
        setSinopse(r.info.sinopse);
        setIngredientes(r.info.ingredientes);
        setEstoque(r.info.estoque);
        setDestaque(r.info.destaque);
        setIdCategoria(r.info.categoria);

        if (r.info.imagem.lenght >0) {
            setImagem(r.info.imagem)
        }
    }

    return(
        <main className="novo-pedido">
            <ToastContainer/>

            <header className='vermelho'>

                <div className='f-1'>

                    <img className='seta' src="/assets/image/seta.png" alt="" />

                    <img className='logo' src="/assets/image/oi.png" alt="" />
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

                            <div className="inserir-imagem" >  

                                <img  alt="" src={ExibirImagem(imagen)} onClick={()=> escolherImagem('imagem')}/>
                                <input type="file" id="imagem" onChange={e => setImagem(e.target.files[0])}/>
                            
                            </div>
                        </div>

                        <div className='cadas'>
                            <button className="botao-NP" onClick={Produto}  > SALVAR </button>
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
                            <textarea  placeholder='ingredientes...' className="infos ingrediente" value={ingredientes} onChange={e => setIngredientes(e.target.value)} />
                        </div>
                    

                        <div className='div-destaque'>
                            <input className="destaque" type="checkbox"  value={destaque} onChange={e => setDestaque(e.target.checked)} />
                            <p>Em destaque</p>
                        </div>
                    </div>

                    <div className='div-3'>

                        <div >
                            <p> Categoria: </p>
                            <select value={idCategoria}  onChange={e=> setIdCategoria(e.target.value)}>
                                <option >Selecione</option>
                                {categoria.map(item=>
                                    <option value={item.id}>{item.categoria} </option>
                                )}
                            </select>
                        </div>

                        <div >
                            <p >  Preço:  </p>
                            <input type='text' placeholder='R$2,00...' className="infos" value={preco} onChange={e => setPreco(e.target.value)}/>
                        </div>

                        <div >
                            <p>  Estoque:  </p>
                            <input type='text' placeholder='500...' className="infos" value={estoque} onChange={e => setEstoque(e.target.value)} />
                        </div>
                            
                        <div >
                            <p> Descrição </p>
                            <textarea type='text' placeholder='gostosinho...' className="infos descricao"  value={sinopse} onChange={e => setSinopse(e.target.value)} />
                        </div>

                    </div>
                </section>
            </section>
        </main>
    );
}