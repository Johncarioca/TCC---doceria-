import { useEffect, useState } from "react";
import "./index.scss";

import { ListaPedido } from "../../../api/adm/tabelasAdmAPI.js";

export default function LPedidos() {

    const [pedido,setPedido]=useState([]);

    function lista(){
      try {
        const r=ListaPedido();
        setPedido(r);
      } catch (err) {
        alert(err.message);
      }
    } 

    useEffect(() => {
      lista();
    },[]);

  return (
    <main className="LPed">
      <header className="cabeçalho-LP">
        <div className="div1-cabLP">
          <div className="sub-div1-cabLP">
            <img className="seta-cabLP" src="/assets/image/seta.png" alt="" />
            <img className="logo-LP" src="/assets/image/oi.png" alt="" />
          </div>

          <div className="tit-cabLP">
            <h2 className="lista-cabLP">Lista de produtos</h2>
          </div>

          <div className="sub-div2-cabLP">
            <a className="a-sub-div2-cabLP" href="/">
              Lista de pedidos
            </a>
            <a className="a-sub-div2-cabLP" href="/">
              Home
            </a>
          </div>
        </div>
      </header>

      <section className="sec-LP">
        <div className="Bpesquisa-LP">
          <input type="text" placeholder="Pesquisa..." />

          <img src="/assets/image/lupa.png" alt="" />
        </div>

        <div className="tabela-LP">
          <table>
            <thead>
              <tr key="">
                <th>ID. do Pedido</th>
                <th>Cliente</th>
                <th>Contato</th>
                <th>Qtd. Itens</th>
                <th>Valor Total</th>
                <th>Status</th>
                <th> Data do pedido</th>
                <th>Tipo de Pagamento</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {pedido.map( item => 

                <tr>
                    <td>{item.info.pedido}</td>
                    <td>{item.info.cliente}</td>
                    <td>{item.info.contato}</td>
                    <td>{item.info.data}</td>
                    <td>{item.info.status}</td>
                    <td>{item.info.pagamento}</td>
                    <td>{item.info.qtdItens}</td>
                    <td>{item.info.total}</td>
                    <td className="imgs">

                    <button className="but"  >
                    <img src="/assets/image/alterar.png" alt="editar" className='editar'/>
                    </button>
                    
                    <button>
                    <img src="/assets/image/apagar.png" alt="nao" className='nao'/>
                    </button>

                    </td>
                </tr>
                )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
