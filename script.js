document.addEventListener('DOMContentLoaded', function() {
    // Create the back to summary button
    const backButton = document.createElement('a');
    backButton.href = '#nav';
    backButton.className = 'back-to-summary';
    backButton.textContent = 'Voltar ao Sumário';
    document.body.appendChild(backButton);

    // Add smooth scrolling behavior
    backButton.addEventListener('click', function(e) {
        e.preventDefault();
        const navElement = document.querySelector('.nav');
        if (navElement) {
            navElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    // Theme Toggle Functionality
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Alternar tema');
    document.body.appendChild(themeToggle);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}); 