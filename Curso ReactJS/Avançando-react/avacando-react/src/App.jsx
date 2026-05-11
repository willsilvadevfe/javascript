import "./App.css";
import Road from "./assets/road.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ListRenderKey from "./components/ListRenderKey";
import ManageData from "./components/ManageData";

function App() {
  return (
    <>
      <h2>Avançando em React</h2>
      <p>
        Importando imagem da pasta public{" "}
        <code>src="/house.jpg" alt="House"</code>
      </p>
      <img src="/house.jpg" alt="House" />

      <p>Importando imagem da pasta assets</p>
      <p>
        Importar a imagem no inicio do código como se fosse um componente{" "}
        <code>import Road from './assets/road.jpg'</code>
      </p>
      <p>
        chamar via tag <strong>img</strong> no código, passando o{" "}
        <strong>src</strong> entre chaves com o{" "}
        <strong>nome do componente.</strong>
      </p>
      <img src={Road} alt="Road" />
      <ManageData />
      <ListRender />
      <ListRenderKey />
      <ConditionalRender />
    </>
  );
}

export default App;
