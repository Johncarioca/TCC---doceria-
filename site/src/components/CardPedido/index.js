import './index.scss'

export default function CardPedido(props){

    return(
        <main className="CardPed">
            <section>
                <h4> Pedido </h4>
            </section>

            <section className="sec-img">
                <img className='compra' src="./assets/image/bolsaCompras2.png" alt="" />
            </section>

            <section className="sec-info1">
                <h4>
                    Itens: 
                </h4>
                <p>
                    {props.item.itens}           
                </p>
            </section>

            <section className="sec-info1">
                <h4>
                    Total:
                </h4>
                <p>
                    R$:{props.item.vlTotal},00
                </p>
            </section>

            <section className="sec-info2">
                <h4>
                    Endereço:
                </h4>
                <p>
                    {props.item.rua}         
                </p>
            </section>

            <section className="sec-status">
                <img src="./assets/image/CardPedido/CardPedido-Entregue.png" alt="" />
                <p>
                    {props.item.status}
                </p>
            </section>
        </main>
    )
}