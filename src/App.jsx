// src/App.jsx

import React from "react";
import { Outlet } from "react-router-dom"; // 1. Impor Outlet
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        {/* 2. Ganti semua section dengan Outlet */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
