// Loading screen
        window.addEventListener('load', function() {
            setTimeout(() => {
                document.getElementById('loading').classList.add('hidden');
            }, 500);
        });

        // Dark mode toggle
        function initThemeToggle() {
            const themeToggle = document.getElementById('themeToggle');
            const themeToggleMobile = document.getElementById('themeToggleMobile');
            const themeIcon = document.getElementById('themeIcon');
            const themeIconMobile = document.getElementById('themeIconMobile');
            const themeText = document.getElementById('themeText');
            const html = document.documentElement;
            
            // Check saved theme preference or default to 'light'
            const savedTheme = localStorage.getItem('theme') || 'light';
            html.setAttribute('data-bs-theme', savedTheme);
            updateThemeButton(savedTheme);
            
            function updateThemeButton(theme) {
                if (theme === 'dark') {
                    themeIcon.className = 'fas fa-sun';
                    themeIconMobile.className = 'fas fa-sun';
                    if (themeText) themeText.textContent = 'Claro';
                } else {
                    themeIcon.className = 'fas fa-moon';
                    themeIconMobile.className = 'fas fa-moon';
                    if (themeText) themeText.textContent = 'Oscuro';
                }
            }
            
            function toggleTheme() {
                const currentTheme = html.getAttribute('data-bs-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                
                html.setAttribute('data-bs-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateThemeButton(newTheme);
            }
            
            themeToggle.addEventListener('click', toggleTheme);
            themeToggleMobile.addEventListener('click', toggleTheme);
        }

        // Smooth scrolling para los enlaces del navbar
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer para animaciones
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${Array.from(entry.target.parentElement.children).indexOf(entry.target) * 0.1}s`;
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            initThemeToggle();
            
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => {
                observer.observe(el);
            });
        });

        // Preload de imágenes para mejor rendimiento
        function preloadImages() {
            const images = ['./img/LinkedInrecortada.jpg'];
            images.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        }

        preloadImages();