import { useState, useEffect } from "react";
import "./DataTest.css";

const DataTest = () => {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();


    const product = {
      name,
      price: parseFloat(price),
    };

    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const addedProduct = await response.json();
      // Carregamento dinâmico
      setProduct((prevProduct) => [...prevProduct, addedProduct]);
      setName("");
      setPrice("");
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };

  return (
    <div>
      <div className="response-api">
        <ul>
          {product.map((products) => (
            <li key={products.id}>
              <strong>Produto:</strong> {products.name} -{" "}
              <strong>Preço:</strong> {products.price}
            </li>
          ))}
        </ul>
      </div>
      <div className="form-api">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            <span>Preço:</span>
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <button type="submit" value="criar">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataTest;
