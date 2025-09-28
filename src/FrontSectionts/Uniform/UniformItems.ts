import {
  FaUserTie,
  FaHardHat,
  FaStethoscope,
  FaUtensils,
  FaGraduationCap,
  FaTshirt,
  FaMugHot,
} from "react-icons/fa";

// Each specific uniform item
export interface UniformItems {
  id: number;
  value: string;
  title: string;
  code: string;
  description?: string;
  images?: string[];
  popularItems?: string[];
}

// Main category (e.g. Industry, School)
export interface IndustryCategory {
  id: number;
  value: string;
  title: string;
  icon: any;
  description?: string;
  image?: string;
  subcategories: UniformItems[];
}

/* -----------------------------
   Industry Categories
--------------------------------*/
export const industryCategories: IndustryCategory[] = [
  {
    id: 1,
    value: "corporate",
    title: "Corporate",
    icon: FaUserTie,
    description: "Professional office uniforms for corporate employees.",
    image:
      "https://cdn.sellerscommerce.com/images/2746/exp-ind-medical-img093043.jpg",
    subcategories: [
      {
        id: 2,
        value: "business-suits",
        title: "Business Suits",
        code: "UNI-COR-001",
        description: "Formal suits for office professionals",
        popularItems: ["Classic Suit", "Slim Fit Suit"],
        images: [
          "https://cdn.sellerscommerce.com/images/2746/exp-ind-medical-img093043.jpg",
        ],
      },
      {
        id: 3,
        value: "shirts-and-ties",
        title: "Shirts & Ties",
        code: "UNI-COR-002",
        description: "Stylish shirts with matching ties",
        popularItems: ["White Shirt", "Striped Tie"],
        images: [
          "https://cdn.sellerscommerce.com/images/2746/exp-ind-medical-img093043.jpg",
        ],
      },
      {
        id: 200,
        value: "business-suits",
        title: "Business Suits",
        code: "UNI-COR-001",
        description: "Formal suits for office professionals",
        popularItems: ["Classic Suit", "Slim Fit Suit"],
        images: [
          "https://cdn.sellerscommerce.com/images/2746/exp-ind-medical-img093043.jpg",
        ],
      },
      {
        id: 201,
        value: "shirts-and-ties",
        title: "Shirts & Ties",
        code: "UNI-COR-002",
        description: "Stylish shirts with matching ties",
        popularItems: ["White Shirt", "Striped Tie"],
        images: [
          "https://cdn.sellerscommerce.com/images/2746/exp-ind-medical-img093043.jpg",
        ],
      },
    ],
  },
  {
    id: 4,
    value: "hospitality",
    title: "Hospitality",
    icon: FaUtensils,
    description: "Uniforms for hotels, restaurants, and catering services.",
    image:
      "https://cdn.sellerscommerce.com/images/2746/exp-ind-industrial-img093131.jpg",
    subcategories: [
      {
        id: 5,
        value: "chef-coats",
        title: "Chef Coats",
        code: "UNI-HOS-001",
        description: "Professional chef jackets and aprons",
        popularItems: ["White Chef Coat", "Black Apron"],
        images: [
          "https://cdn.sellerscommerce.com/images/2746/exp-ind-industrial-img093131.jpg",
        ],
      },
      {
        id: 6,
        value: "waitstaff",
        title: "Waitstaff Uniforms",
        code: "UNI-HOS-002",
        description: "Smart uniforms for servers and bartenders",
        popularItems: ["Classic Vest", "Formal Apron"],
        images: [
          "https://cdn.sellerscommerce.com/images/2746/exp-ind-industrial-img093131.jpg",
        ],
      },
    ],
  },
  {
    id: 7,
    value: "healthcare",
    title: "Healthcare",
    icon: FaStethoscope,
    description: "Scrubs and professional uniforms for healthcare staff.",
    image:
      "https://cdn.sellerscommerce.com/images/2746/exp-ind-school-img093205.jpg",
    subcategories: [
      {
        id: 8,
        value: "scrubs",
        title: "Scrubs",
        code: "UNI-HEA-001",
        description: "Comfortable scrubs for nurses and doctors",
        popularItems: ["Blue Scrub Set", "Green Scrub Set"],
        images: ["https://example.com/images/scrubs.jpg"],
      },
      {
        id: 9,
        value: "lab-coats",
        title: "Lab Coats",
        code: "UNI-HEA-002",
        description: "Protective lab coats for medical staff",
        popularItems: ["White Lab Coat"],
        images: ["https://example.com/images/lab-coat.jpg"],
      },
    ],
  },
  {
    id: 10,
    value: "construction",
    title: "Construction",
    icon: FaHardHat,
    description: "Durable uniforms and safety gear for construction workers.",
    image:
      "https://cdn.sellerscommerce.com/images/2746/exp-ind-corporate-img093100.jpg",
    subcategories: [
      {
        id: 11,
        value: "safety-vests",
        title: "Safety Vests",
        code: "UNI-CON-001",
        description: "High-visibility vests for safety on site",
        popularItems: ["Reflective Vest"],
        images: ["https://example.com/images/safety-vest.jpg"],
      },
      {
        id: 12,
        value: "hard-hats",
        title: "Hard Hats",
        code: "UNI-CON-002",
        description: "Protective helmets for construction work",
        popularItems: ["Yellow Hard Hat", "White Hard Hat"],
        images: ["https://example.com/images/hard-hat.jpg"],
      },
    ],
  },
];

