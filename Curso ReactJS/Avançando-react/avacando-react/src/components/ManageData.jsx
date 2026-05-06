import { useState } from "react";
import "./ManageData.css";

const ManageData = () => {
  const [number, setNumber] = useState(0); 

  return (
    <div>
      <p>Valor: {number}</p>
      <div className="btns">
        <button onClick={() => setNumber(number + 1)}>Adicionar + 1</button> {/*Mudança de estado em tempo real com useState*/}
        <button onClick={() => setNumber(number - 1)}>Subtrair - 1</button> {/*Mudança de estado em tempo real com useState*/}
      </div>
    </div>
  );
};

export default ManageData;
