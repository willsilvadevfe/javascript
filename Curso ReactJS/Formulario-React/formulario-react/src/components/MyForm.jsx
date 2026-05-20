import { useState } from "react";
import "./MyForm.module.css";

const MyForm = () => {
  // Gerenciamento de dados

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    console.log(e.target.value);
  };
  return (
    <form>
      <h1>Formulário</h1>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName}/>
      </div>
      <label>
        <span>Email:</span>
        <input type="email" name="email" placeholder="Digite seu email" />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default MyForm;
