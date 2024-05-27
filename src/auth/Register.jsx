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
    <div className="bg-white p-6 rounded shadow-md w-11/12 md:w-1/2 lg:w-1/3">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            name="email"
            value={email}
            onChange={onChange}
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            name="password"
            value={password}
            onChange={onChange}
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <div className="flex space-x-4 mt-1">
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="Guru"
                checked={role === 'Guru'}
                onChange={onChange}
                className="mr-2" />
              Guru
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="Wali Murid"
                className="mr-2"
                checked={role === 'Wali Murid'}
                onChange={onChange}
              />
              Wali Murid
            </label>
          </div>
        </div>
        <button
          type="Submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
