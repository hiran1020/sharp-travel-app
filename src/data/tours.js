import annapurnaTrekImage from '../assets/annapurna-trek.jpg';
import chitwanSafariImage from '../assets/chitwan-safari.jpg';
import gokyoLakesTrekImage from '../assets/gokyo-lakes-trek.jpg';
// Using available images as placeholders for missing ones
import kathmanduCulturalTourImage from '../assets/kathmandu.jpg';
import pokharaAdventureImage from '../assets/pokhara.jpg';
import mustangTrekImage from '../assets/Muktinath_Temple.jpg'
import raftingTrishuliImage from '../assets/rafting-tursili.jpg'
import langtangTrekImage from '../assets/langtang-trek.jpg'

export const tours = [
  {
    id: 'abc-trek',
    name: 'Annapurna Base Camp Trek',
    duration: '12 Days',
    description: 'Experience the breathtaking beauty of the Annapurna range.',
    image: annapurnaTrekImage,
    details: {
      itinerary: [
        'Day 1: Arrival in Kathmandu (1,400m)',
        'Day 2: Kathmandu Sightseeing & Trek Preparation',
        'Day 3: Drive to Pokhara (820m) - 6-7 hours',
        'Day 4: Drive to Nayapul (1,070m) & Trek to Tikhedhunga (1,540m) - 3-4 hours',
        'Day 5: Trek to Ghorepani (2,860m) - 5-6 hours',
        'Day 6: Poon Hill Sunrise (3,210m) & Trek to Tadapani (2,630m) - 6-7 hours',
        'Day 7: Trek to Chhomrong (2,170m) - 5-6 hours',
        'Day 8: Trek to Dovan (2,505m) - 5-6 hours',
        'Day 9: Trek to Deurali (3,230m) - 5-6 hours',
        'Day 10: Trek to Annapurna Base Camp (4,130m) - 5-6 hours',
        'Day 11: Trek back to Bamboo (2,310m) - 6-7 hours',
        'Day 12: Trek to Nayapul & Drive to Pokhara - 5-6 hours trekking, 1.5 hours drive',
        'Day 13: Fly or Drive back to Kathmandu',
        'Day 14: Departure from Kathmandu'
      ],
      includes: [
        'Airport pick-up and drop-off',
        'Accommodation in Kathmandu and Pokhara with breakfast',
        'Accommodation in teahouses during the trek',
        'All meals (breakfast, lunch, dinner) during the trek',
        'Experienced, English-speaking trekking guide',
        'Necessary porters to carry luggage (1 porter for every 2 trekkers)',
        'Annapurna Conservation Area Permit (ACAP) and TIMS card',
        'All ground transportation as per itinerary',
        'Staff salaries, insurance, and equipment',
        'All government taxes',
        'Farewell dinner in Kathmandu'
      ],
      excludes: [
        'International airfare',
        'Nepal visa fee',
        'Lunch and dinner in Kathmandu and Pokhara',
        'Drinks (mineral water, soft drinks, alcoholic beverages)',
        'Personal expenses (laundry, souvenirs, etc.)',
        'Travel insurance',
        'Tips for guides and porters'
      ],
      price: {
        perPerson: 1200,
        groupDiscount: '10% off for groups of 4 or more',
        singleSupplement: 200
      },
      difficulty: 'Moderate to Challenging',
      bestTime: 'March to May, September to November'
    }
  },
  {
    id: 'chitwan-safari',
    name: 'Chitwan Wildlife Safari',
    duration: '4 Days',
    description: 'Explore the diverse flora and fauna of Chitwan National Park.',
    image: chitwanSafariImage,
    details: {
      itinerary: [
        'Day 1: Arrival in Chitwan & Lodge Check-in',
        'Day 2: Jungle Safari Activities (Elephant Safari/Jeep Safari, Canoe Ride)',
        'Day 3: Bird Watching, Nature Walk & Tharu Cultural Show',
        'Day 4: Departure from Chitwan to your next destination'
      ],
      includes: [
        'Accommodation in a comfortable jungle lodge',
        'All meals (breakfast, lunch, dinner)',
        'Guided jungle activities as per itinerary',
        'Experienced naturalist guide',
        'National Park entrance fees',
        'All transportation to/from Chitwan from Kathmandu or Pokhara (as per option chosen)'
      ],
      excludes: [
        'Drinks (mineral water, soft drinks, alcoholic beverages)',
        'Personal expenses (laundry, souvenirs, etc.)',
        'Tips for guides and lodge staff',
        'Travel insurance'
      ],
      price: {
        perPerson: 750,
        groupDiscount: '15% off for groups of 4 or more',
        singleSupplement: 100
      },
      difficulty: 'Easy',
      bestTime: 'October to June'
    }
  },
  {
    id: 'langtang-valley-trek',
    name: 'Langtang Valley Trek',
    duration: '9 Days',
    description: 'Discover the stunning Langtang Valley, close to the Tibetan border, with beautiful mountain views and Tamang culture.',
    image: langtangTrekImage,
    details: {
      itinerary: [
        'Day 1: Arrival in Kathmandu (1,400m)',
        'Day 2: Drive from Kathmandu to Syabrubesi (1,550m) - 7-8 hours',
        'Day 3: Trek from Syabrubesi to Lama Hotel (2,380m) - 5-6 hours',
        'Day 4: Trek from Lama Hotel to Langtang Village (3,430m) - 5-6 hours',
        'Day 5: Trek from Langtang Village to Kyanjin Gompa (3,870m) - 3-4 hours',
        'Day 6: Explore Kyanjin Gompa & Tserko Ri (5,000m optional) - 4-6 hours',
        'Day 7: Trek back from Kyanjin Gompa to Lama Hotel - 6-7 hours',
        'Day 8: Trek from Lama Hotel to Syabrubesi - 4-5 hours',
        'Day 9: Drive back to Kathmandu'
      ],
      includes: [
        'Accommodation in Kathmandu with breakfast',
        'Accommodation in teahouses during the trek',
        'All meals (breakfast, lunch, dinner) during the trek',
        'Experienced, English-speaking trekking guide',
        'Necessary porters to carry luggage',
        'Langtang National Park permit and TIMS card',
        'All ground transportation as per itinerary'
      ],
      excludes: [
        'Lunch and dinner in Kathmandu',
        'Drinks and personal expenses',
        'Travel insurance',
        'Tips for guides and porters'
      ],
      price: {
        perPerson: 950,
        groupDiscount: '8% off for groups of 3 or more',
        singleSupplement: 150
      },
      difficulty: 'Moderate',
      bestTime: 'March to May, September to November'
    }
  },
  {
    id: 'gokyo-lakes-trek',
    name: 'Gokyo Lakes Trek',
    duration: '14 Days',
    description: 'Witness the stunning turquoise Gokyo Lakes and panoramic views of Everest, Lhotse, Cho Oyu, and Makalu.',
    image: gokyoLakesTrekImage,
    details: {
      itinerary: [
        'Day 1: Arrival in Kathmandu (1,400m)',
        'Day 2: Fly to Lukla (2,840m) & Trek to Phakding (2,610m) - 3-4 hours',
        'Day 3: Trek from Phakding to Namche Bazaar (3,440m) - 5-6 hours',
        'Day 4: Acclimatization Day in Namche Bazaar',
        'Day 5: Trek from Namche Bazaar to Dole (4,200m) - 5-6 hours',
        'Day 6: Trek from Dole to Machhermo (4,470m) - 4-5 hours',
        'Day 7: Trek from Machhermo to Gokyo (4,790m) - 4-5 hours',
        'Day 8: Gokyo Ri Excursion (5,357m) & Explore Gokyo Lakes',
        'Day 9: Trek to Thagnak (4,700m) - 3-4 hours',
        'Day 10: Cross Cho La Pass (5,368m) & Trek to Dzongla (4,830m) - 7-8 hours',
        'Day 11: Trek to Lobuche (4,910m) - 4-5 hours',
        'Day 12: Trek to Gorakshep (5,140m) & Everest Base Camp (5,364m) - 6-7 hours',
        'Day 13: Hike to Kala Patthar (5,550m) & Trek down to Pheriche (4,240m) - 7-8 hours',
        'Day 14: Trek from Pheriche to Namche Bazaar - 6-7 hours',
        'Day 15: Trek from Namche Bazaar to Lukla - 6-7 hours',
        'Day 16: Fly back to Kathmandu'
      ],
      includes: [
        'Domestic flight Kathmandu-Lukla-Kathmandu',
        'Accommodation in Kathmandu with breakfast',
        'Accommodation in teahouses during the trek',
        'All meals (breakfast, lunch, dinner) during the trek',
        'Experienced, English-speaking trekking guide',
        'Necessary porters to carry luggage',
        'Sagarmatha National Park permit and TIMS card',
        'All ground transportation as per itinerary'
      ],
      excludes: [
        'Lunch and dinner in Kathmandu',
        'Drinks and personal expenses',
        'Travel insurance',
        'Tips for guides and porters'
      ],
      price: {
        perPerson: 1500,
        groupDiscount: '12% off for groups of 5 or more',
        singleSupplement: 250
      },
      difficulty: 'Challenging',
      bestTime: 'March to May, September to November'
    }
  },
  {
    id: 'kathmandu-cultural-tour',
    name: 'Kathmandu Valley Cultural Tour',
    duration: '5 Days',
    description: 'Immerse yourself in the rich history, art, and culture of the Kathmandu Valley, visiting UNESCO World Heritage sites.',
    image: kathmanduCulturalTourImage,
    details: {
      itinerary: [
        'Day 1: Arrival in Kathmandu & Transfer to Hotel',
        'Day 2: Kathmandu Sightseeing: Swayambhunath & Kathmandu Durbar Square',
        'Day 3: Patan Sightseeing: Patan Durbar Square & Golden Temple',
        'Day 4: Bhaktapur & Changunarayan Sightseeing',
        'Day 5: Pashupatinath & Boudhanath Stupa & Departure'
      ],
      includes: [
        'Accommodation in a comfortable hotel with breakfast',
        'Experienced, English-speaking tour guide',
        'Private transportation for sightseeing',
        'Entrance fees to monuments and heritage sites'
      ],
      excludes: [
        'Lunch and dinner',
        'Drinks and personal expenses',
        'Travel insurance',
        'Tips for the guide and driver'
      ],
      price: {
        perPerson: 550,
        groupDiscount: '10% off for groups of 3 or more',
        singleSupplement: 100
      },
      difficulty: 'Easy',
      bestTime: 'Throughout the year'
    }
  },
  {
    id: 'pokhara-adventure-package',
    name: 'Pokhara Adventure Package',
    duration: '4 Days',
    description: 'Experience the adventure and natural beauty of Pokhara with activities like paragliding, boating, and exploring caves and waterfalls.',
    image: pokharaAdventureImage,
    details: {
      itinerary: [
        'Day 1: Arrival in Pokhara & Lakeside Exploration',
        'Day 2: Paragliding over Phewa Lake & World Peace Pagoda Visit',
        'Day 3: Boating in Phewa Lake, Begnas Lake & Davis Falls, Gupteshwor Cave',
        'Day 4: Sunrise View from Sarangkot & Departure'
      ],
      includes: [
        'Accommodation in a comfortable hotel with breakfast',
        'Paragliding experience with certified pilot',
        'Boating in Phewa and Begnas Lakes',
        'Transportation for sightseeing activities',
        'Entrance fees to attractions'
      ],
      excludes: [
        'Lunch and dinner',
        'Drinks and personal expenses',
        'Travel insurance',
        'Tips for guides and drivers'
      ],
      price: {
        perPerson: 480,
        groupDiscount: '8% off for groups of 2 or more',
        singleSupplement: 80
      },
      difficulty: 'Easy to Moderate (depending on activities)',
      bestTime: 'March to May, September to November'
    }
  },
  {
    id: 'upper-mustang-trek',
    name: 'Upper Mustang Trek',
    duration: '12 Days',
    description: 'Journey to the remote and culturally rich kingdom of Mustang, with its unique landscapes and ancient monasteries.',
    image: mustangTrekImage,
    details: {
      itinerary: [
        'Day 1: Arrival in Kathmandu',
        'Day 2: Fly to Pokhara & Drive to Jomsom (2,743m)',
        'Day 3: Trek from Jomsom to Kagbeni (2,810m)',
        'Day 4: Trek from Kagbeni to Chele (3,050m)',
        'Day 5: Trek from Chele to Syanboche (3,475m)',
        'Day 6: Trek from Syanboche to Ghami (3,520m)',
        'Day 7: Trek from Ghami to Tsarang (3,560m)',
        'Day 8: Trek from Tsarang to Lo Manthang (3,810m)',
        'Day 9: Explore Lo Manthang',
        'Day 10: Trek from Lo Manthang to Dhakmar (3,820m)',
        'Day 11: Trek from Dhakmar to Jomsom',
        'Day 12: Fly from Jomsom to Pokhara & then to Kathmandu'
      ],
      includes: [
        'Domestic flights Kathmandu-Pokhara-Jomsom-Pokhara-Kathmandu',
        'Accommodation in Kathmandu and Pokhara with breakfast',
        'Accommodation in teahouses during the trek',
        'All meals (breakfast, lunch, dinner) during the trek',
        'Experienced, English-speaking trekking guide',
        'Necessary porters to carry luggage',
        'Upper Mustang Restricted Area Permit',
        'Annapurna Conservation Area Permit (ACAP)',
        'All ground transportation as per itinerary'
      ],
      excludes: [
        'Lunch and dinner in Kathmandu and Pokhara',
        'Drinks and personal expenses',
        'Travel insurance',
        'Tips for guides and porters'
      ],
      price: {
        perPerson: 1800,
        groupDiscount: '15% off for groups of 4 or more',
        singleSupplement: 300
      },
      difficulty: 'Moderate to Challenging (due to altitude and terrain)',
      bestTime: 'March to November'
    }
  },
  {
    id: 'trishuli-river-rafting',
    name: 'Trishuli River Rafting Adventure',
    duration: '2 Days',
    description: 'Experience the thrill of white-water rafting on the Trishuli River, suitable for beginners and experienced rafters.',
    image: raftingTrishuliImage,
    details: {
      itinerary: [
        'Day 1: Drive from Kathmandu/Pokhara to the rafting put-in point, Rafting session & Overnight camp',
        'Day 2: Morning rafting session & Drive back to Kathmandu/Pokhara'
      ],
      includes: [
        'Transportation to and from the rafting point',
        'All rafting equipment (raft, paddles, life jackets, helmets)',
        'Experienced rafting guides',
        'Meals during the rafting trip (lunch, dinner, breakfast)',
        'Accommodation in tents on a riverside camp'
      ],
      excludes: [
        'Drinks and personal expenses',
        'Travel insurance',
        'Tips for the rafting crew'
      ],
      price: {
        perPerson: 250,
        groupDiscount: '10% off for groups of 4 or more',
        singleSupplement: 30 // For single tent
      },
      difficulty: 'Moderate to Challenging (due to altitude and terrain)',
      bestTime: 'March to November'
    }
  }
]