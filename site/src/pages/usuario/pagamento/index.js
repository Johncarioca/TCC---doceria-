import './index.scss'
import CardDetalhes from "../../../components/cabecalhoDT";
export default function PagamentoUser() {

return (

    <main className="pagamentos">
        <CardDetalhes/>
         <div className="cont0-pag">

            <div className="cont1-pag">
                
            <div className=" linkspag">
            <a href="../perfil"> Minha conta </a>
            </div>

            <div className=" linkspag">
            <a href="../perfil"> Minhas compras </a>
            </div>

            <div className=" linkspag">
            <a href="../perfil"> cardapio </a>
            </div>
    
         </div>

         <div className="cont2-pag">
            <h1> Pagamentos </h1>
            <p> Olá , seja bem vindo</p>

                <div className="sla">
                <div className="cartao-pag">
                    <p>Cartão</p>
                </div>

                <div className="cartao-pag">
                    <p>Pix</p>
                </div>

                <div className="cartao-pag">
                    <p>Boleto</p>
           
                </div>
                <div className="a1a2">
                    
                </div>
           <div className="info-pag">
           <div className="infocar1-pag">
                <label className="txt" > Nº do cartão:</label>
                <input className='input-pagcar' type="text" />

                <label className="txt" > Nome do proprietario do cartão :</label>
                <input className='input-pagcar' type="text" />

                <label className="txt" > CPF ou CNPJ :</label>
                <input className='input-pagcar' type="text" />

            </div>

            <div className="info2-pag">

            <label className="txt"> Có digo de segurança:</label>
                <input className='input-pagcar' type="text" />

                <label  className="txt"> Parcelas:</label>
                <input className='input-pagcar' type="text" />

            </div>

            </div>
         </div>
           </div>

         <div className="cont3-pag">
            <div className="frete">

            <label > Frete:</label>
                <input className='input-pagcar' type="text" />

            </div>
         </div>
         
         </div>
    </main>
)
}