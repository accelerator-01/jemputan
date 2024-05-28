import loadingImg from "../assets/loadin_img.png";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
      <div className="flex flex-col items-center">
        <img
          src={loadingImg}
          alt="Loading"
          className="w-32 h-32 opacity-75 mb-4"
        />
        <p className="text-white text-lg">tunggu sebentar...</p>
      </div>
    </div>
  );
}

export default Loader;
