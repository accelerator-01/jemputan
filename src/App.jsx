import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import "./index.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1300); // 1300 ms

    return () => clearTimeout(timer);
  }, []);
  return <div className="App">{showWelcome ? <Welcome /> : <Home />}</div>;
}

export default App;
