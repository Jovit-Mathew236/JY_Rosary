import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import Section2 from './pages/Section2';
import Rosary from "./pages/Rosary/page/Rosary";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // element: <NavBar />,
      // children: [{ path: "", element: <Home /> }],
    },
    {
      path: "/map",
      element: <Section2 />,
    },
    {
      path: "/rosary/:token",
      element: <Rosary />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
