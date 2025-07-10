import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Practice from "../pages/Practice.jsx";
import SignUp from "../pages/SignUp.jsx";
import Multiplayer from "../pages/Multiplayer.jsx";
import CreateRoom from "../pages/CreateRoom.jsx";
import Login from "../pages/Login.jsx";
import MultiplayerHome from "../pages/MultiplayerHome.jsx";
import Dashboard from "../pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "practice",
        element: <Practice />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "multiplayer",
        element: <Multiplayer />,
        children: [
          {
            index:true,
            element: <MultiplayerHome />
          },
          {
            path: 'create',
            element: <CreateRoom />
          }
        ]
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
