import "./index.scss";

export default function LPedidos() {
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
              {/* {Produto.map( item =>

                <tr>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.preco}</td>
                    <td>{item.peso}</td>
                    <td>{item.estoque}</td>
                    <td>{item.sinopse}</td>
                    <td>{item.categoria}</td>
                    <td>{item.destaque ? 'Sim' : 'Não'}</td>
                    <td className="imgs">

                    <button className="but" onClick={()=>editar(item.id)} >
                    <img src="/assets/image/alterar.png" alt="editar" className='editar'/>
                    </button>
                    
                    <button onClick={()=>removerProduto(item.id)}>
                    <img src="/assets/image/apagar.png" alt="nao" className='nao'/>
                    </button>

                    </td>
                </tr>
                )} */}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
