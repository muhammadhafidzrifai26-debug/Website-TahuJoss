// Immediately set theme from localStorage to prevent flash of style
(function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.getElementById('theme-toggle');

    // Theme Toggle Logic
    if (themeToggle) {
        // Initialize Toggle Icon
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        updateToggleIcon(themeToggle, currentTheme);

        themeToggle.addEventListener('click', () => {
            const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            
            // Apply theme attribute
            document.documentElement.setAttribute('data-theme', activeTheme);
            // Save theme to localStorage
            localStorage.setItem('theme', activeTheme);
            // Update Icon
            updateToggleIcon(themeToggle, activeTheme);
        });
    }

    function updateToggleIcon(button, theme) {
        const icon = button.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
    }

    // Mobile Navigation Toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon between bars and times (close)
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
});
