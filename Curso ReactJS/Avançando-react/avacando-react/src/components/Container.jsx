const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>
        Conteudo do <code>Container.jsx</code>
      </h2>
      {children}
      <p>Valor: {myValue}</p>
    </div>
  );
};

export default Container;
