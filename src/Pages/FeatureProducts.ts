// Interface for a single item
export interface ProductItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Main data structure
export interface SimplifiedData {
  Promotion: ProductItem[];
  PaperPrint: ProductItem[];
  Uniform: ProductItem[]; // changed from uniForm to Uniform
  packaging: ProductItem[];
  Sign: ProductItem[];
  Cup: ProductItem[];
}

// Simplified data
export const simplifiedData: SimplifiedData = {
  Promotion: [
    {
      id: 1,
      name: "Pens",
      description: "High-quality pens for everyday use or gifting.",
      image: "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-G.jpg",
    },
    {
      id: 2,
      name: "Mugs",
      description: "Mugs for home, office, or personalized gifts.",
      image:
        "https://drpromosyon.com/assets/img/katalog/kategoriler/set03532-2026.jpg",
    },
  ],
  PaperPrint: [
    {
      id: 3,
      name: "Popular",
      description: "High-quality print materials for everyday use.",
      image:
        "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/standard.jpg",
    },
    {
      id: 4,
      name: "Standard",
      description: "Standard paper prints for offices.",
      image:
        "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/standard.jpg",
    },
  ],
  Uniform: [
    // key matches Navbar now
    {
      id: 5,
      name: "Hospital Uniform",
      description: "Comfortable and durable hospital uniforms.",
      image:
        "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/standard.jpg",
    },
    {
      id: 6,
      name: "Nurse Uniforms",
      description: "Professional nurse uniforms.",
      image:
        "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/standard.jpg",
    },
  ],
  packaging: [
    {
      id: 7,
      name: "Boxes",
      description: "Sturdy packaging boxes for shipping.",
      image:
        "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/07/05112253/Product-Gallery-Picture-3-1024x683.png",
    },
    {
      id: 8,
      name: "Packaging Bags",
      description: "Durable packaging bags for products.",
      image:
        "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/07/05112253/Product-Gallery-Picture-3-1024x683.png",
    },
  ],
  Sign: [
    {
      id: 9,
      name: "Harf Barz Signs",
      description: "High-quality metal and acrylic signs.",
      image:
        "https://i.pinimg.com/236x/d3/11/a8/d311a81afdb9c7e32e35b0e91246add1.jpg",
    },
    {
      id: 10,
      name: "Metal Harf Barz",
      description: "Custom metal signs for business.",
      image:
        "https://i.pinimg.com/236x/d3/11/a8/d311a81afdb9c7e32e35b0e91246add1.jpg",
    },
  ],
  Cup: [
    {
      id: 11,
      name: "Disposable Cups",
      description: "High-quality disposable cups.",
      image: "data:image/jpeg;base64,...",
    },
    {
      id: 12,
      name: "Paper Cup",
      description: "Eco-friendly paper cups.",
      image: "data:image/jpeg;base64,...",
    },
  ],
};
