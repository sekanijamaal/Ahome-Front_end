// main.js

// Global references to elements, populated after components are loaded
let htmlTag;
let languageToggle;
let langTexts;
let langPlaceholders;
let langLabels;
let navbar;
let brand;
let navLinks;
let projectLink;
let arrow;
let icons;
let heartIcon;

const defaultLanguage = 'fr'; // Set the default language for initial load

// Function to set the language and show/hide corresponding spans
const setLanguage = (lang) => {
    // If htmlTag hasn't been set yet (e.g., initial load), get it
    if (!htmlTag) {
        htmlTag = document.querySelector('html');
    }
    htmlTag.setAttribute('lang', lang);

    // Update text content
    if (langTexts) { // Check if elements are available
        langTexts.forEach(element => {
            if (element.getAttribute('data-lang') === lang) {
                element.style.display = ''; // Show the element (resets to its natural display type)
            } else {
                element.style.display = 'none'; // Hide the element
            }
        });
    }


    // Update placeholder attributes
    if (langPlaceholders) { // Check if elements are available
        langPlaceholders.forEach(element => {
            const placeholderKey = `data-lang-placeholder-${lang}`;
            if (element.hasAttribute(placeholderKey)) {
                element.setAttribute('placeholder', element.getAttribute(placeholderKey));
            }
        });
    }


    // Update lang-label visibility and color based on active language
    if (langLabels) { // Check if elements are available
        langLabels.forEach(label => {
            if (label.getAttribute('data-lang') === lang) {
                label.classList.add('font-bold', 'text-blue-500'); // Highlight active language
                label.classList.remove('text-gray-600', 'text-white', 'text-black'); // Remove inactive/scroll colors
            } else {
                label.classList.remove('font-bold', 'text-blue-500'); // Remove active highlight
                // Ensure correct color based on scroll state
                updateLangLabelColorOnScroll(label, window.scrollY > 0);
            }
        });
    }


    // Store the preference in localStorage
    localStorage.setItem('preferredLanguage', lang);

    // Re-apply scroll-based colors after language change to ensure consistency
    if (navbar) { // Only call if navbar and related elements are loaded
        updateNavbarColors(window.scrollY > 0);
    }
};

// Helper function for language label colors during scroll (used by setLanguage)
const updateLangLabelColorOnScroll = (label, scrolled) => {
    // Ensure htmlTag is available before trying to read its lang attribute
    if (!htmlTag) {
        htmlTag = document.querySelector('html');
    }

    if (label.getAttribute('data-lang') === htmlTag.getAttribute('lang')) {
        label.classList.remove('text-black', 'text-white', 'text-gray-600');
        label.classList.add('text-blue-500'); // Active language is always blue
    } else {
        if (scrolled) {
            label.classList.add('text-gray-600');
            label.classList.remove('text-white', 'text-black');
        } else {
            label.classList.add('text-white');
            label.classList.remove('text-gray-600', 'text-black');
        }
    }
};

// Function to update navbar colors based on scroll state
const updateNavbarColors = (scrolled) => {
    if (!navbar) return; // Exit if navbar isn't found (components not yet loaded)

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
        updateLangLabelColorOnScroll(label, scrolled);
    });

    navLinks.forEach((link) => {
        link.classList.toggle("text-black", scrolled);
        link.classList.toggle("text-white", !scrolled);
        link.classList.toggle("hover:bg-gray-200/60", scrolled);
        link.classList.toggle("hover:bg-white/20", !scrolled);
    });

    if (projectLink) { // Check if projectLink is loaded
        projectLink.classList.toggle("text-black", scrolled);
        projectLink.classList.toggle("text-white", !scrolled);
        projectLink.classList.toggle("border-gray-300", scrolled);
        projectLink.classList.toggle("border-white", !scrolled);
        projectLink.classList.toggle("bg-gray-100", scrolled);
        projectLink.classList.toggle("hover:bg-gray-200", scrolled);
        if (scrolled) {
            projectLink.classList.add('text-black');
            projectLink.classList.remove('text-white');
        } else {
            projectLink.classList.add('text-white');
            projectLink.classList.remove('text-black');
        }
    }

    if (arrow) { // Check if arrow is loaded
        arrow.classList.toggle("text-gray-400", scrolled);
        arrow.classList.toggle("text-white", !scrolled);
    }

    if (heartIcon) { // Check if heartIcon is loaded
        heartIcon.setAttribute("fill", scrolled ? "black" : "none");
    }
};

