import './index.scss';

export default function NovoProduto(){


    return(
        <main>
                <header className='cab-1'>

                <div className='f-1'>

                    <img className='seta' src="/assets/image/seta.png" alt="" />

                    <img className='logo' src="/assets/image/logoAreaAdm.png" alt="" />
                    </div>
                    <a className='ab'> home</a>
                    <a className='ab'> Lista de pedidos </a>


                </header>

                
                <div className='f-2'>
                    <div className='f2-sub1'>
                    <h3 className='txt'> Imagem do produto: </h3>
                        <input className='inpt-img'type='file' />
                        
                        <button className='bt-salvar'> cadastrar </button>

                    </div>

                    <div className='f2-sub2'>
                        
                    <h3 className='txt' > Nome do produto:  </h3>
                        <input className='input-txt' type='text' />
                        <h3 className='txt'> Peso:  </h3>
                        <input className='input-txt' type='text' />
                        <h3 className='txt'>  Ingredientes:  </h3>
                        <input className='input-txt' type='text' />

                    </div>

                    <div className='f2-sub3'>
                    <h3 className='txt'> Categoria: </h3>
                    <select  >
                            <option selected disabled hidden>Selecione</option>
                    </select>

                    <h3 className='txt' >  Preço:  </h3>
                        <input className='input-txt'type='text' />
                        <h3 className='txt'>  Estoque:  </h3>
                        <input className='input-txt' type='text' />
                        <h3 className='txt'> Descrição </h3>
                        <input className='input-txt' type='text' />
                        
                        
                    </div>


                    

                </div>
        </main>
    );
}