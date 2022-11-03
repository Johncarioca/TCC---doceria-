import './index.scss'



export default function CardEndereco({item: { id, rua, complemento, estado, referencia, bairro, cep, cidade}, selecionar, selecionado}){



    return(
        <main className="cardEnde" 
            >

            <section className="corpo" onClick={() => selecionar(id)} 
                                        style={{backgroundColor: selecionado ?  '#883F35' :'#FDE5DE',
                                                color: selecionado ?  '#fff' :'black',
                                                width: selecionado ?  '35%' : '30%',
                                                height: selecionado ?  '9rem' : '8rem',
                                                paddingLeft: selecionado ?  '1rem' : '0rem',
                                                paddingBottom: selecionado ?  '1rem' : '0rem',
                                        }}>

                <div className="casa">

                    <div className="cs">
                        <h2>{referencia}</h2>    
                    </div>
                    <div className="point">
                        <img className="g" src="../assets/image/point.png" alt="" />
                    </div>

                </div>

                <div className="infosEndere">

                    <div className="ph">
                        <p>{rua}</p>
                        <p>-</p>
                        <p>{cep}</p>
                    
                    </div>
                    <div className="ph">
                        <p>
                            {bairro}
                        </p>
                        <p> - </p>
                        <p>
                            {cidade}
                        </p> 
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