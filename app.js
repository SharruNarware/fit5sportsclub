let scrollTopBtn = document.getElementById("scrollTopBtn");
let registerBtn = document.getElementById("registerBtn");


window.onscroll = function() { 
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block"; // Scroll to Top Button dikhana hai
        registerBtn.style.display = "block";  // Register Button bhi dikhana hai
    } else {
        scrollTopBtn.style.display = "none";
        registerBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Page smooth scroll karega
}



function openRegistration() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfyXeTUeA2VwTS4nYCxe9CHqcR-zhMHiJf8nPMynXGhLyW9ZA/viewform?usp=header"; // Registration page open karega
}

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.getElementById("navbar");

    if (!menuBtn || !navbar) {
        console.error("Element not found! Check your HTML IDs.");
        return;
    }

    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Sabhi "Read More" buttons par event listener lagana
    document.querySelectorAll("#readMore").forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Something went wrong! 404 Page not found");
        });
    });

    // Sabhi "Register Now" buttons par event listener lagana
    document.querySelectorAll("#registerNow").forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Registration is not started");
        });
    });
});
