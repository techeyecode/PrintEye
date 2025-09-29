export interface CardItem {
  name: string;
  price: string;
  image: string;
  link: string;
  category?: string;
}

export const PopularCategories: CardItem[] = [
  {
    name: "Popular",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/popular.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=5873",
    category: "popular",
  },
  {
    name: "Standard",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/standard.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "popular",
  },
  {
    name: "Glossy",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/gloss.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "popular",
  },
  {
    name: "Square",
    price: "Starting at $12.00",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/square.jpg",
    link: "/products/special-shapes/order.html?shape=9&size=252&paper=1&color=1&quantity=50",
    category: "popular",
  },
];

export const BusinessCardTemplate: CardItem[] = [
  {
    name: "Modern",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/modern_template.jpg",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=39577",
    category: "template",
  },
  {
    name: "Construction",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/construction.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=28668",
    category: "template",
  },
  {
    name: "Minimalist",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/minimalist.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=38965",
    category: "template",
  },
  {
    name: "Real Estate",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/real_estate.jpg",
    link: "/products/gallery/list.html?product=1&size=101&selectedCategory=94628",
    category: "template",
  },
  {
    name: "Landscaper",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/landscaping.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=4084",
    category: "template",
  },
  {
    name: "Car Wash & Detailing",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/car_wash.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=2000",
    category: "template",
  },
  {
    name: "Church",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/church.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=2233",
    category: "template",
  },
  {
    name: "Handyman",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/handyman.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=2200",
    category: "template",
  },
  {
    name: "Hair Salon",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/hair_salon.png",
    link: "/products/gallery/list.html?product=1&size=101&selectedCategory=53",
    category: "template",
  },
  {
    name: "Elegant",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/elegant_template.jpg",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=39195",
    category: "template",
  },
  {
    name: "Barber",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/barber.png",
    link: "/products/gallery/list.html?printProductType=1&printProductSize=101&selectedCategory=2501",
    category: "template",
  },
  {
    name: "Ultra Thick",
    price: "Starting at $59.50",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/thick.jpg",
    link: "/products/business-cards/pages/trifecta-triple-layer.html",
    category: "template",
  },
];

