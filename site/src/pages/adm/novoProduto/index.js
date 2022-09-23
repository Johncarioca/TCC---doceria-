import './index.scss';

export default function NovoProduto(){


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
                    <input type='file' />
                    
                    <div className='cadas'>
                        <button > cadastrar </button>
                    </div>

                </div>

                <div className='div-2'>
                    
                    <h3 > Nome do produto:  </h3>
                    <input  type='text' />

                    <h3 > Peso:  </h3>
                    <input  type='text' />
                        
                    <h3>  Ingredientes:  </h3>
                    <input  type='text' />

                    
                    <input className="destaque" type="checkbox" /> Em Destaque 

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
                     <input type='text' />

                    <h3>  Estoque:  </h3>
                    <input  type='text' />

                    <h3> Descrição </h3>
                    <input  type='text' />
                        
                        
                </div>

            </section>
        </main>
    );
}