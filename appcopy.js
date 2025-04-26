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



    // Register Alert Button Code
    document.getElementById("registerAlertBtn").addEventListener("click", function () {
        alert("Register Now Button Clicked!");
        });
    
        // Read More Alert Button Code
        document.getElementById("readMoreAlertBtn").addEventListener("click", function () {
        alert("Read More Button Clicked!");
        });
    
    
    
    
        // Sabhi Register Link Buttons pe same link lagana
        const registerLinkButtons = document.querySelectorAll(".registerLinkBtn");
    
        registerLinkButtons.forEach((button) => {
        button.addEventListener("click", function () {
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfyXeTUeA2VwTS4nYCxe9CHqcR-zhMHiJf8nPMynXGhLyW9ZA/viewform?usp=header"; // Yahan apni register page ki link do
        });
        });
    
        // Sabhi Read More Link Buttons pe same link lagana
        const readMoreLinkButtons = document.querySelectorAll(".readMoreLinkBtn");
    
        readMoreLinkButtons.forEach((button) => {
        button.addEventListener("click", function () {
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfyXeTUeA2VwTS4nYCxe9CHqcR-zhMHiJf8nPMynXGhLyW9ZA/viewform?usp=header"; // Yahan apni read more page ki link do
        });
        });