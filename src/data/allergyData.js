// Comprehensive allergy test data from Haru's allergy report
// Classification: Score >= 24 OR <= 26 is considered ALLERGIC (>25 ±1)

export const allergyData = [
  // GRASSES
  { name: "Bahia", category: "Grasses", score: 21.78, allergic: false },
  { name: "Bermuda", category: "Grasses", score: 21.88, allergic: false },
  { name: "Bluegrass/Fine", category: "Grasses", score: 22.57, allergic: false },
  { name: "Cultivated Rye", category: "Grasses", score: 25.03, allergic: true },
  { name: "Meadow fescue", category: "Grasses", score: 25.50, allergic: true },
  { name: "Orchard", category: "Grasses", score: 21.02, allergic: false },
  { name: "Perennial Rye", category: "Grasses", score: 19.23, allergic: false },
  { name: "Timothy", category: "Grasses", score: 25.91, allergic: true },

  // WEEDS
  { name: "Annual Mercury", category: "Weeds", score: 18.81, allergic: false },
  { name: "Cocklebur", category: "Weeds", score: 23.64, allergic: false },
  { name: "English Plantain", category: "Weeds", score: 24.97, allergic: true },
  { name: "Giant Ragweed", category: "Weeds", score: 24.96, allergic: true },
  { name: "Mugwort", category: "Weeds", score: 25.63, allergic: true },
  { name: "Nettle", category: "Weeds", score: 20.80, allergic: false },
  { name: "Pigweed", category: "Weeds", score: 25.94, allergic: true },
  { name: "Ragweed", category: "Weeds", score: 25.33, allergic: true },
  { name: "Russian Thistle", category: "Weeds", score: 24.77, allergic: true },
  { name: "Yellow Dock", category: "Weeds", score: 24.70, allergic: true },

  // TREES
  { name: "Acacia", category: "Trees", score: 23.87, allergic: false },
  { name: "Ash", category: "Trees", score: 21.60, allergic: false },
  { name: "Arizona Cypress", category: "Trees", score: 25.23, allergic: true },
  { name: "Beech", category: "Trees", score: 24.58, allergic: true },
  { name: "Cottonwood", category: "Trees", score: 20.35, allergic: false },
  { name: "Cypress", category: "Trees", score: 21.69, allergic: false },
  { name: "Elm", category: "Trees", score: 23.63, allergic: false },
  { name: "English Cedar", category: "Trees", score: 23.71, allergic: false },
  { name: "Ginkgo", category: "Trees", score: 25.24, allergic: true },
  { name: "Hickory", category: "Trees", score: 20.77, allergic: false },
  { name: "Japanese Cedar", category: "Trees", score: 23.71, allergic: false },
  { name: "Juniper", category: "Trees", score: 24.89, allergic: true },
  { name: "Mountain/Red Cedar", category: "Trees", score: 18.43, allergic: false },
  { name: "Mulberry", category: "Trees", score: 22.35, allergic: false },
  { name: "Oak", category: "Trees", score: 26.04, allergic: true },
  { name: "Olive", category: "Trees", score: 26.04, allergic: true },
  { name: "Privet", category: "Trees", score: 24.65, allergic: true },
  { name: "Silver Birch", category: "Trees", score: 23.54, allergic: false },
  { name: "Sycamore", category: "Trees", score: 25.61, allergic: true },
  { name: "White Pine", category: "Trees", score: 20.86, allergic: false },

  // MOLDS & YEASTS
  { name: "Alternaria", category: "Molds & Yeasts", score: 24.79, allergic: true },
  { name: "Aspergillus", category: "Molds & Yeasts", score: 24.18, allergic: true },
  { name: "Cladosporium", category: "Molds & Yeasts", score: 22.06, allergic: false },
  { name: "Malassezia", category: "Molds & Yeasts", score: 24.87, allergic: true },
  { name: "Penicillium", category: "Molds & Yeasts", score: 19.68, allergic: false },

  // BEE & WASP VENOM
  { name: "Common Wasp Venom", category: "Bee & Wasp", score: 25.01, allergic: true },
  { name: "Honey Bee Venom", category: "Bee & Wasp", score: 25.87, allergic: true },
  { name: "Long-headed Wasp Venom", category: "Bee & Wasp", score: 25.30, allergic: true },

  // FLEAS
  { name: "Cat Flea", category: "Fleas", score: 21.27, allergic: false },

  // MITES
  { name: "Acarus siro", category: "Mites", score: 21.30, allergic: false },
  { name: "D. farinae", category: "Mites", score: 15.18, allergic: false },
  { name: "D. pteronyssinus", category: "Mites", score: 106.25, allergic: true },
  { name: "Lepidoglyphus destructor", category: "Mites", score: 25.77, allergic: true },
  { name: "Tyrophagus putrescentis", category: "Mites", score: 25.32, allergic: true },

  // COCKROACH
  { name: "American Cockroach", category: "Cockroach", score: 24.18, allergic: true },
  { name: "German Cockroach", category: "Cockroach", score: 25.10, allergic: true },

  // INSECTS
  { name: "Deer Fly", category: "Insects", score: 21.51, allergic: false },
  { name: "Horse Fly", category: "Insects", score: 20.39, allergic: false },
  { name: "Mosquito", category: "Insects", score: 24.40, allergic: true },
  { name: "Stable Fly", category: "Insects", score: 22.48, allergic: false },

  // EPIDERMIS
  { name: "Cat Epithelia", category: "Epidermis", score: 25.07, allergic: true },
  { name: "Dog", category: "Epidermis", score: 23.00, allergic: false },
  { name: "Guinea Pig", category: "Epidermis", score: 24.68, allergic: true },
  { name: "Horse Epithelia", category: "Epidermis", score: 25.70, allergic: true },
  { name: "Mouse Epithelia", category: "Epidermis", score: 21.23, allergic: false },
  { name: "Rabbit Epithelia", category: "Epidermis", score: 26.16, allergic: true },

  // FRUITS
  { name: "Apple", category: "Fruits", score: 24.16, allergic: true },
  { name: "Blueberry", category: "Fruits", score: 21.75, allergic: false },
  { name: "Mango", category: "Fruits", score: 24.42, allergic: true },

  // LEGUMES & NUTS
  { name: "Lentil", category: "Legumes & Nuts", score: 27.02, allergic: true },
  { name: "Pea", category: "Legumes & Nuts", score: 24.18, allergic: true },
  { name: "Peanut", category: "Legumes & Nuts", score: 24.43, allergic: true },
  { name: "Soy", category: "Legumes & Nuts", score: 24.30, allergic: true },

  // CEREALS & SEEDS
  { name: "Barley", category: "Cereals & Seeds", score: 25.91, allergic: true },
  { name: "Buckwheat", category: "Cereals & Seeds", score: 24.50, allergic: true },
  { name: "Corn", category: "Cereals & Seeds", score: 23.45, allergic: false },
  { name: "Cottonseed", category: "Cereals & Seeds", score: 24.96, allergic: true },
  { name: "Linseeds", category: "Cereals & Seeds", score: 24.26, allergic: true },
  { name: "Lupine", category: "Cereals & Seeds", score: 24.59, allergic: true },
  { name: "Millet", category: "Cereals & Seeds", score: 21.81, allergic: false },
  { name: "Milo", category: "Cereals & Seeds", score: 24.99, allergic: true },
  { name: "Quinoa", category: "Cereals & Seeds", score: 24.12, allergic: true },
  { name: "Rice", category: "Cereals & Seeds", score: 25.18, allergic: true },
  { name: "Rye", category: "Cereals & Seeds", score: 25.21, allergic: true },
  { name: "Sunflower", category: "Cereals & Seeds", score: 22.38, allergic: false },
  { name: "Wheat", category: "Cereals & Seeds", score: 25.21, allergic: true },

  // EGG & MILK
  { name: "Cow Milk", category: "Egg & Milk", score: 26.78, allergic: true },
  { name: "Egg - White", category: "Egg & Milk", score: 25.65, allergic: true },
  { name: "Egg - Yolk", category: "Egg & Milk", score: 24.38, allergic: true },

  // MEATS
  { name: "Beef", category: "Meats", score: 25.72, allergic: true },
  { name: "Chicken", category: "Meats", score: 25.98, allergic: true },
  { name: "Horse", category: "Meats", score: 24.58, allergic: true },
  { name: "Lamb", category: "Meats", score: 25.81, allergic: true },
  { name: "Mealworm", category: "Meats", score: 24.55, allergic: true },
  { name: "Rabbit", category: "Meats", score: 23.27, allergic: false },
  { name: "Turkey", category: "Meats", score: 22.65, allergic: false },

  // SEAFOOD
  { name: "Cod", category: "Seafood", score: 23.64, allergic: false },
  { name: "Herring", category: "Seafood", score: 20.70, allergic: false },
  { name: "Mackerel", category: "Seafood", score: 21.57, allergic: false },
  { name: "Salmon", category: "Seafood", score: 24.66, allergic: true },
  { name: "Tuna", category: "Seafood", score: 24.50, allergic: true },

  // OTHER
  { name: "Latex", category: "Other", score: 25.89, allergic: true },
  { name: "Roundworm", category: "Other", score: 23.81, allergic: false },
];

// Get statistics by category
export const getCategoryStats = () => {
  const stats = {};

  allergyData.forEach(item => {
    if (!stats[item.category]) {
      stats[item.category] = {
        total: 0,
        allergic: 0,
        nonAllergic: 0,
        avgScore: 0,
        items: [],
      };
    }

    stats[item.category].total++;
    if (item.allergic) {
      stats[item.category].allergic++;
    } else {
      stats[item.category].nonAllergic++;
    }
    stats[item.category].items.push(item);
  });

  // Calculate averages
  Object.values(stats).forEach(cat => {
    cat.avgScore = (cat.items.reduce((sum, item) => sum + item.score, 0) / cat.total).toFixed(2);
    cat.items.sort((a, b) => b.score - a.score);
  });

  return stats;
};

// Get only allergic items sorted by score
export const getAllergicItems = () => {
  return allergyData.filter(item => item.allergic).sort((a, b) => b.score - a.score);
};

export default allergyData;
