import './index.scss';


import Storage from 'local-storage';
import { useState } from 'react';

export default function ItemCarrinho({ item: { produto, qtd }, RemoverItem, CarregarCarrinho }) {

    const [QtdProduto, setQtdProduto] = useState(qtd)

    function exibir(imagem) {
        if (!imagem) {
            return `/assets/image/caixa.png`;
        }
        else
            return `http://localhost:5000/${imagem}`
    }

    function Remover() {

        RemoverItem(produto.id);
    }

    function CalcularSubtotal() {
        const Sub = QtdProduto * produto.preco;
        return Sub;
    }

    function AlterarQTD(qtdNovo) {
        setQtdProduto(qtdNovo);

        let carrinho = Storage('carrinho');
        let itStorage = carrinho.find(item => item.id == produto.id);
        itStorage.qtd = qtdNovo;

        Storage('carrinho', carrinho);
        CarregarCarrinho();
    }

    return (

        <main className="Geralll">
            <section className="intemCar">

                <div className="div-branca">

                    <div className="info-produtos">

                        <div className="nomeproduto">

                            <h5 className="nmproduto"> {produto.nome}</h5>

                        </div>

                        <div className="dados-produtos">


                            <div className="dados">

                                <div className="imgPoroduto">
                                    <img src={exibir(produto.imagem)} alt="" />
                                </div>
                                <div className="pp">
                                  
                                    <div className="sub-dados">
                                        <p className="dados1">Peso:</p>
                                        <h6 className="dados2">{produto.peso}kg </h6>
                                    </div>
                                    <div className="sub-dados">
                                        <p className="dados1">Preço:</p>
                                        <h6 className="dados2">R$: {produto.preco},00</h6>
                                    </div>

                                    
                                </div>
                            </div>

                            <div className='subinput'>
                                <div className="sub">
                                    <h5 className="dados1">SubTotal:</h5>
                                    <p className="dados2">{CalcularSubtotal()} </p>
                                </div>

                                <div className="iput">
                                    <h5>Qtd:</h5>
                                        <select className="input" value={QtdProduto} onChange={e => AlterarQTD(e.target.value)}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
                <div className="dropCar" onClick={Remover}>
                    <img src="/assets/image/lixo.png" alt="" />
                </div>
            </section>
        </main>
    )

}