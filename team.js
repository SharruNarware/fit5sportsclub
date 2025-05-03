const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Mobile dropdown click handling
dropdownToggles.forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault(); // prevent navigation
    const dropdown = toggle.parentElement;
    dropdown.classList.toggle("active");
  });
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

         // Register Now Button pe click hone par registration page open
        document.getElementById("registerNowBtn").addEventListener("click", function() {
            window.location.href = "https://docs.google.com/forms/d/1oFfAYtER_U4ifH5kJqQpRVVJjLLjAYFkso4u0m3TTX8/edit"; 
        });
            
        // Scroll Up Button pe click hone par page top par scroll
        document.getElementById("scrollUpBtn").addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        
            
        const registerLinkButtons = document.querySelectorAll(".registerLinkButton");

        registerLinkButtons.forEach(button => {
            button.addEventListener("click", () => {
              window.location.href = "https://docs.google.com/forms/d/1oFfAYtER_U4ifH5kJqQpRVVJjLLjAYFkso4u0m3TTX8/edit"; 
            });
        });