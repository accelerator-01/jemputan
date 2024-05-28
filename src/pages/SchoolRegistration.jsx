import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSchoolName,
  fetchLocation,
  setLocation,
} from "../slices/schoolSlice";
import DirectLink from "../utils/DirectLink";
import Button from "../utils/Button";

function SchoolRegistration() {
  const dispatch = useDispatch();
  const [schoolNameInput, setSchoolNameInput] = useState("");
  const location = useSelector((state) => state.school.location);
  const status = useSelector((state) => state.school.status);
  const error = useSelector((state) => state.school.error);

  const handleGetLocation = () => {
    dispatch(fetchLocation());
  };

  const handleSetSchoolName = () => {
    dispatch(setSchoolName(schoolNameInput));
  };

  return (
    <div className="container mx-auto bg-background_2">
      <DirectLink to="-1">&larr; Kembali</DirectLink>
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <div className="bg-blue-100 text-center text-2xl font-bold p-2 rounded-md m-4">
          JEMPUTAN!!
        </div>

        <div className="bg-blue-300 rounded-lg m-1 p-4 w-72">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nama sekolah
          </label>
          <input
            type="text"
            value={schoolNameInput}
            onChange={(e) => setSchoolNameInput(e.target.value)}
            required
            placeholder="Masukkan Nama Sekolah"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col bg-blue-300 rounded-lg m-4 p-4 w-72">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Alamat
          </label>
          <input
            type="text"
            placeholder="Masukkan alamat"
            required
            onChange={(e) => dispatch(setLocation(e.target.value))}
            value={location}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <Button
            onClick={handleGetLocation}
            color="blue"
            size="sm"
            className="mt-2"
          >
            Bagikan Lokasi Sekolah
          </Button>
          {status === "loading" && (
            <p className="text-yellow-500 mt-2">Loading...</p>
          )}
          {status === "succeeded" && (
            <div className="mt-2 ">
              <p>Latitude: {location.latitude}</p>
              <p>Longitude: {location.longitude}</p>
            </div>
          )}
          {status === "failed" && (
            <p className="text-red-500 mt-2">Error: {error}</p>
          )}
        </div>
        {/* <div className="mb-4">
          <Button onClick={handleGetLocation} color="blue" size="md">
            Bagikan Lokasi Sekolah
          </Button>
          {status === "loading" && (
            <p className="text-yellow-500 mt-2">Loading...</p>
          )}
          {status === "succeeded" && (
            <div className="mt-2 ">
              <p>Latitude: {location.latitude}</p>
              <p>Longitude: {location.longitude}</p>
            </div>
          )}
          {status === "failed" && (
            <p className="text-red-500 mt-2">Error: {error}</p>
          )}
        </div> */}
        <Button
          className="m-4"
          onClick={handleSetSchoolName}
          color="blue"
          size="md"
        >
          Daftarkan
        </Button>
      </div>
    </div>
  );
}

export default SchoolRegistration;
