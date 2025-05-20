import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
