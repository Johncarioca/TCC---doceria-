import { useEffect, useState } from 'react';
import storage from 'local-storage';

import { toast, ToastContainer } from 'react-toastify';
import CabeçarioLogin from '../../../components/cabecalhoLogin';
import './index.scss'
import { AlterarImagemUser, AlterarUsuar, UsePerfil } from '../../../api/usuario/loginUserAPI';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import Block from '../../../components/block';
import { API_URL } from '../../../api/config.js'

import { ImagemCadastroUser } from '../../../api/usuario/loginUserAPI';



export default function AlterarPerfilUser() {

    const [Id, setId] = useState();

    const [Nome, setNome] = useState('');
    const [imangen, setImangen] = useState();
    const [Cpf, setCpf] = useState('');
    const [Nascimento, setNascimento] = useState(0);
    const [Numero, setNumero] = useState('');

    const Navigate = useNavigate();

    async function AlterarInfosPerfil() {

        try {
            let id = storage('Cliente-logado').id;

            await AlterarUsuar(Id, Nome, Cpf, Nascimento, Numero);

            await ImagemCadastroUser(imangen, Id)
            // await AlterarImagemUser(Id, imangen );
            toast.dark('Informações do usuario foi alterado ');
            Navigate('/perfil');
        }

        catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    async function CarregarInforUser() {

        let id = storage('Cliente-logado').id;
        const r = await UsePerfil(id);

        setId(r.id);
        setNome(r.nome);
        setCpf(r.cpf);
        setNascimento(r.nascimento.substr(0, 10));
        setNumero(r.cell);

        if (r.imagem)
            setImangen(r.imagem);
    }


    function escolherImagem(inputId) {
        document.getElementById(inputId).click();
    }

    function ExibirImagem(imangen) {
        if (imangen === undefined) {
            return '/assets/image/login2.png';
        }
        else if (typeof (imangen) == 'string') {
            return `${API_URL}/${imangen}`
        }
        else {
            return URL.createObjectURL(imangen);

        }
    }

    useEffect(() => {
        CarregarInforUser();
    }, [])

    //Navigate
    function telaMeusPedidos() {
        Navigate('/meuspedidos')
    }
    function telacardapio() {
        Navigate('/cardapio')
    } 
    function telaEndereco() {
        Navigate('/endereco')
    }

    return (
        <main className="telaEndereco">
            <ToastContainer />
            <Block />
            <div>
                <CabeçarioLogin />
            </div>
            <section className="sectionPrincipal">

                <div className="rosaEscura1">

                    <div className="textImage">

                        <div className="Minhas">

                            <div >

                                <img src="../assets/image/carrinhoPreto.png" alt="" onClick={telaMeusPedidos} />

                            </div>

                            <p onClick={telaMeusPedidos}> Minhas Compras </p>

                        </div>
                        <div className="Minhas">

                            <div >

                                <img src="../assets/image/IconeCardapio.png" alt="" onClick={telacardapio} />

                            </div>
                            <p onClick={telacardapio}>Cardápio</p>

                        </div>


                    </div>

                </div>

                <div className="rosaCLara">

                    <div className="info">

                        <div className="h4P">
                            <h2> Meu Perfil </h2>
                            <p>Gerencie e Proteja sua conta </p>
                        </div>

                        <div className="inpucont-cadastro">

                            <p> Foto de perfil </p>

                            <div className="inserir-imagem">

                                <img alt="" src={ExibirImagem(imangen)} onClick={() => escolherImagem('imagem')} />
                                <input type="file" id="imagem" onChange={e => setImangen(e.target.files[0])} />

                            </div>
                        </div>

                        <div className="ESE">
                            <div className='pa'>
                                <p>E-mail</p>
                                <a href="../perfil/alterar/info">Clique para alterar</a>
                            </div>

                            <div className='pa'>
                                <p>Senha</p>
                                <a href="../perfil/alterar/info">Clique para alterar</a>
                            </div>

                            <div className='pa'>
                                <p>Endereço</p>
                                <a href=""onClick={telaEndereco}>Clique para alterar</a>
                            </div>
                        </div>

                        <div className="inputs">

                            <div className="iptu">
                                <p className='nome'>
                                    Nome
                                </p>
                                <input className="put" placeholder='Rua...' type="text" value={Nome} onChange={e => setNome(e.target.value)} />
                            </div>
                            <div className="iptu">
                                <p className="cpf">
                                    CPF
                                </p>
                                <input className='upt' placeholder='Rua...' type="text" value={Cpf} onChange={e => setCpf(e.target.value)} />
                            </div>

                            <div className="pitu">
                                <div className="DN">
                                    <p className="data">
                                        Data de Nascimento
                                    </p>

                                    <input className="inputDN" placeholder='07/10/2004' type="text" value={Nascimento} onChange={e => setNascimento(e.target.value)} />
                                </div>

                            </div>
                            <div className="pitu">
                                <div className="cell">
                                    <p className="pN">
                                        Número
                                    </p>

                                    <input className="inputN" placeholder='()' type="text" value={Numero} onChange={e => setNumero(e.target.value)} />
                                </div>
                            </div>


                            <div className="botão">
                                <button onClick={AlterarInfosPerfil}> Salvar</button>
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