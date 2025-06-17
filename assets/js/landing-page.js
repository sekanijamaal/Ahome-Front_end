// Carousel logic
const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("hidden-slide", i !== index);
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

// Load footer

// Header background change on scroll
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > window.innerHeight) {
    header.classList.add("bg-white", "shadow-md", "text-black");
    header.classList.remove("text-white");
  } else {
    header.classList.remove("bg-white", "shadow-md", "text-black");
    header.classList.add("text-white");
  }
});

// Popup logic
function togglePopup(event) {
  event.stopPropagation();
  const popup = document.getElementById("popup");
  popup.classList.toggle("hidden");
}

document.addEventListener("click", function (e) {
  const popup = document.getElementById("popup");
  const button = document.querySelector('button[onclick="togglePopup(event)"]');

  if (!popup.contains(e.target) && e.target !== button) {
    popup.classList.add("hidden");
  }
});

tailwind.config = {
  theme: {
    extend: {
      animation: {
        "pop-in": "popIn 0.8s ease-out forwards",
        "pop-out": "popOut 0.8s ease-in forwards",
      },
      keyframes: {
        popIn: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        popOut: {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(20px) scale(0.95)" },
        },
      },
    },
  },
};

const cards = document.querySelectorAll(".project-card");
let index = 0;

function animateCard() {
  // Hide all cards
  cards.forEach((card) => {
    card.classList.remove("animate-pop-in", "animate-pop-out");
    card.style.opacity = "0";
  });

  const current = cards[index];
  current.classList.add("animate-pop-in");
  current.style.opacity = "1";

  // Fade out after 2.5s
  setTimeout(() => {
    current.classList.remove("animate-pop-in");
    current.classList.add("animate-pop-out");

    setTimeout(() => {
      current.style.opacity = "0";
      index = (index + 1) % cards.length;
      animateCard();
    }, 800); // pop-out duration
  }, 2500); // stay visible
}

animateCard();

// Include after Swiper JS is loaded
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  speed: 600,
  mousewheel: true,
});

tailwind.config = {
  theme: {
    extend: {
      colors: {
        beige: '#DCC9A3'
      }
    }
  }
}


