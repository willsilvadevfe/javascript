import "./Hero.css";
import { FcGoogle } from "react-icons/fc";

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="container hero__container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            

            <h1 className="hero__titulo">
              Sua roupa lavada, <br />
              <span className="hero__titulo-destaque">sem você levantar um dedo.</span>
            </h1>

            <p className="hero__descricao">
              Entrega, retirada e lavagem completa no Jardim América, São José
              dos Campos. Lavanderia automática, lave e dobre, e secagem —
              tudo com prazo combinado e acabamento impecável.
            </p>

            <div className="hero__acoes">
              <a
                href="https://wa.me/5512991495260"
                target="_blank"
                rel="noreferrer"
                className="btn hero__botao-primario"
              >
                Agendar retirada
              </a>
              <a href="tel:+5512991495260" className="btn hero__botao-secundario">
                (12) 99149-5260
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero__cartao-avaliacao">
              <div className="hero__nota">4,9</div>
              <div className="hero__estrelas" aria-hidden="true">
                ★★★★★
              </div>
              <p className="hero__avaliacoes-texto">68 avaliações no Google</p>
              <hr className="hero__divisor" />
              <p className="hero__depoimento-autor"><FcGoogle size={44} /></p>
              <p className="hero__depoimento">
                “Tudo foi entregue no prazo e com acabamento impecável.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}