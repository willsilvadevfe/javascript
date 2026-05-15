import { useState } from "react";
import "./App.css";
import Road from "./assets/road.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ListRender from "./components/ListRender";
import ListRenderKey from "./components/ListRenderKey";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";


function App() {
  const usuario = "Joaquim";

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }


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
      <ShowUserName usuario={usuario} />
      <CarDetails
        brand="Volkswagen"
        KM={236800}
        color="Branco"
        year={2008}
        flex={false}
      />
      <Container myValue="001">
        <p>Conteudo dentro do <code>Container</code> no <code>App.jsx</code></p>
      </Container>
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      
    </>
  );
}

export default App;
