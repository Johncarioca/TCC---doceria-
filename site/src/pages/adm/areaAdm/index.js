import './index.scss'
import { useNavigate } from 'react-router-dom';


export default function AreaAdm() {

    const navigate = useNavigate();

    function pedidos() {
        navigate('/adm/tabelaproduto')
    }

    function cardapio() {
        navigate('/adm/novoproduto')
    }

    function inicio() {
        navigate('/')
    }

    return (
        <main className='main-principal'>

            <header className='header'>

                <div className='div-1'>

                    <img className='seta' src="/assets/image/setinha.png" alt="" />

                    <img className='logo' src="/assets/image/oi.png" alt="" />
                </div>
                

                <div className="ab">
                    <p className="nomeCategoria" onClick={inicio}>Home</p>
                    <hr/>
                </div>

            </header>
            
            <section className='J'>

                <div className='div-2'>
                    
                    <h1>Area administrativa</h1>

                    <div className='b' onClick={pedidos}>
                        <div className="ap">
                            <a onClick={pedidos} > Pedidos </a>
                        </div>
                        <div className="ap" onClick={cardapio}>
                            <a onClick={cardapio}> Produto</a>
                        </div>
                    </div>
                </div>

            </section>

        </main>
    );
}