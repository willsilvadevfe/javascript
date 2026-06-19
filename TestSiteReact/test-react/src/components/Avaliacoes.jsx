import "./Avaliacoes.css";


const distribuicao = [
  { estrelas: 5, porcentagem: 95 },
  { estrelas: 4, porcentagem: 5 },
  { estrelas: 3, porcentagem: 0 },
  { estrelas: 2, porcentagem: 0 },
  { estrelas: 1, porcentagem: 0 },
];

const depoimentos = [
  {
    texto: "Excelente lavanderia! Preço ótimo e atendimento excepcional...",
    autor: "Éven Lorena",
    sub: "2 meses atrás",
  },
  {
    texto: "Ótimo atendimento e qualidade dos produtos utilizados...",
    autor: "Natalyssa Sugahara",
    sub: "7 meses atrás",
  },
  {
    texto:
      "Maravilhoso atendimento as roupas chegam super cheirosas e limpas...",
    autor: "Priscilla Alvarenga",
    sub: "9 meses atrás",
  },
];

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="avaliacoes">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <span className="avaliacoes__eyebrow">Resumo do Google</span>
            <h2 className="avaliacoes__titulo">
              Avaliações de quem já lavou com a gente.
            </h2>

            <div className="avaliacoes__resumo">
              <span className="avaliacoes__nota-grande">4,9</span>
              <div>
                <div className="avaliacoes__estrelas" aria-hidden="true">
                  ★★★★★
                </div>
                <p className="avaliacoes__contagem">68 avaliações</p>
              </div>
            </div>

            <div className="avaliacoes__barras">
              {distribuicao.map((linha) => (
                <div className="avaliacoes__linha-barra" key={linha.estrelas}>
                  <span className="avaliacoes__rotulo-estrela">
                    {linha.estrelas}
                  </span>
                  <div className="avaliacoes__barra-fundo">
                    <div
                      className="avaliacoes__barra-preenchida"
                      style={{ width: `${linha.porcentagem}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              {depoimentos.map((depoimento) => (
                <div className="col-md-6" key={depoimento.texto}>
                  <div className="avaliacoes__cartao">
                    <div className="avaliacoes__cartao-estrelas" aria-hidden="true">
                      ★★★★★
                    </div>
                    <p className="avaliacoes__cartao-texto">
                      “{depoimento.texto}”
                    </p>
                    <div className="avaliacoes_autor-sub">
                      <p className="avaliacoes__cartao-autor">
                        {depoimento.autor}
                      </p>
                      <small className="avaliacoes__small-sub">{depoimento.sub}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}