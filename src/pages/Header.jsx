import Button from "../utils/Button";

function Header() {
  return (
    <div className="w-full flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Jemputan!!</h1>
      <Button to="/school-registration" color="blue" size="sm">
        Daftarkan Sekolah
      </Button>
    </div>
  );
}

export default Header;
