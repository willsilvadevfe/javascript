import { useState } from "react";

const ListRenderKey = () => {
  const [alunos, setUsers] = useState([
    { id: 1, nome: "Willian", idade: 33, sexo: "Masculino" },
    { id: 2, nome: "Camila", idade: 30, sexo: "Feminino" },
    { id: 3, nome: "Rose", idade: 54, sexo: "Feminino" },
    { id: 4, nome: "Waldir", idade: 55, sexo: "Masculino" },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((outraCoisa) => {
      console.log(outraCoisa);
      return outraCoisa.filter((alunos) => randomNumber !== alunos.id);
    });
  };

  return (
    <div>
      <h3>Renderização de objetos e adicionando a propriedade key</h3>
      <ul>
        {alunos.map((item) => (
          <li key={item.id}>
            <strong>Nome:</strong> {item.nome} <strong>Idade:</strong>{" "}
            {item.idade} <strong>Sexo:</strong> {item.sexo}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Remove user</button>
    </div>
  );
};

export default ListRenderKey;
