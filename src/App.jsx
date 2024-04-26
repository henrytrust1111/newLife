import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AllPages from "./Components/pages/AllPages/AllPages";


const route = createBrowserRouter([
  {
    path: "/",
    element: <AllPages />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Headers />,
    //   },
     


    // ],
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
