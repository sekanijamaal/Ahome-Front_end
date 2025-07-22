// property_search.js

const properties = [
    {
        id: 1,
        name: "Chipperfield Apartments 1",
        lat: 48.2082,
        lng: 16.3738,
        area: "District 1",
        description: "A stunning modern apartment located in the vibrant District 1. Features spacious rooms, an open-plan kitchen, and breathtaking city views. Perfect for urban living.",
        images: [
            "/assets/images/Picture1.jpg",
            "/assets/images/Picture2.jpg",
            "/assets/images/Resident at beni"
        ]
    },
    {
        id: 2,
        name: "Chipperfield Apartments 2",
        lat: 48.2233,
        lng: 16.3923,
        area: "District 2",
        description: "Elegant living in District 2 with a classic touch. This apartment boasts high ceilings, original details, and a cozy fireplace, ideal for a comfortable lifestyle.",
        images: [
            "/assets/images/property_2/img_1.jpg",
            "/assets/images/property_2/img_2.jpg",
            "/assets/images/property_2/img_3.jpg"
        ]
    },
    {
        id: 3,
        name: "Chipperfield Apartments 3",
        lat: 48.1927,
        lng: 16.4034,
        area: "District 3",
        description: "Brand new development offering sleek, minimalist design. Enjoy smart home features, a communal rooftop garden, and excellent connectivity to public transport.",
        images: [
            "/assets/images/property_3/img_1.jpg",
            "/assets/images/property_3/img_2.jpg",
            "/assets/images/property_3/img_3.jpg"
        ]
    },
    {
        id: 4,
        name: "Chipperfield Apartments 4",
        lat: 48.1986,
        lng: 16.3665,
        area: "District 1",
        description: "Charming apartment in a quiet, tree-lined street. Features a cozy balcony and close proximity to local markets. Ideal for individuals seeking peace and convenience.",
        images: [
            "/assets/images/property_4/img_1.jpg",
            "/assets/images/property_4/img_2.jpg",
            "/assets/images/property_4/img_3.jpg"
        ]
    },
    {
        id: 5,
        name: "Chipperfield Apartments 5",
        lat: 48.1889,
        lng: 16.3515,
        area: "District 2",
        description: "Spacious family apartment with multiple bedrooms and a large living area. Comes with access to a private playground and community center. Perfect for growing families.",
        images: [
            "/assets/images/property_5/img_1.jpg",
            "/assets/images/property_5/img_2.jpg",
            "/assets/images/property_5/img_3.jpg"
        ]
    },
    {
        id: 6,
        name: "Chipperfield Apartments 6",
        lat: 48.1932,
        lng: 16.3421,
        area: "District 4",
        description: "High-floor apartment with panoramic city views. Features floor-to-ceiling windows, modern appliances, and smart home integration for ultimate comfort and efficiency.",
        images: [
            "/assets/images/property_6/img_1.jpg",
            "/assets/images/property_6/img_2.jpg",
            "/assets/images/property_6/img_3.jpg"
        ]
    },
    {
        id: 7,
        name: "Chipperfield Apartments 7",
        lat: 48.2036,
        lng: 16.3485,
        area: "District 3",
        description: "Luminous studio apartment, ideal for students or young professionals. Centrally located with easy access to universities, cafes, and nightlife.",
        images: [
            "/assets/images/property_7/img_1.jpg",
            "/assets/images/property_7/img_2.jpg",
            "/assets/images/property_7/img_3.jpg"
        ]
    },
    {
        id: 8,
        name: "Chipperfield Apartments 8",
        lat: 48.2107,
        lng: 16.3473,
        area: "District 4",
        description: "Recently renovated apartment with a focus on sustainable living. Features energy-efficient appliances, recycled materials, and a vibrant community garden.",
        images: [
            "/assets/images/property_8/img_1.jpg",
            "/assets/images/property_8/img_2.jpg",
            "/assets/images/property_8/img_3.jpg"
        ]
    },
    {
        id: 9,
        name: "Chipperfield Apartments 9",
        lat: 48.2215,
        lng: 16.3602,
        area: "District 1",
        description: "Exclusive penthouse apartment offering unparalleled luxury. Boasts a private rooftop terrace, concierge service, and high-end finishes throughout.",
        images: [
            "/assets/images/property_9/img_1.jpg",
            "/assets/images/property_9/img_2.jpg",
            "/assets/images/property_9/img_3.jpg"
        ]
    },
    {
        id: 10,
        name: "Chipperfield Apartments 10",
        lat: 48.1663,
        lng: 16.3771,
        area: "District 3",
        description: "Cozy and compact apartment with intelligent use of space. Fully furnished, ready for immediate move-in, and close to essential services.",
        images: [
            "/assets/images/property_10/img_1.jpg",
            "/assets/images/property_10/img_2.jpg",
            "/assets/images/property_10/img_3.jpg"
        ]
    },
    {
        id: 11,
        name: "Chipperfield Apartments 11",
        lat: 48.1685,
        lng: 16.4321,
        area: "District 2",
        description: "Artist's loft with expansive windows and creative design elements. Features a dedicated studio space and vibrant neighborhood full of galleries and workshops.",
        images: [
            "/assets/images/property_11/img_1.jpg",
            "/assets/images/property_11/img_2.jpg",
            "/assets/images/property_11/img_3.jpg"
        ]
    },
    {
        id: 12,
        name: "Chipperfield Apartments 12",
        lat: 48.1734,
        lng: 16.3177,
        area: "District 4",
        description: "Ground-floor apartment with direct garden access. Ideal for pet owners or those who enjoy outdoor living. Quiet location despite being well-connected.",
        images: [
            "/assets/images/property_12/img_1.jpg",
            "/assets/images/property_12/img_2.jpg",
            "/assets/images/property_12/img_3.jpg"
        ]
    },
    {
        id: 13,
        name: "Chipperfield Apartments 13",
        lat: 48.1746,
        lng: 16.2881,
        area: "District 2",
        description: "Historic apartment blending old-world charm with modern comforts. Features original parquet flooring, decorative fireplaces, and a newly renovated kitchen.",
        images: [
            "/assets/images/property_13/img_1.jpg",
            "/assets/images/property_13/img_2.jpg",
            "/assets/images/property_13/img_3.jpg"
        ]
    },
    {
        id: 14,
        name: "Chipperfield Apartments 14",
        lat: 48.2035,
        lng: 16.2743,
        area: "District 1",
        description: "Family-sized apartment in a top school district. Close to parks, playgrounds, and essential amenities for convenient family life.",
        images: [
            "/assets/images/property_14/img_1.jpg",
            "/assets/images/property_14/img_2.jpg",
            "/assets/images/property_14/img_3.jpg"
        ]
    },
    {
        id: 15,
        name: "Chipperfield Apartments 15",
        lat: 48.1993,
        lng: 16.3211,
        area: "District 3",
        description: "Modern minimalist apartment designed for efficiency and style. Ideal for those who appreciate sleek lines, smart storage, and a clutter-free living space.",
        images: [
            "/assets/images/property_15/img_1.jpg",
            "/assets/images/property_15/img_2.jpg",
            "/assets/images/property_15/img_3.jpg"
        ]
    }
];

