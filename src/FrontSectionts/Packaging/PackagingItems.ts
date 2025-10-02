export interface PackagingItems {
  id: number;
  value: string;
  label: string;
  code: string;
  count?: number;
  description?: string;
  images: string[];
  popularItems?: string[];
}

export interface PackagingCategory {
  id: number;
  value: string;
  label: string;
  description?: string;
  image?: string;
  subcategories: PackagingItems[];
}

export const packagingCategories: PackagingCategory[] = [
  {
    id: 1,
    value: "boxes",
    label: "Boxes",
    description: "Custom boxes for all your packaging needs.",
    image:
      "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/07/05112253/Product-Gallery-Picture-3-1024x683.png",
    subcategories: [
      {
        id: 2,
        value: "cardboard-boxes",
        label: "Cardboard Boxes",
        code: "PKG-BOX-CRD-001",
        count: 25,
        description: "Durable cardboard boxes for shipping and storage",
        popularItems: ["Corrugated Boxes", "Mailer Boxes", "Moving Boxes"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/07/05112253/Product-Gallery-Picture-3-1024x683.png",
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/07/05112253/Product-Gallery-Picture-3-1024x683.png",
        ],
      },
      {
        id: 3,
        value: "custom-printed-boxes",
        label: "Custom Printed Boxes",
        code: "PKG-BOX-PRT-002",
        count: 38,
        description: "Branded boxes with custom printing and designs",
        popularItems: ["Logo Boxes", "Retail Boxes", "Gift Boxes"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/07/05112253/Product-Gallery-Picture-3-1024x683.png",
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/07/05112253/Product-Gallery-Picture-3-1024x683.png",
        ],
      },
      {
        id: 4,
        value: "folding-cartons",
        label: "Folding Cartons",
        code: "PKG-BOX-FLD-003",
        count: 42,
        description: "Lightweight folding boxes for retail products",
        popularItems: ["Product Cartons", "Display Boxes"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/07/05112253/Product-Gallery-Picture-3-1024x683.png",
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/07/05112253/Product-Gallery-Picture-3-1024x683.png",
        ],
      },
      {
        id: 5,
        value: "rigid-boxes",
        label: "Rigid Boxes",
        code: "PKG-BOX-RIG-004",
        count: 31,
        description: "Premium rigid boxes for luxury products",
        popularItems: ["Luxury Gift Boxes", "Premium Packaging"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/07/05112253/Product-Gallery-Picture-3-1024x683.png",
        ],
      },
    ],
  },
  {
    id: 6,
    value: "bags",
    label: "Bags",
    description: "Various types of packaging bags for different applications.",
    image:
      "https://cms.paramountglobal.com/wp-content/uploads/2024/11/10_12d3afdac40881fe137fff779d4a3fa8.jpg",
    subcategories: [
      {
        id: 7,
        value: "paper-bags",
        label: "Paper Bags",
        code: "PKG-BAG-PPR-001",
        count: 52,
        description: "Eco-friendly paper bags for retail and shopping",
        popularItems: ["Kraft Bags", "Handled Paper Bags", "Retail Bags"],
        images: [
          "https://cms.paramountglobal.com/wp-content/uploads/2024/11/10_12d3afdac40881fe137fff779d4a3fa8.jpg",
          "https://cms.paramountglobal.com/wp-content/uploads/2024/11/10_12d3afdac40881fe137fff779d4a3fa8.jpg",
        ],
      },
      {
        id: 8,
        value: "plastic-bags",
        label: "Plastic Bags",
        code: "PKG-BAG-PLS-002",
        count: 47,
        description: "Durable plastic bags for various packaging needs",
        popularItems: ["Poly Bags", "Ziplock Bags", "T-shirt Bags"],
        images: [
          "https://cms.paramountglobal.com/wp-content/uploads/2024/11/10_12d3afdac40881fe137fff779d4a3fa8.jpg",
        ],
      },
      {
        id: 9,
        value: "reusable-bags",
        label: "Reusable Bags",
        code: "PKG-BAG-REU-003",
        count: 33,
        description: "Sustainable reusable shopping bags",
        popularItems: ["Tote Bags", "Canvas Bags", "Eco Bags"],
        images: [
          "https://cms.paramountglobal.com/wp-content/uploads/2024/11/10_12d3afdac40881fe137fff779d4a3fa8.jpg",
          "https://cms.paramountglobal.com/wp-content/uploads/2024/11/10_12d3afdac40881fe137fff779d4a3fa8.jpg",
        ],
      },
      {
        id: 10,
        value: "pouches",
        label: "Pouches",
        code: "PKG-BAG-PCH-004",
        count: 26,
        description: "Flexible pouches for food and product packaging",
        popularItems: ["Stand-up Pouches", "Flat Pouches", "Zipper Pouches"],
        images: [
          "https://cms.paramountglobal.com/wp-content/uploads/2024/11/10_12d3afdac40881fe137fff779d4a3fa8.jpg",
        ],
      },
    ],
  },
  {
    id: 11,
    value: "containers",
    label: "Containers",
    description: "Various containers for storage and packaging solutions.",
    image:
      "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/06/25150950/Packhelp_23.10.20203075-1-1024x744.jpg",
    subcategories: [
      {
        id: 12,
        value: "plastic-containers",
        label: "Plastic Containers",
        code: "PKG-CON-PLS-001",
        count: 41,
        description: "Versatile plastic containers for food and products",
        popularItems: ["Food Containers", "Storage Boxes", "Clamshells"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/06/25150950/Packhelp_23.10.20203075-1-1024x744.jpg",
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/06/25150950/Packhelp_23.10.20203075-1-1024x744.jpg",
        ],
      },
      {
        id: 13,
        value: "glass-containers",
        label: "Glass Containers",
        code: "PKG-CON-GLS-002",
        count: 58,
        description: "Premium glass jars and bottles for products",
        popularItems: ["Glass Jars", "Mason Jars", "Glass Bottles"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/06/25150950/Packhelp_23.10.20203075-1-1024x744.jpg",
        ],
      },
      {
        id: 14,
        value: "metal-containers",
        label: "Metal Containers",
        code: "PKG-CON-MET-003",
        count: 29,
        description: "Durable metal tins and containers",
        popularItems: ["Metal Tins", "Aluminum Containers", "Steel Boxes"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/06/25150950/Packhelp_23.10.20203075-1-1024x744.jpg",
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/06/25150950/Packhelp_23.10.20203075-1-1024x744.jpg",
        ],
      },
      {
        id: 15,
        value: "food-containers",
        label: "Food Containers",
        code: "PKG-CON-FOD-004",
        count: 45,
        description: "Specialized containers for food packaging",
        popularItems: [
          "Takeaway Containers",
          "Food Storage",
          "Disposable Containers",
        ],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/06/25150950/Packhelp_23.10.20203075-1-1024x744.jpg",
        ],
      },
    ],
  },
  {
    id: 16,
    value: "labels",
    label: "Labels",
    description: "Custom labels for product identification and branding.",
    image:
      "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/20154735/DSC2758-1-1024x806.jpg",
    subcategories: [
      {
        id: 17,
        value: "product-labels",
        label: "Product Labels",
        code: "PKG-LBL-PRD-001",
        count: 44,
        description: "Labels for product packaging and branding",
        popularItems: ["Bottle Labels", "Jar Labels", "Product Stickers"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/20154735/DSC2758-1-1024x806.jpg",
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/20154735/DSC2758-1-1024x806.jpg",
        ],
      },
      {
        id: 18,
        value: "shipping-labels",
        label: "Shipping Labels",
        code: "PKG-LBL-SHP-002",
        count: 51,
        description: "Labels for shipping and logistics",
        popularItems: ["Address Labels", "Barcode Labels", "Shipping Stickers"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/20154735/DSC2758-1-1024x806.jpg",
        ],
      },
      {
        id: 19,
        value: "custom-labels",
        label: "Custom Labels",
        code: "PKG-LBL-CST-003",
        count: 37,
        description: "Custom designed labels for special applications",
        popularItems: ["Die-cut Labels", "Custom Shapes", "Premium Labels"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/20154735/DSC2758-1-1024x806.jpg",
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/20154735/DSC2758-1-1024x806.jpg",
        ],
      },
      {
        id: 20,
        value: "security-labels",
        label: "Security Labels",
        code: "PKG-LBL-SEC-004",
        count: 32,
        description: "Tamper-evident and security labels",
        popularItems: [
          "Tamper-proof Labels",
          "Holographic Labels",
          "Security Seals",
        ],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/20154735/DSC2758-1-1024x806.jpg",
        ],
      },
    ],
  },
  {
    id: 21,
    value: "wraps",
    label: "Wraps",
    description: "Packaging wraps and films for product protection.",
    image:
      "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/03/02092829/2021-02-01-041010123-1024x768.jpg",
    subcategories: [
      {
        id: 22,
        value: "stretch-wrap",
        label: "Stretch Wrap",
        code: "PKG-WRP-STR-001",
        count: 35,
        description: "Plastic stretch film for pallet wrapping",
        popularItems: ["Pallet Wrap", "Stretch Film", "Hand Wrap"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/03/02092829/2021-02-01-041010123-1024x768.jpg",
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/03/02092829/2021-02-01-041010123-1024x768.jpg",
        ],
      },
      {
        id: 23,
        value: "bubble-wrap",
        label: "Bubble Wrap",
        code: "PKG-WRP-BBL-002",
        count: 28,
        description: "Protective bubble wrap for fragile items",
        popularItems: ["Air Bubble Wrap", "Large Bubble", "Small Bubble"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2019/03/06153947/image3.jpg",
        ],
      },
      {
        id: 24,
        value: "shrink-wrap",
        label: "Shrink Wrap",
        code: "PKG-WRP-SHR-003",
        count: 42,
        description: "Shrink film for product bundling and protection",
        popularItems: ["Shrink Film", "PVC Wrap", "Polyolefin Wrap"],
        images: [
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/03/03165105/mobile-plus-raylo-slider-2%402x.jpg",
          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/03/03165105/mobile-plus-raylo-slider-2%402x.jpg",
        ],
      },
    ],
  },
];

// Filter types
export interface PackagingFilterState {
  categories: string[];
  subcategories: string[];
  priceRange: [number, number];
  ratings: number[];
}

export const initialPackagingFilterState: PackagingFilterState = {
  categories: [],
  subcategories: [],
  priceRange: [0, 1000],
  ratings: [],
};
