import "./ComoFunciona.css";

const passos = [
  {
    numero: "01",
    titulo: "Você agenda",
    descricao:
      "Chama no WhatsApp ou liga e combina o melhor horário para retirada das suas roupas.",
  },
  {
    numero: "02",
    titulo: "Nós lavamos",
    descricao:
      "Lavagem, secagem e dobra com cuidado, seguindo o prazo combinado com você.",
  },
  {
    numero: "03",
    titulo: "Entregamos prontinho",
    descricao:
      "Suas roupas voltam limpas, cheirosas e dobradas, direto no endereço combinado.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="como-funciona">
      <div className="container">
        <div className="como-funciona__cabecalho">
          <h2 className="como-funciona__titulo">
            Três passos até a roupa limpa
          </h2>
        </div>

        <div className="row g-4">
          {passos.map((passo, indice) => (
            <div className="col-md-4" key={passo.numero}>
              <div className="como-funciona__passo">
                <span className="como-funciona__numero">{passo.numero}</span>
                <h3 className="como-funciona__passo-titulo">{passo.titulo}</h3>
                <p className="como-funciona__passo-texto">{passo.descricao}</p>
                {indice < passos.length - 1 && (
                  <span
                    className="como-funciona__conector d-none d-md-block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}