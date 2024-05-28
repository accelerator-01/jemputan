import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Guru from "./components/guru/Guru";
import Wali from "./components/wali/Wali";
import Error from "./utils/Error";
import AuthCard from "./auth/AuthCard";
import SchoolRegistration from "./pages/SchoolRegistration";
import TableList from "./components/guru/TableList";
// import { Loader as loader } from "./utils/Loader";
import "./index.css";

const router = createBrowserRouter([
  {
    erroElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/auth", element: <AuthCard /> },
      { path: "/school-registration", element: <SchoolRegistration /> },
      {
        path: "/guru",
        element: <Guru />,
      },
      {
        path: "/guru/list-queue",
        element: <TableList />,
      },
      {
        path: "/wali",
        element: <Wali />,
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
