import kathmanduImage from '../assets/kathmandu.jpg';
import pokharaImage from '../assets/pokhara.jpg';
import everestImage from '../assets/everest.jpg';
// Using available images as placeholders for missing ones
import chitwanImage from '../assets/chitwan-safari.jpg';
import  ilamImage from '../assets/ilam-tea-tour.jpeg'
import jomsomMuktinathImage from '../assets/Muktinath_Temple.jpg'
import lumbiniImage from '../assets/lumbini.jpg'
import nagarkotImage from '../assets/nagarkot.jpg'
import bandipurImage from '../assets/bandipur.jpeg'
import bardiaImage from '../assets/BardiyaNationalPark.jpg'; 

export const destinations = [
  {
    id: 'kathmandu',
    name: 'Kathmandu Valley',
    description: 'Ancient temples, vibrant markets, and cultural heritage.',
    image: kathmanduImage,
    details: {
      highlights: [
        'Kathmandu Durbar Square: Historic palaces and temples.',
        'Swayambhunath (Monkey Temple): Iconic stupa with panoramic views.',
        'Boudhanath Stupa: One of the largest spherical stupas in Nepal.',
        'Pashupatinath Temple: Sacred Hindu temple on the Bagmati River.',
        'Thamel: Tourist hub with shops, restaurants, and nightlife.',
        'Bhaktapur Durbar Square: Well-preserved Newari city.',
        'Patan Durbar Square: Fine examples of Newari architecture.'
      ],
      bestTimeToVisit: 'October to May (pleasant weather, clear skies)',
      duration: '3-5 days recommended to explore major sites',
      price: {
        budget: 50, // USD per day (excluding accommodation)
        midRange: 100, // USD per day (excluding accommodation)
        luxury: 200 // USD per day (excluding accommodation)
      },
      activities: [
        'Sightseeing tours of heritage sites',
        'Rickshaw rides in Thamel',
        'Cooking classes in Nepali cuisine',
        'Hiking to viewpoints like Nagarkot or Champadevi',
        'Exploring local markets and artisan shops'
      ]
    }
  },
  {
    id: 'pokhara',
    name: 'Pokhara & Lakes',
    description: 'Stunning Annapurna views, serene lakes, and adventure activities.',
    image: pokharaImage,
    details: {
      highlights: [
        'Phewa Lake: Boating, kayaking, and the Barahi Temple.',
        'World Peace Pagoda: Panoramic views of the Annapurna range and Pokhara Valley.',
        'Davis Falls: Unique waterfall with an underground passage.',
        'Gupteshwor Mahadev Cave: Sacred cave with religious significance.',
        'Sarangkot Sunrise: Breathtaking sunrise views over the Himalayas.',
        'Begnas Lake & Rupa Lake: Quieter lakes offering peaceful retreats.',
        'International Mountain Museum: Learn about the Himalayas and mountaineering.'
      ],
      bestTimeToVisit: 'October to May (pleasant weather, clear mountain views)',
      duration: '2-4 days recommended for main attractions and activities',
      price: {
        budget: 40, // USD per day (excluding accommodation)
        midRange: 80, // USD per day (excluding accommodation)
        luxury: 150 // USD per day (excluding accommodation)
      },
      activities: [
        'Paragliding and ziplining',
        'Boating and kayaking on the lakes',
        'Trekking to viewpoints and nearby villages',
        'Mountain biking',
        'Ultralight flights for stunning aerial views'
      ]
    }
  },
  {
    id: 'everest',
    name: 'Everest Region',
    description: 'The ultimate trekking experience in the shadow of the world\'s highest peak.',
    image: everestImage,
    details: {
      highlights: [
        'Everest Base Camp (EBC): The iconic destination for trekkers.',
        'Kala Patthar: A popular viewpoint for panoramic Everest views.',
        'Namche Bazaar: The Sherpa capital and a bustling trading hub.',
        'Tengboche Monastery: The largest monastery in the Khumbu region.',
        'Gokyo Lakes: Stunning turquoise lakes with magnificent mountain vistas.',
        'Khumbu Glacier: One of the largest glaciers in Nepal.',
        'Sherpa Culture: Experience the unique traditions and hospitality of the Sherpa people.'
      ],
      bestTimeToVisit: 'March to May (spring, blooming rhododendrons), October to November (autumn, clear skies)',
      duration: '12-14 days recommended for EBC trek, longer for Gokyo Lakes or other routes',
      price: {
        budget: 1200, // USD for a basic EBC trek (excluding flights)
        midRange: 2000, // USD for a more comfortable trek with better accommodations
        luxury: 3500 // USD for high-end lodges and services
      },
      activities: [
        'Trekking to Everest Base Camp, Gokyo Lakes, or other valleys',
        'Peak climbing (for experienced mountaineers)',
        'Experiencing Sherpa culture and visiting monasteries',
        'Witnessing stunning mountain sunrises and sunsets',
        'Wildlife spotting (Himalayan Thar, snow leopard - rare)'
      ]
    }
  },
  {
    id: 'lumbini',
    name: 'Lumbini',
    description: 'The birthplace of Lord Buddha, a sacred pilgrimage site.',
    image: lumbiniImage,
    details: {
      highlights: [
        'Maya Devi Temple: The exact birthplace of Buddha.',
        'Ashoka Pillar: An ancient pillar marking the sacred site.',
        'Sacred Garden: The serene garden surrounding the Maya Devi Temple.',
        'Various Monasteries: Built by different Buddhist countries.',
        'World Peace Pagoda: A symbol of peace and tranquility.',
        'Lumbini Museum: Archaeological findings and Buddhist artifacts.',
        'Tilaurakot: The ancient Shakya kingdom capital.'
      ],
      bestTimeToVisit: 'October to March (pleasant weather)',
      duration: '1-2 days recommended',
      price: {
        budget: 30,
        midRange: 60,
        luxury: 120
      },
      activities: [
        'Visiting the sacred sites and monasteries',
        'Meditation and spiritual practices',
        'Exploring the Lumbini Garden by bicycle or rickshaw',
        'Learning about Buddhist philosophy and history'
      ]
    }
  },
  {
    id: 'chitwan',
    name: 'Chitwan National Park',
    description: 'Nepal\'s premier wildlife reserve, home to rhinos, tigers, and diverse flora and fauna.',
    image: chitwanImage,
    details: {
      highlights: [
        'One-horned rhinoceros: A major attraction of the park.',
        'Bengal tiger: Elusive but present in the dense forests.',
        'Gharial and Mugger crocodiles: Found in the rivers.',
        'Diverse birdlife: A paradise for bird watchers.',
        'Elephant safaris and jeep safaris: Explore the jungle.',
        'Canoe rides on the Rapti River: Observe wildlife along the banks.',
        'Tharu cultural experiences: Learn about the local indigenous culture.'
      ],
      bestTimeToVisit: 'October to June (dry season, best for wildlife sightings)',
      duration: '2-3 days recommended',
      price: {
        budget: 70,
        midRange: 120,
        luxury: 200
      },
      activities: [
        'Jungle safaris (elephant back, jeep)',
        'Canoeing',
        'Bird watching',
        'Nature walks',
        'Tharu cultural shows and village visits'
      ]
    }
  },
  {
    id: 'nagarkot',
    name: 'Nagarkot',
    description: 'A hill station near Kathmandu famous for sunrise and sunset views of the Himalayas.',
    image: nagarkotImage,
    details: {
      highlights: [
        'Panoramic views of the Himalayas: Including Everest on a clear day.',
        'Sunrise and sunset viewpoints: Offer spectacular vistas.',
        'Peaceful atmosphere: A relaxing escape from the city.',
        'Hiking trails: Explore the surrounding forests and villages.'
      ],
      bestTimeToVisit: 'October to May (clear skies for mountain views)',
      duration: '1-2 days recommended (including overnight stay)',
      price: {
        budget: 30,
        midRange: 60,
        luxury: 100
      },
      activities: [
        'Sunrise and sunset viewing',
        'Hiking and nature walks',
        'Relaxing in scenic resorts',
        'Exploring nearby villages'
      ]
    }
  },
  {
    id: 'bandipur',
    name: 'Bandipur',
    description: 'A charming Newari hill town with well-preserved architecture and stunning mountain views.',
    image: bandipurImage,
    details: {
      highlights: [
        'Traditional Newari architecture: Beautifully preserved buildings.',
        'Panoramic views of the Annapurna and Dhaulagiri ranges.',
        'Siddha Gufa (Siddha Cave): A large and impressive cave.',
        'Bindhyabasini Temple: A significant religious site.',
        'Tundikhel: A historical ground with great views.',
        'Quiet and peaceful atmosphere.'
      ],
      bestTimeToVisit: 'October to May',
      duration: '1-2 days recommended',
      price: {
        budget: 40,
        midRange: 70,
        luxury: 130
      },
      activities: [
        'Exploring the town and its architecture',
        'Hiking to Siddha Cave and other viewpoints',
        'Enjoying the peaceful ambiance',
        'Learning about Newari culture and traditions'
      ]
    }
  },
  {
    id: 'ilam',
    name: 'Ilam',
    description: 'Known for its lush tea gardens, scenic landscapes, and pleasant climate in eastern Nepal.',
    image: ilamImage,
    details: {
      highlights: [
        'Tea gardens: Rolling hills covered in green tea bushes.',
        'Kanyam Tea Estate: One of the largest tea estates in Nepal.',
        'Mai Pokhari: A beautiful lake with religious significance.',
        'Antu Danda: A viewpoint offering sunrise and sunset views.',
        'Local cheese and handicrafts.',
        'Serene and less crowded atmosphere.'
      ],
      bestTimeToVisit: 'October to May',
      duration: '2-3 days recommended',
      price: {
        budget: 35,
        midRange: 65,
        luxury: 110
      },
      activities: [
        'Visiting tea gardens and learning about tea processing',
        'Hiking and exploring the scenic landscapes',
        'Boating in Mai Pokhari',
        'Enjoying the local cuisine and tea',
        'Visiting local markets and monasteries'
      ]
    }
  },
  {
    id: 'jomsom-muktinath',
    name: 'Jomsom & Muktinath',
    description: 'A region combining rugged landscapes, Tibetan-influenced culture, and the sacred Muktinath Temple.',
    image: jomsomMuktinathImage,
    details: {
      highlights: [
        'Jomsom: The administrative center of Mustang, with views of Dhaulagiri and Nilgiri.',
        'Muktinath Temple: A highly revered Hindu and Buddhist shrine.',
        'Flame that burns naturally (eternal flame).',
        '108 water spouts surrounding the temple.',
        'Unique arid landscape resembling Tibet.',
        'Apple orchards and local apple products.',
        'Traditional Thakali culture and cuisine.'
      ],
      bestTimeToVisit: 'March to June, September to November (avoid monsoon)',
      duration: '3-5 days recommended',
      price: {
        budget: 60,
        midRange: 110,
        luxury: 180
      },
      activities: [
        'Visiting Muktinath Temple',
        'Trekking in the Mustang region',
        'Exploring Jomsom town',
        'Experiencing Thakali culture and food',
        'Enjoying mountain views'
      ]
    }
  },
  {
    id: 'bardia',
    name: 'Bardia National Park',
    description: 'A less crowded alternative to Chitwan, offering excellent wildlife viewing opportunities.',
    image: bardiaImage,
    details: {
      highlights: [
        'Royal Bengal tiger: Good chances of sighting.',
        'One-horned rhinoceros: Also a significant population.',
        'Wild elephants, deer, and various other mammals.',
        'Diverse birdlife.',
        'Relatively untouched and quieter than Chitwan.',
        'Tharu culture and traditions.',
        'Jungle walks and boat safaris.'
      ],
      bestTimeToVisit: 'October to June (dry season)',
      duration: '2-3 days recommended',
      price: {
        budget: 50,
        midRange: 90,
        luxury: 160
      },
      activities: [
        'Jeep safaris',
        'Elephant-back safaris',
        'Jungle walks with experienced naturalists',
        'Boat safaris on the Karnali River',
        'Bird watching',
        'Tharu cultural experiences'
      ]
    }
  }
];