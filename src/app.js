// File ini adalah otak aplikasi. Menyatukan data, UI, dan mengatur State.
import { quizData } from './data/question.js';
import * as UI from './components/ui.js';
import { getHighscore, saveHighscore } from './utils/storage.js';

// State Aplikasi
let currentQuestionIndex = 0;
let score = 0;

// -- LOGIKA ALUR KUIS --
function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    UI.resetUI();
    UI.updateHighscoreUI(getHighscore());
    loadQuestion();
}

function loadQuestion() {
    const currentQ = quizData[currentQuestionIndex];
    UI.renderQuestionUI(currentQ, currentQuestionIndex + 1, quizData.length);
}

// Menangani klik pilihan ganda (Event Delegation)
function handleOptionClick(e) {
    // Cari elemen terdekat dengan class .option-btn
    const btn = e.target.closest('.option-btn');
    
    // Jika yang diklik bukan tombol pilihan, hentikan fungsi
    if (!btn) return;
    
    // Cek jawaban
    const selectedIndex = parseInt(btn.dataset.index);
    const correctIndex = quizData[currentQuestionIndex].correct;
    const isCorrect = (selectedIndex === correctIndex);
    
    if (isCorrect) {
        score++;
    }
    
    // Panggil UI untuk mengubah warna tombol
    UI.highlightAnswer(btn, isCorrect, correctIndex);
}

// Menangani klik tombol Lanjut
function handleNext() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

// Menangani penyelesaian kuis
function finishQuiz() {
    const total = quizData.length;
    const percentage = Math.round((score / total) * 100);
    const currentHigh = getHighscore();
    
    let isNewHighscore = false;
    
    if (percentage > currentHigh) {
        isNewHighscore = true;
        saveHighscore(percentage);
        UI.updateHighscoreUI(percentage); // Langsung update angka highscore di layar
    }
    
    UI.showResultUI(score, total, percentage, isNewHighscore);
}

// Fungsi utama yang akan dipanggil dari main.js
export function startApp() {
    // 1. Pasang Event Listeners
    // Menggunakan Event Delegation pada container options
    UI.getOptionsContainer().addEventListener('click', handleOptionClick);
    
    UI.getNextBtn().addEventListener('click', handleNext);
    UI.getRestartBtn().addEventListener('click', initQuiz);
    
    // 2. Mulai Kuis
    initQuiz();
}