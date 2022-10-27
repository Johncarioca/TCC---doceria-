import "./index.scss";

export default function AlterarEmail() {
  return (
    <main className="alterar-email">
      <header className="AE-header">
        <a className="AE-header-set" href="">
          <img className="AE-set" src="../assets/image/setinha2.png" alt="" />
        </a>

        <img className="AE-logo" src="../assets/image/oi.png" alt="" />
      </header>

      <section className="AE-sec">
        <div className="AE-sec-foto">
          <div className="AE-pos-foto" >
            <img
              src="../assets/image/SelecionarImagem.png"
              alt=""
              className="AE-foto"
            />
          </div>

          <input type="file" className="AE-input-foto" />
        </div>

        <div className="AE-inputs-pos" >
          <label> E-mail:</label>
          <input className="AE-input" type="text" />
        </div>

        <div className="AE-inputs-pos" > 
          <label> Senha:</label>
          <input className="AE-input" type="text" />
        </div>

        <div className="AE-button-pos" >
          <button className="AE-button"> Alterar </button>
        </div>
      </section>
    </main>
  );
}
