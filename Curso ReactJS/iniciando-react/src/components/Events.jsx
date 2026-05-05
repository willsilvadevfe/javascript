const Events = () => {
  
  const handleMyEvent = (e) => {
    console.log(e)
    alert("Você clicou no botão")
  }
  
  return (
    <div>
      <button onClick={handleMyEvent}>Disparar Alert</button>
    </div>
  );
};

export default Events;
