import welcome_img from "../assets/welcome_img.png";

function Welcome() {
  return (
    <div className="bg-blue-500 h-screen flex flex-col justify-center items-center">
      <img
        src={welcome_img}
        alt="Welcome"
        className="w-3/4 md:w-1/2 lg:w-1/3 mb-4"
      />
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
        Halo~
      </h1>
      <p className="text-white text-lg md:text-xl lg:text-2xl">
        Mari kita jaga ketertiban jalan ^_^
      </p>
    </div>
  );
}

export default Welcome;