// Function to initialize all header and language behavior after components are loaded
const initializePageBehavior = () => {
    // Assign global variables (once all HTML is loaded into the DOM)
    htmlTag = document.querySelector('html');
    languageToggle = document.getElementById('languageToggle');
    langTexts = document.querySelectorAll('.lang-text');
    langPlaceholders = document.querySelectorAll('[data-lang-placeholder-en], [data-lang-placeholder-fr]');
    langLabels = document.querySelectorAll('.lang-label');
    navbar = document.getElementById("navbar");
    brand = document.getElementById("brand");
    navLinks = document.querySelectorAll(".nav-link");
    projectLink = document.querySelector(".projects-link");
    arrow = document.querySelector(".down-arrow");
    icons = document.getElementById("icon-set");
    heartIcon = document.getElementById("heart-icon");

    // Set initial language based on localStorage or default
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        if (languageToggle) { // Ensure toggle exists before trying to check it
            languageToggle.checked = (storedLang === 'en');
        }
        setLanguage(storedLang);
    } else {
        setLanguage(defaultLanguage);
        if (languageToggle) { // Ensure toggle exists before trying to uncheck it
            languageToggle.checked = false; // Default to French
        }
    }

    // Event listener for the language toggle switch
    if (languageToggle) { // Only add listener if the toggle element exists
        languageToggle.addEventListener('change', () => {
            if (languageToggle.checked) {
                setLanguage('en');
            } else {
                setLanguage('fr');
            }
        });
    }

    // Scroll event listener
    window.addEventListener("scroll", () => updateNavbarColors(window.scrollY > 0));

    // Dropdown and popup functions (made globally accessible via window object)
    window.toggleDropdown = function () {
        const dropdown = document.getElementById("projects-dropdown");
        if (dropdown) dropdown.classList.toggle("hidden");
    };

    window.togglePopup = function (event) {
        event.stopPropagation(); // Prevent document click from closing immediately
        const popup = document.getElementById("popup");
        if (popup) popup.classList.toggle("hidden");
    };

    // Close popup/dropdown on outside click
    document.addEventListener("click", function (e) {
        const popup = document.getElementById("popup");
        const togglePopupButtons = document.querySelectorAll('button[onclick="togglePopup(event)"]');
        const isClickInsidePopupButton = Array.from(togglePopupButtons).some(button => button.contains(e.target));

        if (popup && !popup.contains(e.target) && !isClickInsidePopupButton) {
            popup.classList.add("hidden");
        }

        const dropdown = document.getElementById("projects-dropdown");
        const toggleButton = document.getElementById("project-toggle");
        if (dropdown && toggleButton && !dropdown.contains(e.target) && !toggleButton.contains(e.target)) {
            dropdown.classList.add("hidden");
        }
    });

    // Initial call to set navbar colors for current scroll position
    updateNavbarColors(window.scrollY > 0);
};

// Function to load HTML components into their placeholders
async function loadComponent(placeholderId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} from ${componentPath}`);
        }
        const html = await response.text();
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            placeholder.innerHTML = html;
        } else {
            console.error(`Placeholder with ID "${placeholderId}" not found in the DOM.`);
        }
    } catch (error) {
        console.error(`Failed to load component ${componentPath}:`, error);
    }
}

// Load components and then initialize behavior when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Load header and footer components asynchronously
    await loadComponent('header-placeholder', '/header-component.html');
    await loadComponent('footer-placeholder', '/footer-component.html');

    // After *both* components are successfully loaded and inserted into the DOM,
    // then we can initialize the page behavior which relies on those elements existing.
    initializePageBehavior();
});

 fetch("/assets/html/header.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("header-placeholder").innerHTML = html;
  
        // Re-evaluate scripts inside the injected HTML
        const temp = document.createElement("div");
        temp.innerHTML = html;
        const scripts = temp.querySelectorAll("script");
        scripts.forEach((oldScript) => {
          const newScript = document.createElement("script");
          if (oldScript.src) {
            newScript.src = oldScript.src;
          } else {
            newScript.textContent = oldScript.textContent;
          }
          document.body.appendChild(newScript);
        });
      });
      fetch('/assets/html/footer.html')
.then(res => res.text())
.then(data => {
  document.getElementById('footer-placeholder').innerHTML = data;
});

