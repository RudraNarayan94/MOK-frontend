import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import Practice from "./pages/Practice.jsx";
import SignUp from "./pages/SignUp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/practice",
    element: <Practice />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>

      <App />
  </RouterProvider>
);
