import './index.scss'


export default function AreaAdm() {

    return (
        <main className='main-principal'>

            <header className='header'>

                <div className='div-1'>

                    <img className='seta' src="/assets/image/seta.png" alt="" />

                    <img className='logo' src="/assets/image/logoAreaAdm.png" alt="" />
                </div>
                <p> home</p>

            </header>
            <section className='J'>

                <div className='div-2'>
                    
                    <h1>Area administrativa</h1>

                    <div className='b'>
                        <a > Pedidos </a>
                        <a> Cardapio</a>
                    </div>
                </div>

            </section>

        </main>
    );
}