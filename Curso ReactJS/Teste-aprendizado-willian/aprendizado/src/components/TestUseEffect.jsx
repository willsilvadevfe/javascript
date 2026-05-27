import { useEffect, useState } from "react";
import "./TestUseEffect.css";

// icon-react like
import { GrLike } from "react-icons/gr";

const TestUseEffect = () => {
  // useEffect ao carregar a página, passando uma função assincrona dentro do useEffect e deixando os couchetes vazios indicando que não está fiscalizando nenhuma alteração de um outro componente, couchetes vazios fazem o useEffect carregar quando a página é carregada.

  /* useEffect(() => {
    alert("Seja bem-vindo(a) ao meu site.");
  }, []); */

  // trabalhando com useEffect e useState juntos, useEffect mapeando as alterações do useEffect, e criando uma condição para que quando chegar os 10 likes o useEffect atue na página disparando um alert.

  const [like, setLike] = useState(0); // useState criado iniciando pelo número 0, a partir do click esse valor vai sendo atualizado.


  // useEffect com uma condicional, se o usuário chegar a 10 cliques no botão de like, um alert irá disparar para dar os parabéns ao usuário.
  useEffect( () => {
    if(like == 10){
        alert(`Parabéns você chegou a ${like} likes.`)
    }
  }, [like]) // [like] significa que está sendo mapeado, esse useEffect fica fiscalizando as alterações do meu [like] definido no useState.


  return (
    <div>
      <button className="btnLike" onClick={() => setLike(like + 1)}>
        <GrLike /> {like}
      </button>
    </div>
  );
};

export default TestUseEffect;
