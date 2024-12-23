import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Ui/Navbar";
import Home from "./Pages/Home";
import Course from "./Pages/Course";

const App = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/course",
          element: <Course />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
};

export default App;
