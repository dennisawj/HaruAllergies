// Complete allergen data from PAX Complete test
// Classification: Score >= 24-26 range (more than 25 or close ±1) = ALLERGIC
// Score < 24 or > 26 = Safe/Borderline

export const allergenData = [
  // GRASSES
  { id: 1, name: "Bahia", category: "Grasses", score: 21.79, status: "Safe" },
  { id: 2, name: "Bermuda", category: "Grasses", score: 21.88, status: "Safe" },
  { id: 3, name: "Bluegrass/June", category: "Grasses", score: 22.57, status: "Safe" },
  { id: 4, name: "Cultivated Rye", category: "Grasses", score: 25.03, status: "Allergic" },
  { id: 5, name: "Johnson", category: "Grasses", score: 23.34, status: "Safe" },
  { id: 6, name: "Meadow Fescue", category: "Grasses", score: 25.50, status: "Allergic" },
  { id: 7, name: "Orchard", category: "Grasses", score: 21.92, status: "Safe" },
  { id: 8, name: "Perennial Rye", category: "Grasses", score: 19.23, status: "Safe" },
  { id: 9, name: "Timothy", category: "Grasses", score: 25.91, status: "Allergic" },

  // WEEDS
  { id: 10, name: "Annual Mercury", category: "Weeds", score: 18.81, status: "Safe" },
  { id: 11, name: "Dock/Sorrel", category: "Weeds", score: 23.64, status: "Safe" },
  { id: 12, name: "English Plantain", category: "Weeds", score: 24.97, status: "Allergic" },
  { id: 13, name: "Lamb's Quarter", category: "Weeds", score: 24.96, status: "Allergic" },
  { id: 14, name: "Mugwort", category: "Weeds", score: 25.63, status: "Allergic" },
  { id: 15, name: "Nettle", category: "Weeds", score: 20.90, status: "Safe" },
  { id: 16, name: "Pigweed", category: "Weeds", score: 25.94, status: "Allergic" },
  { id: 17, name: "Ragweed", category: "Weeds", score: 25.33, status: "Allergic" },
  { id: 18, name: "Russian Thistle", category: "Weeds", score: 24.77, status: "Allergic" },
  { id: 19, name: "Wall Pellitory", category: "Weeds", score: 24.70, status: "Allergic" },

  // TREES
  { id: 20, name: "Acacia", category: "Trees", score: 23.87, status: "Safe" },
  { id: 21, name: "Alder", category: "Trees", score: 21.60, status: "Safe" },
  { id: 22, name: "Arizona Cypress", category: "Trees", score: 25.23, status: "Allergic" },
  { id: 23, name: "Ash", category: "Trees", score: 23.67, status: "Safe" },
  { id: 24, name: "Beech", category: "Trees", score: 24.58, status: "Allergic" },
  { id: 25, name: "Cottonwood", category: "Trees", score: 20.35, status: "Safe" },
  { id: 26, name: "Cypress", category: "Trees", score: 21.69, status: "Safe" },
  { id: 27, name: "Hazelnut", category: "Trees", score: 25.24, status: "Allergic" },
  { id: 28, name: "Japanese Cedar", category: "Trees", score: 23.71, status: "Safe" },
  { id: 29, name: "London Plane", category: "Trees", score: 25.94, status: "Allergic" },
  { id: 30, name: "Mountain/Red Cedar", category: "Trees", score: 18.43, status: "Safe" },
  { id: 31, name: "Mulberry", category: "Trees", score: 22.35, status: "Safe" },
  { id: 32, name: "Olive", category: "Trees", score: 26.04, status: "Allergic" },
  { id: 33, name: "Privet", category: "Trees", score: 24.05, status: "Allergic" },
  { id: 34, name: "Silver Birch", category: "Trees", score: 23.84, status: "Safe" },
  { id: 35, name: "Walnut", category: "Trees", score: 25.61, status: "Allergic" },

  // MOLDS & YEASTS
  { id: 36, name: "Alternaria", category: "Molds & Yeasts", score: 24.79, status: "Allergic" },
  { id: 37, name: "Aspergillus", category: "Molds & Yeasts", score: 24.18, status: "Allergic" },
  { id: 38, name: "Cladosporium", category: "Molds & Yeasts", score: 22.06, status: "Safe" },
  { id: 39, name: "Malassezia", category: "Molds & Yeasts", score: 24.87, status: "Allergic" },
  { id: 40, name: "Penicillium", category: "Molds & Yeasts", score: 19.68, status: "Safe" },

  // VENOMS & INSECTS
  { id: 41, name: "Ant Venom", category: "Venoms", score: 20.53, status: "Safe" },
  { id: 42, name: "Fire Ant Venom", category: "Venoms", score: 20.53, status: "Safe" },
  { id: 43, name: "Bee Venom", category: "Venoms", score: 25.01, status: "Allergic" },
  { id: 44, name: "Common Wasp Venom", category: "Venoms", score: 25.87, status: "Allergic" },
  { id: 45, name: "Long-headed Wasp Venom", category: "Venoms", score: 25.30, status: "Allergic" },

  // FLEA
  { id: 46, name: "Cat Flea", category: "Flea", score: 21.27, status: "Safe" },

  // MITES
  { id: 47, name: "Dust Mite (D. farinae)", category: "Mites", score: 32.68, status: "Highly Allergic" },
  { id: 48, name: "Dust Mite (D. pteronyssinus)", category: "Mites", score: 115.15, status: "Highly Allergic" },
  { id: 49, name: "Acarus siro", category: "Mites", score: 106.22, status: "Highly Allergic" },
  { id: 50, name: "B. tropicalis", category: "Mites", score: 47.41, status: "Highly Allergic" },
  { id: 51, name: "Glycyphagus domesticus", category: "Mites", score: 23.71, status: "Safe" },
  { id: 52, name: "Lepidoglyphus destructor", category: "Mites", score: 25.50, status: "Allergic" },
  { id: 53, name: "Tyrophagus putrescentiae", category: "Mites", score: 21.30, status: "Safe" },
  { id: 54, name: "Storage Mite (Tyrophagus)", category: "Mites", score: 21.30, status: "Safe" }
];

// Get all unique categories
export const getCategories = () => {
  const categories = {};
  allergenData.forEach(item => {
    if (!categories[item.category]) {
      categories[item.category] = {
        name: item.category,
        count: 0,
        allergic: 0,
        highly: 0,
        safe: 0
      };
    }
    categories[item.category].count++;
    if (item.status === "Allergic") categories[item.category].allergic++;
    if (item.status === "Highly Allergic") categories[item.category].highly++;
    if (item.status === "Safe") categories[item.category].safe++;
  });
  return categories;
};

// Get items by status
export const getItemsByStatus = (status) => {
  return allergenData.filter(item => item.status === status);
};

// Get stats
export const getStats = () => {
  const total = allergenData.length;
  const highly = allergenData.filter(i => i.status === "Highly Allergic").length;
  const allergic = allergenData.filter(i => i.status === "Allergic").length;
  const safe = allergenData.filter(i => i.status === "Safe").length;

  return {
    total,
    highly,
    allergic,
    safe,
    totalAllergic: highly + allergic
  };
};

export default allergenData;
