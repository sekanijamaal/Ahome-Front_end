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

  // Fade-in sections
  const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  faders.forEach(el => {
    observer.observe(el);
  });

  // Text scroll transition
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

  // Initial show of first text
  window.addEventListener('DOMContentLoaded', () => {
    firstText.classList.add('show');
  });



// Hide search bar
const searchBar = document.getElementById('search-bar');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= docHeight - 20) {
      searchBar.style.opacity = '0';
      searchBar.style.pointerEvents = 'none';
    } else {
      searchBar.style.opacity = '1';
      searchBar.style.pointerEvents = 'auto';
    }
  });



  //  Intl Tel Input JS -->

  document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
      initialCountry: "auto",
      geoIpLookup: function (callback) {
        fetch("https://ipapi.co/json")
          .then(response => response.json())
          .then(data => callback(data.country_code))
          .catch(() => callback("us"));
      },
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js",
    });
  });