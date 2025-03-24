const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('hidden-slide', i !== index);
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000); // 5 seconds

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('hidden');
  }

  document.addEventListener('click', function (e) {
    const popup = document.getElementById('popup');
    const isInside = popup.contains(e.target) || e.target.closest('button[onclick="togglePopup()"]');
    if (!isInside && !popup.classList.contains('hidden')) {
      popup.classList.add('hidden');
    }
  });