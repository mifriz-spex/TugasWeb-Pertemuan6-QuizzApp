// File ini khusus untuk menangani interaksi dengan elemen HTML (DOM)
// Tidak ada logika skor di sini, hanya murni tampilan.

const elements = {
    question: document.getElementById('question'),
    options: document.getElementById('options'),
    progress: document.getElementById('progress'),
    nextBtn: document.getElementById('nextBtn'),
    quizContent: document.getElementById('quiz-content'),
    result: document.getElementById('result'),
    scoreText: document.getElementById('score-text'),
    highscoreFeedback: document.getElementById('highscore-feedback'),
    currentHighscore: document.getElementById('current-highscore')
};

// Fungsi untuk me-render soal ke layar
export function renderQuestionUI(questionData, currentNumber, totalQuestions) {
    // 1. Update text progress
    elements.progress.textContent = `Soal ${currentNumber}/${totalQuestions}`;
    
    // 2. Update text soal
    elements.question.textContent = questionData.question;
    
    // 3. Kosongkan pilihan jawaban sebelumnya
    elements.options.innerHTML = '';
    
    // 4. Buat tombol untuk setiap pilihan menggunakan createElement
    questionData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        
        // Styling default tombol pilihan (Tailwind)
        btn.className = 'option-btn bg-white border-2 border-slate-200 text-slate-700 hover:border-indigo-500 hover:bg-indigo-50 font-medium py-3 px-4 rounded-xl text-left transition-all duration-200 shadow-sm';
        
        btn.textContent = opt;
        btn.dataset.index = index; // Penting untuk cek jawaban nanti
        
        elements.options.appendChild(btn);
    });
    
    // Sembunyikan tombol "Lanjut" setiap kali soal baru dimuat
    elements.nextBtn.classList.add('hidden');
}

// Fungsi memberikan efek warna pada jawaban benar/salah
export function highlightAnswer(selectedBtn, isCorrect, correctIndex) {
    const allBtns = elements.options.querySelectorAll('button');
    
    // Nonaktifkan semua tombol agar tidak bisa diklik dua kali
    allBtns.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('cursor-not-allowed', 'opacity-70');
        btn.classList.remove('hover:border-indigo-500', 'hover:bg-indigo-50');
    });
    
    if (isCorrect) {
        // Styling jika jawaban benar (Hijau)
        selectedBtn.classList.remove('border-slate-200');
        selectedBtn.classList.add('border-green-500', 'bg-green-100', 'text-green-800', 'opacity-100');
    } else {
        // Styling jika jawaban salah (Merah)
        selectedBtn.classList.remove('border-slate-200');
        selectedBtn.classList.add('border-red-500', 'bg-red-100', 'text-red-800', 'opacity-100');
        
        // Tunjukkan mana jawaban yang seharusnya benar
        const correctBtn = elements.options.querySelector(`[data-index="${correctIndex}"]`);
        if (correctBtn) {
            correctBtn.classList.remove('border-slate-200');
            correctBtn.classList.add('border-green-500', 'bg-green-50', 'text-green-800', 'opacity-100');
        }
    }
    
    // Tampilkan tombol "Lanjut"
    elements.nextBtn.classList.remove('hidden');
}

// Menampilkan layar hasil akhir
export function showResultUI(score, total, percentage, isNewHighscore) {
    elements.quizContent.classList.add('hidden');
    elements.result.classList.remove('hidden');
    
    elements.scoreText.textContent = `${score}/${total} (${percentage}%)`;
    
    if (isNewHighscore) {
        elements.highscoreFeedback.textContent = '🎉 Luar Biasa! Ini Rekor Baru!';
    } else {
        elements.highscoreFeedback.textContent = 'Ayo coba lagi untuk kalahkan rekor Anda!';
    }
}

// Update angka Highscore di pojok kanan atas
export function updateHighscoreUI(highscore) {
    elements.currentHighscore.textContent = highscore;
}

// Mengembalikan tampilan ke awal kuis
export function resetUI() {
    elements.result.classList.add('hidden');
    elements.quizContent.classList.remove('hidden');
}

// Fungsi getter untuk memberikan akses elemen ke app.js (untuk addEventListener)
export const getOptionsContainer = () => elements.options;
export const getNextBtn = () => elements.nextBtn;
export const getRestartBtn = () => document.getElementById('restartBtn');