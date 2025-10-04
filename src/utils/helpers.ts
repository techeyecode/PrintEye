interface Item {
  value: string;
  label: string;
  link?: string;
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

  Sign: {
    HarfBarz: [
      { value: "all", label: "all", link: "/HarfBarz" },
      { value: "metal-harfbarz", label: "metalHarfbarz" },
      { value: "acrylic-harfbarz", label: "acrylicHarfbarz" },
      { value: "led-harfbarz", label: "ledHarfbarz" },
      { value: "outdoor-harfbarz", label: "outdoorHarfbarz" },
    ] as Item[],

    Neon: [
      { value: "all", label: "all", link: "/Neon" },
      { value: "glass-neon", label: "glassNeon" },
      { value: "led-neon", label: "ledNeon" },
      { value: "custom-neon", label: "customNeon" },
      { value: "rgb-neon", label: "rgbNeon" },
    ] as Item[],

    LightBox: [
      { value: "all", label: "all", link: "/LightBox" },
      { value: "acrylic-lightbox", label: "acrylicLightbox" },
      { value: "aluminum-lightbox", label: "aluminumLightbox" },
      { value: "ultra-thin-lightbox", label: "ultraThinLightbox" },
      { value: "custom-lightbox", label: "customLightbox" },
    ] as Item[],

    Flex: [
      { value: "all", label: "all", link: "/Flex" },
      { value: "frontlit-flex", label: "frontlitFlex" },
      { value: "backlit-flex", label: "backlitFlex" },
      { value: "mesh-flex", label: "meshFlex" },
      { value: "blockout-flex", label: "blockoutFlex" },
    ] as Item[],

    Stickers: [
      { value: "all", label: "all", link: "/Stickers" },
      { value: "vinyl-stickers", label: "vinylStickers" },
      { value: "bumper-stickers", label: "bumperStickers" },
      { value: "clear-stickers", label: "clearStickers" },
      { value: "die-cut-stickers", label: "dieCutStickers" },
      { value: "kiss-cut-stickers", label: "kissCutStickers" },
    ] as Item[],

    Flag: [
      { value: "all", label: "all", link: "/Flag" },
      { value: "feather-flags", label: "featherFlags" },
      { value: "teardrop-flags", label: "teardropFlags" },
      { value: "rectangle-flags", label: "rectangleFlags" },
      { value: "custom-flags", label: "customFlags" },
      { value: "event-flags", label: "eventFlags" },
    ] as Item[],
  },

  Promotion: {
    GiftSets: [{ value: "gift-sets", label: "giftSets" }] as Item[],

    Agendas: [
      {
        value: "victorias-journals-products",
        label: "victoriasJournalsProducts",
      },
      { value: "agendas", label: "agendas" },
      { value: "Organizers", label: "Organizers" },
    ] as Item[],
    Notebooks: [{ value: "notebooks", label: "notebooks" }] as Item[],
    Electronic: [
      { value: "powerbank", label: "powerbank" },
      { value: "USB-Memory", label: "USBMemory" },
      { value: "technological-products", label: "technologicalProducts" },
      { value: "calculator", label: "calculator" },
    ] as Item[],
    Thermoses: [{ value: "thermoses", label: "thermoses" }] as Item[],
    PorcelainAndCeramicProducts: [
      { value: "ceramic-mugs", label: "ceramicMugs" },
      { value: "porcelain-mugs", label: "porcelainMugs" },
      { value: "glass-cups", label: "glassCups" },
      { value: "sublimated-mugs", label: "sublimatedMugs" },
    ] as Item[],
    PenSet: [{ value: "pen-sets", label: "pen-Sets" }] as Item[],
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
    Keychains: [{ value: "keychains", label: "keychains" }] as Item[],
    Watches: [{ value: "watches", label: "watches" }] as Item[],
    DesktopProducts: [
      { value: "desktop-products", label: "desktopProducts" },
    ] as Item[],
    BriefcasesAndSecretariats: [
      {
        value: "briefcases-and-Secretariats",
        label: "briefcasesAndSecretariats",
      },
    ] as Item[],
    BusinessCardHoldersAndMirrors: [
      {
        value: "business-card-holders-and-mirrors",
        label: "businessCardHoldersAndMirrors",
      },
    ] as Item[],
    PocketKnivesAndLanterns: [
      { value: "pocketKnives-and-lanterns", label: "PocketKnivesAndLanterns" },
    ] as Item[],
    Lighters: [{ value: "lighters", label: "lighters" }] as Item[],
    TextileProducts: [
      { value: "textile-products", label: "textileProducts" },
    ] as Item[],
    Umbrellas: [{ value: "umbrellas", label: "umbrellas" }] as Item[],
    MiscellaneousAndPlasticProducts: [
      {
        value: "miscellaneous-and-plastic-products",
        label: "miscellaneousAndPlasticProducts",
      },
    ] as Item[],
    CardboardAndToteBags: [
      { value: "cardboard-and-tote-bags", label: "cardboardAndToteBags" },
    ] as Item[],
    Calendars: [{ value: "calendars", label: "calendars" }] as Item[],
    PaperProducts: [
      { value: "paper-products", label: "paperProducts" },
    ] as Item[],
    Plaques: [{ value: "plaques", label: "plaques" }] as Item[],
  },

  Uniform: {
    Hospital: [
      { value: "doctor-coat", label: "doctorCoat" },
      { value: "nurse-uniform", label: "nurseUniform" },
      { value: "surgeon-scrub", label: "surgeonScrub" },
      { value: "hospital-staff", label: "hospitalStaff" },
      { value: "lab-coat", label: "labCoat" },
    ] as Item[],

    School: [
      { value: "student-uniform", label: "studentUniform" },
      { value: "teacher-uniform", label: "teacherUniform" },
      { value: "sports-uniform", label: "sportsUniform" },
      { value: "winter-uniform", label: "winterUniform" },
      { value: "summer-uniform", label: "summerUniform" },
    ] as Item[],

    Corporate: [
      { value: "executive-suit", label: "executiveSuit" },
      { value: "office-uniform", label: "officeUniform" },
      { value: "security-uniform", label: "securityUniform" },
      { value: "cleaner-uniform", label: "cleanerUniform" },
    ] as Item[],

    Industrial: [
      { value: "safety-overall", label: "safetyOverall" },
      { value: "factory-uniform", label: "factoryUniform" },
      { value: "high-visibility", label: "highVisibility" },
      { value: "protective-gear", label: "protectiveGear" },
    ] as Item[],

    Hospitality: [
      { value: "chef-uniform", label: "chefUniform" },
      { value: "waiter-uniform", label: "waiterUniform" },
      { value: "hotel-staff", label: "hotelStaff" },
      { value: "reception-uniform", label: "receptionUniform" },
    ] as Item[],
  },

  Packaging: {
    Boxes: [
      { value: "cardboard-box", label: "cardboardBox" },
      { value: "corrugated-box", label: "corrugatedBox" },
      { value: "gift-box", label: "giftBox" },
      { value: "display-box", label: "displayBox" },
      { value: "folding-box", label: "foldingBox" },
    ] as Item[],

    Bags: [
      { value: "paper-bag", label: "paperBag" },
      { value: "plastic-bag", label: "plasticBag" },
      { value: "zipper-bag", label: "zipperBag" },
      { value: "standup-pouch", label: "standupPouch" },
    ] as Item[],

    Containers: [
      { value: "plastic-container", label: "plasticContainer" },
      { value: "glass-container", label: "glassContainer" },
      { value: "metal-container", label: "metalContainer" },
      { value: "cosmetic-container", label: "cosmeticContainer" },
    ] as Item[],

    Labels: [
      { value: "product-label", label: "productLabel" },
      { value: "barcode-label", label: "barcodeLabel" },
      { value: "warning-label", label: "warningLabel" },
      { value: "instruction-label", label: "instructionLabel" },
    ] as Item[],

    Wraps: [
      { value: "shrink-wrap", label: "shrinkWrap" },
      { value: "stretch-wrap", label: "stretchWrap" },
      { value: "bubble-wrap", label: "bubbleWrap" },
      { value: "foil-wrap", label: "foilWrap" },
    ] as Item[],
  },

  Cup: {
    SingleWall: [{ value: "single-wall", label: "singleWall" }] as Item[],

    DoubleWall: [{ value: "double-wall", label: "doubleWall" }] as Item[],

    Craft: [{ value: "craft", label: "craft" }] as Item[],

    petGlass: [{ value: "pet-glass", label: "petGlass" }] as Item[],

    IceCreamCup: [{ value: "ice-cream-cup", label: "iceCreamCup" }] as Item[],
    Lid: [{ value: "lid", label: "lid" }] as Item[],
    Stand: [{ value: "stand", label: "stand" }] as Item[],
    Pipette: [{ value: "pipette", label: "pipette" }] as Item[],
  },
};

export default helpers;
