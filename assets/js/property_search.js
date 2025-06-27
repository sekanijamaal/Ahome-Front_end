<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notre Portfolio - Français</title>
  
  <script src="https://cdn.tailwindcss.com"></script>
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/turn.js/4.1.1/turn.min.js"></script>
  
  <style>
    /* Basic body styling, assuming similar to your main page */
    body {
      font-family: 'Comfortaa', cursive; /* Adjust if your actual font is different */
      background-color: #0a0a0a; /* Dark background */
      color: #ffffff;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    main {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem; /* Reduced padding slightly for better fit */
      text-align: center;
    }

    /* Styles for the flipbook container */
    #flipbook {
      background: #333; /* Background for the area behind the pages */
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6); /* Deeper shadow for 3D effect */
      border-radius: 8px; /* Slightly rounded corners for the book */
      overflow: hidden; /* Ensures shadows and content are contained */
      /* turn.js will set its own width/height on the canvas,
         but these define the container's max size if needed */
      max-width: 90vw; /* Responsive max-width */
      max-height: 80vh; /* Responsive max-height */
    }

    /* Styles for individual pages inside the flipbook */
    #flipbook .page {
      background: white; /* Color of the page itself */
      color: #333; /* Text color on the page */
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box; /* Include padding in element's total width/height */
      overflow: hidden; /* Prevent content from spilling out */
      position: relative; /* For page number positioning */
    }

    #flipbook .page img {
      max-width: 100%;
      max-height: 80%; /* Allow space for text below */
      object-fit: contain; /* Scales image to fit without cropping, preserving aspect ratio */
      margin-bottom: 15px; /* Space between image and text */
      border-radius: 4px; /* Slightly rounded image corners */
    }

    #flipbook .page .page-number {
      position: absolute;
      bottom: 10px;
      right: 15px; /* Adjust if needed */
      font-size: 14px;
      color: #999;
      font-weight: bold;
    }
    
    /* Loading indicator styles */
    #loadingIndicator {
        text-align: center;
        margin-top: 50px;
    }

    /* Animation for initial fade-in elements */
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    .animate-fade-in {
        animation: fadeIn 0.5s ease-out forwards;
    }
  </style>
</head>
<body class="bg-gray-900 text-white min-h-screen flex flex-col">
  <header class="bg-gray-800 py-4 px-6 shadow-lg z-10">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">Mon Portfolio</h1>
      <nav>
        <a href="/" class="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-md mr-4">
            Retour à l'Accueil
        </a>
        <button id="prevBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2">
          Précédent
        </button>
        <button id="nextBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Suivant
        </button>
      </nav>
    </div>
  </header>

  <main class="flex-grow flex items-center justify-center p-4">
    <div id="loadingIndicator" class="text-xl text-gray-400 animate-fade-in">
        Chargement du Portfolio...
        <svg class="animate-spin h-8 w-8 text-blue-400 mx-auto mt-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    </div>
    
    <div id="flipbook" class="w-full max-w-4xl h-[600px] shadow-2xl" style="display: none;">
      </div>
  </main>

  <footer class="bg-gray-800 py-4 text-center text-gray-400 mt-auto">
    <p>&copy; 2025 Mon Portfolio. Tous droits réservés.</p>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // --- IMPORTANT: Adjust these paths to your actual French portfolio images! ---
      const portfolioImages = [
        '/assets/images/portfolio/fr/page-1.jpg', 
        '/assets/images/portfolio/fr/page-2.jpg',
        '/assets/images/portfolio/fr/page-3.jpg',
        '/assets/images/portfolio/fr/page-4.jpg',
        '/assets/images/portfolio/fr/page-5.jpg'
        // Add more image paths here as needed for your portfolio
      ];

      const flipbook = $('#flipbook'); // jQuery selector for the flipbook container
      const loadingIndicator = $('#loadingIndicator'); // jQuery selector for the loading indicator

      // --- 1. Initially hide the flipbook and show loading indicator ---
      flipbook.hide();
      loadingIndicator.show();

      // --- 2. Pre-load all images to ensure they are ready before turn.js starts ---
      const imagePromises = portfolioImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img); // Resolve when image loads
          img.onerror = () => {
            console.error(`Erreur : Échec du chargement de l'image : ${src}`);
            reject(new Error(`Erreur de chargement d'image pour ${src}`)); // Reject on error
          };
        });
      });

      // --- Wait for all images to load, then initialize turn.js ---
      Promise.all(imagePromises)
        .then(() => {
          console.log("Toutes les images du portfolio sont pré-chargées.");

          // --- 3. Build the HTML for the pages and append to the flipbook container ---
          portfolioImages.forEach((imgSrc, index) => {
            const pageNumber = index + 1;
            // Append the HTML directly to the flipbook container.
            // turn.js will then process these child elements as pages.
            flipbook.append(`
              <div class="page">
                <img src="${imgSrc}" alt="Élément de portfolio ${pageNumber}">
                <div class="text-center mt-4">
                  <h3 class="text-xl font-bold">Projet ${pageNumber}</h3>
                  <p class="text-gray-600">Description détaillée du projet ${pageNumber} ici. Ceci est un exemple de texte.</p>
                </div>
                <div class="page-number">${pageNumber}</div>
              </div>
            `);
          });

          // --- 4. Initialize turn.js AFTER all pages are added to the DOM ---
          flipbook.turn({
            width: 800, // Adjust this to fit your design and image dimensions (e.g., 600 for single page, 1200 for double)
            height: 600, // Adjust this to fit your design and image dimensions
            autoCenter: true, // Centers the flipbook
            duration: 1000, // Animation speed in milliseconds
            gradients: true, // Enable shadows/gradients for a realistic look
            display: 'double', // 'single' for one page, 'double' for a book spread
            acceleration: true // Enable hardware acceleration for smoother flips
          });

          // --- 5. Hide loading indicator and show the fully initialized flipbook ---
          loadingIndicator.hide();
          flipbook.show();
          console.log("Turn.js portfolio initialisé et affiché !");

          // --- 6. Attach Navigation Button Event Listeners ---
          document.getElementById('prevBtn').addEventListener('click', function() {
            flipbook.turn('previous'); // Go to the previous page
          });

          document.getElementById('nextBtn').addEventListener('click', function() {
            flipbook.turn('next'); // Go to the next page
          });

          // --- 7. Keyboard Navigation ---
          document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
              flipbook.turn('previous');
            } else if (e.key === 'ArrowRight') {
              flipbook.turn('next'); 
            }
          });

        })
        .catch(error => {
          // This block runs if any image fails to load or if there's an error in the Promise chain
          console.error("Erreur critique : Impossible de charger le portfolio.", error);
          loadingIndicator.text("Erreur lors du chargement du portfolio. Veuillez vérifier les chemins des images et la console.");
          loadingIndicator.addClass('text-red-500'); // Style the error message
          // Optionally, show a broken image icon or a default message in the flipbook area
        });
    });
  </script>
</body>
</html>xuh