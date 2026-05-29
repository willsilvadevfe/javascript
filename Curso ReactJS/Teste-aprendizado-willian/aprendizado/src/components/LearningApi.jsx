import { useState, useRef } from "react";
import "./LearningApi.css";

const LearningApi = () => {
  const [viaCepApi, setViaCepApi] = useState({});
  const [postalCode, setPostalCode] = useState("");

  const clearInput = useRef(null)

  // função do botão
  const handleSearchCep = () => {
    fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
      .then((response) => response.json())
      .then((data) => {
        setViaCepApi(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Erro:", error);
      });
  };

  const cleanData = () => {
    setPostalCode("");
    setViaCepApi("");
    clearInput.current.focus()
  };

  return (
    <div>
      <h3>Buscar Código Postal (API ViaCep)</h3>
      <div className="userSearch">
        <input
          type="text"
          required
          maxLength={8}
          minLength={8}
          placeholder="Digite o CEP"
          ref={clearInput}
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <button onClick={handleSearchCep}>Buscar</button>
        <button onClick={cleanData}>Limpar</button>
      </div>
      <div className="data">
        <span>CEP: {viaCepApi.cep}</span>
        <span>Bairro: {viaCepApi.bairro}</span>
        <span>DDD: {viaCepApi.ddd}</span>
        <span>Estado: {viaCepApi.estado}</span>
        <span>Gia: {viaCepApi.gia}</span>
        <span>IBGE: {viaCepApi.ibge}</span>
        <span>Localidade: {viaCepApi.localidade}</span>
        <span>Logradouro: {viaCepApi.logradouro}</span>
        <span>Região: {viaCepApi.regiao}</span>
        <span>UF: {viaCepApi.uf}</span>
      </div>
    </div>
  );
};

export default LearningApi;
