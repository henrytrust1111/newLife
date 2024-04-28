import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AllPages from "./Components/pages/AllPages/AllPages";
import Home from "./Components/pages/LandingPage/Home";
import EditProfile from "./Components/EditProfile/EditProfile";


const route = createBrowserRouter([
  {
    path: "/",
    element: <AllPages />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
