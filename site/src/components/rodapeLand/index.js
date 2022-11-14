import "./index.scss";

export default function RodapeLand() {
  return (
    <main className="rod-land">
      <div className="rod-pos">
        {/* mapa */}
        <section className="rodl-sec1">
          <div className="rod-logo">
            <img src="./assets/image/oi.png" alt="" />
          </div>

          <div className="rod-map">
            <img src="./assets/image/mapa.png" alt="" />
          </div>

          <div className="rod-but">
            <a href="/adm/login">
              <button>Área admistrativa</button>
            </a>
          </div>
        </section>

        {/* meio */}
        <section className="rodl-sec2" >
          <div className="rodl-sec2-p">
            <p className="p-bold" >Siga-nos</p>
            <p>nas redes sociais</p>
          </div>

          <div className="rodl-sec2-img">
            <img src="./assets/image/twitter.png" alt="" />
            <img src="./assets/image/instagram.png" alt="" />
            <img src="./assets/image/facebook.png" alt="" />
            <img src="./assets/image/o-email.png" alt="" />
          </div>
        </section>

        {/* final */}
        <section className="rodl-sec3" >
          <p className="rodl-sec3-p1">Fale conosco: </p>

          <p className="rodl-sec3-p2">(11) 5693-8693 </p>

          <p className="rodl-sec3-p2" >+44 2912-345678 </p>
        </section>
      </div>
    </main>
  );
}
