import {
  FaPencilAlt,
  FaMugHot,
  FaTshirt,
  FaKey,
  FaBatteryFull,
  FaShoppingBag,
  FaBook,
} from "react-icons/fa";

export interface ProductSubcategory {
  value: string;
  label: string;
  count?: number;
}

export interface ProductCategory {
  value: string;
  label: string;
  icon: string;
  subcategories: ProductSubcategory[];
}

export const productCategories = [
  {
    value: "pens",
    label: "Pens",
    icon: FaPencilAlt,
    subcategories: [
      { value: "ballpoint", label: "Ballpoint Pens", count: 45 },
      { value: "gel", label: "Gel Pens", count: 32 },
      { value: "fountain", label: "Fountain Pens", count: 18 },
      { value: "marker", label: "Marker Pens", count: 27 },
      { value: "highlighters", label: "Highlighters", count: 15 },
      { value: "multi-color", label: "Multi-color Pens", count: 22 },
    ],
  },
  {
    value: "mugs",
    label: "Mugs",
    icon: FaMugHot,
    subcategories: [
      { value: "ceramic", label: "Ceramic Mugs", count: 67 },
      { value: "travel", label: "Travel Mugs", count: 43 },
      { value: "glass", label: "Glass Mugs", count: 28 },
      { value: "bamboo", label: "Bamboo Mugs", count: 19 },
      { value: "personalized", label: "Personalized Mugs", count: 51 },
    ],
  },
  {
    value: "tshirts",
    label: "T-shirts",
    icon: FaTshirt,
    subcategories: [
      { value: "cotton", label: "Cotton T-shirts", count: 89 },
      { value: "polo", label: "Polo T-shirts", count: 34 },
      { value: "v-neck", label: "V-Neck T-shirts", count: 27 },
      { value: "hooded", label: "Hooded T-shirts", count: 42 },
      { value: "sports", label: "Sports T-shirts", count: 38 },
    ],
  },
  {
    value: "keychains",
    label: "Keychains",
    icon: FaKey,
    subcategories: [
      { value: "metal", label: "Metal Keychains", count: 56 },
      { value: "leather", label: "Leather Keychains", count: 23 },
      { value: "acrylic", label: "Acrylic Keychains", count: 41 },
      { value: "wooden", label: "Wooden Keychains", count: 18 },
      { value: "custom-shaped", label: "Custom Shaped", count: 32 },
    ],
  },
  {
    value: "powerbanks",
    label: "Powerbanks",
    icon: FaBatteryFull,
    subcategories: [
      { value: "10000mah", label: "10000mAh", count: 25 },
      { value: "20000mah", label: "20000mAh", count: 19 },
      { value: "solar", label: "Solar Powerbanks", count: 12 },
      { value: "wireless", label: "Wireless Charging", count: 28 },
      { value: "fast-charge", label: "Fast Charge", count: 35 },
    ],
  },
  {
    value: "bags",
    label: "Bags",
    icon: FaShoppingBag,
    subcategories: [
      { value: "tote", label: "Tote Bags", count: 47 },
      { value: "backpack", label: "Backpacks", count: 52 },
      { value: "laptop", label: "Laptop Bags", count: 38 },
      { value: "duffle", label: "Duffle Bags", count: 24 },
      { value: "eco-friendly", label: "Eco-friendly Bags", count: 31 },
    ],
  },
  {
    value: "notebooks",
    label: "Notebooks",
    icon: FaBook,
    subcategories: [
      { value: "spiral", label: "Spiral Notebooks", count: 29 },
      { value: "hardcover", label: "Hardcover Notebooks", count: 36 },
      { value: "pocket", label: "Pocket Notebooks", count: 22 },
      { value: "bullet-journal", label: "Bullet Journals", count: 41 },
      { value: "custom-printed", label: "Custom Printed", count: 27 },
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
