import { useEffect, useState } from 'react';
import storage from 'local-storage';

import {  ListarEnderecoId } from '../../../api/usuario/enderecoAPI.js';
import CabeçarioLogin from '../../../components/cabecalhoLogin';
import CardEndereco from '../../../components/cardEndereco';
import './index.scss'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




export default function MeusEndereco() {

    const [selectEnde, setselectEnde] = useState();
    // alert(selectEnde);

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


        const r = {'idEnder' :  selectEnde};

        
        if (r > 0|| r.idEnder > 0 ) {
            console.log(r);
            storage('endereco-selecionado', r);
            toast.dark('Endereço foi selecionado');
            Navigate('/pagamento');
            
        }
        else if (!r || r === 0 || r  ){
            toast.error('selecione o Endereço');
        }
        
    }

    function TelasEndere() {
        Navigate('/endereco')
    }

    function telaCardapio(){
        Navigate('/cardarpio')
    }
    function telaMeusPedidos(){
        Navigate('/meuspedidos')
    }
        
    // async function ApagarEndereco() {
        
    //     try {
    //         const idEnd = selectEnde;
            
    //         await ApagarEnderecoId(idEnd);
    //         await ListarEndereco();
    //         toast.dark("Endereço deletado!");


    //     } 
    //     catch (err) {
    //         if (err.response)

    //             toast.error(err.response.data.erro);
    //         else {
    //             toast.error(err.message)
    //         }
            
    //     }
    // }


    useEffect(() => {
        ListarEndereco();
        
    }, []);

    return (
        <main className="MeusPedidos" >
            <div>
                <CabeçarioLogin />
            </div>
            <section className="sectionPrincipal">

                <div className="rsEscura1">

                    <div className="textImage">

                        <div className="Minha">

                            <div onClick={telaMeusPedidos} >

                                <img src="../assets/image/carrinhoPreto.png" alt="" onClick={telaMeusPedidos}/>

                            </div>

                            <p href="/meuspedidos"> Minhas Compras </p>

                        </div>
                        <div className="Minha" >

                            <div >

                                <img onClick={telaCardapio} src="../assets/image/IconeCardapio.png" alt="" />

                            </div>
                            <p onClick={telaCardapio}>Cardapio</p>

                        </div>


                    </div>

                </div>

                <div className="rosaCLara3">

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
                                <CardEndereco item={item} 
                                              selecionar={setselectEnde} 
                                              selecionado={item.id === selectEnde} 
                                            />
                            )}

                        </div>

                        <div className="infos">

                            <div className="botão" onClick={SalvarEnde}>
                                <button> Continuar</button>
                            </div>

                            <div className="botão" onClick={TelasEndere}>
                                <button> Novo</button>
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