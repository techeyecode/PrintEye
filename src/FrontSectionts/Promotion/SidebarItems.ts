// SidebarItems.ts
import {
  FaPencilAlt,
  FaMugHot,
  FaTshirt,
  FaKey,
  FaBatteryFull,
  FaShoppingBag,
  FaBook,
  FaIdCard,
  FaFileAlt,
  FaFolder,
  FaEnvelope,
  FaStickyNote,
  FaReceipt,
  FaCalendarAlt,
  FaPaperPlane,
  FaCar,
  FaTags,
} from "react-icons/fa";

export interface Subcategory {
  value: string;
  label: string;
  count?: number;
}

export interface CardItem {
  value: string;
  label: string;
  icon: React.ElementType;
  link?: string;
  subcategories?: Subcategory[];
}

// Printing Categories
export const printingCategories: CardItem[] = [
  {
    value: "business-cards",
    label: "Business Cards",
    icon: FaIdCard,
    subcategories: [
      { value: "standard", label: "Standard", count: 34 },
      { value: "premium", label: "Premium", count: 28 },
      { value: "foil-printed", label: "Foil Printed", count: 15 },
      { value: "raised-ink", label: "Raised Ink", count: 12 },
      { value: "die-cut", label: "Die Cut", count: 18 },
    ],
  },
  {
    value: "brochures",
    label: "Brochures",
    icon: FaFileAlt,
    subcategories: [
      { value: "bi-fold", label: "Bi-Fold", count: 23 },
      { value: "tri-fold", label: "Tri-Fold", count: 31 },
      { value: "gate-fold", label: "Gate Fold", count: 14 },
      { value: "z-fold", label: "Z-Fold", count: 19 },
    ],
  },
  {
    value: "folders",
    label: "Folders",
    icon: FaFolder,
    subcategories: [
      { value: "presentation", label: "Presentation Folders", count: 27 },
      { value: "legal", label: "Legal Folders", count: 18 },
      { value: "expandable", label: "Expandable Folders", count: 15 },
      { value: "pocket", label: "Pocket Folders", count: 22 },
    ],
  },
  {
    value: "letterhead",
    label: "Letter Head",
    icon: FaFileAlt,
    subcategories: [
      { value: "corporate", label: "Corporate", count: 32 },
      { value: "executive", label: "Executive", count: 25 },
      { value: "premium", label: "Premium", count: 18 },
    ],
  },
  {
    value: "envelopes",
    label: "Envelopes",
    icon: FaEnvelope,
    subcategories: [
      { value: "business", label: "Business Envelopes", count: 41 },
      { value: "invitation", label: "Invitation Envelopes", count: 28 },
      { value: "window", label: "Window Envelopes", count: 19 },
      { value: "padded", label: "Padded Envelopes", count: 15 },
    ],
  },
  {
    value: "notepads",
    label: "Notepads",
    icon: FaStickyNote,
    subcategories: [
      { value: "memo", label: "Memo Pads", count: 23 },
      { value: "custom", label: "Custom Notepads", count: 31 },
      { value: "adhesive", label: "Adhesive Notepads", count: 17 },
    ],
  },
  {
    value: "catalogs",
    label: "Catalogs",
    icon: FaBook,
    subcategories: [
      { value: "product", label: "Product Catalogs", count: 28 },
      { value: "service", label: "Service Catalogs", count: 19 },
      { value: "premium", label: "Premium Catalogs", count: 14 },
    ],
  },
  {
    value: "invoices",
    label: "Invoice",
    icon: FaReceipt,
    subcategories: [
      { value: "standard", label: "Standard Invoices", count: 36 },
      { value: "carbon-copy", label: "Carbon Copy", count: 22 },
      { value: "custom", label: "Custom Invoices", count: 18 },
    ],
  },
  {
    value: "underfoot-paper",
    label: "Underfoot Paper",
    icon: FaPaperPlane,
    subcategories: [
      { value: "anti-slip", label: "Anti-slip Paper", count: 15 },
      { value: "promotional", label: "Promotional", count: 21 },
      { value: "custom-print", label: "Custom Print", count: 12 },
    ],
  },
  {
    value: "calendars",
    label: "Calendar",
    icon: FaCalendarAlt,
    subcategories: [
      { value: "wall", label: "Wall Calendars", count: 29 },
      { value: "desk", label: "Desk Calendars", count: 34 },
      { value: "pocket", label: "Pocket Calendars", count: 26 },
    ],
  },
  {
    value: "paper-bags",
    label: "Paper Bag",
    icon: FaShoppingBag,
    subcategories: [
      { value: "shopping", label: "Shopping Bags", count: 38 },
      { value: "gift", label: "Gift Bags", count: 27 },
      { value: "kraft", label: "Kraft Bags", count: 22 },
    ],
  },
  {
    value: "tissue",
    label: "Tissue",
    icon: FaTags,
    subcategories: [
      { value: "facial", label: "Facial Tissue", count: 25 },
      { value: "packaging", label: "Packaging Tissue", count: 19 },
      { value: "custom-print", label: "Custom Print", count: 16 },
    ],
  },
];

// Promotion Categories
export const promotionCategories: CardItem[] = [
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
  {
    value: "car-perfume",
    label: "Car Perfume",
    icon: FaCar,
    subcategories: [
      { value: "gel", label: "Gel Type", count: 18 },
      { value: "spray", label: "Spray Type", count: 24 },
      { value: "vent-clip", label: "Vent Clip", count: 31 },
      { value: "hanging", label: "Hanging Type", count: 22 },
    ],
  },
];

// Combine all categories
export const allCategories: CardItem[] = [
  ...printingCategories,
  ...promotionCategories,
];
