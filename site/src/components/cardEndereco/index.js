import './index.scss'




    export default function CardEndereco({ item: { id, 
                                                rua, 
                                                complemento, 
                                                estado, 
                                                referencia, 
                                                bairro, 
                                                cep, 
                                                cidade
                                      }, 
                                      selecionar, 
                                      selecionado,
                                      
                                    }){

    



    return(
        <main className="cardEnde" 
            >

            <section className="cor" onClick={() => selecionar(id)} 
                                        style={{backgroundColor: selecionado ?  '#883F35' :'',
                                                color: selecionado ?  '#fff' :'',
                                                width: selecionado ?  '100%' : '100%',
                                                height: selecionado ?  '11rem' : '10rem',
                                                paddingLeft: selecionado ?  '1.5rem' : '',
                                                borderRadius: selecionado ?  '10px' : '',
                                                paddingBottom: selecionado ?  '1rem' : '',
                                        }}>

                {/* <div className="ex" >
                        <img className="xe"  src="../assets/image/excluir2.png" alt="" />
                </div> */}
                <div className="casas">
                    

                    <div className="cs">
                        <h2>{referencia}</h2>    
                    </div>
                    <div className="point">
                        <img className="g" src="../assets/image/point.png" alt="" />
                    </div>

                </div>

                <div className="infosEndere">

                    <div className="ph">
                        <p>{rua} </p>
                        <p>-</p>
                        <p> {cep}</p>
                    
                    </div>
                    <div className="ph">
                        <p>
                            {bairro} 
                        </p>
                        <p> - </p>
                        <p>
                             {cidade}
                        </p> 
                        <p>  -  </p>
                        <p>{estado}</p>
                    </div>
                    <div className="ph">
                        <p>{complemento}</p>
                    </div>

                
                </div>
            </section>
        </main>
    );
}