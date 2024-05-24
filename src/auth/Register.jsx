import { useState } from "react";
import ChooseSchool from "./ChooseSchool";
import Login from "./Login";

function Register() {
  const [activeTab, setActiveTab] = useState("Guru");

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
        <div className="bg-blue-200 h-48 rounded-md mb-4">
          <ChooseSchool />
          {/* Content goes here */}
        </div>
        <button className="bg-blue-500 text-white w-full py-2 rounded-lg">
          Mendaftar
        </button>
        <div className="text-center mt-4">
          Sudah terdaftar? <Login className="text-blue-500">Masuk</Login>
        </div>
      </div>
    </div>
  );
}

export default Register;
