import './index.scss'
import { useNavigate } from 'react-router-dom';


export default function AreaAdm() {

    const navigate = useNavigate();

    function pedidos() {
        navigate('/tabelaProduto')
    }

    function cardapio() {
        navigate('/cardapiogeral')
    }

    function inicio() {
        navigate('/')
    }

    return (
        <main className='main-principal'>

            <header className='header'>

                <div className='div-1'>

                    <img className='seta' src="/assets/image/seta.png" alt="" />

                    <img className='logo' src="/assets/image/oi.png" alt="" />
                </div>
                <a onClick={inicio} className='ab'> Home</a>

            </header>
            
            <section className='J'>

                <div className='div-2'>
                    
                    <h1>Area administrativa</h1>

                    <div className='b'>
                        <a onClick={pedidos} > Pedidos </a>
                        <a onClick={cardapio}> Cardapio</a>
                    </div>
                </div>

            </section>

        </main>
    );
}