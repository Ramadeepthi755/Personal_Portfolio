// ===== Portfolio JavaScript =====

// Sticky Navbar Shadow on Scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


// Smooth Scroll for Navbar Links
document.querySelectorAll('header a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Active Navbar Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// Reveal Sections on Scroll
const revealElements = document.querySelectorAll(".section");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Typing Effect for Home Title
const roles = [
  "Frontend Developer",
  "React.js Developer",
  "Creative UI Designer",
  "Java Full Stack Learner",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typing = document.getElementById("typing-role");

function animateRoles() {
  const currentText = roles[roleIndex];

  if (!isDeleting) {
    typing.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(animateRoles, 1500);
      return;
    }
  } else {
    typing.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(animateRoles, isDeleting ? 50 : 90);
}

animateRoles();