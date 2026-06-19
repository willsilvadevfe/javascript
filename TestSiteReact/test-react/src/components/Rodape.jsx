import "./Rodape.css";

export default function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="container rodape__conteudo">
        <div className="rodape__marca">
          Lave <span className="rodape__marca-destaque">&amp; Pegue</span>
          <p className="rodape__slogan">Lavanderia Jardim América</p>
        </div>

        <nav className="rodape__links" aria-label="Links do rodapé">
          <a href="#servicos">Serviços</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#localizacao">Localização</a>
        </nav>

        <p className="rodape__copy">
          © {anoAtual} Lave &amp; Pegue — São José dos Campos, SP
        </p>
      </div>
    </footer>
  );
}