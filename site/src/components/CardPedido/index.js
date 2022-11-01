import './index.scss'

export default function CardPedido(){

    return(
        <main className="CardPed">
            <section>
                <h4> 1°Pedido </h4>
            </section>

            <section className="sec-img">
                <img src="./assets/image/CardPedido/CardPedidoTeste.png" alt="" />
            </section>

            <section className="sec-info1">
                <p>
                    Itens:
                </p>
                <h4>
                    12                
                </h4>
            </section>

            <section className="sec-info1">
                <p>
                    Total:
                </p>
                <h4>
                    R$: 
                </h4>
            </section>

            <section className="sec-info2">
                <p>
                    Endereço:
                </p>
                <h4>
                    Rua de inacio de almeida arruada                
                </h4>
            </section>

            <section className="sec-status">
                <img src="./assets/image/CardPedido/CardPedido-Entregue.png" alt="" />
                <h4>
                    Entregue
                </h4>
            </section>
        </main>
    )
}