import './index.scss'



export default function CardEndereco({item: {rua, complemento, estado, referencia, bairro, cep, cidade} }){



    return(
        <main className="cardEnde">

            <section className="corpo">

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