/* -----------------------------
   School Uniforms
--------------------------------*/
export const schoolUniforms: IndustryCategory[] = [
  {
    id: 13,
    value: "school",
    title: "Buckle Skort",
    icon: FaGraduationCap,
    description: "Classic and modern school uniforms for students & staff.",
    image: "https://cdn.sellerscommerce.com/images/2746/580-khaki.jpg",
    subcategories: [
      {
        id: 14,
        value: "student-uniforms",
        title: "Student Uniforms",
        code: "UNI-SCH-001",
        description: "Traditional uniforms for boys and girls",
        popularItems: ["Boys Blazer Set", "Girls Skirt & Blouse"],
        images: ["https://cdn.sellerscommerce.com/images/2746/580-khaki.jpg"],
      },
      {
        id: 15,
        value: "staff-uniforms",
        title: "Staff Uniforms",
        code: "UNI-SCH-002",
        description: "Professional attire for teachers and staff",
        popularItems: ["Teacher Blazer", "Staff Polo"],
        images: ["https://cdn.sellerscommerce.com/images/2746/580-khaki.jpg"],
      },
    ],
  },
  {
    id: 16,
    value: "school",
    title: "School Uniforms",
    icon: FaGraduationCap,
    description: "Classic and modern school uniforms for students & staff.",
    image: "https://cdn.sellerscommerce.com/images/2746/651-model.jpg",
    subcategories: [
      {
        id: 17,
        value: "student-uniforms",
        title: "Student Uniforms",
        code: "UNI-SCH-001",
        description: "Traditional uniforms for boys and girls",
        popularItems: ["Boys Blazer Set", "Girls Skirt & Blouse"],
        images: ["https://cdn.sellerscommerce.com/images/2746/651-model.jpg"],
      },
      {
        id: 18,
        value: "staff-uniforms",
        title: "Staff Uniforms",
        code: "UNI-SCH-002",
        description: "Professional attire for teachers and staff",
        popularItems: ["Teacher Blazer", "Staff Polo"],
        images: ["https://cdn.sellerscommerce.com/images/2746/651-model.jpg"],
      },
    ],
  },
  {
    id: 19,
    value: "school",
    title: "School Uniforms",
    icon: FaGraduationCap,
    description: "Classic and modern school uniforms for students & staff.",
    image:
      "https://cdn.sellerscommerce.com/images/2746/au700-burgundy220947.jpg",
    subcategories: [
      {
        id: 20,
        value: "student-uniforms",
        title: "Student Uniforms",
        code: "UNI-SCH-001",
        description: "Traditional uniforms for boys and girls",
        popularItems: ["Boys Blazer Set", "Girls Skirt & Blouse"],
        images: [
          "https://cdn.sellerscommerce.com/images/2746/au700-burgundy220947.jpg",
        ],
      },
      {
        id: 21,
        value: "staff-uniforms",
        title: "Staff Uniforms",
        code: "UNI-SCH-002",
        description: "Professional attire for teachers and staff",
        popularItems: ["Teacher Blazer", "Staff Polo"],
        images: [
          "https://cdn.sellerscommerce.com/images/2746/au700-burgundy220947.jpg",
        ],
      },
    ],
  },
  {
    id: 22,
    value: "school",
    title: "School Uniforms",
    icon: FaGraduationCap,
    description: "Classic and modern school uniforms for students & staff.",
    image: "https://cdn.sellerscommerce.com/images/2746/643-khaki200510.jpg",
    subcategories: [
      {
        id: 23,
        value: "student-uniforms",
        title: "Student Uniforms",
        code: "UNI-SCH-001",
        description: "Traditional uniforms for boys and girls",
        popularItems: ["Boys Blazer Set", "Girls Skirt & Blouse"],
        images: [
          "https://cdn.sellerscommerce.com/images/2746/643-khaki200510.jpg",
        ],
      },
      {
        id: 24,
        value: "staff-uniforms",
        title: "Staff Uniforms",
        code: "UNI-SCH-002",
        description: "Professional attire for teachers and staff",
        popularItems: ["Teacher Blazer", "Staff Polo"],
        images: [
          "https://cdn.sellerscommerce.com/images/2746/643-khaki200510.jpg",
        ],
      },
    ],
  },
];

