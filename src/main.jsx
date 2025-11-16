// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // 1. Impor router
import "./index.css";

// 2. Impor Halaman-halaman
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

// 3. Buat rute-rutenya
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // <App> (Navbar/Footer) adalah layoutnya
    children: [
      {
        path: "/", // Halaman utama
        element: <HomePage />,
      },
      {
        path: "/privacy", // Halaman kebijakan privasi
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

// 4. Render RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
