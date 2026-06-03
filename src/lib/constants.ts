export const RESORT = {
  name:        "Elyon Elementaita Resort",
  tagline:     "Where the Rift Valley Breathes",
  description: "A sanctuary where the ancient rhythms of the Great Rift Valley meet curated luxury. Perched along the serene shores of UNESCO World Heritage-listed Lake Elementaita.",
  address:     "G7PP+QG3, Mbaruk, Kanyawa, Nakuru County, Kenya",
  coordinates: { lat: -0.4900, lng: 36.2400 },
  phone:       "+254 700 000 000", // ← CHANGE THIS to your real number
  email:       "reservations@elyonelementaitaresort.com",
  instagram:   "@ElyonElementaita",
  facebook:    "ElyonElementaitaResort",
  rooms:       52,
  established: 2025,
  heritage:    "UNESCO World Heritage Site — Kenya Lakes System (2011)",
  altitude:    "2,000m above sea level",
};

export const OUTLETS = [
  {
    id:          "main-restaurant",
    name:        "The Rift Table",
    description: "Our main dining experience, celebrating Kenyan flavours and East African cuisine with panoramic resort views. Open for breakfast, lunch and dinner.",
    hours:       "Breakfast 6:30–10:30 · Lunch 12:00–15:00 · Dinner 18:30–22:30",
    image:       "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id:          "poolside",
    name:        "Flamingo Poolside",
    description: "Light bites, craft cocktails and cold beverages served at the water's edge. The perfect setting for an afternoon with a view of the lake.",
    hours:       "Daily 10:00–20:00",
    image:       "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  },
  {
    id:          "coffee-station",
    name:        "Elementaita Coffee Co.",
    description: "Specialty Kenyan single-origin coffee, artisan teas, freshly baked pastries and light snacks. The heart of the morning at Elyon.",
    hours:       "Daily 6:00–18:00",
    image:       "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
  },
];

export const ROOM_TYPES = [
  {
    id:          "standard",
    name:        "Standard Room",
    description: "Thoughtfully appointed rooms with Afro-chic décor, private balcony and garden or courtyard views. A calm retreat after a day of exploration.",
    capacity:    "2 guests",
    size:        "32 m²",
    rate:        "From KES 8,500 / night",
    amenities:   ["King or twin beds", "Private balcony", "Flat-screen TV", "Tea & coffee station", "En-suite bathroom", "Free Wi-Fi"],
    image:       "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
  {
    id:          "deluxe",
    name:        "Deluxe Lake View",
    description: "Elevated interiors with unobstructed views of Lake Elementaita and the flamingo shores. A suite of textures — linen, local timber, and hand-woven wall art.",
    capacity:    "2 guests",
    size:        "48 m²",
    rate:        "From KES 13,500 / night",
    amenities:   ["King bed", "Lake view balcony", "Bathtub & rainfall shower", "Minibar", "Sitting area", "Flat-screen TV", "Free Wi-Fi"],
    image:       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
  {
    id:          "suite",
    name:        "Elementaita Suite",
    description: "Our signature suites redefine Rift Valley luxury — spacious living areas, private plunge pool terraces, and butler service against a backdrop of escarpment and lake.",
    capacity:    "2–4 guests",
    size:        "85 m²",
    rate:        "From KES 24,000 / night",
    amenities:   ["King bed + living room", "Private plunge pool terrace", "Butler service", "Espresso machine", "Walk-in rain shower", "Jacuzzi", "Free Wi-Fi", "Turndown service"],
    image:       "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  },
  {
    id:          "family",
    name:        "Family Cottage",
    description: "Spacious interconnecting cottages designed for families — with a private courtyard garden, bunk beds for children and two full bathrooms.",
    capacity:    "2 adults + 2 children",
    size:        "72 m²",
    rate:        "From KES 18,000 / night",
    amenities:   ["Master king bed", "Children's twin bunk room", "Private garden courtyard", "Two full bathrooms", "Kitchenette", "Family dining area", "Free Wi-Fi"],
    image:       "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
];

export const EXPERIENCES = [
  {
    id:    "birdwatching",
    title: "Flamingo Shore Walks",
    desc:  "Dawn walks along Lake Elementaita with a certified naturalist guide. Witness thousands of lesser flamingos, great white pelicans and over 400 bird species.",
    icon:  "🦩",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  },
  {
    id:    "game-drives",
    title: "Rift Valley Game Drives",
    desc:  "Encounter Rothschild's giraffe, zebra, gazelle and buffalo across the escarpment landscape in our open 4WD safari vehicles.",
    icon:  "🦒",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
  },
  {
    id:    "sundowners",
    title: "Escarpment Sundowners",
    desc:  "Champagne and canapés on the ridge at golden hour — the Rift Valley floor stretching 2,000 metres below as the sun paints the lake pink.",
    icon:  "🥂",
    image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
  },
  {
    id:    "cultural",
    title: "Maasai Cultural Experience",
    desc:  "An afternoon with our local Maasai partners — traditional storytelling, beadwork, and an authentic village visit rooted in respect and genuine connection.",
    icon:  "🏺",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
  },
  {
    id:    "gardens",
    title: "Gardens for Events",
    desc:  "Our landscaped gardens and open lawns host weddings, corporate retreats and private celebrations — with the lake as your backdrop.",
    icon:  "🌿",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
  },
  {
    id:    "camping",
    title: "Lakeside Camping",
    desc:  "Fully equipped camping sites along the lake shore — fire pits, stargazing, and morning birdsong. Adventure with comfort.",
    icon:  "⛺",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80",
  },
];

export const STATS = [
  { value: "52",    label: "Rooms & Suites" },
  { value: "3",     label: "Dining Venues" },
  { value: "UNESCO",label: "World Heritage Lake" },
  { value: "400+",  label: "Bird Species" },
  { value: "2,000m",label: "Above Sea Level" },
  { value: "1hr",   label: "From Nairobi" },
];

export const TESTIMONIALS = [
  {
    quote:   "Waking up to a lake full of flamingos and a cup of single-origin Kenyan coffee — Elyon has permanently ruined all other hotels for me.",
    author:  "Amara N.",
    country: "Nairobi, Kenya",
    rating:  5,
  },
  {
    quote:   "The suite was the most beautiful room I have stayed in across Africa. The team remembered our anniversary on the second morning without being reminded. That is hospitality.",
    author:  "David & Claire M.",
    country: "London, United Kingdom",
    rating:  5,
  },
  {
    quote:   "We hosted our company retreat here for 40 guests. The gardens, the food, the lake — it was everything. Our team still talks about it six months later.",
    author:  "James K.",
    country: "Kampala, Uganda",
    rating:  5,
  },
  {
    quote:   "The sundowner on the escarpment was the single best experience of our Kenya trip. Elyon does not just offer a room — it offers a perspective.",
    author:  "Sophie L.",
    country: "Paris, France",
    rating:  5,
  },
];
