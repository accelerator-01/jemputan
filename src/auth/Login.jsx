import PropTypes from "prop-types";

function Login({
  username,
  setUsername,
  phoneNumber,
  setPhoneNumber,
  password,
  setPassword,
}) {
  return (
    <div className="bg-blue-200 h-[260px] rounded-md mb-2">
      <form>
        <div className="mb-2 p-1">
          <label className="block text-gray-700 font-bold mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan Nama Lengkap"
          />
        </div>
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
      </form>
    </div>
  );
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default Login;
