import { useState } from "react";

const ListRender = () => {
  const [number] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div>
      <ul>
        {number.map((item) => (
          <li>{item * 10}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
