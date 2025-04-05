 // Navbar scroll effect
 window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > window.innerHeight) {
      header.classList.add('bg-white', 'shadow-md', 'text-black');
      header.classList.remove('text-white');
    } else {
      header.classList.remove('bg-white', 'shadow-md', 'text-black');
      header.classList.add('text-white');
    }
  });

  // Text Scroll Transition
  const firstText = document.getElementById('firstText');
  const secondText = document.getElementById('secondText');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    if (scrollY < vh * 0.5) {
      firstText.classList.add('show');
      secondText.classList.remove('show');
    } else {
      firstText.classList.remove('show');
      secondText.classList.add('show');
    }
  });

  // Fade-in form animation
  const formSection = document.querySelector('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  observer.observe(formSection);

  // Form submission alert
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
  });

  fetch('/Ahome-Front_end/assets/html/footer.html')
.then(res => res.text())
.then(data => {
  document.getElementById('footer-placeholder').innerHTML = data;
});

window.addEventListener('scroll', function () {
  const header = document.getElementById('main-header');
  if (window.scrollY > window.innerHeight) {
    header.classList.add('bg-white', 'shadow-md', 'text-black');
    header.classList.remove('text-white');
  } else {
    header.classList.remove('bg-white', 'shadow-md', 'text-black');
    header.classList.add('text-white');
  }
});