import { useState } from "react";
import Button from "../../utils/Button";
function Guru() {
  const [addKelas, setAddKelas] = useState(false);

  const toggleAddKelas = () => {
    setAddKelas(!addKelas);
  };
  return (
    <div>
      {/* <h1>{school.name}</h1> */}
      <div>
        <Button color="blue" size="sm" onClick={toggleAddKelas}>
          {addKelas ? (
            "Tambah Kelas"
          ) : (
            <form>
              <input placeholder="masukkan nama kelas" />
              <button>Tambah</button>
            </form>
          )}
        </Button>
      </div>

      <div>Daftar Kelas</div>
      {/* <table>{Kelas.fillter.map()}</table> */}
    </div>
  );
}

export default Guru;
