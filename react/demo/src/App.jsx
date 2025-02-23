import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./components/UI/pages/Home";
import About from "./components/UI/pages/About";
import Contact from "./components/UI/pages/Contact";
import Product from "./components/UI/pages/Product";

const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout />,
      children : [
        {
          path : "/",
          element : <Home />
        },
        {
          path : "/about",
          element : <About />
        },
        {
          path : "/contact",
          element : <Contact />
        },
        {
          path : "/product",
          element : <Product />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />;
};

export default App;
