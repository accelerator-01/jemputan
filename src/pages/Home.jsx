// import { useState } from "react";
// import Login from "../auth/Login";
// import Register from "../auth/Register";
import Button from "../utils/Button";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

function Home() {
  return (
    <div className="bg-background_1 bg-cover bg-center h-screen flex flex-col justify-between">
      <Header className="top-0 left-0 w-full" />
      <h1 className="text-4xl font-bold text-center h-12">Selamat Datang!</h1>
      <Button to="/wali" color="blue" size="lg" className="w-1/2 mx-auto">
        Tekan untuk memulai!
      </Button>
      <Footer className="bottom-0 left-0 w-full" />
    </div>
  );
}

export default Home;