const map = L.map('map').setView([48.2082, 16.3738], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markerMap = {};
const grid = document.getElementById('property-grid');

// --- NEW GLOBAL MODAL REFERENCES ---
let virtualTourModal;
let closeModalBtn;
let modalPropertyName;
let imageSlider;
let prevSlideBtn;
let nextSlideBtn;
let projectDescription;
let currentPropertyImages = [];
let currentSlideIndex = 0;
// --- END NEW GLOBAL MODAL REFERENCES ---

function renderProperties(list) {
    grid.innerHTML = "";
    list.forEach(p => {
        const icon = L.icon({
            iconUrl: '/assets/icons/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [0, -40]
        });

        const marker = L.marker([p.lat, p.lng], { icon });
        marker.bindPopup(`<b>${p.name}</b>`);
        markerMap[p.id] = marker;

        const card = document.createElement('div');
        card.className = "bg-white p-3 rounded shadow cursor-pointer transition transform hover:shadow-lg hover:scale-[1.02]";
        card.innerHTML = `
            <div class="relative">
                <a href="#" class="open-virtual-tour-modal absolute top-2 left-2 bg-amber-300 text-xs px-2 py-1 rounded hover:bg-amber-400 transition"
                   data-property-id="${p.id}">
                   Virtuelle Tour
                </a>
                <img src="/assets/images/house${p.id}.jpg.jpg"
                     alt="${p.name}" class="rounded-lg w-full h-40 object-cover mb-2 transition-transform duration-300 hover:scale-110"
                     onerror="this.src='/Ahome-Front_end/assets/images/default.jpg';" />
                <button class="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl favorite-btn" data-id="${p.id}">♡</button>
            </div>
            <h3 class="font-bold">${p.name}</h3>
            <p class="text-sm text-gray-600">${p.area}</p>
            <p class="text-green-700 font-semibold mt-1">€ 2,290,000</p>
            <a href="/Ahome-Front_end/house-details${p.id}.html" class="mt-2 inline-block text-sm text-blue-600 hover:underline">View Details</a>
        `;

        card.querySelector('.favorite-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const btn = e.currentTarget;
            btn.textContent = btn.textContent === '♡' ? '❤️' : '♡';
            btn.classList.toggle('text-red-600');
        });

        // --- MODIFIED: Event listener for the new modal trigger ---
        card.querySelector('.open-virtual-tour-modal').addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const propertyId = parseInt(e.currentTarget.dataset.propertyId);
            const property = properties.find(p => p.id === propertyId);
            if (property) {
                openVirtualTourModal(property);
            }
        });
        // --- END MODIFIED ---

        card.addEventListener('mouseenter', () => {
            if (!map.hasLayer(marker)) marker.addTo(map);
            marker.openPopup();
        });
        card.addEventListener('mouseleave', () => {
            marker.closePopup();
            if (map.hasLayer(marker)) map.removeLayer(marker);
        });
        card.addEventListener('click', () => {
            if (!map.hasLayer(marker)) marker.addTo(map);
            map.setView([p.lat, p.lng], 15);
            marker.openPopup();
        });

        grid.appendChild(card);
    });
}

