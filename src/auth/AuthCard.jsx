import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
// import ChooseSchool from "./ChooseSchool";
import DirectLink from "../utils/DirectLink";
// import Button from "../utils/Button";

function AuthCard() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-0 sm:p-12">
      <DirectLink to="-1">&larr; kembali</DirectLink>
      <div className="mx-auto max-w-md px-2 py-1 bg-white border-0 shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold mb-8 text-center">JEMPUTAN!!</h1>

        {isLogin ? <Login /> : <Register />}

        {isLogin ? (
          <h3>
            Belum terdaftar?{" "}
            <DirectLink onClick={toggleAuth}>Mendaftar</DirectLink>
          </h3>
        ) : (
          <h3>
            Sudah terdaftar? <DirectLink onClick={toggleAuth}>Masuk</DirectLink>
          </h3>
        )}
      </div>
    </div>
  );
}

export default AuthCard;
