import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Problemas from "./pages/Problemas.jsx";
import Funcionalidades from "./pages/Funcionalidades.jsx";
import Beneficios from "./pages/Beneficios.jsx";
import Sobre from "./pages/Sobre.jsx";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/problemas",
    element: <Problemas />,
  },
  {
    path: "/funcionalidades",
    element: <Funcionalidades />,
  },
  {
    path: "/beneficios",
    element: <Beneficios />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
