 // Property Data (12 properties)
        const properties = [
            {
                id: 1,
                title: "Luxury Penthouse with Ocean View",
                address: "123 Coastal Drive, Miami, FL",
                price: "$2,500,000",
                type: "sale",
                bedrooms: 3,
                bathrooms: 3.5,
                area: "2,800 sq ft",
                description: "This stunning penthouse offers breathtaking ocean views from every room. The open floor plan features floor-to-ceiling windows, a gourmet kitchen with high-end appliances, and a spacious master suite with a luxurious bathroom. The building amenities include a rooftop pool, fitness center, and 24/7 concierge service.",
                features: ["Ocean View", "Rooftop Pool", "Smart Home", "Gourmet Kitchen", "Walk-in Closets", "Concierge", "Fitness Center", "Parking"],
                images: [
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                ],
                location: [25.7617, -80.1918],
                agent: {
                    name: "Sarah Johnson",
                    phone: "(555) 123-4567",
                    email: "sarah@luxuryestates.com",
                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
            },
            {
                id: 2,
                title: "Modern Downtown Loft",
                address: "456 Urban Street, New York, NY",
                price: "$1,200,000",
                type: "sale",
                bedrooms: 2,
                bathrooms: 2,
                area: "1,500 sq ft",
                description: "This chic loft in the heart of downtown features exposed brick walls, high ceilings, and large industrial-style windows. The open concept living space is perfect for entertaining, and the modern kitchen comes equipped with stainless steel appliances. The building offers a shared rooftop terrace with stunning city views.",
                features: ["Downtown", "Exposed Brick", "High Ceilings", "Rooftop Terrace", "Modern Kitchen", "Hardwood Floors", "Laundry", "Parking"],
                images: [
                    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                ],
                location: [40.7128, -74.0060],
                agent: {
                    name: "Michael Chen",
                    phone: "(555) 987-6543",
                    email: "michael@luxuryestates.com",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
            },
            {
                id: 3,
                title: "Charming Suburban Family Home",
                address: "789 Green Avenue, Austin, TX",
                price: "$750,000",
                type: "sale",
                bedrooms: 4,
                bathrooms: 3,
                area: "3,200 sq ft",
                description: "This beautiful family home in a quiet suburban neighborhood features a spacious backyard with a pool, perfect for summer gatherings. The open floor plan includes a large kitchen with a center island, a formal dining room, and a cozy living room with a fireplace. The master suite has a walk-in closet and a luxurious en-suite bathroom.",
                features: ["Swimming Pool", "Large Backyard", "Fireplace", "Gourmet Kitchen", "Walk-in Closet", "Hardwood Floors", "Garage", "Family Room"],
                images: [
                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                ],
                location: [30.2672, -97.7431],
                agent: {
                    name: "Emily Wilson",
                    phone: "(555) 456-7890",
                    email: "emily@luxuryestates.com",
                    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
            },
            {
                id: 4,
                title: "Luxury Beachfront Villa",
                address: "101 Ocean Boulevard, Malibu, CA",
                price: "$5,800/month",
                type: "rent",
                bedrooms: 5,
                bathrooms: 4.5,
                area: "4,500 sq ft",
                description: "This exquisite beachfront villa offers direct access to a private beach and stunning panoramic ocean views. The property features a gourmet kitchen, home theater, wine cellar, and a stunning infinity pool. The master suite includes a private balcony, spa-like bathroom, and a walk-in closet. Perfect for those seeking luxury coastal living.",
                features: ["Beachfront", "Infinity Pool", "Home Theater", "Wine Cellar", "Gourmet Kitchen", "Private Beach", "Smart Home", "Parking"],
                images: [
                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                ],
                location: [34.0259, -118.7798],
                agent: {
                    name: "David Rodriguez",
                    phone: "(555) 789-0123",
                    email: "david@luxuryestates.com",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
            },
            {
                id: 5,
                title: "Historic Townhouse in Georgetown",
                address: "202 Heritage Lane, Washington, DC",
                price: "$1,950,000",
                type: "sale",
                bedrooms: 4,
                bathrooms: 3.5,
                area: "3,800 sq ft",
                description: "This meticulously restored historic townhouse blends classic charm with modern amenities. Features include original hardwood floors, crown molding, a chef's kitchen with custom cabinetry, and a private rooftop terrace with city views. Located in the heart of Georgetown, just steps from fine dining and shopping.",
                features: ["Historic", "Hardwood Floors", "Rooftop Terrace", "Chef's Kitchen", "Walk-in Closets", "Fireplace", "Parking", "Garden"],
                images: [
                    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                ],
                location: [38.9072, -77.0369],
                agent: {
                    name: "Jessica Lee",
                    phone: "(555) 234-5678",
                    email: "jessica@luxuryestates.com",
                    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
            },
            {
                id: 6,
                title: "Mountain Retreat with Stunning Views",
                address: "303 Alpine Way, Aspen, CO",
                price: "$3,200/month",
                type: "rent",
                bedrooms: 3,
                bathrooms: 2,
                area: "2,200 sq ft",
                description: "This cozy mountain retreat offers breathtaking views of the surrounding peaks. The home features a spacious great room with a stone fireplace, a fully equipped kitchen, and a large deck perfect for outdoor dining. Located just minutes from world-class skiing and hiking trails.",
                features: ["Mountain View", "Fireplace", "Deck", "Fully Equipped Kitchen", "Hardwood Floors", "Garage", "Ski Storage", "Hot Tub"],
                images: [
                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                ],
                location: [39.1911, -106.8175],
                agent: {
                    name: "Robert Taylor",
                    phone: "(555) 345-6789",
                    email: "robert@luxuryestates.com",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
            },
            {
                id: 7,
                title: "Modern Waterfront Condo",
                address: "404 Harbor View, Seattle, WA",
                price: "$1,350,000",
                type: "sale",
                bedrooms: 2,
                bathrooms: 2,
                area: "1,800 sq ft",
                description: "Stylish waterfront condo with panoramic views of Puget Sound. Features floor-to-ceiling windows, a gourmet kitchen with quartz countertops, and a spacious balcony perfect for enjoying the sunset. Building amenities include a fitness center, concierge, and private marina access.",
                features: ["Waterfront", "Balcony", "Concierge", "Fitness Center", "Marina Access", "Hardwood Floors", "Underground Parking", "Smart Home"],
                images: [
                    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                ],
                location: [47.6062, -122.3321],
                agent: {
                    name: "Lisa Wong",
                    phone: "(555) 456-1234",
                    email: "lisa@luxuryestates.com",
                    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
            },
            {
                id: 8,
                title: "Luxury Ranch Estate",
                address: "505 Canyon Road, Santa Fe, NM",
                price: "$3,750,000",
                type: "sale",
                bedrooms: 5,
                bathrooms: 4.5,
                area: "6,500 sq ft",
                description: "Spectacular ranch estate on 20 acres with stunning mountain views. The property features a main house with rustic elegance, a guest casita, infinity pool, and horse facilities. Southwestern architecture blends with modern amenities throughout.",
                features: ["20 Acres", "Mountain Views", "Infinity Pool", "Guest House", "Horse Facilities", "Gourmet Kitchen", "Home Theater", "Wine Cellar"],
                images: [
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                ],
                location: [35.6870, -105.9378],
                agent: {
                    name: "Carlos Mendez",
                    phone: "(555) 789-4567",
                    email: "carlos@luxuryestates.com",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
            },
            {
                id: 9,
                title: "Downtown Luxury Loft",
                address: "606 Arts District, Los Angeles, CA",
                price: "$4,500/month",
                type: "rent",
                bedrooms: 2,
                bathrooms: 2,
                area: "2,100 sq ft",
                description: "Sophisticated loft in the heart of the Arts District. Features exposed brick, polished concrete floors, and industrial-chic design. The open floor plan includes a chef's kitchen, spacious living area, and large windows flooding the space with natural light.",
                features: ["Arts District", "Exposed Brick", "High Ceilings", "Chef's Kitchen", "Concrete Floors", "Walk-in Closet", "Fitness Center", "Rooftop Deck"],
                images: [
                    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                ],
                location: [34.0395, -118.2342],
                agent: {
                    name: "Amanda Smith",
                    phone: "(555) 321-6549",
                    email: "amanda@luxuryestates.com",
                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
            },
            {
                id: 10,
                title: "Golf Course Villa",
                address: "707 Fairway Drive, Scottsdale, AZ",
                price: "$2,100,000",
                type: "sale",
                bedrooms: 4,
                bathrooms: 3.5,
                area: "3,400 sq ft",
                description: "Stunning villa overlooking the 9th fairway of a championship golf course. The property features a resort-style backyard with pool, spa, and outdoor kitchen. Interior includes a great room with vaulted ceilings, gourmet kitchen, and luxurious master suite.",
                features: ["Golf Course", "Resort Pool", "Outdoor Kitchen", "Vaulted Ceilings", "Gourmet Kitchen", "Home Office", "Smart Home", "3-Car Garage"],
                images: [
                    "https://images.unsplash.com/photo-1600585152220-90363fe7e7e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                ],
                location: [33.4942, -111.9261],
                agent: {
                    name: "James Wilson",
                    phone: "(555) 654-9873",
                    email: "james@luxuryestates.com",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
            },
            {
                id: 11,
                title: "Luxury Beachfront Airbnb",
                address: "808 Vacation Lane, Miami, FL",
                price: "$350/night",
                type: "airbnb",
                bedrooms: 2,
                bathrooms: 2,
                area: "1,200 sq ft",
                description: "Stunning beachfront Airbnb with direct access to the sand. Perfect for vacation rentals with high-end amenities, smart home features, and breathtaking ocean views from the private balcony.",
                features: ["Beachfront", "Smart Home", "Fully Equipped Kitchen", "Balcony", "Air Conditioning", "Washer/Dryer", "Parking", "WiFi"],
                images: [
                    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                ],
                location: [25.7823, -80.1865],
                agent: {
                    name: "Vacation Rentals Inc",
                    phone: "(555) 555-1234",
                    email: "rentals@luxuryestates.com",
                    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
            },
            {
                id: 12,
                title: "Downtown Chic Airbnb Loft",
                address: "909 Urban Way, New York, NY",
                price: "$275/night",
                type: "airbnb",
                bedrooms: 1,
                bathrooms: 1,
                area: "800 sq ft",
                description: "Trendy downtown loft perfect for short-term rentals. Features exposed brick, modern furnishings, and all the amenities needed for a comfortable stay in the heart of the city.",
                features: ["Downtown", "Exposed Brick", "Smart TV", "Coffee Maker", "Air Conditioning", "Washer/Dryer", "Elevator", "WiFi"],
                images: [
                    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                ],
                location: [40.7196, -74.0018],
                agent: {
                    name: "City Stay Rentals",
                    phone: "(555) 555-5678",
                    email: "citystay@luxuryestates.com",
                    image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
            }
        ];

        // DOM Elements
        const propertyGrid = document.getElementById('propertyGrid');
        const propertyModal = document.getElementById('propertyModal');
        const modalClose = document.getElementById('modalClose');
        const searchInput = document.getElementById('mainSearch');
        const filterType = document.getElementById('filterType');
        const filterBedrooms = document.getElementById('filterBedrooms');
        let detailMap;

        // Initialize the application
        function init() {
            renderPropertyGrid(properties);
            setupEventListeners();
        }

        // Render property grid
        function renderPropertyGrid(propertiesToRender) {
            propertyGrid.innerHTML = '';
            
            propertiesToRender.forEach(property => {
                const propertyCard = document.createElement('div');
                propertyCard.className = 'property-card bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl';
                propertyCard.innerHTML = `
                    <img src="${property.images[0]}" alt="${property.title}" class="property-image w-full">
                    <div class="p-4">
                        <h3 class="text-xl font-semibold mb-1">${property.title}</h3>
                        <p class="text-gray-600 mb-2">${property.address}</p>
                        <div class="flex justify-between items-center mb-3">
                            <span class="text-blue-600 font-bold">${property.price}</span>
                            <span class="text-sm ${property.type === 'sale' ? 'bg-green-100 text-green-800' : property.type === 'rent' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'} px-2 py-1 rounded-full">
                                ${property.type === 'sale' ? 'For Sale' : property.type === 'rent' ? 'For Rent' : 'Airbnb'}
                            </span>
                        </div>
                        <div class="flex justify-between text-sm text-gray-500 mb-4">
                            <span>${property.bedrooms} Beds</span>
                            <span>${property.bathrooms} Baths</span>
                            <span>${property.area}</span>
                        </div>
                        <button class="view-details w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all" data-id="${property.id}">
                            View Details
                        </button>
                    </div>
                `;
                propertyGrid.appendChild(propertyCard);
            });
        }

        // Show property details in modal
        function showPropertyDetails(propertyId) {
            const property = properties.find(p => p.id === propertyId);
            if (!property) return;
            
            // Remove active class from all similar properties
            document.querySelectorAll('.similar-property').forEach(el => {
                el.classList.remove('active-property');
            });
            
            // Set basic property info
            document.getElementById('detailTitle').textContent = property.title;
            document.getElementById('detailAddress').textContent = property.address;
            document.getElementById('detailPrice').textContent = property.price;
            document.getElementById('detailType').textContent = property.type === 'sale' ? 'For Sale' : property.type === 'rent' ? 'For Rent' : 'Airbnb';
            document.getElementById('detailType').className = `bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full ${property.type === 'sale' ? 'bg-green-100 text-green-800' : property.type === 'rent' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`;
            document.getElementById('detailBedrooms').textContent = property.bedrooms;
            document.getElementById('detailBathrooms').textContent = property.bathrooms;
            document.getElementById('detailArea').textContent = property.area;
            document.getElementById('detailDescription').textContent = property.description;
            
            // Set agent info
            document.getElementById('agentName').textContent = property.agent.name;
            document.getElementById('agentPhone').textContent = property.agent.phone;
            document.getElementById('agentEmail').textContent = property.agent.email;
            document.getElementById('agentImage').src = property.agent.image;
            document.getElementById('agentImage').alt = property.agent.name;
            
            // Render features
            const featuresContainer = document.getElementById('detailFeatures');
            featuresContainer.innerHTML = '';
            property.features.forEach(feature => {
                const featureElement = document.createElement('div');
                featureElement.className = 'flex items-center';
                featureElement.innerHTML = `
                    <svg class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>${feature}</span>
                `;
                featuresContainer.appendChild(featureElement);
            });
            
            // Render image gallery
            const galleryContainer = document.getElementById('propertyImageGallery');
            galleryContainer.innerHTML = `
                <img src="${property.images[0]}" alt="${property.title}" class="details-image w-full rounded-lg cursor-pointer">
            `;
            
            const thumbnailsContainer = galleryContainer.nextElementSibling;
            thumbnailsContainer.innerHTML = '';
            property.images.forEach((image, index) => {
                const thumbnail = document.createElement('img');
                thumbnail.src = image;
                thumbnail.alt = `${property.title} - Image ${index + 1}`;
                thumbnail.className = 'h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-all';
                thumbnail.addEventListener('click', () => {
                    galleryContainer.innerHTML = `<img src="${image}" alt="${property.title}" class="details-image w-full rounded-lg cursor-pointer">`;
                });
                thumbnailsContainer.appendChild(thumbnail);
            });
            
            // Initialize detail map
            initDetailMap(property.location);
            
            // Show similar properties
            showSimilarProperties(property);
            
            // Show the modal if it's not already open
            if (!propertyModal.classList.contains('active')) {
                propertyModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Add slight delay for animation
                setTimeout(() => {
                    propertyModal.classList.add('active');
                }, 10);
            }
            
            // Reset scroll positions
            const modalRightContent = document.querySelector('.modal-right-content');
            if (modalRightContent) {
                modalRightContent.scrollTop = 0;
            }
            propertyModal.scrollTop = 0;
            
            // Handle scroll behavior for right content
            if (modalRightContent) {
                modalRightContent.addEventListener('scroll', function() {
                    const scrollPosition = this.scrollTop;
                    const scrollHeight = this.scrollHeight;
                    const clientHeight = this.clientHeight;
                    
                    // When user reaches near bottom of right content, allow modal to scroll
                    if (scrollPosition + clientHeight >= scrollHeight - 50) {
                        this.style.overflowY = 'hidden';
                        propertyModal.style.overflowY = 'auto';
                    } else {
                        this.style.overflowY = 'auto';
                        propertyModal.style.overflowY = 'hidden';
                    }
                });
            }
            
            // Reset scroll behavior when modal is closed
            modalClose.addEventListener('click', function() {
                const modalRightContent = document.querySelector('.modal-right-content');
                if (modalRightContent) {
                    modalRightContent.style.overflowY = 'auto';
                }
                propertyModal.style.overflowY = 'auto';
            });
        }

        // Close modal
        function closeModal() {
            propertyModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Clean up map to prevent memory leaks
            if (detailMap) {
                detailMap.remove();
                detailMap = null;
            }
        }

        // Initialize detail map for a single property
        function initDetailMap(location) {
            const mapContainer = document.getElementById('detailMap');
            mapContainer.innerHTML = ''; // Clear previous map
            
            detailMap = L.map(mapContainer).setView(location, 15);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(detailMap);
            
            L.marker(location).addTo(detailMap)
                .bindPopup(`<strong>${document.getElementById('detailTitle').textContent}</strong>`)
                .openPopup();
        }

        // Show similar properties
        function showSimilarProperties(currentProperty) {
            const similarPropertiesContainer = document.getElementById('similarProperties');
            similarPropertiesContainer.innerHTML = '';
            
            // Find similar properties (same area or similar number of bedrooms)
            const similarProperties = properties.filter(property => {
                return property.id !== currentProperty.id && 
                       (property.bedrooms === currentProperty.bedrooms || 
                        property.type === currentProperty.type);
            });
            
            if (similarProperties.length === 0) {
                similarPropertiesContainer.innerHTML = '<p class="text-gray-600">No similar properties found.</p>';
                return;
            }
            
            // Limit to 3 similar properties
            const displayedProperties = similarProperties.slice(0, 3);
            
            displayedProperties.forEach(property => {
                const similarProperty = document.createElement('div');
                similarProperty.className = `similar-property bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg ${property.id === currentProperty.id ? 'active-property' : ''}`;
                similarProperty.innerHTML = `
                    <img src="${property.images[0]}" alt="${property.title}" class="h-40 w-full object-cover">
                    <div class="p-4">
                        <h4 class="font-semibold mb-1">${property.title}</h4>
                        <p class="text-sm text-gray-600 mb-2">${property.address}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-blue-600 font-bold">${property.price}</span>
                            <button class="view-similar text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-all" data-id="${property.id}">
                                View
                            </button>
                        </div>
                    </div>
                `;
                similarPropertiesContainer.appendChild(similarProperty);
            });
            
            // Add event listeners to similar property buttons and cards
            document.querySelectorAll('.view-similar').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const propertyId = parseInt(e.target.getAttribute('data-id'));
                    showPropertyDetails(propertyId);
                });
            });
            
            document.querySelectorAll('.similar-property').forEach(card => {
                card.addEventListener('click', (e) => {
                    // Don't trigger if clicking on the view button (handled above)
                    if (!e.target.classList.contains('view-similar')) {
                        const propertyId = parseInt(card.querySelector('.view-similar').getAttribute('data-id'));
                        showPropertyDetails(propertyId);
                    }
                });
            });
        }

        // Filter properties based on search and filters
        function filterProperties() {
            const searchTerm = searchInput.value.toLowerCase();
            const typeFilter = filterType.value;
            const bedroomsFilter = parseInt(filterBedrooms.value);
            
            const filtered = properties.filter(property => {
                // Search term filter
                const matchesSearch = 
                    property.title.toLowerCase().includes(searchTerm) || 
                    property.address.toLowerCase().includes(searchTerm) || 
                    property.description.toLowerCase().includes(searchTerm);
                
                // Type filter
                const matchesType = typeFilter === 'all' || property.type === typeFilter;
                
                // Bedrooms filter
                const matchesBedrooms = bedroomsFilter === 0 || property.bedrooms >= bedroomsFilter;
                
                return matchesSearch && matchesType && matchesBedrooms;
            });
            
            renderPropertyGrid(filtered);
        }

        // Setup event listeners
        function setupEventListeners() {
            // View details buttons
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('view-details')) {
                    const propertyId = parseInt(e.target.getAttribute('data-id'));
                    showPropertyDetails(propertyId);
                }
            });
            
            // Close modal buttons
            modalClose.addEventListener('click', closeModal);
            propertyModal.addEventListener('click', (e) => {
                if (e.target === propertyModal) {
                    closeModal();
                }
            });
            
            // Escape key to close modal
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && propertyModal.classList.contains('active')) {
                    closeModal();
                }
            });
            
            // Search and filter inputs
            searchInput.addEventListener('input', filterProperties);
            filterType.addEventListener('change', filterProperties);
            filterBedrooms.addEventListener('change', filterProperties);
        }

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);