export const SpecialShapes: CardItem[] = [
  {
    name: "Circle",
    price: "Starting at $27.75",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/circle_bc_info.jpg",
    link: "/products/special-shapes/order?shape=1&size=314&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    name: "Square",
    price: "Starting at $12.00",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/square_bc_info.jpg",
    link: "/products/special-shapes/order?shape=9&size=252&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    name: "Slim",
    price: "Starting at $8.39",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/slim_bc_info.jpg",
    link: "/products/business-cards/order?size=337&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    name: "Folded",
    price: "Starting at $36.14",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/folded_bc_info.jpg",
    link: "/products/folded-business-cards/order?size=385&orientation=2&paper=1&folding=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    name: "Rounded Square",
    price: "Starting at $17.00",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/rounded_square_bc_info.jpg",
    link: "/products/special-shapes/order?shape=4&size=320&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    name: "Leaf",
    price: "Starting at $30.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/leaf_bc_info.jpg",
    link: "/products/special-shapes/order?shape=7&size=331&orientation=2&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    name: "Oval",
    price: "Starting at $30.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/oval_bc_info.jpg",
    link: "/products/special-shapes/order?shape=2&size=323&orientation=2&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    name: "Half Circle",
    price: "Starting at $30.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/half_circle_bc_info.jpg",
    link: "/products/special-shapes/order?shape=6&size=327&orientation=2&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
  {
    name: "Wink",
    price: "Starting at $30.59",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/wink_bc_info.jpg",
    link: "/products/special-shapes/order?shape=8&size=480&orientation=2&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5",
    category: "shapes",
  },
];

export const SpecialtyPaperFinishes: CardItem[] = [
  {
    name: "Raised Gold Foil",
    price: "Starting at $36.15",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/bc_foil_gold.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=10&color=1&quantity=50&turnaround=1&proofType=100&manualProofType=1&raisedPrint=138&raisedFoilColor=141&galleryImageOverride=raisedPrint-138",
    category: "PaperFinishes",
  },
  {
    name: "Raised UV Print",
    price: "Starting at $36.15",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/bc_ruv.jpeg",
    link: "/products/business-cards/order?size=101&paper=10&color=1&quantity=50&raisedPrint=135&options=1&raisedPrintImage=1",
    category: "PaperFinishes",
  },
  {
    name: "Raised Silver Foil",
    price: "Starting at $36.15",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/bc_foil_foil.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=10&color=1&quantity=50&turnaround=1&proofType=100&manualProofType=1&raisedPrint=138&raisedFoilColor=143&galleryImageOverride=raisedFoilColor-143",
    category: "PaperFinishes",
  },
  {
    name: "Raised Rose Gold Foil",
    price: "Starting at $36.15",
    image:
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/bc_foil_rose_gold.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=10&color=1&quantity=50&turnaround=1&proofType=100&manualProofType=1&raisedPrint=138&raisedFoilColor=142&galleryImageOverride=raisedFoilColor-142",
    category: "PaperFinishes",
  },
];

export const PaperTypes: CardItem[] = [
  {
    name: "Gloss Cover",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/14pt_gloss_coated_cover_c2s_with_high_gloss_uv.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=1&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&coating=5&galleryImageOverride=paper-1",
    category: "paper",
  },
  {
    name: "Uncoated Cover",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/14pt_premium_uncoated_cover.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=2&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&galleryImageOverride=paper-76",
    category: "paper",
  },
  {
    name: "Premium Linen",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/13pt_premium_linen_tab.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=74&color=1&quantity=25&turnaround=1&proofType=31&fileDelivery=5&galleryImageOverride=paper-74",
    category: "paper",
  },
  {
    name: "Premium Matte Cover",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/16pt_dull_cover_with_matte_finish.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=10&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&galleryImageOverride=paper-10",
    category: "paper",
  },
  {
    name: "Ultra Premium Pearl",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/18pt_premium_pearl_tab.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=75&color=1&quantity=25&turnaround=1&proofType=31&fileDelivery=5&galleryImageOverride=paper-75",
    category: "paper",
  },
  {
    name: "Premium Kraft",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/18pt_premium_kraft_tab.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=76&color=1&quantity=25&turnaround=1&proofType=31&fileDelivery=5&galleryImageOverride=paper-76",
    category: "paper",
  },
  {
    name: "Ultra Premium Smooth White",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/18pt_premium_smooth_white_tab.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=77&color=1&quantity=25&turnaround=1&proofType=31&fileDelivery=5&galleryImageOverride=paper-77",
    category: "paper",
  },
  {
    name: "Matte Cover",
    price: "Starting at $9.59",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/100lb_dull_text_with_matte_finish.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=7&color=1&quantity=50&turnaround=1&proofType=31&fileDelivery=5&galleryImageOverride=paper-7",
    category: "paper",
  },
  {
    name: "Trifecta Green",
    price: "Starting at $59.50",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/24pt_trifecta_green_triple_layered.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=31&color=1&quantity=250&turnaround=1&proofType=31&fileDelivery=5&galleryImageOverride=paper-31",
    category: "paper",
  },
  {
    name: "Trifecta Black",
    price: "Starting at $59.50",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/38pt_trifecta_black_triple_layered.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=32&color=1&quantity=250&turnaround=1&proofType=31&fileDelivery=5&galleryImageOverride=paper-32",
    category: "paper",
  },
  {
    name: "Trifecta Red",
    price: "Starting at $59.50",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/38pt_trifecta_red_triple_layered.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=36&color=1&quantity=250&turnaround=1&proofType=31&fileDelivery=5&galleryImageOverride=paper-36",
    category: "paper",
  },
  {
    name: "Trifecta Blue",
    price: "Starting at $59.50",
    image:
      "//static.gotprint.com/tl/products/generic/images/common/38pt_trifecta_blue_triple_layered.jpg",
    link: "/products/business-cards/order?size=101&orientation=1&paper=66&color=1&quantity=250&turnaround=1&proofType=31&fileDelivery=5&galleryImageOverride=paper-66",
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
