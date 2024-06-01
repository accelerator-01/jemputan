import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress } from "../slices/schoolSlice";
import DirectLink from "../utils/DirectLink";
import Button from "../utils/Button";
import { Form, useNavigation } from "react-router-dom";

function SchoolRegistration() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [schoolNameInput, setSchoolNameInput] = useState("");
  const {
    location,
    address,
    status: addressStatus,
    error: addressError,
  } = useSelector((state) => state.school);
  const isLoadingAddress = addressStatus === "loading";
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="container mx-auto bg-background_2">
      <DirectLink to="-1">&larr; Kembali</DirectLink>
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <div className="bg-blue-100 text-center text-2xl font-bold p-2 rounded-md m-4">
          JEMPUTAN!!
        </div>

        <Form method="POST">
          <div className="bg-blue-200 p-2 rounded-md">
            <div className="m-1 p-4 w-72 bg-slate-200 rounded-lg">
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

            <div className="m-1 p-4 w-72 bg-slate-200 rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Alamat
              </label>
              <input
                type="text"
                placeholder="Masukkan alamat sekolah"
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                disabled={isLoadingAddress}
                defaultValue={address}
              />
              {addressStatus === "error" && (
                <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                  {addressError}
                </p>
              )}
              {!location.latitude && !location.longitude && (
                <span className="m-1">
                  <Button
                    type="sm"
                    color="blue"
                    disabled={isLoadingAddress}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(fetchAddress());
                    }}
                  >
                    Dapatkan Posisi
                  </Button>
                </span>
              )}
            </div>

            <Button
              className="m-4"
              color="blue"
              size="md"
              disabled={isSubmitting || isLoadingAddress}
            >
              Daftarkan Sekolah
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  return data;
}

export default SchoolRegistration;
