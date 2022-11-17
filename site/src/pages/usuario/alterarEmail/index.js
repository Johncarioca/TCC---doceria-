import { useEffect, useState } from "react";
import storage from "local-storage";
import { toast } from "react-toastify";
import "./index.scss";
import { AlterarESUsuar, UsePerfil } from "../../../api/usuario/loginUserAPI";
import { useNavigate } from "react-router-dom";

export default function AlterarEmail() {
  const [Email, SetEmail] = useState("");
  const [Senha, SetSenha] = useState("");

  const Navigate = useNavigate();

  const [infos, setInfos] = useState([]);

  async function CarregarInforUser() {
    let id = storage("Cliente-logado").id;
    const r = await UsePerfil(id);
    setInfos([r]);
  }

  async function AlterarES() {
    try {
      let id = storage("Cliente-logado").id;

      const alteraES = await AlterarESUsuar(id, Email, Senha);
      toast.dark("Email e Senha foi alterado ");
      Navigate("/perfil");
    } catch (err) {
      toast.error(err.response.data.erro);
    }
  }

  useEffect(() => {
    CarregarInforUser();
  }, []);

  return (
    <main className="alterar-email">
      <header className="AE-header">
        <a className="AE-header-set" href="">
          <img className="AE-set" src="../assets/image/setinha.png" alt="" />
        </a>

        <img className="AE-logo" src="../../assets/image/oi.png" alt="" />
      </header>

      <section className="AE-sec">
        <div className="AE-sec-foto">
          <div className="AE-pos-foto">
            <img
              src="../../assets/image/login2.png"
              alt="F49292"
              className="AE-foto"
            />
          </div>
          <input type="file" className="AE-input-foto" />
        </div>

        <div className="AE-inputs-pos">
          <label> E-mail:</label>
          <input
            className="AE-input"
            placeholder="@gmail.com"
            type="text"
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
          />
        </div>

        <div className="AE-inputs-pos">
          <label> Senha:</label>
          <input
            className="AE-input"
            placeholder="***"
            type="password"
            value={Senha}
            onChange={(e) => SetSenha(e.target.value)}
          />
        </div>

        <div className="AE-button-pos" onClick={AlterarES}>
          <button className="AE-button"> Alterar </button>
        </div>
      </section>
    </main>
  );
}