function filterProperties() {
    const term = document.getElementById('search-input').value.toLowerCase();
    const area = document.getElementById('area-select').value;
    const filtered = properties.filter(p =>
        p.name.toLowerCase().includes(term) && (area === '' || p.area === area)
    );
    renderProperties(filtered);
}

// --- NEW MODAL FUNCTIONS ---

function openVirtualTourModal(property) {
    // Populate modal content
    modalPropertyName.textContent = property.name;
    projectDescription.innerHTML = `<p class="mb-4">${property.description}</p>`; // Update description dynamically

    // For simplicity, just add some static features, or extend property object for more dynamic content
    projectDescription.innerHTML += `
        <h4 class="font-bold mt-4 mb-2">Key Features:</h4>
        <ul class="list-disc list-inside text-sm">
            <li>District: ${property.area}</li>
            <li>Spacious layout</li>
            <li>Modern amenities</li>
            <li>Close to transport</li>
            </ul>
    `;


    // Setup image slider
    currentPropertyImages = property.images || []; // Ensure it's an array, even if empty
    currentSlideIndex = 0;
    updateImageSlider();

    virtualTourModal.classList.remove('hidden'); // Show the modal
    document.body.classList.add('overflow-hidden'); // Prevent background scroll
}

function updateImageSlider() {
    imageSlider.innerHTML = ''; // Clear previous images
    if (currentPropertyImages.length === 0) {
        imageSlider.innerHTML = '<div class="flex items-center justify-center h-full text-gray-500">No images available</div>';
        prevSlideBtn.classList.add('hidden');
        nextSlideBtn.classList.add('hidden');
        return;
    }

    const img = document.createElement('img');
    img.src = currentPropertyImages[currentSlideIndex];
    img.alt = `Virtual Tour Image ${currentSlideIndex + 1}`;
    img.className = "w-full h-full object-cover transition-opacity duration-300";
    img.onerror = function() {
        this.src = '/Ahome-Front_end/assets/images/default.jpg'; // Fallback
    };
    imageSlider.appendChild(img);

    // Show/hide navigation buttons based on number of images
    prevSlideBtn.classList.toggle('hidden', currentPropertyImages.length <= 1);
    nextSlideBtn.classList.toggle('hidden', currentPropertyImages.length <= 1);
}

function showNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % currentPropertyImages.length;
    updateImageSlider();
}

function showPrevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + currentPropertyImages.length) % currentPropertyImages.length;
    updateImageSlider();
}

function closeVirtualTourModal() {
    virtualTourModal.classList.add('hidden'); // Hide the modal
    document.body.classList.remove('overflow-hidden'); // Restore background scroll
}

// --- END NEW MODAL FUNCTIONS ---



document.addEventListener('DOMContentLoaded', () => {
    // --- Assign Modal Elements on DOMContentLoaded ---
    virtualTourModal = document.getElementById('virtualTourModal');
    closeModalBtn = document.getElementById('closeModalBtn');
    modalPropertyName = document.getElementById('modalPropertyName');
    imageSlider = document.getElementById('imageSlider');
    prevSlideBtn = document.getElementById('prevSlideBtn');
    nextSlideBtn = document.getElementById('nextSlideBtn');
    projectDescription = document.getElementById('projectDescription');

    // Add event listeners for modal close and slider navigation
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeVirtualTourModal);
    if (prevSlideBtn) prevSlideBtn.addEventListener('click', showPrevSlide);
    if (nextSlideBtn) nextSlideBtn.addEventListener('click', showNextSlide);

    // Close modal if clicking outside the inner content box
    if (virtualTourModal) {
        virtualTourModal.addEventListener('click', (e) => {
            if (e.target === virtualTourModal) { // Only close if click is directly on the overlay
                closeVirtualTourModal();
            }
        });
    }
    // --- END Assign Modal Elements ---


    const gridContainer = document.getElementById('property-grid').parentElement;
    const searchBar = document.createElement('div');
    searchBar.className = "mb-4 flex flex-wrap gap-2 items-center justify-between";
    searchBar.innerHTML = `
        <input type="text" id="search-input" placeholder="Search properties..."
          class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-400" />
        <select id="area-select" class="border border-gray-300 rounded px-3 py-2 text-sm">
          <option value="">All Areas</option>
          <option value="District 1">District 1</option>
          <option value="District 2">District 2</option>
          <option value="District 3">District 3</option>
          <option value="District 4">District 4</option>
        </select>
        <button id="search-btn" class="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">Search</button>
    `;
    gridContainer.prepend(searchBar);

    document.getElementById('search-btn').addEventListener('click', filterProperties);

    renderProperties(properties);
});