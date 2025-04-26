const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
    
    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });



    // Page Scroll par buttons ko show/hide karna
    window.addEventListener("scroll", function() {
      const registerNowBtn = document.getElementById("registerNowBtn");
      const scrollUpBtn = document.getElementById("scrollUpBtn");
  
      if (window.scrollY > 100) { // thoda scroll hone ke baad buttons dikhne lagenge
          registerNowBtn.style.display = "block";
          scrollUpBtn.style.display = "block";
      } else {
          registerNowBtn.style.display = "none";
          scrollUpBtn.style.display = "none";
      }
      });