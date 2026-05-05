import './TestComponent.css'

const TestComponent = () => {
  const alterText = (e) => {
    console.log(e);
    alert("Testando estilização dos botões e display flex.");
  };

  return (
    <div>
      <button onClick={alterText} className="btn">
        Button
      </button>
    </div>
  );
};

export default TestComponent;
