import CabeçarioLogin from '../../../components/cabecalhoLogin';
import './index.scss'

import { useState } from 'react'
import Storage from 'local-storage';
import { toast } from 'react-toastify' 
import { CadastroEndereco } from '../../../api/usuario/enderecoAPI';
import { useNavigate } from 'react-router-dom';
import Block from '../../../components/block';

export default function TelaEndereco(){

    const [rua, setRua] = useState('');
    const [cep, setCEP] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [referencia, setReferencia] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');

    const Navigate = useNavigate();


    async function SalvarEndereco(){
        try {
            const id = Storage('Cliente-logado').id;
            const resp = await CadastroEndereco(id,rua, complemento, estado, referencia, bairro, cep, cidade);
            toast.dark('Endereço Salvo');
            Navigate('/meusendereco');

        }
        catch (err){
            
            if (err.response)

             toast.error(err.response.data.erro);
            else {
             toast.error(err.message)
            }
        }
    }

    function Perfil() {
        Navigate('/perfil')
    }
    function Meuspedidos() {
        Navigate('/meuspedidos')
    }
    function Cardapio() {
        Navigate('/cardapio')
    }

    return(
        <main className="telaEndereco">
            <Block />
            <div>
                <CabeçarioLogin/>
            </div>
            <section className="sectionPrincipal">

                <div className="rosaEscura1">

                    <div className="textImage">

                        <div className="Minhas">

                            <div onClick={Perfil} >

                                <img src="../assets/image/loginPreto.png" alt="" />
                            
                            </div>
                            <p onClick={Perfil}> Minha Conta</p>
    
                        </div>
                        <div className="Minhas">

                            <div onClick={Meuspedidos}>
                            
                                <img src="../assets/image/carrinhoPreto.png" alt="" />
                            
                            </div>
                            
                            <p onClick={Meuspedidos}> Minhas Compras </p>
    
                        </div>
                        <div className="Minhas">

                            <div onClick={Cardapio}>
                            
                                <img src="../assets/image/IconeCardapio.png" alt="" />
                            
                            </div>
                            <p onClick={Cardapio}>Cardápio</p>
    
                        </div>


                    </div>
                    
                </div>

                <div className="rosaCLara">

                    <div className="infos">

                        <div className="h4P">
                            <h2> Endereço </h2>
                            <p>Olá, seja bem vindo, preenchar as informações nécessaria para continuar </p>
                        </div>

                        <div className="inputs">

                            <div className="iptu">
                                <p>Rua</p> <input placeholder='Rua...' type="text" value={rua} onChange={e => setRua(e.target.value)} />
                            </div>

                            <div className="iptu">
                                <p>Cep</p> <input placeholder='255' type="text" value={cep} onChange={e => setCEP(e.target.value)}/>
                            </div>

                            <div className="iptu">
                                <p>Bairro</p> <input placeholder=' Jd primavera' type="text" value={bairro} onChange={e => setBairro(e.target.value)}/>
                            </div>
                            <div className="iptu">
                                <p>Estado</p> <input placeholder='RJ' type="text" value={estado} onChange={e => setEstado(e.target.value)}/>
                            </div>
                            <div className="iptu">
                                <p>Referencia</p> <input placeholder='Casa' type="text" value={referencia} onChange={e => setReferencia(e.target.value)}/>
                            </div>
                            <div className="iptu">
                                <p>Cidade</p> <input placeholder='curitiba' type="text" value={cidade} onChange={e => setCidade(e.target.value)}/>
                            </div>

                            <div className="textArea">
                                <p>Complemento</p> <textarea placeholder='...' cols="30" rows="10" value={complemento} onChange={e => setComplemento(e.target.value)}/> 
                            </div>

                            <div className="botão">
                                <button onClick={SalvarEndereco}> Salvar</button>
                            </div>

                        </div>

                    </div>
                    
                </div>

                <div className="rosaEscura2">
                    
                </div>

            </section>

        </main>
    );
}