import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AllPages from "./Components/pages/AllPages/AllPages";
import Home from "./Components/pages/LandingPage/Home";
import EditProfile from "./Components/EditProfile/EditProfile";
import ChurchFind from "./Components/ChurchFind/ChurchFind";
// import PrayerRequest from "./Components/PrayerRequest/PrayerRequest";
import YourPrayer from "./Components/PrayerRequest/prayerinput/prayerinput";
import BibleSection from "./Components/pages/LandingPage/BibleSection";
import FullProfile from "./Components/pages/profile/myprofile/profile";


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
      {
        path: "/find",
        element: <ChurchFind />
      },
      {
        path: "/request",
        element: <YourPrayer />
      },
      {
        path: "/bible",
        element: <BibleSection />
      },
      {
        path: "/profile",
        element: <FullProfile />
      }
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
