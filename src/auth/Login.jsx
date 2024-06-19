import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../utils/Button";

const users = [
  {
    phoneNumber: "0987654321",
    password: "password123",
    role: "guru",
  },
  {
    phoneNumber: "0987654321",
    password: "password456",
    role: "wali",
  },
];

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) =>
        user.password === password &&
        user.phoneNumber === phoneNumber &&
        user.role === role
    );
    if (user) {
      if (user.role === "guru") {
        navigate("/guru");
      } else if (user.role === "wali") {
        navigate("/wali");
      }
    } else {
      alert("Nomor Hp atau password salah");
    }
  };

  return (
    <div className="bg-gray-100 h-[260px] rounded-md mb-2">
      <form onSubmit={handleLogin}>
        <div className="mb-2 p-1">
          <label className="block text-gray-700 font-bold mb-2">Nomor Hp</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan Nomor Hp"
          />
        </div>
        <div className="p-1">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan password"
          />
        </div>
        <div className="block pt-3 pb-2 space-x-4">
          <label>
            <input
              type="radio"
              name="role"
              value="guru"
              onChange={(e) => setRole(e.target.value)}
              className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Guru
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="wali"
              onChange={(e) => setRole(e.target.value)}
              className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Wali
          </label>
        </div>

        <Button size="sm" color="blue" type="submit">
          Masuk
        </Button>
      </form>
    </div>
  );
}

export default Login;
