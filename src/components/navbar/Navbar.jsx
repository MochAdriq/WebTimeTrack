// src/components/Navbar.jsx

import React from "react";
import styles from "./Navbar.module.css";

// 1. Aset Anda
import logoUrl from "../../assets/images/logo/logo.svg";
import bellIcon from "../../assets/images/iconNavbar/bellIcon.svg";
import unionIcon from "../../assets/images/iconNavbar/unionIcon.svg";

// 2. Hapus Impor Ikon yang Tidak Terpakai
import { FaSearch } from "react-icons/fa";
// import { FaRegUserCircle, FaShoppingBag } from "react-icons/fa";

function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      {/* 3. Link Logo -> ke #hero */}
      <a href="#hero" className={styles.logo}>
        <img src={logoUrl} alt="Time Track Logo" className={styles.logoSvg} />
      </a>

      {/* 4. Bagian Link (Diganti ke Scroll-to-Section) */}
      <ul className={styles.navLinks}>
        <li>
          <a href="#hero" className={styles.active}>
            Home
          </a>
        </li>
        <li>
          {/* Mengarah ke <section id="fitur"> */}
          <a href="#fitur">Fitur</a>
        </li>
        <li>
          {/* Mengarah ke <footer id="kontak"> */}
          <a href="#kontak">Kontak</a>
        </li>
        {/* Link "About" dan "Sign Up" dihapus agar lebih bersih */}
      </ul>

      {/* 5. Bagian Aksi Kanan (Kita pertahankan ikon baru Anda) */}
      <div className={styles.navActions}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="What are you looking for?" />
          <FaSearch className={styles.searchIcon} />
        </div>

        {/* Ikon baru Anda tetap di sini */}
        <div className={styles.userIcons}>
          <div className={styles.iconShape}>
            <img src={bellIcon} alt="Notifikasi" />
          </div>
          <div className={styles.iconShape}>
            <img src={unionIcon} alt="Profil" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
