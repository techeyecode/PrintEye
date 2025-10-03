// brochuresItem.ts

export interface BrochureItem {
  id: number;
  title: string;
  
  image: string;
  link: string;
  grams: string[];
  sizes: string[];
  printSides: string[];
  finish: string[];
  effects: string[];
  
}

// Standard Brochures
export const standardBrochures: BrochureItem[] = [
  {
    id: 1,
    title: "Real Estate",
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001905891/NPIB48366-Brochure-Product-Tile-Z-fold-Real-Estate-001",
    link: "/marketing-materials/brochures/tri-fold/templates/construction-real-estate-industry",
    grams: ["105gr", "115gr", "128gr", "200gr", "Free (70gr-800gr)"],
    sizes: ["A7", "A5", "A4", "A3", "Free (70x100cm)"],
    printSides: ["One Side Print", "Two Side Print"],
    finish: ["Mat Selefon", "Glossy Selefon"],
    effects: ["UV", "Foil", "Emboss"],
  },
  {
    id: 2,
    title: "Beauty & Spa",
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001906163/NPIB48366-Brochure-Product-Tile-tri-fold-beauty-001",
    link: "/marketing-materials/brochures/tri-fold/templates/beauty-spa-industry",
    grams: ["105gr", "115gr", "128gr", "200gr", "Free (70gr-800gr)"],
    sizes: ["A7", "A5", "A4", "A3", "Free (70x100cm)"],
    printSides: ["One Side Print", "Two Side Print"],
    finish: ["Mat Selefon", "Glossy Selefon"],
    effects: ["UV", "Foil", "Emboss"],
  },
  {
    id: 3,
    title: "Health & Wellness",
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001906249/NPIB48366-Brochure-Product-Tile-Z-fold-Health-&-Wellness-001",
    link: "/marketing-materials/brochures/tri-fold/templates/health-wellness-industry",
    grams: ["105gr", "115gr", "128gr", "200gr", "Free (70gr-800gr)"],
    sizes: ["A7", "A5", "A4", "A3", "Free (70x100cm)"],
    printSides: ["One Side Print", "Two Side Print"],
    finish: ["Mat Selefon", "Glossy Selefon"],
    effects: ["UV", "Foil", "Emboss"],
  },
];

// Fold Brochures
export const foldBrochures: BrochureItem[] = [
  {
    id: 4,
    title: "Travel & Accommodation",
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001906020/NPIB48366-Brochure-Product-Tile-bi-fold-Travel-&-Accommodation-001",
    link: "/marketing-materials/brochures/tri-fold/templates/travel-accommodation-industry",
    grams: ["105gr", "115gr", "128gr", "200gr", "Free (70gr-800gr)"],
    sizes: ["A7", "A5", "A4", "A3", "Free (70x100cm)"],
    printSides: ["One Side Print", "Two Side Print"],
    finish: ["Mat Selefon", "Glossy Selefon"],
    effects: ["UV", "Foil", "Emboss"],
  },
  {
    id: 5,
    title: "Food & Beverage",
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001906168/NPIB48366-Brochure-Product-Tile-tri-fold-food-&-beverage-001",
    link: "/marketing-materials/brochures/tri-fold/templates/food-beverage-industry",
    grams: ["105gr", "115gr", "128gr", "200gr", "Free (70gr-800gr)"],
    sizes: ["A7", "A5", "A4", "A3", "Free (70x100cm)"],
    printSides: ["One Side Print", "Two Side Print"],
    finish: ["Mat Selefon", "Glossy Selefon"],
    effects: ["UV", "Foil", "Emboss"],
  },
];

// Door Brochures
export const doorBrochures: BrochureItem[] = [
  {
    id: 6,
    title: "Professional Services",
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001906158/NPIB48366-Brochure-Product-Tile-bi-fold-Pofessional-Service-001",
    link: "/marketing-materials/brochures/tri-fold/templates/professional-services-industry",
    grams: ["105gr", "115gr", "128gr", "200gr", "Free (70gr-800gr)"],
    sizes: ["A7", "A5", "A4", "A3", "Free (70x100cm)"],
    printSides: ["One Side Print", "Two Side Print"],
    finish: ["Mat Selefon", "Glossy Selefon"],
    effects: ["UV", "Foil", "Emboss"],
  },
];

// Export all brochures together
export const allBrochures: BrochureItem[] = [
  ...standardBrochures,
  ...foldBrochures,
  ...doorBrochures,
];
