import baliBeachImage from '../assets/baliBeachImage.jpg';
import thailandImage from '../assets/thailandImage.jpg';
import malaysiaCultureImage from '../assets/malaysiaCultureImage.jpg';
import dubaiImage from '../assets/dubaiImage.jpg';
import singaporeFamilyImage from '../assets/singaporeFamilyImage.jpg';
import europeGrandTourImage from '../assets/europeGrandTourImage.jpg';
// Import images for each package

export const packages = [
    {
      "id": "bali-beach-relaxation",
      "name": "Bali Beach Relaxation",
      "duration": "6 Days",
      "description": "Relax on Bali’s pristine beaches and experience its rich culture and temples.",
      "image": baliBeachImage,
      "details": {
        "itinerary": [
          "Day 1: Arrival in Bali and transfer to hotel",
          "Day 2: Beach day at Kuta and Uluwatu Temple visit",
          "Day 3: Ubud sightseeing and Monkey Forest visit",
          "Day 4: Tanah Lot Temple and sunset dinner",
          "Day 5: Free day or optional water sports",
          "Day 6: Departure"
        ],
        "includes": [
          "Hotel accommodation with breakfast",
          "Airport transfers",
          "Sightseeing tours with guide",
          "Entrance fees",
          "Daily bottled water"
        ],
        "excludes": [
          "Lunch and dinner",
          "Personal expenses",
          "Travel insurance",
          "International flights"
        ],
        "price": {
          "perPerson": 850,
          "groupDiscount": "10% off for 4 or more",
          "singleSupplement": 120
        },
        "difficulty": "Easy",
        "bestTime": "April to October"
      }
    },
    {
      "id": "thailand-bangkok-phuket",
      "name": "Thailand Highlights: Bangkok & Phuket",
      "duration": "5 Days",
      "description": "Explore the vibrant city life of Bangkok and relax on the tropical beaches of Phuket.",
      "image": thailandImage,
      "details": {
        "itinerary": [
          "Day 1: Arrival in Bangkok and city tour",
          "Day 2: Grand Palace & Wat Arun, shopping at Siam",
          "Day 3: Fly to Phuket and leisure at beach",
          "Day 4: Phi Phi Island tour",
          "Day 5: Departure from Phuket"
        ],
        "includes": [
          "3-star hotel with breakfast",
          "Domestic flight (Bangkok–Phuket)",
          "Airport transfers",
          "City and island tours",
          "Entrance tickets"
        ],
        "excludes": [
          "Visa fees",
          "Meals not mentioned",
          "Tips and personal expenses",
          "Travel insurance"
        ],
        "price": {
          "perPerson": 720,
          "groupDiscount": "7% off for 3 or more",
          "singleSupplement": 100
        },
        "difficulty": "Easy",
        "bestTime": "November to February"
      }
    },
    {
      "id": "malaysia-cultural-escape",
      "name": "Malaysia Cultural Escape",
      "duration": "5 Days",
      "description": "Discover the cultural and modern highlights of Kuala Lumpur and Penang.",
      "image": malaysiaCultureImage,
      "details": {
        "itinerary": [
          "Day 1: Arrival in Kuala Lumpur and Petronas Tower visit",
          "Day 2: Batu Caves, Merdeka Square and Chinatown tour",
          "Day 3: Travel to Penang, visit George Town and local cuisine tour",
          "Day 4: Kek Lok Si Temple and Penang Hill",
          "Day 5: Return to KL and departure"
        ],
        "includes": [
          "Hotel stay with breakfast",
          "Domestic transport (flight/train)",
          "Guided city tours",
          "Cultural attraction entry tickets"
        ],
        "excludes": [
          "International airfare",
          "Personal purchases",
          "Visa fee",
          "Lunch and dinner"
        ],
        "price": {
          "perPerson": 680,
          "groupDiscount": "10% off for groups of 5 or more",
          "singleSupplement": 95
        },
        "difficulty": "Easy",
        "bestTime": "March to October"
      }
    },
    {
      "id": "dubai-luxury-getaway",
      "name": "Dubai Luxury Getaway",
      "duration": "4 Days",
      "description": "Indulge in luxury shopping, desert safaris and dazzling skyline views in Dubai.",
      "image": dubaiImage,
      "details": {
        "itinerary": [
          "Day 1: Arrival and Dubai Marina cruise dinner",
          "Day 2: City tour including Burj Khalifa and Dubai Mall",
          "Day 3: Desert safari with BBQ dinner",
          "Day 4: Shopping and departure"
        ],
        "includes": [
          "4-star hotel accommodation",
          "Desert safari with entertainment",
          "Burj Khalifa entrance",
          "All ground transfers"
        ],
        "excludes": [
          "Flights from Nepal",
          "Visa processing",
          "Meals not mentioned",
          "Personal shopping"
        ],
        "price": {
          "perPerson": 970,
          "groupDiscount": "5% off for 3 or more",
          "singleSupplement": 130
        },
        "difficulty": "Easy",
        "bestTime": "November to March"
      }
    },
    {
      "id": "singapore-family-tour",
      "name": "Singapore Family Tour",
      "duration": "4 Days",
      "description": "Enjoy a family-friendly tour to Singapore's top attractions including Sentosa, Universal Studios and Gardens by the Bay.",
      "image": singaporeFamilyImage,
      "details": {
        "itinerary": [
          "Day 1: Arrival and Marina Bay Sands evening walk",
          "Day 2: Universal Studios Singapore",
          "Day 3: Sentosa Island and Cable Car ride",
          "Day 4: Gardens by the Bay and Departure"
        ],
        "includes": [
          "Hotel stay with breakfast",
          "Universal Studios ticket",
          "Sentosa entrance",
          "City tour with guide",
          "Airport transfers"
        ],
        "excludes": [
          "Meals beyond breakfast",
          "Personal expenses",
          "International flight",
          "Visa fees"
        ],
        "price": {
          "perPerson": 890,
          "groupDiscount": "10% off for 4 or more",
          "singleSupplement": 110
        },
        "difficulty": "Easy",
        "bestTime": "December to May"
      }
    },
    {
        "id": "europe-grand-tour",
        "name": "Europe Grand Tour",
        "duration": "15 Days",
        "description": "Explore the iconic cities of Europe including London, Paris, Brussels, Amsterdam, and Rome.",
        "image": europeGrandTourImage,
        "details": {
          "itinerary": [
            "Day 1: Departure from Kathmandu and arrival in London",
            "Day 2: London city tour including Buckingham Palace and London Eye",
            "Day 3: Travel to Paris via Eurostar, evening Seine River cruise",
            "Day 4: Paris city tour including Eiffel Tower and Louvre Museum",
            "Day 5: Travel to Brussels, visit Grand Place and Atomium",
            "Day 6: Travel to Amsterdam, canal cruise and city tour",
            "Day 7: Free day in Amsterdam for personal exploration",
            "Day 8: Travel to Frankfurt, visit Römer and Main Tower",
            "Day 9: Travel to Lucerne, explore Chapel Bridge and Lion Monument",
            "Day 10: Excursion to Mt. Titlis and free time in Lucerne",
            "Day 11: Travel to Venice, gondola ride and city tour",
            "Day 12: Travel to Florence, visit Duomo and Ponte Vecchio",
            "Day 13: Travel to Rome, visit Colosseum and Roman Forum",
            "Day 14: Vatican City tour including St. Peter's Basilica",
            "Day 15: Departure from Rome and arrival in Kathmandu"
          ],
          "includes": [
            "Round-trip international airfare from Kathmandu",
            "Accommodation in 3-star hotels with breakfast",
            "All ground transportation in Europe",
            "Sightseeing tours with English-speaking guides",
            "Entrance fees to major attractions",
            "Visa assistance and processing fees"
          ],
          "excludes": [
            "Lunch and dinner",
            "Personal expenses (laundry, souvenirs, etc.)",
            "Travel insurance",
            "Tips for guides and drivers"
          ],
          "price": {
            "perPerson": 377700,
            "groupDiscount": "10% off for groups of 4 or more",
            "singleSupplement": 50000
          },
          "difficulty": "Easy",
          "bestTime": "April to October"
        }
      }
      
  
    // Add 45 more destinations below this with similar structure if needed
  ]  