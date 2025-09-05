
    // Loading screen
    window.addEventListener('load', function() {
      setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
      }, 500);
    });

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

    // Observar elementos para animaciones
    document.addEventListener('DOMContentLoaded', function() {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach(el => {
        observer.observe(el);
      });
    });

    // Efecto de typing para el título (opcional)
    function typeWriter(element, text, speed = 50) {
      let i = 0;
      element.innerHTML = '';
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    }

    // Preload de imágenes para mejor rendimiento
    function preloadImages() {
      const images = ['./img/LinkedInrecortada.jpg'];
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }

    preloadImages();