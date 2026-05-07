import { useState } from "react";

const ListRender = () => {
  const [number] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div>
      <h3>Renderização de lista</h3>
      {number.map((item) => (
        <p>Valores no Array: {item}</p>
      ))}
    </div>
  );
};

export default ListRender;
