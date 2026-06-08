import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  console.log(products);
  return (
    <div>
      <h1>Lista de produtos</h1>
    </div>
  );
};

export default App;
