import ShareLocation from "./ShareLocation";
function Wali() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background_2">
      <div className="p-8 m-4 rounded-lg shadow-lg text-center bg-teal-500">
        <h1 className="text-2xl font-bold text-gray-800 mb-44">
          Adinda sudah pulang! <br /> Yuk, waktunya menjemput!
        </h1>
        <ShareLocation />
      </div>
    </div>
  );
}

export default Wali;
