// Updated property_search.js with search, filter, Google Fonts, and View Details button

const properties = [
  { id: 1, name: "Chipperfield Apartments 1", lat: 48.2082, lng: 16.3738, area: "District 1" },
  { id: 2, name: "Chipperfield Apartments 2", lat: 48.2233, lng: 16.3923, area: "District 2" },
  { id: 3, name: "Chipperfield Apartments 3", lat: 48.1927, lng: 16.4034, area: "District 3" },
  { id: 4, name: "Chipperfield Apartments 4", lat: 48.1986, lng: 16.3665, area: "District 1" },
  { id: 5, name: "Chipperfield Apartments 5", lat: 48.1889, lng: 16.3515, area: "District 2" },
  { id: 6, name: "Chipperfield Apartments 6", lat: 48.1932, lng: 16.3421, area: "District 4" },
  { id: 7, name: "Chipperfield Apartments 7", lat: 48.2036, lng: 16.3485, area: "District 3" },
  { id: 8, name: "Chipperfield Apartments 8", lat: 48.2107, lng: 16.3473, area: "District 4" },
  { id: 9, name: "Chipperfield Apartments 9", lat: 48.2215, lng: 16.3602, area: "District 1" },
  { id: 10, name: "Chipperfield Apartments 10", lat: 48.1663, lng: 16.3771, area: "District 3" },
  { id: 11, name: "Chipperfield Apartments 11", lat: 48.1685, lng: 16.4321, area: "District 2" },
  { id: 12, name: "Chipperfield Apartments 12", lat: 48.1734, lng: 16.3177, area: "District 4" },
  { id: 13, name: "Chipperfield Apartments 13", lat: 48.1746, lng: 16.2881, area: "District 2" },
  { id: 14, name: "Chipperfield Apartments 14", lat: 48.2035, lng: 16.2743, area: "District 1" },
  { id: 15, name: "Chipperfield Apartments 15", lat: 48.1993, lng: 16.3211, area: "District 3" }
];

const map = L.map('map').setView([48.2082, 16.3738], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markerMap = {};
const grid = document.getElementById('property-grid');

function renderProperties(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const icon = L.icon({
      iconUrl: '/Ahome-Front_end/assets/icons/marker-icon.png',
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
        <a href="/Ahome-Front_end/virtual-tour${p.id}.html"
           class="absolute top-2 left-2 bg-amber-300 text-xs px-2 py-1 rounded hover:bg-amber-400 transition">
           Virtuelle Tour
        </a>
        <img src="/Ahome-Front_end/assets/images/house${p.id}.jpg.jpg"
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

document.addEventListener('DOMContentLoaded', () => {
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
