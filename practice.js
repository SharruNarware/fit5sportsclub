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