/* -----------------------------
   Sport Uniforms
--------------------------------*/
export const SportsUniforms: IndustryCategory[] = [
  {
    id: 25,
    value: "sports",
    title: "Sports",
    icon: FaTshirt,
    description: "Team uniforms and athletic wear for various sports.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1567305763776-VRV3EJCZBPYL1M4ESGW2/2DC_9316_en.jpg?format=750w",
    subcategories: [
      {
        id: 26,
        value: "team-jerseys",
        title: "Team Jerseys",
        code: "UNI-SPT-001",
        description: "Custom jerseys for sports teams",
        popularItems: ["Basketball Jersey", "Soccer Jersey", "Football Jersey"],
        images: [
          "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1567305763776-VRV3EJCZBPYL1M4ESGW2/2DC_9316_en.jpg?format=750w",
        ],
      },
      {
        id: 27,
        value: "athletic-wear",
        title: "Athletic Wear",
        code: "UNI-SPT-002",
        description: "Performance clothing for athletes",
        popularItems: ["Training Shorts", "Compression Shirts", "Track Pants"],
        images: [
          "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1567305763776-VRV3EJCZBPYL1M4ESGW2/2DC_9316_en.jpg?format=750w",
        ],
      },
      {
        id: 28,
        value: "sports-accessories",
        title: "Sports Accessories",
        code: "UNI-SPT-003",
        description: "Accessories for sports and training",
        popularItems: ["Headbands", "Wristbands", "Sports Socks"],
        images: ["https://example.com/images/sports-accessories.jpg"],
      },
    ],
  },
  {
    id: 29,
    value: "culinary",
    title: "Culinary",
    icon: FaMugHot,
    description:
      "Specialized uniforms for culinary professionals and baristas.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1538467955316-J8QKBW41Z5SRRLHMDGX8/2DC_0268_web.jpg?format=750w",
    subcategories: [
      {
        id: 30,
        value: "barista-aprons",
        title: "Barista Aprons",
        code: "UNI-CUL-001",
        description: "Stylish aprons for coffee shop professionals",
        popularItems: ["Canvas Apron", "Denim Apron", "Leather Apron"],
        images: ["https://example.com/images/barista-apron.jpg"],
      },
      {
        id: 31,
        value: "kitchen-staff",
        title: "Kitchen Staff",
        code: "UNI-CUL-002",
        description: "Uniforms for kitchen and prep staff",
        popularItems: ["Kitchen Jacket", "Checkered Pants", "Skull Cap"],
        images: ["https://example.com/images/kitchen-staff-uniform.jpg"],
      },
      {
        id: 32,
        value: "bakery-uniforms",
        title: "Bakery Uniforms",
        code: "UNI-CUL-003",
        description: "Specialized wear for bakery professionals",
        popularItems: ["Baker's Coat", "Pastry Chef Uniform", "Bakery Hat"],
        images: ["https://example.com/images/bakery-uniform.jpg"],
      },
    ],
  },
  {
    id: 33,
    value: "sports",
    title: "Sports",
    icon: FaTshirt,
    description: "Team uniforms and athletic wear for various sports.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1567306921184-S8MM3VF6LN1KU16SML5F/2DC_9321_en.jpg?format=750w",
    subcategories: [
      {
        id: 34,
        value: "team-jerseys",
        title: "Team Jerseys",
        code: "UNI-SPT-001",
        description: "Custom jerseys for sports teams",
        popularItems: ["Basketball Jersey", "Soccer Jersey", "Football Jersey"],
        images: [
          "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1567305763776-VRV3EJCZBPYL1M4ESGW2/2DC_9316_en.jpg?format=750w",
        ],
      },
      {
        id: 35,
        value: "athletic-wear",
        title: "Athletic Wear",
        code: "UNI-SPT-002",
        description: "Performance clothing for athletes",
        popularItems: ["Training Shorts", "Compression Shirts", "Track Pants"],
        images: [
          "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1567305763776-VRV3EJCZBPYL1M4ESGW2/2DC_9316_en.jpg?format=750w",
        ],
      },
      {
        id: 36,
        value: "sports-accessories",
        title: "Sports Accessories",
        code: "UNI-SPT-003",
        description: "Accessories for sports and training",
        popularItems: ["Headbands", "Wristbands", "Sports Socks"],
        images: [
          "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1567305763776-VRV3EJCZBPYL1M4ESGW2/2DC_9316_en.jpg?format=750w",
        ],
      },
    ],
  },
  {
    id: 37,
    value: "culinary",
    title: "Culinary",
    icon: FaMugHot,
    description:
      "Specialized uniforms for culinary professionals and baristas.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1567305990309-1YFSVSP2T238IX265AB4/2DC_0229_en.jpg?format=750w",
    subcategories: [
      {
        id: 38,
        value: "barista-aprons",
        title: "Barista Aprons",
        code: "UNI-CUL-001",
        description: "Stylish aprons for coffee shop professionals",
        popularItems: ["Canvas Apron", "Denim Apron", "Leather Apron"],
        images: ["https://example.com/images/barista-apron.jpg"],
      },
      {
        id: 39,
        value: "kitchen-staff",
        title: "Kitchen Staff",
        code: "UNI-CUL-002",
        description: "Uniforms for kitchen and prep staff",
        popularItems: ["Kitchen Jacket", "Checkered Pants", "Skull Cap"],
        images: ["https://example.com/images/kitchen-staff-uniform.jpg"],
      },
      {
        id: 40,
        value: "bakery-uniforms",
        title: "Bakery Uniforms",
        code: "UNI-CUL-003",
        description: "Specialized wear for bakery professionals",
        popularItems: ["Baker's Coat", "Pastry Chef Uniform", "Bakery Hat"],
        images: ["https://example.com/images/bakery-uniform.jpg"],
      },
    ],
  },
];

