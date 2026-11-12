import { useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Ajouter</button>
      <p>Compteur : {count}</p>
    </div>
  );
}
