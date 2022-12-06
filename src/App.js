import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Screen/Home";
import AddService from "./Component/Admin/AddService";
import Services from "./Screen/Services";
import SingleFood from "./Screen/SingleFood";
import PrivateRouter from "./Component/Router/PrivateRouter";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import MyReview from "./Screen/MyReview";
import Blog from "./Screen/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",

        element: <Home />,
      },
      {
        path: "/services",

        element: <Services />,
      },
      {
        path: "/blog",

        element: <Blog />,
      },
      {
        path: "/my-review",

        element: (
          <PrivateRouter>
            <MyReview />
          </PrivateRouter>
        ),
      },
      {
        path: "/single-food/:id",
        loader: ({ params }) =>
          fetch(`https://server-gamma-ochre.vercel.app/api/food/${params.id}`),
        element: <SingleFood />,
      },
      {
        path: "/add-service",
        element: (
          <PrivateRouter>
            <AddService />
          </PrivateRouter>
        ),
      },
      {
        path: "/user/login",
        element: <Login />,
      },
      {
        path: "/user/register",
        element: <Register />,
      },
    ],
  },
  { path: "*", element: <h1 className="text-center mt-5">Not Found!</h1> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
