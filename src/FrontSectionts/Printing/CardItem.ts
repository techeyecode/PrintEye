export interface CardItem {
  id: number;
  label: string;
  count: string;
  image: string;
  link: string;
  category?: string;
}

export const PopularCategories: CardItem[] = [
  {
    id: 1,
    label: "Popular",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/popular.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=5873",
    category: "popular",
  },
  {
    id: 2,
    label: "Standard",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/standard.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "popular",
  },
  {
    id: 3,
    label: "Glossy",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/gloss.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "popular",
  },
  {
    id: 4,
    label: "Square",
    count: "Starting at $12.00",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/square.jpg",
    link: "/products/special-shapes/order.html?shape=9&size=252&paper=1&color=1&quantity=50",
    category: "popular",
  },
];

export const BusinessCardTemplate: CardItem[] = [
  {
    id: 5,
    label: "Modern",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/modern_template.jpg",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=39577",
    category: "template",
  },
  {
    id: 6,
    label: "Construction",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/construction.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=28668",
    category: "template",
  },
  {
    id: 7,
    label: "Minimalist",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/minimalist.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=38965",
    category: "template",
  },
  {
    id: 8,
    label: "Real Estate",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/real_estate.jpg",
    link: "/products/gallery/list.html?product=1&size=101&selectedCategory=94628",
    category: "template",
  },
  {
    id: 9,
    label: "Landscaper",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/landscaping.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=4084",
    category: "template",
  },
  {
    id: 10,
    label: "Car Wash & Detailing",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/car_wash.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=2000",
    category: "template",
  },
  {
    id: 11,
    label: "Church",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/church.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=2233",
    category: "template",
  },
  {
    id: 12,
    label: "Handyman",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/handyman.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=2200",
    category: "template",
  },
  {
    id: 13,
    label: "Hair Salon",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/hair_salon.png",
    link: "/products/gallery/list.html?product=1&size=101&selectedCategory=53",
    category: "template",
  },
  {
    id: 14,
    label: "Elegant",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/elegant_template.jpg",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=39195",
    category: "template",
  },
  {
    id: 15,
    label: "Barber",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/barber.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=2501",
    category: "template",
  },
  {
    id: 16,
    label: "Ultra Thick",
    count: "Starting at $59.50",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/thick.jpg",
    link: "/products/business-cards/pages/trifecta-triple-layer.html",
    category: "template",
  },
];

