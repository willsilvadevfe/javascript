import { useState } from "react";
import './TestApi.css'

const TestApi = () => {
  const [country, setCountry] = useState([{}]);
  const [nameCountry, setNameCountry] = useState("")

  const searchCountry = () => {
    fetch(`https://restcountries.com/v3.1/name/${nameCountry}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
        console.log(data[0]);
      })
      .catch((error) => {
        console.log("Erro:", error);
      });
  };

  return (
    <div className="bodyApi">
        <h2>Search Country API</h2>
        <div className="search">
            <input type="text" value={nameCountry} placeholder="Country name" onChange={(e) => setNameCountry(e.target.value)}  />
                  <button onClick={searchCountry}>Buscar</button>
        </div>
      <div>
        <div className="flags">
            <p><img src={country.flags?.svg}  style={{width: 210}} /></p>
            <p><img src={country.coatOfArms?.svg}  style={{width: 150}}/></p>
        </div>
        <p>Área: {country.area}</p>
        <p>Continente: {country.continents}</p>
        <p>Capital: {country.capital}</p>
        <p>Nome Oficial: {country.name?.official}</p>
        <p>População: {country.population}</p>
        <p>Região: {country.region}</p>
      </div>
    </div>
  );
};

export default TestApi;
