import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./components/UI/pages/Home";
import About from "./components/UI/pages/About";
import Contact, { contactData } from "./components/UI/pages/Contact";
import Product from "./components/UI/pages/Product";
import Movie from "./components/UI/pages/Movie";
import GetApiData from "./components/api/GetApiData";
import DetailsPage from "./components/UI/pages/DetailsPage";
import GetDataById from "./components/api/GetDataById";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetApiData,
        },
        {
          path: "/movie/:id",
          element: <DetailsPage />,
          loader: GetDataById,
        },
      ],
    },
  ]);
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
