import "./Cabecalho.css";
import {useState} from 'react'

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="cabecalho">
      <nav className="navbar navbar-expand-lg cabecalho__nav">
        <div className="container">
          <a className="navbar-brand cabecalho__marca" href="#topo">
            Lave <span className="cabecalho__marca-destaque">&amp; Pegue</span>
          </a>

          <button
            className="navbar-toggler cabecalho__toggler"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto((aberto) => !aberto)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              menuAberto ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto cabecalho__lista">
              <li className="nav-item">
                <a className="nav-link cabecalho__link" href="#servicos" onClick={fecharMenu}>
                  Serviços
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link cabecalho__link" href="#como-funciona" onClick={fecharMenu}>
                  Como funciona
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link cabecalho__link" href="#avaliacoes" onClick={fecharMenu}>
                  Avaliações
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link cabecalho__link" href="#localizacao" onClick={fecharMenu}>
                  Localização
                </a>
              </li>
              <li className="nav-item ms-lg-3">
                <a
                  className="btn cabecalho__botao-cta"
                  href="https://wa.me/5512991495260"
                  target="_blank"
                  rel="noreferrer"
                  onClick={fecharMenu}
                >
                  Chamar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}