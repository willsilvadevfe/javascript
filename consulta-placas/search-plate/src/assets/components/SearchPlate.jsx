import { useState } from "react";
import "./SearchPlate.css";

const SearchPlate = () => {
  const [search, setSearch] = useState([]);

  const SearchPlateApi = () => {
    fetch("https://placas.app.br/api/v1/placas/evn8410", {
      headers: {
        Authorization: "Bearer sk_test_H6RCHqXFhizQaaOMW6VO9GyuEPOX-n6fgdm9XrO8tQw",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSearch(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Busca de dados API</h2>
      <button onClick={SearchPlateApi}>Buscar API</button>
      <p>{search}</p>
    </div>
  );
};

export default SearchPlate;
