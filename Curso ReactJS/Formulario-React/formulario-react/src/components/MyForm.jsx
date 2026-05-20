import { useState } from "react";
import "./MyForm.module.css";

const MyForm = (user) => {
  // Gerenciamento de dados

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("")

  const handleName = (e) => {
    setName(e.target.value);
  };

  //console.log(name);
  //console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando formulário...");
    console.log(name, email, description, role);

    setName("");
    setEmail("");
    setDescription("")
    setRole("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="myForm">
      <h1>Formulário</h1>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={handleName}
        />
      <label>
        <span>Email:</span>
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Descrição:</span>
        <textarea
          name="description"
          placeholder="Descrição..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
      <select name="role" onChange={(e) => setRole(e.target.value)}>
        <option value="Admin">Administrador</option>
        <option value="Editor">Editor</option>
        <option value="Desenvolvedor">Desenvolvedor</option>
      </select>
      <input type="submit" value="Enviar" />
      </div>
    </form>
  );
};

export default MyForm;
