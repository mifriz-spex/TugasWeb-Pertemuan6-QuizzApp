const STORAGE_PREFIX = 'kuis_highscore_';

export function getHighscore(category) {
    return parseInt(localStorage.getItem(STORAGE_PREFIX + category)) || 0;
}

export function saveHighscore(category, percentage) {
    localStorage.setItem(STORAGE_PREFIX + category, percentage);
}

export function getAllHighscores(quizDataObject) {
    const scores = [];
    for (const key in quizDataObject) {
        scores.push({
            id: key,
            title: quizDataObject[key].title,
            score: getHighscore(key),
            theme: quizDataObject[key].theme
        });
    }
    return scores;
}

export function getDarkModePref() {
    return localStorage.getItem('theme') === 'dark' || 
           (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

export function setDarkModePref(isDark) {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}