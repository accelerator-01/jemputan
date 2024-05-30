function Register() {
  return (
    <>
      <div className="bg-blue-200 h-[260px] rounded-md mb-2">
        <form>
          <div className="mb-2 p-1">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Nama Lengkap
            </label>
            <input
              type="username"
              id="username"
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
              type="phonenumber"
              id="phonenumber"
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
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan password"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
