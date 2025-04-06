// Toggle Password Script
const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });

    // Scroll Navbar Change Script

    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('navbar-scrolled', 'shadow-sm');
      } else {
        navbar.classList.remove('navbar-scrolled', 'shadow-sm');
      }
    });