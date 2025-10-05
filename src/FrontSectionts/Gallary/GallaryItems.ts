// Company interface
export interface Company {
  id: number;
  name: string;
  image: string;
  images: string[];
}

// Data
export const companies: Company[] = [
  {
    id: 1,
    name: "Promosyon",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMha4iBfMF-P54i0rxc5aSqqWuktU3_Ed0vA&s",
    images: [
      "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-G.jpg",
      "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-S.jpg",
      "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-L.jpg",
      "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-B.jpg",
      "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-TRK.jpg",
      "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-T.jpg",
      "https://drpromosyon.com/assets/img/katalog/urunler/Y2025-K.jpg",
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/landscaping.png",
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/real_estate.jpg",
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/minimalist.png",
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/construction.png",
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/modern_template.jpg",
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/square.jpg",
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/gloss.jpg",
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/standard.jpg",
      "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/popular.png",
    ],
  },
  {
    id: 2,
    name: "PromoLine",
    image:
      "data:image/png;base64,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",
    images: [
      "https://example.com/assets/img/products/promo1.jpg",
      "https://example.com/assets/img/products/promo2.jpg",
      "https://example.com/assets/img/products/promo3.jpg",
      "https://example.com/assets/img/products/promo4.jpg",
      "https://example.com/assets/img/products/promo5.jpg",
      "https://example.com/assets/img/products/promo6.jpg",
      "https://example.com/assets/img/products/promo7.jpg",
      "https://example.com/assets/img/products/promo8.jpg",
      "https://example.com/assets/img/products/promo9.jpg",
      "https://example.com/assets/img/products/promo10.jpg",
      "https://example.com/assets/img/products/promo11.jpg",
      "https://example.com/assets/img/products/promo12.jpg",
      "https://example.com/assets/img/products/promo13.jpg",
      "https://example.com/assets/img/products/promo14.jpg",
      "https://example.com/assets/img/products/promo15.jpg",
      "https://example.com/assets/img/products/promo16.jpg",
    ],
  },
];
