import { quizData } from './data/question.js';
import * as UI from './components/ui.js';
import { getHighscore, saveHighscore, getDarkModePref, setDarkModePref } from './utils/storage.js';

// State Aplikasi
let currentCategory = null; 
let currentQuestionIndex = 0;
let score = 0;

// Inisialisasi awal saat halaman dimuat
export function startApp() {
    // 1. Atur Tema (Dark/Light Mode)
    const isDark = getDarkModePref();
    UI.applyTheme(isDark);
    
    // 2. Render Pilihan Kategori
    UI.renderCategories(quizData, handleCategorySelect);
    
    // 3. Pasang Event Listeners Statis
    UI.getOptionsContainer().addEventListener('click', handleOptionClick);
    UI.getNextBtn().addEventListener('click', handleNext);
    
    // Tombol Navigasi
    UI.getRestartBtn().addEventListener('click', () => initQuiz(currentCategory));
    UI.getHomeBtn().addEventListener('click', UI.showHomeScreen);
    UI.getBackBtn().addEventListener('click', UI.showHomeScreen);
    
    // Tombol Tema
    UI.getThemeToggleBtn().addEventListener('click', () => {
        const willBeDark = !document.documentElement.classList.contains('dark');
        setDarkModePref(willBeDark);
        UI.applyTheme(willBeDark);
    });
}

// Menangani saat user memilih kategori di Home Screen
function handleCategorySelect(categoryKey) {
    currentCategory = categoryKey;
    initQuiz(categoryKey);
}

// Memulai kuis berdasarkan kategori yang dipilih
function initQuiz(categoryKey) {
    currentQuestionIndex = 0;
    score = 0;
    
    const categoryData = quizData[categoryKey];
    
    // Tampilkan layar kuis
    UI.showQuizScreen(categoryData);
    
    // Ambil highscore spesifik kategori ini
    UI.updateHighscoreUI(getHighscore(categoryKey));
    
    loadQuestion();
}

function loadQuestion() {
    const questionsList = quizData[currentCategory].questions;
    const currentQ = questionsList[currentQuestionIndex];
    UI.renderQuestionUI(currentQ, currentQuestionIndex + 1, questionsList.length);
}

// Menangani klik pilihan ganda
function handleOptionClick(e) {
    const btn = e.target.closest('.option-btn');
    if (!btn) return;
    
    const selectedIndex = parseInt(btn.dataset.index);
    const questionsList = quizData[currentCategory].questions;
    const correctIndex = questionsList[currentQuestionIndex].correct;
    const isCorrect = (selectedIndex === correctIndex);
    
    if (isCorrect) score++;
    
    UI.highlightAnswer(btn, isCorrect, correctIndex);
}

function handleNext() {
    currentQuestionIndex++;
    const questionsList = quizData[currentCategory].questions;
    
    if (currentQuestionIndex < questionsList.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

// Menyelesaikan kuis dan simpan skor per-kategori
function finishQuiz() {
    const total = quizData[currentCategory].questions.length;
    const percentage = Math.round((score / total) * 100);
    const currentHigh = getHighscore(currentCategory);
    
    let isNewHighscore = false;
    
    if (percentage > currentHigh) {
        isNewHighscore = true;
        saveHighscore(currentCategory, percentage);
        UI.updateHighscoreUI(percentage);
    }
    
    UI.showResultUI(score, total, percentage, isNewHighscore);
}