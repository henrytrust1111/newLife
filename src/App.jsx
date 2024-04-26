import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AllPages from "./Components/pages/AllPages/AllPages";
import Home from "./Components/pages/HomePage/Home";


const route = createBrowserRouter([
  {
    path: "/",
    element: <AllPages />,
    children: [
      {
        path: "/",
        element: <Home />,
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
