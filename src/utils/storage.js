// File ini khusus menangani operasi baca/tulis ke Web Storage (LocalStorage)
// Menyimpan key dalam konstanta untuk mencegah typo saat pemanggilan berulang
const STORAGE_KEY = 'kuis_tkj_highscore';

/**
 * Mengambil skor tertinggi dari LocalStorage.
 * @returns {number} Skor tertinggi (dalam persen), default ke 0 jika belum ada.
 */
export function getHighscore() {
    // Ambil string dari LocalStorage, ubah ke integer. 
    // Gunakan logical OR (||) 0 sebagai nilai default.
    return parseInt(localStorage.getItem(STORAGE_KEY)) || 0;
}

/**
 * Menyimpan skor tertinggi baru ke LocalStorage.
 * @param {number} percentage - Nilai persentase skor baru yang akan disimpan.
 */
export function saveHighscore(percentage) {
    localStorage.setItem(STORAGE_KEY, percentage);
}