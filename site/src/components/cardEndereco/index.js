import './index.scss'



export default function CardEndereco(){

    return(
        <main className="cardEnde">

            <section className="corpo">

                <div className="casa">

                    <div className="cs">
                        <h2>CASA</h2>    
                    </div>
                    <div className="point">
                        <img className="g" src="../assets/image/point.png" alt="" />
                    </div>

                </div>

                <div className="infosEndere">

                    <div className="ph">
                        <p>Rua teixeira de souza</p>
                        <p>-</p>
                        <p>111-111</p>
                    
                    </div>
                    <div className="ph">
                        <p>
                            Praça Cruzeiro
                        </p>
                        <p> - </p>
                        <p>
                            Rio bonito
                        </p> 
                        <p>RJ</p>
                    </div>
                    <div className="ph">
                        <p>Bloco 6 - Apt.33</p>
                    </div>

                
                </div>
            </section>
        </main>
    );
}