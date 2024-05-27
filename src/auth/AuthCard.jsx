import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ChooseSchool from "./ChooseSchool";
import DirectLink from "../utils/DirectLink";
import Button from "../utils/Button";

function AuthCard() {
  const [activeTab, setActiveTab] = useState("Guru");
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 p-4">
      <div className="bg-blue-100 text-center text-2xl font-bold p-2 rounded-md mb-4">
        JEMPUTAN!!
      </div>
      <div className="bg-blue-300 rounded-lg p-4 w-72">
        <div className="flex justify-between mb-4">
          <button
            className={`w-1/2 py-2 rounded-l-lg ${
              activeTab === "Guru" ? "bg-blue-400 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("Guru")}
          >
            Guru
          </button>
          <button
            className={`w-1/2 py-2 rounded-r-lg ${
              activeTab === "Wali" ? "bg-blue-400 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("Wali")}
          >
            Wali
          </button>
        </div>
        <ChooseSchool />
        {isLogin ? <Login /> : <Register />}
        <Button color="blue" size="md" className="w-full py-2 rounded-lg">
          {isLogin ? "Masuk" : "Mendaftar"}
        </Button>
        <DirectLink className="text-center mt-4">
          {isLogin ? (
            <>
              Belum terdaftar? <span onClick={toggleAuth}>Mendaftar</span>
            </>
          ) : (
            <>
              Sudah terdaftar? <span onClick={toggleAuth}>Masuk</span>
            </>
          )}
        </DirectLink>
      </div>
    </div>
  );
}

export default AuthCard;