export const SpecialShapes: CardItem[] = [
  {
    id: 17,
    label: "Circle",
    count: "Starting at $27.75",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/circle_bc_info.jpg",
    link: "/products/special-shapes/order?shape=1&size=314&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    id: 18,
    label: "Square",
    count: "Starting at $12.00",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/square_bc_info.jpg",
    link: "/products/special-shapes/order?shape=9&size=252&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    id: 19,
    label: "Slim",
    count: "Starting at $8.39",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/slim_bc_info.jpg",
    link: "/products/business-cards/order?size=337&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    id: 20,
    label: "Folded",
    count: "Starting at $36.14",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/folded_bc_info.jpg",
    link: "/products/folded-business-cards/order?size=385&orientation=2&paper=1&folding=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    id: 21,
    label: "Rounded Square",
    count: "Starting at $17.00",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/rounded_square_bc_info.jpg",
    link: "/products/special-shapes/order?shape=4&size=320&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    id: 22,
    label: "Leaf",
    count: "Starting at $30.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/leaf_bc_info.jpg",
    link: "/products/special-shapes/order?shape=7&size=331&orientation=2&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    id: 23,
    label: "Oval",
    count: "Starting at $30.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/oval_bc_info.jpg",
    link: "/products/special-shapes/order?shape=2&size=323&orientation=2&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    id: 24,
    label: "Half Circle",
    count: "Starting at $30.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/half_circle_bc_info.jpg",
    link: "/products/special-shapes/order?shape=6&size=327&orientation=2&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    id: 25,
    label: "Wink",
    count: "Starting at $30.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/wink_bc_info.jpg",
    link: "/products/special-shapes/order?shape=8&size=480&orientation=2&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
];

export const SpecialtyPaperFinishes: CardItem[] = [
  {
    id: 26,
    label: "Raised Gold Foil",
    count: "Starting at $36.15",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/bc_foil_gold.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=10&color=1&quantity=50&turnaround=1&proofType=100&manualProofType=1&raisedPrint=138&raisedFoilColor=141&galleryimageOverride=raisedPrint-138",
    category: "PaperFinishes",
  },
  {
    id: 27,
    label: "Raised UV Print",
    count: "Starting at $36.15",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/bc_ruv.jpeg",
    link: "/products/business-cards/order?size=101&paper=10&color=1&quantity=50&raisedPrint=135&options=1&raisedPrintimage=1",
    category: "PaperFinishes",
  },
  {
    id: 28,
    label: "Raised Silver Foil",
    count: "Starting at $36.15",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/bc_foil_foil.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=10&color=1&quantity=50&turnaround=1&proofType=100&manualProofType=1&raisedPrint=138&raisedFoilColor=143&galleryimageOverride=raisedFoilColor-143",
    category: "PaperFinishes",
  },
  {
    id: 29,
    label: "Raised Rose Gold Foil",
    count: "Starting at $36.15",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/bc_foil_rose_gold.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=10&color=1&quantity=50&turnaround=1&proofType=100&manualProofType=1&raisedPrint=138&raisedFoilColor=142&galleryimageOverride=raisedFoilColor-142",
    category: "PaperFinishes",
  },
];

export const PaperTypes: CardItem[] = [
  {
    id: 30,
    label: "Gloss Cover",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/14pt_gloss_coated_cover_c2s_with_high_gloss_uv.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5&galleryimageOverride=paper-1",
    category: "paper",
  },
  {
    id: 31,
    label: "Uncoated Cover",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/14pt_premium_uncoated_cover.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=2&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&galleryimageOverride=paper-76",
    category: "paper",
  },
  {
    id: 32,
    label: "Premium Linen",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/13pt_premium_linen_tab.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=74&color=1&quantity=25&turnaround=1&proofType=31&fileDelivery=5&galleryimageOverride=paper-74",
    category: "paper",
  },
  {
    id: 33,
    label: "Premium Matte Cover",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/16pt_dull_cover_with_matte_finish.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=10&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&galleryimageOverride=paper-10",
    category: "paper",
  },
  {
    id: 34,
    label: "Ultra Premium Pearl",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/18pt_premium_pearl_tab.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=75&color=1&quantity=25&turnaround=1&proofType=31&fileDelivery=5&galleryimageOverride=paper-75",
    category: "paper",
  },
  {
    id: 35,
    label: "Premium Kraft",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/18pt_premium_kraft_tab.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=76&color=1&quantity=25&turnaround=1&proofType=31&fileDelivery=5&galleryimageOverride=paper-76",
    category: "paper",
  },
  {
    id: 36,
    label: "Ultra Premium Smooth White",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/18pt_premium_smooth_white_tab.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=77&color=1&quantity=25&turnaround=1&proofType=31&fileDelivery=5&galleryimageOverride=paper-77",
    category: "paper",
  },
  {
    id: 37,
    label: "Matte Cover",
    count: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/100lb_dull_text_with_matte_finish.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=7&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&galleryimageOverride=paper-7",
    category: "paper",
  },
  {
    id: 38,
    label: "Trifecta Green",
    count: "Starting at $59.50",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/24pt_trifecta_green_triple_layered.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=31&color=1&quantity=250&turnaround=1&proofType=31&fileDelivery=5&galleryimageOverride=paper-31",
    category: "paper",
  },
  {
    id: 39,
    label: "Trifecta Black",
    count: "Starting at $59.50",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/38pt_trifecta_black_triple_layered.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=32&color=1&quantity=250&turnaround=1&proofType=31&fileDelivery=5&galleryimageOverride=paper-32",
    category: "paper",
  },
  {
    id: 40,
    label: "Trifecta Red",
    count: "Starting at $59.50",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/38pt_trifecta_red_triple_layered.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=36&color=1&quantity=250&turnaround=1&proofType=31&fileDelivery=5&galleryimageOverride=paper-36",
    category: "paper",
  },
  {
    id: 41,
    label: "Trifecta Blue",
    count: "Starting at $59.50",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/38pt_trifecta_blue_triple_layered.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=66&color=1&quantity=250&turnaround=1&proofType=31&fileDelivery=5&galleryimageOverride=paper-66",
    category: "paper",
  },
];

export const AllBusinessCards: CardItem[] = [
  ...PopularCategories,
  ...BusinessCardTemplate,
  ...SpecialShapes,
  ...SpecialtyPaperFinishes,
  ...PaperTypes,
];
