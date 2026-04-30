export interface Plant {
  slug: string;
  name: string;
  scientificName: string;
  tagline: string;
  description: string;
  zoneMin: number;
  zoneMax: number;
  koppen: string[];
  koppenLabel: string;
  category: 'specimen' | 'fruit' | 'oak' | 'pepper';
  featured: boolean;
  partnerUrl?: string;
  partnerName?: string;
  chillHours?: string;
  mature?: string;
  nativeRegion: string;
}

export const plants: Plant[] = [
  {
    slug: "monkey-puzzle-tree",
    name: "Monkey Puzzle Tree",
    scientificName: "Araucaria araucana",
    tagline: "The dinosaurs' favorite tree. Still alive. Still weaponized.",
    description: "Dinosaurs climbed this tree. Chilean miners' families planted groves of them because nothing else handled the hardship. Now it sits behind glass in botanic gardens while your neighbor plants another Bradford pear. Every branch is a spiral of armored, blade-tipped scales — a living fortress. Slow-growing but nearly immortal. Plant one and let your grandchildren explain it to their neighbors.",
    zoneMin: 7,
    zoneMax: 10,
    koppen: ["Cfb", "Cfa", "BSk"],
    koppenLabel: "Temperate to semi-arid",
    category: "specimen",
    featured: true,
    nativeRegion: "Chile & Argentina",
    mature: "Up to 80 feet",
  },
  {
    slug: "baobab",
    name: "Baobab",
    scientificName: "Adansonia digitata",
    tagline: "Stores its own water. Lives 2,000 years. Unforgettable.",
    description: "An entire village gathers under this tree in Africa. It stores hundreds of gallons of water in its trunk. It lives longer than most civilizations. Zone 10b and warmer — if your winters are mild enough, plant one. When it matures, it looks like the earth itself decided to become a tree. Nothing else on a residential lot will ever look like this.",
    zoneMin: 10.5,
    zoneMax: 13,
    koppen: ["BSh", "BWh", "Aw"],
    koppenLabel: "Hot semi-arid to tropical",
    category: "specimen",
    featured: true,
    nativeRegion: "Sub-Saharan Africa",
    mature: "Up to 100 feet (very slow)",
  },
  {
    slug: "rising-sun-redbud",
    name: "Rising Sun Redbud",
    scientificName: "Cercis canadensis 'JN2'",
    tagline: "The redbud your nursery won't carry.",
    description: "The standard Eastern Redbud is fine. This is not fine — it's electric. New growth emerges orange-gold, matures through chartreuse, settles into green by summer. In spring it's covered in magenta flowers before a single leaf opens. Small tree, enormous presence. The native-plant crowd will still approve. You don't need their approval.",
    zoneMin: 4,
    zoneMax: 9,
    koppen: ["Cfa", "BSk", "BSh"],
    koppenLabel: "Humid subtropical to semi-arid",
    category: "specimen",
    featured: true,
    nativeRegion: "Eastern North America (cultivar)",
    mature: "20–30 feet",
  },
  {
    slug: "low-chill-cherry",
    name: "Low Chill Cherry",
    scientificName: "Prunus avium — Minnie Royal / Royal Lee / Lapins",
    tagline: "Texas was told cherries were impossible here. Ignore that.",
    description: "Conventional wisdom said Texas summers were a fruit-growing dead zone. Specific cultivars broke that rule. Minnie Royal and Royal Lee are the go-to cross-pollinating pair for Texas — 200–300 chill hours, genuine sweet cherries in late April. Lapins is the self-fertile pick for Zone 8 if you only want one tree. This is not a compromise variety. These produce real cherries that taste like cherries. Stop buying California fruit shipped three days old.",
    zoneMin: 8,
    zoneMax: 10,
    koppen: ["Cfa", "BSh"],
    koppenLabel: "Humid subtropical to hot semi-arid",
    category: "fruit",
    featured: false,
    nativeRegion: "Cultivar — bred for warm climates",
    chillHours: "200–300 hours (Minnie Royal / Royal Lee); ~400 hours (Lapins)",
    mature: "15–25 feet",
  },
  {
    slug: "low-chill-peach",
    name: "Low Chill Peach",
    scientificName: "Prunus persica (low chill varieties)",
    tagline: "Real peaches. Your backyard. No cold winter required.",
    description: "The Southern Texas peach orchard was never supposed to exist. Santa Barbara, Red Baron, and Donut Peach varieties proved otherwise — thriving where standard peach trees sulk and fail. These are not ornamentals. They produce. Zone 8 through 10. If you have the space and the sun, stop waiting for the farmers market.",
    zoneMin: 8,
    zoneMax: 10,
    koppen: ["Cfa", "BSh", "BSk"],
    koppenLabel: "Humid subtropical to semi-arid",
    category: "fruit",
    featured: false,
    nativeRegion: "Cultivar — bred for warm climates",
    chillHours: "150–300 hours",
    mature: "12–20 feet",
  },
  {
    slug: "low-chill-plum",
    name: "Low Chill Plum",
    scientificName: "Prunus salicina (Japanese varieties)",
    tagline: "Japanese plums don't care about your winters.",
    description: "Japanese plum varieties were developed for exactly this kind of climate — mild winters, hot summers, and not much in between. Beauty, Methley, and Gulf Ruby all thrive below Zone 8. Heavy producers. Disease-resistant. The plum tree your grandfather grew in Georgia can grow in your San Antonio yard. The information was just never shared.",
    zoneMin: 8,
    zoneMax: 10,
    koppen: ["Cfa", "BSh"],
    koppenLabel: "Humid subtropical to hot semi-arid",
    category: "fruit",
    featured: false,
    nativeRegion: "Cultivar — Japanese breeding lines",
    chillHours: "150–400 hours",
    mature: "10–18 feet",
  },
  {
    slug: "desert-willow",
    name: "Desert Willow",
    scientificName: "Chilopsis linearis",
    tagline: "Heat. Drought. Come at it.",
    description: "The Trans-Pecos of West Texas is the desert willow's native ground — and most of Texas completely ignores it. Orchid-like flowers all summer. Zero supplemental water once established. Handles the worst heat Texas can throw. A hummingbird magnet. The rest of the state is slowly discovering what the Chihuahuan Desert has known for centuries. Get ahead of it.",
    zoneMin: 7.5,
    zoneMax: 11,
    koppen: ["BSh", "BSk", "BWk"],
    koppenLabel: "Hot semi-arid to cold desert",
    category: "specimen",
    featured: true,
    nativeRegion: "Trans-Pecos Texas, New Mexico, Arizona",
    mature: "15–30 feet",
  },
  {
    slug: "lacey-oak",
    name: "Lacey Oak",
    scientificName: "Quercus laceyi",
    tagline: "The Hill Country's best-kept secret.",
    description: "Endemic to the Edwards Plateau limestone cliffs. Bluer-than-blue summer foliage, shrimp-pink in spring emergence. Handles the worst alkaline limestone soils the Hill Country can throw. Semi-deciduous. Compact enough for residential lots. The oak world has a thousand species and most nurseries stock two. This is one you'll never regret hunting down.",
    zoneMin: 7,
    zoneMax: 9,
    koppen: ["BSh", "BSk", "Cfa"],
    koppenLabel: "Semi-arid to subtropical",
    category: "oak",
    featured: false,
    nativeRegion: "Edwards Plateau, central Texas & Mexico",
    mature: "25–40 feet",
  },
  {
    slug: "sawtooth-oak",
    name: "Sawtooth Oak",
    scientificName: "Quercus acutissima",
    tagline: "From Japan. Grows fast. Makes acorns nobody ignores.",
    description: "Originating in Japan, China, and Korea, the sawtooth oak produces the largest mast crop of any oak species — mountains of acorns every year, starting young. Fast-growing for an oak (3–4 feet per year when established). The distinctive serrated leaf has no American analog. Excellent fall color in gold and brown. Wildlife goes completely insane for it. You will not find this at a hardware store. That's the point.",
    zoneMin: 5,
    zoneMax: 9,
    koppen: ["Cfa", "Cwa", "BSk"],
    koppenLabel: "Humid subtropical to semi-arid",
    category: "oak",
    featured: false,
    nativeRegion: "Japan, China, Korea",
    mature: "40–60 feet",
  },
  {
    slug: "cork-oak",
    name: "Cork Oak",
    scientificName: "Quercus suber",
    tagline: "The tree that made wine possible. Grows in Texas.",
    description: "This is where wine corks come from. The bark is the actual commercial cork — thick, spongy, fire-resistant, and harvestable every 9 years without harming the tree. Native to the Mediterranean coast of Spain, Portugal, and North Africa. Semi-evergreen. Drought-tolerant once established. Thrives in Zone 7–10 in well-drained alkaline soils. Growing a cork oak in Central Texas is possible and deeply satisfying to explain to guests.",
    zoneMin: 7,
    zoneMax: 10,
    koppen: ["Csa", "BSh", "BSk"],
    koppenLabel: "Mediterranean to semi-arid",
    category: "oak",
    featured: false,
    nativeRegion: "Mediterranean coast — Spain, Portugal, North Africa",
    mature: "40–70 feet",
  },
  {
    slug: "hercules-club",
    name: "Hercules Club",
    scientificName: "Zanthoxylum clava-herculis",
    tagline: "Chew a leaf. Your mouth goes numb. That's a feature.",
    description: "Also called the toothache tree because the bark and leaves contain a natural anesthetic — chew a leaf and your mouth goes numb within seconds. The trunk is covered in conical spines that look like something from the Cretaceous. Strange, useful, and genuinely alarming in appearance. It does all of this while being a food source for giant swallowtail butterflies. Worth every inch of space.",
    zoneMin: 7,
    zoneMax: 9,
    koppen: ["Cfa", "BSh"],
    koppenLabel: "Humid subtropical to semi-arid",
    category: "specimen",
    featured: true,
    nativeRegion: "Southeast US to East Texas",
    mature: "20–30 feet",
  },
  {
    slug: "escarpment-black-cherry",
    name: "Escarpment Black Cherry",
    scientificName: "Prunus serotina var. eximia",
    tagline: "The limestone cliff cherry. Tough as the rock it grows on.",
    description: "A variety of the black cherry that evolved specifically for the Edwards Plateau — carved out by limestone cliffs, poor soils, and brutal summer heat. It makes actual cherries. The deer will try to eat it constantly; plan accordingly. Fall color ranges from gold to deep red. If you're in the Hill Country, this is the tree that belongs there, growing in conditions that would kill the standard form.",
    zoneMin: 4,
    zoneMax: 8,
    koppen: ["BSh", "BSk", "Cfa"],
    koppenLabel: "Semi-arid to subtropical",
    category: "specimen",
    featured: false,
    nativeRegion: "Edwards Plateau, central Texas",
    mature: "25–50 feet",
  },
  {
    slug: "baccatum-pepper",
    name: "Baccatum Pepper Tree",
    scientificName: "Capsicum baccatum",
    tagline: "In Zone 9, this isn't a plant. It's a tree.",
    description: "In the right climate, a baccatum pepper doesn't die back in winter — it keeps going. And going. Some varieties reach 8 feet tall over multiple seasons, developing woody trunks and putting out waves of fruit each summer. Perennial in Zone 9 and warmer. If you've been treating peppers as annuals, you've been leaving years of production on the table. Our partners at Austin Peppers know every variety worth growing.",
    zoneMin: 9,
    zoneMax: 13,
    koppen: ["BSh", "Cfa", "Aw"],
    koppenLabel: "Hot semi-arid to humid subtropical",
    category: "pepper",
    featured: false,
    nativeRegion: "South America",
    mature: "4–8 feet (perennial in Zone 9+)",
    partnerUrl: "https://austinpeppers.com",
    partnerName: "Austin Peppers",
  },
];

export function getPlantBySlug(slug: string): Plant | undefined {
  return plants.find(p => p.slug === slug);
}

export function getPlantsByZone(zone: number): Plant[] {
  return plants.filter(p => p.zoneMin <= zone && p.zoneMax >= zone);
}

export function getFeaturedPlants(): Plant[] {
  return plants.filter(p => p.featured);
}
