import { quizData } from './data/question.js';
import * as UI from './components/ui.js';
import { getHighscore, saveHighscore, getAllHighscores, getDarkModePref, setDarkModePref } from './utils/storage.js';

// State Aplikasi
let currentCategory = null; 
let currentQuestions = []; // Menyimpan array soal yang sudah diacak dan dipotong
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestionCount = 5;

export function startApp() {
    // 1. Atur Tema (Dark/Light Mode)
    const isDark = getDarkModePref();
    UI.applyTheme(isDark);
    
    // 2. Tampilkan Welcome Screen (Layar Awal)
    UI.showWelcomeScreen();
    
    // 3. Render Pilihan Kategori di latar belakang
    UI.renderCategories(quizData, handleCategorySelect);
    
    // 4. Pasang Event Listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Tombol Layar Welcome
    UI.getWelcomeStartBtn().addEventListener('click', UI.showCategoryScreen);
    UI.getWelcomeScoreBtn().addEventListener('click', () => {
        const scores = getAllHighscores(quizData);
        UI.renderHighscores(scores);
    });
    
    // Tombol Navigasi Kembali
    UI.getCloseScoreBtn().addEventListener('click', UI.showWelcomeScreen);
    UI.getBackToWelcomeBtn().addEventListener('click', UI.showWelcomeScreen);
    UI.getBackToCategoryBtn().addEventListener('click', UI.showCategoryScreen);
    UI.getExitQuizBtn().addEventListener('click', UI.showWelcomeScreen);
    
    // Tombol Pemilihan Jumlah Soal (Config)
    UI.getConfigBtns().forEach(btn => {
        btn.addEventListener('click', (e) => {
            const count = parseInt(e.target.dataset.count);
            startQuizSession(count);
        });
    });

    // Interaksi Kuis
    UI.getOptionsContainer().addEventListener('click', handleOptionClick);
    UI.getNextBtn().addEventListener('click', handleNext);
    
    // Selesai Kuis
    UI.getRestartBtn().addEventListener('click', () => UI.showConfigScreen(quizData[currentCategory]));
    UI.getHomeBtn().addEventListener('click', UI.showWelcomeScreen);
    
    // Tombol Tema
    UI.getThemeToggleBtn().addEventListener('click', () => {
        const willBeDark = !document.documentElement.classList.contains('dark');
        setDarkModePref(willBeDark);
        UI.applyTheme(willBeDark);
    });
}

function shuffleArray(array) {
    const shuffled = [...array]; // Buat salinan agar data asli tidak berubah urutannya
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function handleCategorySelect(categoryKey) {
    currentCategory = categoryKey;
    UI.showConfigScreen(quizData[categoryKey]);
}

function startQuizSession(count) {
    selectedQuestionCount = count;
    currentQuestionIndex = 0;
    score = 0;
    
    const categoryData = quizData[currentCategory];
    
    // Acak soal dari kategori yang dipilih menggunakan fungsi shuffle
    const allCategoryQuestions = categoryData.questions;
    const shuffledQuestions = shuffleArray(allCategoryQuestions);
    
    // Potong soal sesuai jumlah yang diminta (Mencegah error jika minta 25 tapi soal cuma ada 10)
    const actualCount = Math.min(count, shuffledQuestions.length);
    currentQuestions = shuffledQuestions.slice(0, actualCount);
    
    // Tampilkan layar kuis
    UI.showQuizScreen(categoryData);
    UI.updateHighscoreUI(getHighscore(currentCategory));
    
    loadQuestion();
}

function loadQuestion() {
    const currentQ = currentQuestions[currentQuestionIndex];
    UI.renderQuestionUI(currentQ, currentQuestionIndex + 1, currentQuestions.length);
}

function handleOptionClick(e) {
    const btn = e.target.closest('.option-btn');
    if (!btn) return; // Event Delegation safeguard
    
    const selectedIndex = parseInt(btn.dataset.index);
    const correctIndex = currentQuestions[currentQuestionIndex].correct;
    const isCorrect = (selectedIndex === correctIndex);
    
    if (isCorrect) score++;
    
    UI.highlightAnswer(btn, isCorrect, correctIndex);
}

function handleNext() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const total = currentQuestions.length;
    const percentage = Math.round((score / total) * 100);
    const currentHigh = getHighscore(currentCategory);
    
    let isNewHighscore = false;
    
    // Cek apakah skor memecahkan rekor tertinggi
    if (percentage > currentHigh) {
        isNewHighscore = true;
        saveHighscore(currentCategory, percentage);
        UI.updateHighscoreUI(percentage); // Update UI di header
    }
    
    // Tampilkan layar hasil skor akhir
    UI.showResultUI(score, total, percentage, isNewHighscore);
}