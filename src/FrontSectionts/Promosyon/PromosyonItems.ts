import {
  FaPencilAlt,
  FaMugHot,
  FaTshirt,
  FaBatteryFull,
  FaShoppingBag,
  FaBook,
} from "react-icons/fa";

export interface PromosyonItems {
  id: number;
  value: string;
  label: string;
  code: string;
  count?: number;
  description?: string;
  images?: string[];
  popularItems?: string[];
}

// Category interface
export interface ProductCategory {
  id: number;
  value: string;
  label: string;
  icon: any;
  description?: string;
  image?: string;
  subcategories: PromosyonItems[];
}

// Data
export const productCategories: ProductCategory[] = [
  {
    id: 1,
    value: "pens",
    label: "Pens",
    icon: FaPencilAlt,
    description: "High-quality pens for everyday use or gifting.",
    image: "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-G.jpg",
    subcategories: [
      {
        id: 2,
        value: "ballpoint",
        label: "Ballpoint Pens",
        code: "PEN-BALL-001",
        count: 45,
        description: "Smooth-writing ballpoint pens",
        popularItems: ["Classic Ballpoint", "Executive Pen"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-K.jpg",
          "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-S.jpg",
          "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-L.jpg",
          "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-B.jpg",
          "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-TRK.jpg",
          "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-T.jpg",
        ],
      },
      {
        id: 3,
        value: "gel",
        label: "Gel Pens",
        code: "PEN-GEL-002",
        count: 32,
        description: "Bright ink gel pens for writing and drawing",
        popularItems: ["Gel Master", "Color Gel"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-K.jpg",
          "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-K.jpg",
        ],
      },
      {
        id: 4,
        value: "marker",
        label: "Marker Pens",
        code: "PEN-MARK-003",
        count: 27,
        description: "Permanent and dry-erase markers",
        popularItems: ["Sharpie Marker", "Whiteboard Marker"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-T.jpg",
        ],
      },
      {
        id: 5,
        value: "highlighters",
        label: "Highlighters",
        code: "PEN-HIGH-004",
        count: 15,
        description: "Vivid highlighters for study and work",
        popularItems: ["Neon Highlighter"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-B.jpg",
        ],
      },
      {
        id: 6,
        value: "multi-color",
        label: "Multi-color Pens",
        code: "PEN-MULTI-005",
        count: 22,
        description: "Pens with multiple ink colors",
        popularItems: ["Rainbow Pen"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-B.jpg",
        ],
      },
    ],
  },
  {
    id: 7,
    value: "mugs",
    label: "Mugs",
    icon: FaMugHot,
    description: "Mugs for home, office, or personalized gifts.",
    image:
      "https://drpromosyon.com/assets/img/katalog/kategoriler/set03532-2026.jpg",
    subcategories: [
      {
        id: 8,
        value: "ceramic",
        label: "Ceramic Mugs",
        code: "MUG-CER-001",
        count: 67,
        description: "Classic ceramic mugs for everyday use",
        popularItems: ["White Ceramic Mug"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/kategoriler/set03532-2026.jpg",
          "https://drpromosyon.com/assets/img/katalog/kategoriler/set03532-2026.jpg",
        ],
      },
      {
        id: 9,
        value: "travel",
        label: "Travel Mugs",
        code: "MUG-TRV-002",
        count: 43,
        description: "Keep drinks hot or cold while on the move",
        popularItems: ["Thermo Travel Mug"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/kategoriler/set03532-2026.jpg",
        ],
      },
      {
        id: 10,
        value: "bamboo",
        label: "Bamboo Mugs",
        code: "MUG-BAM-003",
        count: 19,
        description: "Eco-friendly bamboo mugs",
        popularItems: ["Bamboo Eco Mug"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/kategoriler/set03532-2026.jpg",
        ],
      },
      {
        id: 11,
        value: "personalized",
        label: "Personalized Mugs",
        code: "MUG-PER-004",
        count: 51,
        description: "Customizable mugs with names or designs",
        popularItems: ["Custom Name Mug"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/kategoriler/set03532-2026.jpg",
        ],
      },
    ],
  },
  {
    id: 12,
    value: "tshirts",
    label: "T-shirts",
    icon: FaTshirt,
    description: "Comfortable and stylish t-shirts for all occasions.",
    image: "https://drpromosyon.com/assets/img/katalog/kodgrup/PWB-1070.jpg",
    subcategories: [
      {
        id: 13,
        value: "cotton",
        label: "Cotton T-shirts",
        code: "TSH-CTN-001",
        count: 89,
        description: "Soft cotton t-shirts for daily wear",
        popularItems: ["Classic Cotton Tee"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/kodgrup/PWB-1070.jpg",
        ],
      },
      {
        id: 14,
        value: "polo",
        label: "Polo T-shirts",
        code: "TSH-POL-002",
        count: 34,
        description: "Smart casual polo shirts",
        popularItems: ["Polo Classic"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/kodgrup/PWB-1070.jpg",
        ],
      },
      {
        id: 15,
        value: "v-neck",
        label: "V-Neck T-shirts",
        code: "TSH-VNK-003",
        count: 27,
        description: "Trendy v-neck t-shirts",
        popularItems: ["Modern V-Neck"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/kodgrup/PWB-1070.jpg",
        ],
      },
      {
        id: 16,
        value: "hooded",
        label: "Hooded T-shirts",
        code: "TSH-HOD-004",
        count: 42,
        description: "Hooded t-shirts for casual style",
        popularItems: ["Urban Hoodie Tee"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/kodgrup/PWB-1070.jpg",
        ],
      },
      {
        id: 17,
        value: "sports",
        label: "Sports T-shirts",
        code: "TSH-SPT-005",
        count: 38,
        description: "Breathable t-shirts for sports",
        popularItems: ["Running Tee"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/kodgrup/PWB-1070.jpg",
        ],
      },
    ],
  },
  {
    id: 18,
    value: "powerbanks",
    label: "Powerbanks",
    icon: FaBatteryFull,
    description: "Portable chargers to keep your devices powered.",
    image: "https://drpromosyon.com/assets/img/katalog/kodgrup/PWB-10.jpg",
    subcategories: [
      {
        id: 19,
        value: "solar",
        label: "Solar Powerbanks",
        code: "PWR-SOL-001",
        count: 12,
        description: "Eco-friendly solar-powered chargers",
        popularItems: ["Solar Max"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/kodgrup/PWB-10.jpg",
        ],
      },
    ],
  },
  {
    id: 20,
    value: "bags",
    label: "Bags",
    icon: FaShoppingBag,
    description: "Stylish and functional bags for everyday use.",
    image: "https://drpromosyon.com/assets/img/katalog/urunler/SPK.jpg",
    subcategories: [
      {
        id: 21,
        value: "tote",
        label: "Tote Bags",
        code: "BAG-TOT-001",
        count: 47,
        description: "Spacious tote bags",
        popularItems: ["Eco Tote"],
        images: ["https://drpromosyon.com/assets/img/katalog/urunler/SPK.jpg"],
      },
      {
        id: 22,
        value: "backpack",
        label: "Backpacks",
        code: "BAG-BKP-002",
        count: 52,
        description: "Durable backpacks",
        popularItems: ["Urban Backpack"],
        images: ["https://drpromosyon.com/assets/img/katalog/urunler/SPK.jpg"],
      },
      {
        id: 23,
        value: "laptop",
        label: "Laptop Bags",
        code: "BAG-LAP-003",
        count: 38,
        description: "Protective laptop bags",
        popularItems: ["Office Laptop Bag"],
        images: ["https://drpromosyon.com/assets/img/katalog/urunler/SPK.jpg"],
      },
      {
        id: 24,
        value: "duffle",
        label: "Duffle Bags",
        code: "BAG-DUF-004",
        count: 24,
        description: "Travel duffle bags",
        popularItems: ["Travel Duffel"],
        images: ["https://drpromosyon.com/assets/img/katalog/urunler/SPK.jpg"],
      },
      {
        id: 25,
        value: "eco-friendly",
        label: "Eco-friendly Bags",
        code: "BAG-ECO-005",
        count: 31,
        description: "Sustainable bags made from recycled materials",
        popularItems: ["Green Bag"],
        images: ["https://drpromosyon.com/assets/img/katalog/urunler/SPK.jpg"],
      },
    ],
  },
  {
    id: 26,
    value: "notebooks",
    label: "Notebooks",
    icon: FaBook,
    description: "Notebooks for study, work, and journaling.",
    image: "https://drpromosyon.com/assets/img/katalog/urunler/RSA-471-B.jpg",
    subcategories: [
      {
        id: 27,
        value: "spiral",
        label: "Spiral Notebooks",
        code: "NTB-SPL-001",
        count: 29,
        description: "Easy-to-use spiral notebooks",
        popularItems: ["Spiral Classic"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/urunler/RSA-471-B.jpg",
        ],
      },
      {
        id: 28,
        value: "hardcover",
        label: "Hardcover Notebooks",
        code: "NTB-HRD-002",
        count: 36,
        description: "Durable hardcover notebooks",
        popularItems: ["Executive Hardcover"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/urunler/RSA-471-B.jpg",
        ],
      },
      {
        id: 29,
        value: "pocket",
        label: "Pocket Notebooks",
        code: "NTB-PCK-003",
        count: 22,
        description: "Compact notebooks for portability",
        popularItems: ["Pocket Memo"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/urunler/RSA-471-B.jpg",
        ],
      },
      {
        id: 30,
        value: "bullet-journal",
        label: "Bullet Journals",
        code: "NTB-BLT-004",
        count: 41,
        description: "Organize your tasks creatively",
        popularItems: ["Dot Grid Journal"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/urunler/RSA-471-B.jpg",
        ],
      },
      {
        id: 31,
        value: "custom-printed",
        label: "Custom Printed",
        code: "NTB-CUS-005",
        count: 27,
        description: "Personalized printed notebooks",
        popularItems: ["Logo Notebook"],
        images: [
          "https://drpromosyon.com/assets/img/katalog/urunler/RSA-471-B.jpg",
        ],
      },
    ],
  },
];

// Filter types
export interface FilterState {
  categories: string[];
  subcategories: string[];
  priceRange: [number, number];
  ratings: number[];
}

export const initialFilterState: FilterState = {
  categories: [],
  subcategories: [],
  priceRange: [0, 1000],
  ratings: [],
};
