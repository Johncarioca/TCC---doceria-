import { useEffect, useState } from "react";
import "./index.scss";

  import  {listaPedido} from "../../../api/adm/tabelasAdmAPI.js";

export default function LPedidos() {

  const [pedidos, setPedido] = useState([]);

  async function lista() {
    const r = await listaPedido();

    setPedido(r);

    console.log(pedidos);
  }

  useEffect(() => {
    lista();
  }, []);

  return (
    <main className="LPed">
      <header className="cabeçalho-LP">
        <div className="div1-cabLP">
          <div className="sub-div1-cabLP">
            <img className="seta-cabLP" src="/assets/image/etinha.png" alt="" />
            <img className="logo-LP" src="/assets/image/oi.png" alt="" />
          </div>

          <div className="tit-cabLP">
            <h2 className="lista-cabLP">Lista de produtos</h2>
          </div>

          <div className="sub-div2-cabLP">
            <a className="a-sub-div2-cabLP" href="/adm/listapedidos">
              Lista de pedidos
            </a>
            <a className="a-sub-div2-cabLP" href="/">
              Home
            </a>
          </div>
        </div>
      </header>

      <section className="sec">
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

              </tr>
            </thead>

            <tbody>
              {pedidos.map(item =>

                <tr>
                  <td className="branco">{item.id}</td>
                  <td className="cinza">{item.nome}</td>
                  <td className="branco">{item.contato}</td>
                  <td className="cinza">{item.qtdItens}</td>
                  <td className="branco">{item.total}</td>
                  <td className="cinza">{item.status}</td>
                  <td className="branco">{item.data}</td>
                  <td className="cinza">{item.pagamento}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
