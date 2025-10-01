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
    GiftSets: [
      { value: "gift-sets", label: "giftSets" },
    ] as Item[],

    VictoriasJournalsProducts: [
      { value: "victorias-journals-products", label: "victoriasJournalsProducts" },
    ] as Item[],
    Agendas: [
      { value: "agendas", label: "agendas" },
    ] as Item[],
    Notebooks: [
      { value: "notebooks", label: "notebooks" },
    ] as Item[],
    PowerbankAndUSBMemory: [
      { value: "powerbank", label: "powerbank" },
      { value: "USB-Memory", label: "USBMemory" },
      { value: "technological-products", label: "technologicalProducts" },
      { value: "calculator", label: "calculator" },
    ] as Item[],
    Thermoses: [
      { value: "thermoses", label: "thermoses" },
    ] as Item[],
    PorcelainAndCeramicProducts: [
      { value: "ceramic-mugs", label: "ceramicMugs" },
      { value: "porcelain-mugs", label: "porcelainMugs" },
      { value: "glass-cups", label: "glassCups" },
      { value: "sublimated-mugs", label: "sublimatedMugs" },
      { value: "pen-sets", label: "pen-Sets" },
    ] as Item[],
    PenSet: [
      { value: "pen-sets", label: "pen-Sets" },
    ] as Item[],
    Pens: [
      { value: "metal-pens", label: "metalPens" },
      { value: "plastic-pens", label: "plasticPens" },
      { value: "recycling-items", label: "recyclingItems" },
      { value: "pencils", label: "pencils" },
    ] as Item[],
    RecyclingProducts: [
      { value: "recycled-products", label: "recycledProducts" },
      { value: "adhesive-note-holders", label: "adhesiveNoteHolders" },
    ] as Item[],
    Keychains: [
      { value: "keychains", label: "keychains" },
    ] as Item[],
    Watches: [
      { value: "watches", label: "watches" },
    ] as Item[],
    DesktopProducts: [
      { value: "desktop-products", label: "desktopProducts" },
    ] as Item[],
    BriefcasesAndSecretariats: [
      { value: "briefcases-and-Secretariats", label: "briefcasesAndSecretariats" },
    ] as Item[],
    BusinessCardHoldersAndMirrors: [
      { value: "business-card-holders-and-mirrors", label: "businessCardHoldersAndMirrors" },
    ] as Item[],
    PocketKnivesAndLanterns: [
      { value: "pocketKnives-and-lanterns", label: "PocketKnivesAndLanterns" },
    ] as Item[],
    Lighters: [
      { value: "lighters", label: "lighters" },
    ] as Item[],
    TextileProducts: [
      { value: "textile-products", label: "textileProducts" },
    ] as Item[],
    Umbrellas: [
      { value: "umbrellas", label: "umbrellas" },
    ] as Item[],
    MiscellaneousAndPlasticProducts: [
      { value: "miscellaneous-and-plastic-products", label: "miscellaneousAndPlasticProducts" },
    ] as Item[],
    CardboardAndToteBags: [
      { value: "cardboard-and-tote-bags", label: "cardboardAndToteBags" },
    ] as Item[],
    Calendars: [
      { value: "calendars", label: "calendars" },
    ] as Item[],
    PaperProducts: [
      { value: "paper-products", label: "paperProducts" },
    ] as Item[],
    Plaques: [
      { value: "plaques", label: "plaques" },
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
