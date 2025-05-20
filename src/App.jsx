import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar/>
      </ThemeProvider>
    </>
  );
}

export default App