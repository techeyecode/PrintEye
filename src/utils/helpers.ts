interface Item {
  value: string;
  label: string;
  link: string;
}

const helpers = {
  Printing: {
    BusinessCard: [
      { value: "all", label: "all", link: "/Business" },
      { value: "standard-card", label: "standardCard" },
      { value: "fantasy-card", label: "fantasyCard" },
      { value: "vip-card", label: "vipCard" },
      { value: "plastic-card", label: "plasticCard" },
      { value: "lable-card", label: "lableCard" },
      { value: "smart-card", label: "smartCard" },
      { value: "special-cut-card", label: "specialCutCard" },
    ] as Item[],

    Brochure: [
      { value: "all", label: "all", link: "/Brochures" },
      { value: "standard-brochure", label: "standardBrochure" },
      { value: "fold-brochure", label: "foldBrochure" },
      { value: "door-brochure", label: "doorBrochure" },
    ] as Item[],

    Notpad: [
      { value: "all", label: "all" },
      { value: "spiral-notpad", label: "spiralNotpad" },
      { value: "notpad-with-cover", label: "notpadWithCover" },
      { value: "notpad-without-cover", label: "notpadWithoutCover" },
      { value: "notpad-cube", label: "notpadCube" },
      { value: "footed-notpad", label: "footedNotpad" },
    ] as Item[],

    Catalog: [
      { value: "all", label: "all" },
      { value: "american-plant-catalog", label: "americanPlantCatalog" },
      { value: "saddle-stitched-catalog", label: "saddleStitchedCatalog" },
      { value: "spiral-catalog", label: "spiralCatalog" },
      { value: "hard-cover-catalog", label: "hardCoverCatalog" },
    ] as Item[],

    Invoice: [
      { value: "all", label: "all" },
      { value: "laser-invoice", label: "laserInvoice" },
      { value: "normal-invoice", label: "normalInvoice" },
      { value: "turkey-invoice", label: "turkeyInvoice" },
    ] as Item[],

    UnderFooter: [
      { value: "all", label: "all" },
      { value: "craft-paper-underfoot", label: "craftPaperUnderfoot" },
      { value: "art-paper-underfoot", label: "artPaperUnderfoot" },
    ] as Item[],

    Calendar: [
      { value: "all", label: "all" },
      { value: "table-calendar", label: "tableCalendar" },
      { value: "wall-calendar", label: "wallCalendar" },
    ] as Item[],

    PaperBag: [
      { value: "all", label: "all" },
      { value: "carton-bag", label: "cartonBag" },
      { value: "craft-bag", label: "craftBag" },
      { value: "xray-bag", label: "xrayBag" },
    ] as Item[],

    Tissue: [
      { value: "all", label: "all" },
      { value: "rectangle-tissue", label: "rectangleTissue" },
      { value: "square-tissue", label: "squareTissue" },
      { value: "pyramid-tissue", label: "pyramidTissue" },
    ] as Item[],
    Folder: [
      { value: "all", label: "all" },
      { value: "standard-tissue", label: "standardTissue" },
      { value: "special-tissue", label: "specialTissue" },
    ] as Item[],

    CarPerfum: [{ value: "car-perfum", label: "CarPerfum" }] as Item[],
  },

  Promotion: {
    Campaigns: [
      { value: "discount-campaign", label: "Discount Campaign" },
      { value: "seasonal-offer", label: "Seasonal Offer" },
      { value: "buy-one-get-one", label: "Buy One Get One" },
      { value: "clearance-sale", label: "Clearance Sale" },
    ] as Item[],

    SpecialOffers: [
      { value: "vip-offer", label: "VIP Offer" },
      { value: "bundle-offer", label: "Bundle Offer" },
    ] as Item[],
  },
};

export default helpers;
