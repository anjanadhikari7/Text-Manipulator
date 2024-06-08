import { useState } from "react";

function ChangeName() {
  const [Name, setName] = useState("Anjan");

  return (
    <div>
      <p>{Name}</p>
      <button onClick={() => setName("Adhikari")}>Change to Surname</button>
    </div>
  );
}
export default ChangeName;
