import axios from "axios";
import { json } from "body-parser";
import React, { useState } from "react";

const Register = () => {
  const [formData, setFromData] = useState({
    email: '',
    password: '',
    role: 'Wali Murid',
  })

  const { email, password, role } = formData;

  const onChange = (e) => setFromData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await
        axios.post('http://localhost:5050/register', formData)
      console.log(res.data)
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <>
      <div className="bg-blue-200 h-48 rounded-md mb-4">
        <form>
          <div className="mb-4">
            <label
              htmlFor="nomorhp"
              className="block text-gray-700 font-bold mb-2"
            >
              Nomor Hp
            </label>
            <input
              type="nomorhp"
              id="nomorhp"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan Nomor Hp"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan password"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
