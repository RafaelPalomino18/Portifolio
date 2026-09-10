const rootHtml = document.documentElement;
const toggleTheme = document.getElementById('toggleTheme');
const themeIcon = toggleTheme.querySelector('i');
const savedTheme = localStorage.getItem('portfolio-theme');

function updateThemeControl(theme){
    const isLight = theme === 'light';
    themeIcon.className = isLight ? 'bi bi-moon-stars' : 'bi bi-sun';
    toggleTheme.setAttribute('aria-label', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
    toggleTheme.setAttribute('title', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
}

if (savedTheme === 'dark' || savedTheme === 'light') {
    rootHtml.setAttribute('data-theme', savedTheme);
}

updateThemeControl(rootHtml.getAttribute('data-theme'));

function changeTheme(){
    const currentTheme = rootHtml.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    rootHtml.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    updateThemeControl(nextTheme);
}

toggleTheme.addEventListener("click", changeTheme);
