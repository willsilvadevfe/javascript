import { useState } from "react";
import "./ApiTest.css";

const ApiTest = () => {
  const [message, setMessage] = useState([{}]);
  const randomNumber = Math.floor(Math.random() * 51)
  

  const handleMessage = () => {
    fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
        console.log(data);
      });
  };

  return (
    <div>
      <h2>Application Programming Interface</h2>
      <button onClick={handleMessage}>Mensagem</button>
      <p>{message.slip?.advice}</p>
    </div>
  );
};

export default ApiTest;
