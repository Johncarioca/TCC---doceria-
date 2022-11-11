import CardCabecarioUser from '../../../components/cabecalhoUser';
import'./index.scss'






export default function MeusPedidos(){

    return(
        <main className='MeusPedidos'>
            <header>
            <CardCabecarioUser/>
            </header>

            <section className='Principal'>

                <div className="divSub">
                    <div className="cardsPedido">

                    </div>
                    <div className="">

                    </div>
                </div>
            </section>

        </main>
    );
}