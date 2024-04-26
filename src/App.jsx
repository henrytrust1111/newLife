import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";


const route = createBrowserRouter([
  {
    path: "/",
    element: <AllPages />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
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
