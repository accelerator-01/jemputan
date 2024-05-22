import { useState } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Button from "../utils/Button";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    if (showRegister) setShowRegister(false); // Tutup register jika login dibuka
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
    if (showLogin) setShowLogin(false); // Tutup login jika register dibuka
  };

  return (
    <div className="bg-background_1 bg-cover bg-center h-screen flex flex-col justify-between">
      <Header className="top-0 left-0 w-full" />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-black text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Home
        </h1>
        <div className="flex space-x-4 bg-gray-500 p-4 rounded">
          <Button
            onClick={toggleLogin}
            color="blue"
            size="md"
            className="text-gray-100 border"
          >
            Login
          </Button>
          <Button
            onClick={toggleRegister}
            color="blue"
            size="md"
            className="text-gray-100 border"
          >
            Register
          </Button>
        </div>
        <div className="mt-4 w-full flex flex-col items-center">
          <div
            className={`w-full max-w-md p-6 bg-white rounded-lg shadow-md transition-transform duration-300 ${
              showLogin ? "scale-100" : "scale-0"
            }`}
          >
            {showLogin && <Login />}
          </div>
          <div
            className={`w-full max-w-md p-6 bg-white rounded-lg shadow-md transition-transform duration-300 ${
              showRegister ? "scale-100" : "scale-0"
            }`}
          >
            {showRegister && <Register />}
          </div>
        </div>
      </div>
      <Footer className="bottom-0 left-0 w-full" />
    </div>
  );
}

export default Home;
