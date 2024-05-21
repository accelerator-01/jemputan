import Login from "../auth/Login";
import Register from "../auth/Register";
import Button from "../utils/Button";
import background_1 from "../assets/background_1.jpeg";

function Home() {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
      style={{ background_1: `url(${background_1})` }}
    >
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Welcome Home
      </h1>
      <div className="flex space-x-4">
        <Button color="blue" size="md">
          <Login />
        </Button>
        <Button color="blue" size="md">
          <Register />
        </Button>
      </div>
    </div>
  );
}

export default Home;
