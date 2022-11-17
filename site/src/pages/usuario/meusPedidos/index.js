import './index.scss';
import CardPedido from '../../../components/CardPedido/index'
import CabecarioPedido from '../../../components/cabecarioCarrinho'
import RodapeLand2 from '../../../components/rodapeLand-2';
import { useEffect, useState } from 'react';
import Storage from 'local-storage';
import { Listapedidos } from '../../../api/usuario/pedidoAPI';
import { toast } from 'react-toastify';



export default function MeusPedidos() {

    const [CardPedidos, setCardPedidos] = useState([]);
    // const [ContarPedidos, setContarPedidos] = useState([0]);

    // function contaPedidos(){
    //     let contador = 0;
    //     let qtdPedido = CardPedidos;

    //     while (qtdPedido >= CardPedidos) {
    //         contador++ 
    //     }
    //     setContarPedidos(contador);

    // }

    async function listaPedidos(){
        try {
            let idUsuario = Storage('Cliente-logado').id;

            const resp = await Listapedidos(idUsuario);

            setCardPedidos(resp);
        } 
        catch (err) {
            if (err.response)

             toast.error(err.response.data.erro);
            else {
             toast.error(err.message)
            }
        }
    }
    useEffect(() => {
        listaPedidos();
        // contaPedidos();
    }, []);

    return (

        <main className="geral">
            <CabecarioPedido/>


            <section className="CardapioGeral">

                <div className="dois">

                    <div className="card-container">

                        {CardPedidos.map(item =>
                            <CardPedido  item={item} />
                        )}

                    </div>

                </div>


            </section>

            <RodapeLand2 />

        </main>
    );
}