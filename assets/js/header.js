window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
  
    if (window.scrollY > 0) {
      header.classList.add("bg-white", "shadow-md", "text-black");
      header.classList.remove("bg-transparent", "text-white");
    } else {
      header.classList.remove("bg-white", "shadow-md", "text-black");
      header.classList.add("bg-transparent", "text-white");
    }
  });
  
  
    const navbar = document.getElementById("navbar");
    const brand = document.getElementById("brand");
    const navLinks = document.querySelectorAll(".nav-link");
    const projectLink = document.querySelector(".projects-link");
    const arrow = document.querySelector(".down-arrow");
    const icons = document.getElementById("icon-set");
    const heartIcon = document.getElementById("heart-icon");

    // Language Toggle Elements
    const languageToggle = document.getElementById('languageToggle');
    const htmlTag = document.querySelector('html');
    const langTexts = document.querySelectorAll('.lang-text'); // All elements with language-specific text
    const langLabels = document.querySelectorAll('.lang-label'); // EN/FR labels next to toggle

    // Function to set the language
    const setLanguage = (lang) => {
      htmlTag.setAttribute('lang', lang);

      langTexts.forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
          element.style.display = ''; // Reset display to default (inline, block etc.)
        } else {
          element.style.display = 'none';
        }
      });

      // Update lang-label visibility and color based on active language
      langLabels.forEach(label => {
        if (label.getAttribute('data-lang') === lang) {
          label.classList.add('font-bold', 'text-blue-500'); // Highlight active language
          label.classList.remove('text-gray-600', 'text-white'); // Remove inactive/scroll colors
        } else {
          label.classList.remove('font-bold', 'text-blue-500'); // Remove active highlight
          // Ensure correct color based on scroll state
          if (window.scrollY > 0) {
            label.classList.add('text-gray-600');
            label.classList.remove('text-white');
          } else {
            label.classList.add('text-white');
            label.classList.remove('text-gray-600');
          }
        }
      });


      // Store the preference in localStorage
      localStorage.setItem('preferredLanguage', lang);

      // Re-apply scroll-based colors after language change to ensure consistency
      updateNavbarColors(window.scrollY > 0);
    };

    // Function to update navbar colors based on scroll state
    const updateNavbarColors = (scrolled) => {
      navbar.classList.toggle("bg-white", scrolled);
      navbar.classList.toggle("text-black", scrolled);
      navbar.classList.toggle("text-white", !scrolled);
      navbar.classList.toggle("shadow-md", scrolled);

      brand.classList.toggle("text-black", scrolled);
      brand.classList.toggle("text-white", !scrolled);

      icons.classList.toggle("text-black", scrolled);
      icons.classList.toggle("text-white", !scrolled);

      // Special handling for language labels for scroll effect
      langLabels.forEach(label => {
        if (label.getAttribute('data-lang') === htmlTag.getAttribute('lang')) {
          label.classList.remove('text-black', 'text-white'); // Remove general color class
          label.classList.add('text-blue-500'); // Keep active language highlighted
        } else {
          if (scrolled) {
            label.classList.add('text-gray-600');
            label.classList.remove('text-white');
          } else {
            label.classList.add('text-white');
            label.classList.remove('text-gray-600');
          }
        }
      });


      navLinks.forEach((link) => {
        link.classList.toggle("text-black", scrolled);
        link.classList.toggle("text-white", !scrolled);
        link.classList.toggle("hover:bg-gray-200/60", scrolled);
        link.classList.toggle("hover:bg-white/20", !scrolled);
      });

      projectLink.classList.toggle("text-black", scrolled);
      projectLink.classList.toggle("text-white", !scrolled);
      projectLink.classList.toggle("border-gray-300", scrolled);
      projectLink.classList.toggle("border-white", !scrolled);
      projectLink.classList.toggle("bg-gray-100", scrolled);
      projectLink.classList.toggle("hover:bg-gray-200", scrolled);
      // Ensure projects-link text color updates with language
      if (scrolled) {
        projectLink.classList.add('text-black');
        projectLink.classList.remove('text-white');
      } else {
        projectLink.classList.add('text-white');
        projectLink.classList.remove('text-black');
      }

      arrow.classList.toggle("text-gray-400", scrolled);
      arrow.classList.toggle("text-white", !scrolled);

      if (heartIcon) {
        heartIcon.setAttribute("fill", scrolled ? "black" : "none");
      }
    };

    // Initial check for preferred language on load
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
      if (storedLang === 'en') {
        languageToggle.checked = true; // Set toggle to English position
      }
      setLanguage(storedLang);
    } else {
      // Default to French if no preference is stored
      setLanguage('fr');
      languageToggle.checked = false; // Ensure toggle is in French position
    }

    // Event listener for the language toggle switch
    languageToggle.addEventListener('change', () => {
      if (languageToggle.checked) {
        setLanguage('en');
      } else {
        setLanguage('fr');
      }
    });

    // Existing scroll event listener, updated to use the new function
    window.addEventListener("scroll", () => {
      updateNavbarColors(window.scrollY > 0);
    });

    // Existing dropdown functions
    function toggleDropdown() {
      const dropdown = document.getElementById("projects-dropdown");
      dropdown.classList.toggle("hidden");
    }

    function togglePopup(event) {
      event.stopPropagation();
      const popup = document.getElementById("popup");
      popup.classList.toggle("hidden");
    }

    document.addEventListener("click", function (e) {
      const popup = document.getElementById("popup");
      const button = document.querySelector(
        'button[onclick="togglePopup(event)"]'
      ); // Selects any button with this onclick attribute
      if (!popup.contains(e.target) && e.target !== button && !button.contains(e.target)) {
        popup.classList.add("hidden");
      }
    });

    // Close dropdown on outside click
    document.addEventListener('click', function (e) {
      const dropdown = document.getElementById('projects-dropdown');
      const toggleButton = document.getElementById('project-toggle');
      if (!dropdown.contains(e.target) && !toggleButton.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });