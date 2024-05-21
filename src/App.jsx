import { useState, useEffect } from "react";
import Home from "./pages/Home";
// import Footer from "./pages/Footer";
// import Header from "./pages/Header";
import Welcome from "./pages/Welcome";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // 3000 ms = 3 detik

    return () => clearTimeout(timer);
  }, []);
  return <div className="App">{showWelcome ? <Welcome /> : <Home />}</div>;
}

export default App;
