import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../utils/Button";
import ChooseSchool from "./ChooseSchool";

function Register() {
  const [userName, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const addUser = {
      school: school,
      username: userName,
      phoneNumber: phoneNumber,
      password: password,
      role: role,
    };

    console.log(addUser);

    if (addUser) {
      if (addUser.role === "guru") {
        navigate("/guru");
      } else if (addUser.role === "wali") {
        navigate("/wali");
      }
    } else {
      alert("Nomor Hp atau password telah digunakan");
    }
  };

  return (
    <>
      <div className="bg-gray-100 h-auto rounded-md mb-2 p-4">
        <ChooseSchool setSchool={setSchool} />
        <form onSubmit={handleRegister} method="POST">
          <div className="mb-2 p-1">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan Nama Lengkap"
            />
          </div>
          <div className="mb-2 p-1">
            <label
              htmlFor="phonenumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Nomor Hp
            </label>
            <input
              type="text"
              id="phonenumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan Nomor Hp"
            />
          </div>
          <div className="p-1">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
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
                value="wali"
                checked={role === "wali"}
                onChange={(e) => setRole(e.target.value)}
                className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
              />
              Wali
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="guru"
                checked={role === "guru"}
                onChange={(e) => setRole(e.target.value)}
                className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
              />
              Guru
            </label>
          </div>
          <Button size="sm" color="blue" type="submit">
            Daftar
          </Button>
        </form>
      </div>
    </>
  );
}

export default Register;
