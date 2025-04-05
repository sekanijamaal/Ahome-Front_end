const images = [];
for (let i = 1; i <= 15; i++) {
  images.push(`../assets/images/house${i}.jpg`);
}

const gridContainer = document.getElementById('property-grid');

images.forEach((img, index) => {
  const card = document.createElement('div');
  card.className = "bg-white rounded-xl shadow relative overflow-hidden group";

  card.innerHTML = `
    <div class="relative">
      <img src="${img}" alt="House"
        class="rounded-lg w-full h-40 object-cover transform group-hover:scale-110 transition duration-300">
      <div class="absolute top-2 left-2">
        <a href="/virtual-tour${index + 1}.html"
          class="bg-amber-300 text-xs px-2 py-1 rounded hover:bg-amber-400 transition">Virtuelle Tour</a>
      </div>
      <div class="absolute top-2 right-2">
        <button onclick="showPopup(event, ${index + 1})" class="bg-white p-1 rounded-full shadow">
          ❤️
        </button>
      </div>
    </div>
    <div class="p-2">
      <h3 class="font-bold">Chipperfield Apartments ${index + 1}</h3>
      <p class="text-sm text-gray-500">1130 Wien</p>
      <p class="text-gray-700 mt-1">€ 2,290,000</p>
    </div>
  `;

  gridContainer.appendChild(card);
});

function showPopup(event, id) {
  event.stopPropagation();
  document.getElementById('popup').classList.remove('hidden');
  setTimeout(() => {
    window.location.href = `/house-details${id}.html`;
  }, 2500);
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}
