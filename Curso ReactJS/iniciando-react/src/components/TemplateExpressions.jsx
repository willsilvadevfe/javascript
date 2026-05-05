import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
  //Váriaveis
  const name = "Willian";
  const data = {
    age: 33,
    job: "Desenvolvedor Full Stack",
    city: "São José dos Campos",
    state: "SP",
    country: "Brasil",
  };

  const num1 = 50;
  const num2 = 45;

  return (
    <div>
      <p>Olá {name}, tudo bem?</p>
      <p>
        Sua profissão é {data.job}, você tem {data.age} anos de idade e mora em{" "}
        {data.city} {data.state} {data.country}.
      </p>
      <p>{num1 + num2}</p>
      <MyComponent />
    </div>
  );
};

export default TemplateExpressions;
