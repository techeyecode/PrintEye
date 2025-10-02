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

export interface SignCategory {
  id: number;
  value: string;
  label: string;
  description?: string;
  image?: string;
  subcategories: UniformItems[];
}

// Sign Categories Data
export const signCategories: SignCategory[] = [
  {
    id: 1,
    value: "harf-barz",
    label: "Harf Barz Signs",
    description: "3D letter signs for indoor and outdoor branding",
    image:
      "https://i.pinimg.com/236x/d3/11/a8/d311a81afdb9c7e32e35b0e91246add1.jpg",
    subcategories: [
      {
        id: 2,
        value: "metal-harfbarz",
        label: "Metal Harf Barz",
        code: "SIGN-HB-MET-001",
        count: 15,
        description: "Durable metal 3D letter signs for outdoor use",
        popularItems: ["Stainless Steel Letters", "Aluminum Characters"],
        images: [
          "https://i.pinimg.com/236x/d3/11/a8/d311a81afdb9c7e32e35b0e91246add1.jpg",
          "https://i.pinimg.com/236x/d3/11/a8/d311a81afdb9c7e32e35b0e91246add1.jpg",
        ],
      },
      {
        id: 3,
        value: "acrylic-harfbarz",
        label: "Acrylic Harf Barz",
        code: "SIGN-HB-ACR-002",
        count: 22,
        description: "Elegant acrylic letter signs with LED illumination",
        popularItems: ["LED Acrylic Letters", "Backlit Characters"],
        images: [
          "https://i.pinimg.com/236x/64/6e/d3/646ed35dd6fc0aec4d0a9ddf2f588282.jpg",
          "https://i.pinimg.com/236x/64/6e/d3/646ed35dd6fc0aec4d0a9ddf2f588282.jpg",
        ],
      },
      {
        id: 4,
        value: "led-harfbarz",
        label: "LED Harf Barz",
        code: "SIGN-HB-LED-003",
        count: 18,
        description: "Energy-efficient LED illuminated letter signs",
        popularItems: ["RGB LED Letters", "Neon-effect Characters"],
        images: [
          "https://i.pinimg.com/236x/d3/11/a8/d311a81afdb9c7e32e35b0e91246add1.jpg",
          "https://i.pinimg.com/236x/d3/11/a8/d311a81afdb9c7e32e35b0e91246add1.jpg",
        ],
      },
      {
        id: 5,
        value: "outdoor-harfbarz",
        label: "Outdoor Harf Barz",
        code: "SIGN-HB-OUT-004",
        count: 12,
        description: "Weather-resistant outdoor 3D letter signs",
        popularItems: ["Weatherproof Letters", "External Wall Signs"],
        images: [
          "https://i.pinimg.com/236x/23/b7/bd/23b7bd5a8787b64c2eb72fe5512e0126.jpg",
        ],
      },
    ],
  },
];

// Filter types
export interface SignFilterState {
  categories: string[];
  subcategories: string[];
  priceRange: [number, number];
  ratings: number[];
}

export const initialSignFilterState: SignFilterState = {
  categories: [],
  subcategories: [],
  priceRange: [0, 1000],
  ratings: [],
};
