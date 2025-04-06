// navbar.js

const navbar = document.getElementById("navbar");
const brand = document.getElementById("brand");
const navLinks = document.querySelectorAll('.nav-link');
const projectLink = document.querySelector('.projects-link');
const arrow = document.querySelector('.down-arrow');
const icons = document.getElementById("icon-set");
const heartIcon = document.getElementById("heart-icon");

// Handle Scroll Navbar
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 50;

  navbar.classList.toggle("bg-white", scrolled);
  navbar.classList.toggle("border-b", scrolled);
  navbar.classList.toggle("border-black", scrolled);

  brand.classList.toggle("text-white", !scrolled);
  brand.classList.toggle("text-black", scrolled);

  icons.classList.toggle("text-white", !scrolled);
  icons.classList.toggle("text-black", scrolled);

  navLinks.forEach(link => {
    link.classList.toggle("text-white", !scrolled);
    link.classList.toggle("text-black", scrolled);
    link.classList.toggle("hover:bg-white/20", !scrolled);
    link.classList.toggle("hover:bg-gray-200/60", scrolled);
  });

  projectLink.classList.toggle("text-white", !scrolled);
  projectLink.classList.toggle("text-black", scrolled);
  projectLink.classList.toggle("border-white", !scrolled);
  projectLink.classList.toggle("border-gray-300", scrolled);
  projectLink.classList.toggle("bg-gray-100", scrolled);
  projectLink.classList.toggle("hover:bg-gray-200", scrolled);

  arrow.classList.toggle("text-white", !scrolled);
  arrow.classList.toggle("text-gray-400", scrolled);

  heartIcon.setAttribute("fill", scrolled ? "black" : "none");
});

// Toggle Dropdown
function toggleDropdown() {
  const dropdown = document.getElementById('projects-dropdown');
  dropdown.classList.toggle('hidden');
}

// Close Dropdown on Outside Click
document.addEventListener('click', function (event) {
  const toggle = document.getElementById('project-toggle');
  const dropdown = document.getElementById('projects-dropdown');
  if (!toggle.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
  }
});

// Toggle & Close Popups
function togglePopup(id) {
  const popup = document.getElementById(id);
  popup.classList.toggle('hidden');
}

function closePopup(id) {
  document.getElementById(id).classList.add('hidden');
}

// === HERO SECTION ===

// Switch to fallback image after video ends
const heroVideo = document.getElementById("hero-video");
const fallbackImage = document.getElementById("fallback-image");

if (heroVideo) {
  heroVideo.addEventListener("ended", () => {
    heroVideo.classList.add("hidden");
    fallbackImage.classList.remove("hidden");
  });
}

// Carousel Auto-Slide
let currentSlide = 0;
const items = document.querySelectorAll('.carousel-item');
const totalSlides = items.length;

setInterval(() => {
  items.forEach((item, index) => {
    item.classList.remove('border-2', 'border-white', 'opacity-100');
    item.classList.add('opacity-50');

    if (index === currentSlide) {
      item.classList.add('border-2', 'border-white', 'opacity-100');
    }
  });

  currentSlide = (currentSlide + 1) % totalSlides;
}, 4000);

function togglePopup(event) {
  event.stopPropagation();
  const popup = document.getElementById('popup');
  popup.classList.toggle('hidden');
}

document.addEventListener('click', function (e) {
  const popup = document.getElementById('popup');
  const button = document.querySelector('button[onclick="togglePopup(event)"]');

  if (!popup.contains(e.target) && e.target !== button) {
    popup.classList.add('hidden');
  }
});
