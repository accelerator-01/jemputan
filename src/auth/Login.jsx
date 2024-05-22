function Login() {
  return (
    <div className="bg-white p-6 rounded shadow-md w-11/12 md:w-1/2 lg:w-1/3">
      <h2 className="text-2xl font-bold mb-4">Log In</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <div className="flex space-x-4 mt-1">
            <label className="flex items-center">
              <input type="radio" name="role" value="Guru" className="mr-2" />
              Guru
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="Wali Murid"
                className="mr-2"
              />
              Wali Murid
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
