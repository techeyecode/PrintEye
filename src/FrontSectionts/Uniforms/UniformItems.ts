export interface UniformItems {
  id: number;
  value: string;
  label: string;
  code: string;
  count?: number;
  description?: string;
  images: string[];
  popularItems?: string[];
}

export interface UniformCategory {
  id: number;
  value: string;
  label: string;
  description?: string;
  image?: string;
  subcategories: UniformItems[];
}

export const uniformCategories: UniformCategory[] = [
  {
    id: 1,
    value: "hospital",
    label: "Hospital Uniforms",
    description: "Professional medical uniforms for healthcare staff.",
    image:
      "https://i.pinimg.com/474x/21/8c/f7/218cf7db7936a357c316f65a5a052041.jpg",
    subcategories: [
      {
        id: 2,
        value: "doctor-coat",
        label: "Doctor Coats",
        code: "UNI-HOS-DOC-001",
        count: 25,
        description: "Professional white coats for doctors and physicians",
        popularItems: ["Classic White Coat", "Long Doctor Coat"],
        images: [
          "https://i.pinimg.com/474x/21/8c/f7/218cf7db7936a357c316f65a5a052041.jpg",
          "https://i.pinimg.com/474x/21/8c/f7/218cf7db7936a357c316f65a5a052041.jpg",
          "https://i.pinimg.com/474x/21/8c/f7/218cf7db7936a357c316f65a5a052041.jpg",
        ],
      },
      {
        id: 3,
        value: "nurse-uniform",
        label: "Nurse Uniforms",
        code: "UNI-HOS-NUR-002",
        count: 38,
        description: "Comfortable and practical uniforms for nursing staff",
        popularItems: ["Scrubs Set", "Nurse Dress"],
        images: [
          "https://i.pinimg.com/474x/e2/a2/f6/e2a2f6e04b504106e6692fd16602eba5.jpg",
          "https://i.pinimg.com/474x/e2/a2/f6/e2a2f6e04b504106e6692fd16602eba5.jpg",
        ],
      },
      {
        id: 4,
        value: "surgeon-scrub",
        label: "Surgeon Scrubs",
        code: "UNI-HOS-SUR-003",
        count: 42,
        description: "Sterile surgical scrubs for operating room staff",
        popularItems: ["Surgical Greens", "OR Scrubs"],
        images: [
          "https://i.pinimg.com/474x/d4/73/f8/d473f8321f76c3274569073a1da47df9.jpg",
          "https://i.pinimg.com/474x/d4/73/f8/d473f8321f76c3274569073a1da47df9.jpg",
        ],
      },
      {
        id: 5,
        value: "hospital-staff",
        label: "Hospital Staff Uniforms",
        code: "UNI-HOS-STA-004",
        count: 31,
        description: "Uniforms for administrative and support staff",
        popularItems: ["Staff Polo", "Administrative Uniform"],
        images: [
          "https://i.pinimg.com/474x/0c/50/43/0c50434d415eade1d43e2d8944115511.jpg",
        ],
      },
      {
        id: 6,
        value: "lab-coat",
        label: "Lab Coats",
        code: "UNI-HOS-LAB-005",
        count: 19,
        description: "Protective laboratory coats for medical technicians",
        popularItems: ["Lab Technician Coat"],
        images: [
          "https://i.pinimg.com/474x/4d/e4/bb/4de4bb8104154a8cf650c78a3d665225.jpg",
          "https://i.pinimg.com/474x/4d/e4/bb/4de4bb8104154a8cf650c78a3d665225.jpg",
        ],
      },
    ],
  },
  {
    id: 7,
    value: "school",
    label: "School Uniforms",
    description:
      "Comfortable and durable uniforms for educational institutions.",
    image: "https://drpromosyon.com/assets/img/katalog/uniform/school-main.jpg",
    subcategories: [
      {
        id: 9,
        value: "teacher-uniform",
        label: "Teacher Uniforms",
        code: "UNI-SCH-TEA-002",
        count: 34,
        description: "Professional attire for teaching staff",
        popularItems: ["Teacher Blazer", "Educator Uniform"],
        images: [
          "https://i.pinimg.com/474x/3a/5a/03/3a5a03ebfffe682f9764914380143241.jpg",
        ],
      },
      {
        id: 10,
        value: "sports-uniform",
        label: "Sports Uniforms",
        code: "UNI-SCH-SPO-003",
        count: 45,
        description: "Athletic wear for school sports teams",
        popularItems: ["Basketball Jersey", "Sports Kit"],
        images: [
          "https://i.pinimg.com/474x/22/9c/d9/229cd98fdabc24eeb87a2ab6a1d9c105.jpg",
          "https://i.pinimg.com/474x/22/9c/d9/229cd98fdabc24eeb87a2ab6a1d9c105.jpg",
        ],
      },

      ,
    ],
  },
  {
    id: 13,
    value: "corporate",
    label: "Corporate Uniforms",
    description: "Professional business attire for corporate environments.",
    image:
      "https://drpromosyon.com/assets/img/katalog/uniform/corporate-main.jpg",
    subcategories: [
      {
        id: 14,
        value: "executive-suit",
        label: "Executive Suits",
        code: "UNI-COR-EXE-001",
        count: 52,
        description: "Premium business suits for executives",
        popularItems: ["Executive Blazer", "Business Suit"],
        images: [
          "https://i.pinimg.com/474x/88/ae/fb/88aefb54ee3f3e7191b3df89b5230ad0.jpg",
          "https://i.pinimg.com/474x/88/ae/fb/88aefb54ee3f3e7191b3df89b5230ad0.jpg",
        ],
      },
      {
        id: 15,
        value: "office-uniform",
        label: "Office Uniforms",
        code: "UNI-COR-OFF-002",
        count: 47,
        description: "Professional attire for office staff",
        popularItems: ["Office Shirt", "Corporate Polo"],
        images: [
          "https://i.pinimg.com/474x/6c/21/1c/6c211c54df3e529075fdb25e761dcb33.jpg",
        ],
      },
      {
        id: 16,
        value: "security-uniform",
        label: "Security Uniforms",
        code: "UNI-COR-SEC-003",
        count: 33,
        description: "Professional security personnel uniforms",
        popularItems: ["Security Guard Uniform", "Patrol Uniform"],
        images: [
          "https://i.pinimg.com/474x/87/64/2e/87642e0ef2bc247342c3b9ea9f10c3c4.jpg",
          "https://i.pinimg.com/474x/87/64/2e/87642e0ef2bc247342c3b9ea9f10c3c4.jpg",
        ],
      },
      {
        id: 17,
        value: "cleaner-uniform",
        label: "Cleaner Uniforms",
        code: "UNI-COR-CLN-004",
        count: 26,
        description: "Durable and functional cleaning staff uniforms",
        popularItems: ["Janitor Uniform", "Cleaning Staff Attire"],
        images: [
          "https://i.pinimg.com/474x/c4/6d/ee/c46deeb8408c726da8108d9b5419c30c.jpg",
        ],
      },
    ],
  },
  {
    id: 18,
    value: "industrial",
    label: "Industrial Uniforms",
    description: "Safety-focused workwear for industrial environments.",
    image:
      "https://drpromosyon.com/assets/img/katalog/uniform/industrial-main.jpg",
    subcategories: [
      {
        id: 19,
        value: "safety-overall",
        label: "Safety Overalls",
        code: "UNI-IND-SAF-001",
        count: 41,
        description: "Protective overalls for industrial work",
        popularItems: ["Coverall", "Work Overalls"],
        images: [
          "https://i.pinimg.com/474x/87/00/a8/8700a84f1499e3a6d32f564a538040eb.jpg",
          "https://i.pinimg.com/474x/87/00/a8/8700a84f1499e3a6d32f564a538040eb.jpg",
        ],
      },
      {
        id: 20,
        value: "factory-uniform",
        label: "Factory Uniforms",
        code: "UNI-IND-FAC-002",
        count: 58,
        description: "Durable uniforms for factory workers",
        popularItems: ["Factory Worker Uniform", "Production Line Attire"],
        images: [
          "https://i.pinimg.com/474x/1f/aa/1e/1faa1ebc191f3ef7c75cc0526895918f.jpg",
        ],
      },
      {
        id: 21,
        value: "high-visibility",
        label: "High-Visibility Uniforms",
        code: "UNI-IND-HIV-003",
        count: 29,
        description: "Reflective safety uniforms for low-light conditions",
        popularItems: ["Hi-Vis Vest", "Reflective Jacket"],
        images: [
          "https://i.pinimg.com/474x/2d/ca/e2/2dcae2336d2350b2faaabc37d073fa72.jpg",
          "https://i.pinimg.com/474x/2d/ca/e2/2dcae2336d2350b2faaabc37d073fa72.jpg",
        ],
      },
    ],
  },
  {
    id: 23,
    value: "hospitality",
    label: "Hospitality Uniforms",
    description: "Elegant and functional uniforms for hospitality industry.",
    image:
      "https://drpromosyon.com/assets/img/katalog/uniform/hospitality-main.jpg",
    subcategories: [
      {
        id: 24,
        value: "chef-uniform",
        label: "Chef Uniforms",
        code: "UNI-HOS-CHE-001",
        count: 44,
        description: "Professional kitchen attire for chefs",
        popularItems: ["Chef Jacket", "Kitchen Uniform"],
        images: [
          "https://i.pinimg.com/236x/2b/11/28/2b1128f1f813f101ebfb19edf8bd80b4.jpg",
          "https://i.pinimg.com/236x/2b/11/28/2b1128f1f813f101ebfb19edf8bd80b4.jpg",
        ],
      },
      {
        id: 25,
        value: "waiter-uniform",
        label: "Waiter Uniforms",
        code: "UNI-HOS-WAI-002",
        count: 51,
        description: "Smart uniforms for restaurant service staff",
        popularItems: ["Waiter Vest", "Service Staff Uniform"],
        images: [
          "https://i.pinimg.com/236x/80/0b/95/800b95aa67b856a34b49ce1bc3cf4f19.jpg",
        ],
      },
      {
        id: 26,
        value: "hotel-staff",
        label: "Hotel Staff Uniforms",
        code: "UNI-HOS-HOT-003",
        count: 37,
        description: "Elegant uniforms for hotel personnel",
        popularItems: ["Receptionist Uniform", "Bellboy Attire"],
        images: [
          "https://i.pinimg.com/236x/d4/c1/bc/d4c1bc6967bc4158631de565b151eb10.jpg",
          "https://i.pinimg.com/236x/d4/c1/bc/d4c1bc6967bc4158631de565b151eb10.jpg",
        ],
      },
      {
        id: 27,
        value: "reception-uniform",
        label: "Reception Uniforms",
        code: "UNI-HOS-REC-004",
        count: 32,
        description: "Professional attire for front desk staff",
        popularItems: ["Receptionist Dress", "Front Office Uniform"],
        images: [
          "https://i.pinimg.com/236x/ff/05/c7/ff05c72cc55c492af199a652c1ebe21b.jpg",
        ],
      },
    ],
  },
];

// Filter types
export interface UniformFilterState {
  categories: string[];
  subcategories: string[];
  priceRange: [number, number];
  ratings: number[];
}

export const initialUniformFilterState: UniformFilterState = {
  categories: [],
  subcategories: [],
  priceRange: [0, 1000],
  ratings: [],
};
