import "./Avaliacoes.css";


const distribuicao = [
  { estrelas: 5, porcentagem: 95 },
  { estrelas: 4, porcentagem: 3 },
  { estrelas: 3, porcentagem: 0 },
  { estrelas: 2, porcentagem: 0 },
  { estrelas: 1, porcentagem: 2 },
];

const depoimentos = [
  {
    texto: "Tudo foi entregue no prazo e com acabamento impecável.",
    autor: "Cliente Google",
  },
  {
    texto: "Ótimo serviço, roupas saíram extremamente limpas e cheirosas.",
    autor: "Cliente Google",
  },
  {
    texto:
      "Excelente atendimento, preço acessível comparável com a concorrência da região.",
    autor: "Cliente Google",
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
              4,9 de 5, segundo quem já lavou com a gente
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
                    <p className="avaliacoes__cartao-autor">
                      {depoimento.autor}
                    </p>
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