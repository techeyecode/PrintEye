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

    Notepad: [
      { value: "all", label: "all", link: "/NotePad" },
      { value: "spiral-notepad", label: "spiralNotepad" },
      { value: "notepad-with-cover", label: "notepadWithCover" },
      { value: "notepad-without-cover", label: "notepadWithoutCover" },
      { value: "notepad-cube", label: "notepadCube" },
      { value: "footed-notepad", label: "footedNotepad" },
    ] as Item[],

    Catalog: [
      { value: "american-plant-catalog", label: "americanPlantCatalog" },
      { value: "saddle-stitched-catalog", label: "saddleStitchedCatalog" },
      { value: "spiral-catalog", label: "spiralCatalog" },
      { value: "hard-cover-catalog", label: "hardCoverCatalog" },
    ] as Item[],

    LetterHead: [
      { value: "laser-invoice", label: "fantasyPaper" },
      { value: "normal-invoice", label: "artPaper" },
      { value: "turkey-invoice", label: "hamurPaper" },
    ] as Item[],

    Invoice: [
      { value: "all", label: "all", link: "/Invoices" },
      { value: "laser-invoice", label: "laserInvoice" },
      { value: "normal-invoice", label: "normalInvoice" },
      { value: "turkey-invoice", label: "turkeyInvoice" },
    ] as Item[],

    UnderFoot: [
      { value: "craft-paper-underfoot", label: "craftPaperUnderfoot" },
      { value: "art-paper-underfoot", label: "artPaperUnderfoot" },
    ] as Item[],

    Calendar: [
      { value: "table-calendar", label: "tableCalendar" },
      { value: "wall-calendar", label: "wallCalendar" },
    ] as Item[],

    Bag: [
      { value: "all", label: "all", link: "/Bag" },
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

  Uniform: {
    Hospital: [
      { value: "discount-campaign", label: "Discount Campaign" },
      { value: "seasonal-offer", label: "Seasonal Offer" },
      { value: "buy-one-get-one", label: "Buy One Get One" },
      { value: "clearance-sale", label: "Clearance Sale" },
    ] as Item[],

    School: [
      { value: "vip-offer", label: "VIP Offer" },
      { value: "bundle-offer", label: "Bundle Offer" },
    ] as Item[],
  },
};

export default helpers;
