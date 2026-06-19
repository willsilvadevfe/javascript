import Cabecalho from "./components/Cabeçalho.jsx";
import ComoFunciona from "./components/ComoFunciona.jsx";
import Hero from "./components/Hero.jsx";
import Servicos from "./components/Servicos.jsx";
import Funcionamento from "./components/ComoFunciona.jsx";
import Avaliacoes from "./components/Avaliacoes.jsx";
import Localizacao from "./components/Localizacao.jsx";
import Rodape from "./components/Rodape.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Hero />
        <Servicos />
        <ComoFunciona />
        <Avaliacoes />
        <Localizacao />
      </main>
      <Rodape />
    </>
  );
}
