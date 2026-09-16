// Menyimpan prefix key dalam konstanta
const STORAGE_PREFIX = 'kuis_highscore_';

/**
 * Mengambil skor tertinggi dari LocalStorage berdasarkan kategori.
 * @param {string} category - ID kategori kuis (misal: 'tkj', 'rpl')
 */
export function getHighscore(category) {
    return parseInt(localStorage.getItem(STORAGE_PREFIX + category)) || 0;
}

/**
 * Menyimpan skor tertinggi baru ke LocalStorage berdasarkan kategori.
 * @param {string} category - ID kategori kuis
 * @param {number} percentage - Nilai persentase skor baru
 */
export function saveHighscore(category, percentage) {
    localStorage.setItem(STORAGE_PREFIX + category, percentage);
}

/**
 * Mengatur preferensi Dark Mode
 */
export function getDarkModePref() {
    return localStorage.getItem('theme') === 'dark' || 
           (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

export function setDarkModePref(isDark) {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}