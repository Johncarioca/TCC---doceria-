import { useEffect, useState } from 'react';
import storage from 'local-storage';

import { ListarEnderecoId } from '../../../api/usuario/enderecoAPI.js';
import CabeçarioLogin from '../../../components/cabecalhoLogin';
import CardEndereco from '../../../components/cardEndereco';
import './index.scss'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




export default function MeusEndereco() {

    const [selectEnde, setselectEnde] = useState();

    const [Enderecos, setEnderecos] = useState([]);

    const Navigate = useNavigate();


    async function ListarEndereco() {
        try {
            let id = storage('Cliente-logado').id;

            const j = await ListarEnderecoId(id);
            setEnderecos(j);

        }
        catch (err) {
            toast.error(err.response.data.erro)
        }
    }

    async function SalvarEnde() {


        const j = {'idEnder' :  selectEnde};

        if (j || j > 0) {
            console.log(j);
            storage('endereco-selecionado', j);
            toast.dark('Endereço Selecionado');
            Navigate('/pagamento');
            setEnderecos(j);
        }
        else {
            toast.error('selecione o Endereço');
        }


    }




    useEffect(() => {
        ListarEndereco();
    }, []);

    return (
        <main className="telaEndereco" >
            <div>
                <CabeçarioLogin />
            </div>
            <section className="sectionPrincipal">

                <div className="rsEscura1">

                    <div className="textImage">

                        <div className="Minhas">

                            <div >

                                <img src="../assets/image/carrinhoPreto.png" alt="" />

                            </div>

                            <p> Minhas Compras </p>

                        </div>
                        <div className="Minhas">

                            <div >

                                <img src="../assets/image/IconeCardapio.png" alt="" />

                            </div>
                            <p>Cardápio</p>

                        </div>


                    </div>

                </div>

                <div className="rosaCLara">

                    <div className="info">

                        <div className="ph4">
                            <h2> Meu Endereços </h2>
                            <p className="gerencie">
                                Gerencie e Proteja sua conta
                            </p>
                            <p className="escolha">
                                Escolha um endereço para finalizar a compra, se caso não tiver aperte o botão de novo para cadastrar
                            </p>
                        </div>

                        <div className="cardEnderecos">

                            {Enderecos.map(item =>
                                <CardEndereco item={item} selecionar={setselectEnde} selecionado={item.id === selectEnde} />
                            )}

                        </div>

                        <div className="infos">

                            <div className="botão" onClick={SalvarEnde}>
                                <button href="/endereco"> Salvar</button>
                            </div>


                        </div>

                    </div>

                </div>

                <div className="rsEscura2">

                </div>

            </section>

        </main>
    );
}