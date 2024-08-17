import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BTState } from "./BTState/BTState";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BTState />
    </>
  );
}

export default App;
