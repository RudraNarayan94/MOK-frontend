import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/Router.jsx"
import { RouterProvider } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children:[
//       {
//         index:true,
//         element: <Home />
//       },
//       {
//         path:"practice",
//         element:<Practice />
//       },
//       {
//         path: "/signup",
//         element: <SignUp />,
//       },
//     ]
//   }
// ]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
