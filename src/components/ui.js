// File ini khusus untuk menangani interaksi dengan elemen HTML (DOM)

const elements = {
    homeScreen: document.getElementById('home-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    resultScreen: document.getElementById('result-screen'),
    categoryContainer: document.getElementById('category-container'),
    
    quizHeader: document.getElementById('quiz-header'),
    quizTitle: document.getElementById('quiz-title'),
    quizDesc: document.getElementById('quiz-desc'),
    
    question: document.getElementById('question'),
    options: document.getElementById('options'),
    progress: document.getElementById('progress'),
    nextBtn: document.getElementById('nextBtn'),
    
    scoreText: document.getElementById('score-text'),
    highscoreFeedback: document.getElementById('highscore-feedback'),
    currentHighscore: document.getElementById('current-highscore'),

    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon')
};

// -- FUNGSI NAVIGASI LAYAR --
export function showHomeScreen() {
    elements.quizScreen.classList.add('hidden');
    elements.resultScreen.classList.add('hidden');
    
    elements.homeScreen.classList.remove('hidden');
    // Reset animasi agar jalan lagi saat kembali
    elements.homeScreen.classList.remove('fade-in');
    void elements.homeScreen.offsetWidth; // trigger reflow
    elements.homeScreen.classList.add('fade-in');
}

export function showQuizScreen(categoryData) {
    elements.homeScreen.classList.add('hidden');
    elements.resultScreen.classList.add('hidden');
    
    // Update Header Kuis
    elements.quizTitle.textContent = categoryData.title;
    elements.quizDesc.textContent = categoryData.description;
    
    // Menggunakan class utuh dari data.theme agar dibaca Tailwind
    elements.quizHeader.className = `p-6 relative overflow-hidden transition-colors text-white ${categoryData.theme.headerBg}`;
    
    elements.quizScreen.classList.remove('hidden');
    elements.quizScreen.classList.remove('fade-in');
    void elements.quizScreen.offsetWidth; 
    elements.quizScreen.classList.add('fade-in');
}

export function showResultUI(score, total, percentage, isNewHighscore) {
    elements.quizScreen.classList.add('hidden');
    elements.resultScreen.classList.remove('hidden');
    
    elements.scoreText.textContent = `${score}/${total} (${percentage}%)`;
    
    if (isNewHighscore) {
        elements.highscoreFeedback.textContent = '🎉 Luar Biasa! Ini Rekor Baru!';
    } else {
        elements.highscoreFeedback.textContent = 'Ayo coba lagi untuk kalahkan rekor Anda!';
    }
}

// -- FUNGSI RENDER KOMPONEN --
export function renderCategories(quizDataObject, onSelectCallback) {
    elements.categoryContainer.innerHTML = '';
    
    for (const [key, data] of Object.entries(quizDataObject)) {
        const card = document.createElement('button');
        // Memasukkan class border hover dinamis secara utuh
        card.className = `flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group ${data.theme.borderHover}`;
        
        card.innerHTML = `
            <div class="mb-4 group-hover:scale-110 transition-transform w-12 h-12 ${data.theme.iconColor}">
                ${data.icon}
            </div>
            <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">${data.title}</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 text-center">${data.questions.length} Soal</p>
        `;
        
        card.addEventListener('click', () => onSelectCallback(key));
        elements.categoryContainer.appendChild(card);
    }
}

export function renderQuestionUI(questionData, currentNumber, totalQuestions) {
    elements.progress.textContent = `Soal ${currentNumber}/${totalQuestions}`;
    elements.question.textContent = questionData.question;
    elements.options.innerHTML = '';
    
    questionData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        // Styling pilihan ganda untuk light & dark mode
        btn.className = 'option-btn bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-600 font-medium py-3.5 px-5 rounded-xl text-left transition-all duration-200';
        
        btn.textContent = opt;
        btn.dataset.index = index;
        elements.options.appendChild(btn);
    });
    
    elements.nextBtn.classList.add('hidden');
}

export function highlightAnswer(selectedBtn, isCorrect, correctIndex) {
    const allBtns = elements.options.querySelectorAll('button');
    
    allBtns.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('cursor-not-allowed', 'opacity-60');
        btn.classList.remove('hover:border-indigo-500', 'hover:bg-indigo-50', 'dark:hover:border-indigo-400', 'dark:hover:bg-slate-600');
    });
    
    if (isCorrect) {
        selectedBtn.classList.remove('border-slate-200', 'dark:border-slate-600');
        selectedBtn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-900/30', 'text-emerald-700', 'dark:text-emerald-400', 'opacity-100');
    } else {
        selectedBtn.classList.remove('border-slate-200', 'dark:border-slate-600');
        selectedBtn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-900/30', 'text-rose-700', 'dark:text-rose-400', 'opacity-100');
        
        const correctBtn = elements.options.querySelector(`[data-index="${correctIndex}"]`);
        if (correctBtn) {
            correctBtn.classList.remove('border-slate-200', 'dark:border-slate-600');
            correctBtn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-900/30', 'text-emerald-700', 'dark:text-emerald-400', 'opacity-100');
        }
    }
    
    elements.nextBtn.classList.remove('hidden');
}

export function updateHighscoreUI(highscore) {
    elements.currentHighscore.textContent = highscore;
}

// -- FUNGSI DARK MODE --
export function applyTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        elements.themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />'; // Sun Icon
    } else {
        document.documentElement.classList.remove('dark');
        elements.themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />'; // Moon Icon
    }
}

// Getters untuk Event Listeners
export const getOptionsContainer = () => elements.options;
export const getNextBtn = () => elements.nextBtn;
export const getRestartBtn = () => document.getElementById('restartBtn');
export const getHomeBtn = () => document.getElementById('homeBtn');
export const getBackBtn = () => document.getElementById('back-btn');
export const getThemeToggleBtn = () => elements.themeToggle;