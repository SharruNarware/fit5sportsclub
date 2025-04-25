const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });


    
    const registerBtn = document.getElementById('registerBtn');
    const scrollUpBtn = document.getElementById('scrollUpBtn');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        registerBtn.classList.add('show');
        scrollUpBtn.classList.add('show');
      } else {
        registerBtn.classList.remove('show');
        scrollUpBtn.classList.remove('show');
      }
    });

    scrollUpBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
