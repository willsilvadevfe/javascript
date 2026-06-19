import "./Servicos.css";

const listaServicos = [
  {
    titulo: "Lavanderia automática",
    descricao:
      "Máquinas profissionais para lavar suas peças com rapidez e cuidado, prontas para retirar no mesmo dia.",
    icone: "🌀",
  },
  {
    titulo: "Lave e dobre",
    descricao:
      "Sua roupa lavada, seca e dobrada com capricho — chega em casa pronta para guardar no armário.",
    icone: "🧺",
  },
  {
    titulo: "Secagem",
    descricao:
      "Secagem profissional para peças do dia a dia, cobertores e roupas de cama, sem manchar ou encolher.",
    icone: "☀️",
  },
  {
    titulo: "Retirada na lavanderia",
    descricao:
      "Prefere trazer você mesmo? Atendimento rápido no balcão, com prazo combinado na hora.",
    icone: "📍",
  },
  {
    titulo: "Entrega",
    descricao:
      "Buscamos e entregamos suas roupas no endereço combinado, sem você precisar saber do trajeto.",
    icone: "🚚",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="servicos">
      <div className="container">
        <div className="servicos__cabecalho">
          <h2 className="servicos__titulo">Tudo o que sua roupa precisa</h2>
          <p className="servicos__subtitulo">
            Do automático ao lave e dobre, com entrega e retirada para
            facilitar sua rotina.
          </p>
        </div>

        <div className="row g-4">
          {listaServicos.map((servico) => (
            <div className="col-md-6 col-lg-4" key={servico.titulo}>
              <div className="servicos__cartao">
                <div className="servicos__icone" aria-hidden="true">
                  {servico.icone}
                </div>
                <h3 className="servicos__cartao-titulo">{servico.titulo}</h3>
                <p className="servicos__cartao-texto">{servico.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}