// src/pages/PrivacyPolicy.jsx

import React from "react";
import styles from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
  // Tanya: Ganti [Tanggal Hari Ini] dengan tanggal sekarang
  const effectiveDate = "16 November 2025";

  // Tanya: Ganti dengan info Anda
  const companyName = "Time Track";
  const contactEmail = "storytimetrack@gmail.com";
  const contactAddress =
    "Jl. Raya Cibolang No.21 Cisaat Sukabumi 43152 Indonesia.";

  return (
    <div className={styles.policyContainer}>
      <h1>Kebijakan Privasi TimeTrackerApp</h1>
      <p>
        <strong>Tanggal Efektif: {effectiveDate}</strong>
      </p>

      <p>
        Kebijakan Privasi ini menjelaskan bagaimana {companyName} mengumpulkan,
        menggunakan, dan melindungi informasi Anda sehubungan dengan penggunaan
        aplikasi seluler TimeTrackerApp.
      </p>

      <h2>1. Data yang Kami Kumpulkan</h2>
      <p>
        Kami mengumpulkan data yang diperlukan untuk menyediakan layanan,
        mengelola akun, dan menjalankan fitur premium.
      </p>

      <h3>A. Data yang Diberikan Langsung oleh Pengguna (Data Profil)</h3>
      <ul>
        <li>Data Identitas: Nama Lengkap, Alamat Email, Username.</li>
        <li>
          Data Kontak: Nomor Telepon, Alamat Pengiriman (diisi saat checkout).
        </li>
        <li>
          Data Tambahan Profil: Tanggal Lahir (DOB), Foto Profil (Avatar).
        </li>
      </ul>

      <h3>B. Data Transaksional dan Perilaku (Usage Data)</h3>
      <ul>
        <li>
          Data Pembelian: Riwayat pesanan, jumlah total pesanan, status
          pembayaran (misal: pending_payment, paid, failed), dan points_used.
        </li>
        <li>
          Data Gamifikasi: Poin, Level, Riwayat Kuis (quiz_attempts), Progres
          Tugas Harian (user_tasks), dan Daftar Materi Favorit.
        </li>
        <li>
          Data Chat: Isi pesan dan identitas pengirim/penerima dalam ruang chat
          pribadi maupun komunitas.
        </li>
      </ul>

      <h3>C. Data Media dan Keamanan</h3>
      <ul>
        <li>
          Bukti Pembayaran: Gambar bukti transfer yang di-upload ke Storage
          Bucket non-publik (premium_proofs) untuk verifikasi pembayaran.
        </li>
        <li>
          Media Lain: Foto yang di-upload sebagai avatar grup (group_avatars).
        </li>
      </ul>

      <h2>2. Tujuan Penggunaan Data</h2>
      <p>Kami menggunakan informasi Anda untuk:</p>
      <ul>
        <li>
          Penyediaan Layanan: Untuk mengautentikasi akun Anda dan memberikan
          akses ke materi serta fitur kuis.
        </li>
        <li>
          Personalisasi dan Gamifikasi: Menghitung poin, level, dan melacak
          progres materi yang sudah dibaca.
        </li>
        <li>
          Fitur Komunitas: Memungkinkan Anda berpartisipasi dalam chat dan
          menampilkan profil Anda kepada anggota grup lainnya.
        </li>
        <li>
          Verifikasi Pembayaran: Bukti pembayaran digunakan secara eksklusif
          oleh Admin untuk memverifikasi transaksi Premium atau Marketplace.
        </li>
        <li>
          Notifikasi: Mengirimkan notifikasi real-time terkait status pesanan,
          pengingat, dan pengumuman baru.
        </li>
      </ul>

      <h2>3. Keamanan Data dan Pihak Ketiga</h2>
      <h3>A. Penyimpanan Data</h3>
      <p>
        Data Anda disimpan secara aman menggunakan Supabase sebagai penyedia
        layanan backend dan database. Kami menggunakan kebijakan Row Level
        Security (RLS) untuk memastikan Anda hanya dapat mengakses data yang
        menjadi hak Anda.
      </p>

      <h3>B. Penggunaan Izin Perangkat</h3>
      <p>Aplikasi memerlukan izin berikut:</p>
      <ul>
        <li>
          Kamera & Penyimpanan/Media: Diperlukan untuk memungkinkan Anda memilih
          atau mengambil foto untuk avatar dan meng-upload bukti pembayaran.
        </li>
      </ul>

      <h2>4. Akses dan Kontrol Data</h2>
      <p>
        Anda berhak untuk mengakses dan mengubah data profil Anda kapan saja
        melalui layar Profil Saya di dalam aplikasi.
      </p>

      <h2>5. Kontak Kami</h2>
      <p>
        Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan
        hubungi kami melalui:
      </p>
      <ul>
        <li>Email: {contactEmail}</li>
        <li>Alamat: {contactAddress}</li>
      </ul>
    </div>
  );
}

export default PrivacyPolicy;
