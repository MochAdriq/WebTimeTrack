import React, { useState } from "react"; // 1. Impor useState
import styles from "./Navbar.module.css";

// Aset Anda
import logoUrl from "../../assets/images/logo/logo.svg";
import bellIcon from "../../assets/images/iconNavbar/bellIcon.svg";
import unionIcon from "../../assets/images/iconNavbar/unionIcon.svg";

// 2. Impor ikon untuk Burger & Search
import { FaSearch } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // <-- Impor ikon Burger

function Navbar() {
  // 3. Buat state untuk melacak menu (default: tertutup)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 4. Fungsi untuk menutup menu (dipakai saat link diklik)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // 5. Tambahkan kelas .menuOpen jika state-nya true
    <nav
      className={`${styles.navbarContainer} ${
        isMenuOpen ? styles.menuOpen : ""
      }`}
    >
      {/* Link Logo (tambahkan closeMenu) */}
      <a href="/#hero" className={styles.logo} onClick={closeMenu}>
        <img src={logoUrl} alt="Time Track Logo" className={styles.logoSvg} />
      </a>

      {/* 6. Bagian Link (tambahkan kelas mobileMenu & closeMenu) */}
      <ul
        className={`${styles.navLinks} ${isMenuOpen ? styles.mobileMenu : ""}`}
      >
        <li>
          <a href="/#hero" className={styles.active} onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="/#fitur" onClick={closeMenu}>
            Fitur
          </a>
        </li>
        <li>
          <a href="/#kontak" onClick={closeMenu}>
            Kontak
          </a>
        </li>
      </ul>

      {/* 7. Bagian Aksi Kanan (Desktop) */}
      <div className={styles.navActions}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="What are you looking for?" />
          <FaSearch className={styles.searchIcon} />
        </div>

        <div className={styles.userIcons}>
          <div className={styles.iconShape}>
            <img src={bellIcon} alt="Notifikasi" />
          </div>
          <div className={styles.iconShape}>
            <img src={unionIcon} alt="Profil" />
          </div>
        </div>
      </div>

      {/* 8. Ikon Burger (Hanya tampil di HP) */}
      <div
        className={styles.burgerIcon}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Ganti ikon berdasarkan state */}
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
