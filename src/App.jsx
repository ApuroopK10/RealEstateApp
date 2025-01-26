import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/homePage/HomePage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import Layout from "./pages/layoutPage/Layout";
import SinglePage from "./pages/singlePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