/* -----------------------------
   Cups Uniforms
--------------------------------*/
export const CupsUniforms: IndustryCategory[] = [
  {
    id: 41,
    value: "sports",
    title: "Sports",
    icon: FaTshirt,
    description: "Team uniforms and athletic wear for various sports.",
    image: "https://drpromosyon.com/assets/img/katalog/urunler/SPK.jpg",
    subcategories: [
      {
        id: 42,
        value: "team-jerseys",
        title: "Team Jerseys",
        code: "UNI-SPT-001",
        description: "Custom jerseys for sports teams",
        popularItems: ["Basketball Jersey", "Soccer Jersey", "Football Jersey"],
        images: [
          "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1567305763776-VRV3EJCZBPYL1M4ESGW2/2DC_9316_en.jpg?format=750w",
        ],
      },
      {
        id: 43,
        value: "athletic-wear",
        title: "Athletic Wear",
        code: "UNI-SPT-002",
        description: "Performance clothing for athletes",
        popularItems: ["Training Shorts", "Compression Shirts", "Track Pants"],
        images: [
          "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1567305763776-VRV3EJCZBPYL1M4ESGW2/2DC_9316_en.jpg?format=750w",
        ],
      },
      {
        id: 44,
        value: "sports-accessories",
        title: "Sports Accessories",
        code: "UNI-SPT-003",
        description: "Accessories for sports and training",
        popularItems: ["Headbands", "Wristbands", "Sports Socks"],
        images: ["https://example.com/images/sports-accessories.jpg"],
      },
    ],
  },
  {
    id: 45,
    value: "culinary",
    title: "Culinary",
    icon: FaMugHot,
    description:
      "Specialized uniforms for culinary professionals and baristas.",
    image: "https://drpromosyon.com/assets/img/katalog/urunler/SPK.jpg",
    subcategories: [
      {
        id: 46,
        value: "barista-aprons",
        title: "Barista Aprons",
        code: "UNI-CUL-001",
        description: "Stylish aprons for coffee shop professionals",
        popularItems: ["Canvas Apron", "Denim Apron", "Leather Apron"],
        images: ["https://example.com/images/barista-apron.jpg"],
      },
      {
        id: 47,
        value: "kitchen-staff",
        title: "Kitchen Staff",
        code: "UNI-CUL-002",
        description: "Uniforms for kitchen and prep staff",
        popularItems: ["Kitchen Jacket", "Checkered Pants", "Skull Cap"],
        images: ["https://example.com/images/kitchen-staff-uniform.jpg"],
      },
      {
        id: 48,
        value: "bakery-uniforms",
        title: "Bakery Uniforms",
        code: "UNI-CUL-003",
        description: "Specialized wear for bakery professionals",
        popularItems: ["Baker's Coat", "Pastry Chef Uniform", "Bakery Hat"],
        images: ["https://example.com/images/bakery-uniform.jpg"],
      },
    ],
  },
  {
    id: 49,
    value: "sports",
    title: "Sports",
    icon: FaTshirt,
    description: "Team uniforms and athletic wear for various sports.",
    image: "https://drpromosyon.com/assets/img/katalog/urunler/SPK.jpg",
    subcategories: [
      {
        id: 50,
        value: "team-jerseys",
        title: "Team Jerseys",
        code: "UNI-SPT-001",
        description: "Custom jerseys for sports teams",
        popularItems: ["Basketball Jersey", "Soccer Jersey", "Football Jersey"],
        images: [
          "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1567305763776-VRV3EJCZBPYL1M4ESGW2/2DC_9316_en.jpg?format=750w",
        ],
      },
      {
        id: 51,
        value: "athletic-wear",
        title: "Athletic Wear",
        code: "UNI-SPT-002",
        description: "Performance clothing for athletes",
        popularItems: ["Training Shorts", "Compression Shirts", "Track Pants"],
        images: [
          "https://images.squarespace-cdn.com/content/v1/5b24a12a1aef1d89f00b37b2/1567305763776-VRV3EJCZBPYL1M4ESGW2/2DC_9316_en.jpg?format=750w",
        ],
      },
      {
        id: 52,
        value: "sports-accessories",
        title: "Sports Accessories",
        code: "UNI-SPT-003",
        description: "Accessories for sports and training",
        popularItems: ["Headbands", "Wristbands", "Sports Socks"],
        images: ["https://example.com/images/sports-accessories.jpg"],
      },
    ],
  },
  {
    id: 53,
    value: "culinary",
    title: "Culinary",
    icon: FaMugHot,
    description:
      "Specialized uniforms for culinary professionals and baristas.",
    image: "https://drpromosyon.com/assets/img/katalog/urunler/SPK.jpg",
    subcategories: [
      {
        id: 54,
        value: "barista-aprons",
        title: "Barista Aprons",
        code: "UNI-CUL-001",
        description: "Stylish aprons for coffee shop professionals",
        popularItems: ["Canvas Apron", "Denim Apron", "Leather Apron"],
        images: ["https://example.com/images/barista-apron.jpg"],
      },
      {
        id: 55,
        value: "kitchen-staff",
        title: "Kitchen Staff",
        code: "UNI-CUL-002",
        description: "Uniforms for kitchen and prep staff",
        popularItems: ["Kitchen Jacket", "Checkered Pants", "Skull Cap"],
        images: ["https://example.com/images/kitchen-staff-uniform.jpg"],
      },
      {
        id: 56,
        value: "bakery-uniforms",
        title: "Bakery Uniforms",
        code: "UNI-CUL-003",
        description: "Specialized wear for bakery professionals",
        popularItems: ["Baker's Coat", "Pastry Chef Uniform", "Bakery Hat"],
        images: ["https://example.com/images/bakery-uniform.jpg"],
      },
    ],
  },
];

/* -----------------------------
   Filters
--------------------------------*/
export interface FilterState {
  industries: string[];
  uniformTypes: string[];
  priceRange: [number, number];
  ratings: number[];
}

export const initialFilterState: FilterState = {
  industries: [],
  uniformTypes: [],
  priceRange: [0, 1000],
  ratings: [],
};
