const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

// Toggle nav on mobile
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Show on hover for all screen sizes
document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('mouseenter', () => {
    dropdown.querySelector('.dropdown-menu').style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    if (!dropdown.classList.contains('clicked')) {
      dropdown.querySelector('.dropdown-menu').style.display = 'none';
    }
  });
});

// Toggle on click
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = toggle.closest('.dropdown');
    const menu = dropdown.querySelector('.dropdown-menu');

    const isOpen = dropdown.classList.contains('clicked');

    // Close all dropdowns
    closeAllDropdowns();

    // If it was not open, open it
    if (!isOpen) {
      dropdown.classList.add('clicked');
      menu.style.display = 'block';
    }
  });
});

// Click anywhere to close
document.addEventListener('click', (e) => {
  // Check if clicked inside any dropdown
  const isClickInside = e.target.closest('.dropdown');
  if (!isClickInside) {
    closeAllDropdowns();
  }
});

// Close all dropdowns
function closeAllDropdowns() {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.classList.remove('clicked');
    dropdown.querySelector('.dropdown-menu').style.display = 'none';
  });
}


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
            alert("Registration is closed now. Stay tuned for next Camp!");
        });
            
        // Scroll Up Button pe click hone par page top par scroll
        document.getElementById("scrollUpBtn").addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        
            
        const registerLinkButtons = document.querySelectorAll(".registerLinkButton");

        registerLinkButtons.forEach(button => {
            button.addEventListener("click", () => {
              alert("Registration is closed now. Stay tuned for next Camp!");
            });
        });




const dropdowns = document.querySelectorAll(".second-dropdown");

dropdowns.forEach(drop => {
  drop.querySelector(".second-dropdown-header").addEventListener("click", () => {
    dropdowns.forEach(d => {
      if (d !== drop) d.classList.remove("active");
    });
    drop.classList.toggle("active");
  });
});



  function revealOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const windowHeight = window.innerHeight;

  elements.forEach((el, index) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 200); // 200ms delay per element
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
