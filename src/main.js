// Mengimpor file CSS utama agar diproses oleh Vite dan Tailwind CSS v4
import './style.css';

// Mengimpor fungsi inisialisasi kuis dari controller utama
import { startApp } from './app.js';

// Menunggu hingga seluruh elemen HTML selesai di-parse (dimuat)
// Ini adalah praktik terbaik (best practice) untuk memastikan
// JavaScript tidak mencoba mengakses elemen yang belum ada di layar.
document.addEventListener('DOMContentLoaded', () => {
    // Jalankan aplikasi kuis setelah DOM siap
    startApp();
});