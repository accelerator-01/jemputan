import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSchoolName, fetchLocation } from "../slices/schoolSlice";
import DirectLink from "../utils/DirectLink";

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
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <DirectLink className="mb-4" to="-1">
        &larr; Back
      </DirectLink>
      <h1 className="text-2xl font-bold mb-4">School Registration</h1>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          School Name
        </label>
        <input
          type="text"
          value={schoolNameInput}
          onChange={(e) => setSchoolNameInput(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={handleSetSchoolName}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Set School Name
        </button>
      </div>

      <div className="mb-4">
        <button
          onClick={handleGetLocation}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Get School Location
        </button>
        {status === "loading" && (
          <p className="text-yellow-500 mt-2">Loading...</p>
        )}
        {status === "succeeded" && (
          <div className="mt-2">
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        )}
        {status === "failed" && (
          <p className="text-red-500 mt-2">Error: {error}</p>
        )}
      </div>
    </div>
  );
}

export default SchoolRegistration;
