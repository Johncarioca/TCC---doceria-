import './index.scss'
import { useState } from 'react'
import CabeçarioLogin from '../../../components/cabecalhoLogin/index.js'
import { CadastroUsuar, ImagemCadastroUser } from '../../../api/usuario/loginUserAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RodapeLand2 from '../../../components/rodapeLand-2';
import { useNavigate } from 'react-router-dom';

export default function  CadastroUsuario() {

    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Nome, setNome] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [Nascimento, setNascimento] = useState('');
    const [CPF, setCPF] = useState('');

    const [imangen, setImangen] = useState();

        const Navigate = useNavigate();

    async function Cadastrar() {
        try {

            if (!imangen)
                throw new Error('Escolha a img do produto');

            const r = await CadastroUsuar(Nome, CPF, Nascimento, Telefone, Email, Senha);
            // console.log(r.id);
            await ImagemCadastroUser(imangen, r.id);
            toast.dark('Usuario foi cadastrado ');
            Navigate('/login');
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }
    function escolherImagem(inputId) {
        document.getElementById(inputId).click();
    }

    function ExibirImagem(imangen) {
        if (imangen === undefined) {
            return '/assets/image/SelecionarImagem.png'
        } else {
            return URL.createObjectURL(imangen);
        }
    }




    return (

        <main className="cadastrousuario">
            <ToastContainer />
            <CabeçarioLogin />

            <section className=" cont1-cadastro">

                <div className="alinhamento-cadastrouser">
                    <div className="subcon1-cadastro">

                        <div className="Imgcadastro">
                            <p> Foto de perfil: </p>

                            <div className="inserir-imagem">
                                <img alt="" src={ExibirImagem(imangen)} onClick={() => escolherImagem('imagem')} />
                                <input className='igm' type="file" id="imagem" onChange={e => setImangen(e.target.files[0])} />
                            </div>
                        </div>

                        <div className='inpucont-cadastro'>
                            <label >E-mail:</label>
                            <input className='input-cadastro' type="text" placeholder='@gmail.com' value={Email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className='inpucont-cadastro'>
                            <label>Senha:</label>
                            <input className='input-cadastro' placeholder='***' type="password" value={Senha} onChange={e => setSenha(e.target.value)} />
                        </div>
                        <div className='inpucont-cadastro'>
                            <label > Nome:</label>
                            <input className='input-cadastro' type="text" placeholder='...' value={Nome} onChange={e => setNome(e.target.value)} />
                        </div>


                    </div>

                    <div className="subcon2-cadastro">

                        <div className='inpu-cadast'>
                            <label > Data de nascimento:
                            </label>
                            <input className='input-cadastro' type="date" placeholder='...' value={Nascimento} onChange={e => setNascimento(e.target.value)} />
                        </div>

                        <div className='inpu-cadast'>
                            <label > Telefone:</label>
                            <input className='input-cadastro' type="text" placeholder='...' value={Telefone} onChange={e => setTelefone(e.target.value)} />
                        </div>

                        <div className='inpu-cadast'>
                            <label > CPF: </label>
                            <input className='input-cadastro' type="text" placeholder='...' value={CPF} onChange={e => setCPF(e.target.value)} />
                        </div>

                    </div>


                    <div className="subcon3-cadastro">

                        <img className="fun-cad" src="../assets/image/cardloginuser.png" />

                        <button className="bt-cadastrar"  onClick={Cadastrar}> Cadastrar </button>

                        <div className="link-logincadastro" >
                            <p> Já possui uma conta? </p>
                            <p>clique <a className="a-logincadastro" href="../login">aqui</a> </p>
                        </div>

                    </div>
                </div>

            </section>
            <RodapeLand2/>
        </main>

    );

}