import "./Localizacao.css";

export default function Localizacao() {
  return (
    <section id="localizacao" className="localizacao">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <span className="localizacao__eyebrow">Onde estamos</span>
            <h2 className="localizacao__titulo">Visite ou peça a retirada</h2>

            <ul className="localizacao__lista">
              <li className="localizacao__item">
                <span className="localizacao__icone" aria-hidden="true">
                  📍
                </span>
                <div>
                  <strong>Endereço</strong>
                  <p>
                    Boulevard América — Av. João Batista de Souza Soares, 2285
                    — Loja 4, Jardim América, São José dos Campos - SP,
                    12235-200
                  </p>
                </div>
              </li>

              <li className="localizacao__item">
                <span className="localizacao__icone" aria-hidden="true">
                  🕐
                </span>
                <div>
                  <strong>Horário</strong>
                  <p>Aberto agora · Fecha às 00:00</p>
                </div>
              </li>

              <li className="localizacao__item">
                <span className="localizacao__icone" aria-hidden="true">
                  📞
                </span>
                <div>
                  <strong>Telefone</strong>
                  <p>
                    <a href="tel:+5512991495260" className="localizacao__link">
                      (12) 99149-5260
                    </a>
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="https://wa.me/5512991495260"
              target="_blank"
              rel="noreferrer"
              className="btn localizacao__botao"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="col-lg-7">
            <div className="localizacao__mapa-moldura">
              <iframe
                title="Mapa da Lavanderia Lave & Pegue Jd. América"
                className="localizacao__mapa"
                src="https://maps.google.com/maps?q=Boulevard%20Am%C3%A9rica%2C%20Av.%20Jo%C3%A3o%20Batista%20de%20Souza%20Soares%2C%202285%20-%20Loja%204%2C%20Jardim%20America%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012235-200&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}