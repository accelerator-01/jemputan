function Login() {
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

export default Login;
