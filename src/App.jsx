import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Guru from "./components/guru/Guru";
import Wali from "./components/wali/Wali";
import Error from "./utils/Error";
import AuthCard from "./auth/AuthCard";
// import { Loader as loader } from "./utils/Loader";
import "./index.css";

const router = createBrowserRouter([
  {
    erroElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/maintain", element: <AuthCard /> },
      {
        path: "/register",
        element: <Register />,
        // errorElement: <Error />,
        // loader: loader,
      },
      {
        path: "/login",
        element: <Login />,
        // errorElement: <Error />,
        // loader: loader,
      },
      {
        path: "/guru",
        element: <Guru />,
        // errorElement: <Error />,
        // loader: loader,
      },
      {
        path: "/wali",
        element: <Wali />,
        // errorElement: <Error />,
        // loader: loader,
      },
    ],
  },
]);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1300); // 1300 ms

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>{showWelcome ? <Welcome /> : <RouterProvider router={router} />}</div>
  );
}

export default App;
