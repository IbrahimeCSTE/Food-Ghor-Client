import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Screen/Home";
import AddService from "./Component/Admin/AddService";
import Services from "./Screen/Services";
import SingleFood from "./Screen/SingleFood";
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
        path: "/single-food/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/food/${params.id}`),
        element: <SingleFood />,
      },
      {
        path: "/add-service",
        element: <AddService />,
      },
    ],
  },
  { path: "*", element: <h1 className="text-center mt-5">Not Found!</h1> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
