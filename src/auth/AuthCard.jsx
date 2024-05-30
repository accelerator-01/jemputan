import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ChooseSchool from "./ChooseSchool";
import DirectLink from "../utils/DirectLink";
import Button from "../utils/Button";

const users = [
  {
    username: "guru123",
    phoneNumber: "0987654321",
    password: "password123",
    role: "guru",
  },
  {
    username: "wali456",
    phoneNumber: "0987654321",
    password: "password456",
    role: "wali",
  },
];

function AuthCard() {
  const [activeTab, setActiveTab] = useState("guru");
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {
    const user = users.find(
      (user) =>
        user.username === username &&
        user.password === password &&
        user.phoneNumber === phoneNumber
    );
    if (user) {
      if (user.role === "guru") {
        navigate("/guru");
      } else if (user.role === "wali") {
        navigate("/wali");
      }
    } else {
      alert("Username, Nomor Hp atau password salah");
    }
  };

  return (
    <div className="h-screen bg-background_2">
      <DirectLink to="-1">&larr; kembali</DirectLink>
      <div className="flex flex-col items-center justify-center min-h-screen p-2">
        <div className="bg-blue-100 text-center text-xl font-bold p-2 rounded-md mb-1">
          JEMPUTAN!!
        </div>
        <div className="bg-blue-300 rounded-lg p-2 w-72">
          <div className="flex justify-between mb-2">
            <button
              className={`w-1/2 py-2 rounded-l-lg transition duration-300 ${
                activeTab === "guru" ? "bg-blue-400 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("guru")}
            >
              Guru
            </button>
            <button
              className={`w-1/2 py-2 rounded-r-lg transition duration-300 ${
                activeTab === "wali" ? "bg-blue-400 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("wali")}
            >
              Wali
            </button>
          </div>

          <ChooseSchool />

          <>
            {isLogin ? (
              <>
                <Login
                  username={username}
                  setUsername={setUsername}
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                  password={password}
                  setPassword={setPassword}
                />
                <Button
                  color="blue"
                  size="md"
                  className="w-full py-2 rounded-lg"
                  onClick={handleLogin}
                >
                  Masuk
                </Button>
              </>
            ) : (
              <Register />
            )}
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
          </>
        </div>
      </div>
    </div>
  );
}

export default AuthCard;
