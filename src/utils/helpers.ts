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
      { value: "transparent-card", label: "transparentCard" },
    ] as Item[],

    Brochure: [
      { value: "all", label: "all", link: "/Brochures" },
      { value: "standard-brochure", label: "standardBrochure" },
      { value: "fold-brochure", label: "foldBrochure" },
      { value: "door-brochure", label: "doorBrochure" },
    ] as Item[],
    Folder: [
      { value: "standard-folder", label: "standardForlder" },
      { value: "special-folder", label: "specialForlder" },
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
      { value: "standard-logo", label: "standardLogo" },
      { value: "invoice-logo", label: "invoiceLogo" },
      { value: "foil-logo", label: "foilLogo" },
      { value: "invoice-logo-foil-logo", label: "invoiceLogoAndFoilLogo" },
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
      { value: "ramadan-calendar", label: "ramadanCalendar" },
    ] as Item[],

    Bag: [
      { value: "all", label: "all", link: "/Bag" },
      { value: "carton-bag", label: "cartonBag" },
      { value: "craft-bag", label: "craftBag" },
      { value: "xray-bag", label: "xrayBag" },
    ] as Item[],

    Tissue: [
      { value: "rectangle-tissue", label: "rectangleTissue" },
      { value: "square-tissue", label: "squareTissue" },
      { value: "pyramid-tissue", label: "pyramidTissue" },
      { value: "wet-tissue", label: "wetTissue" },
    ] as Item[],

    CarPerfum: [{ value: "car-perfum", label: "CarPerfum" }] as Item[],
  },

  Sign: {
    harfBarz: [{ value: "harf-barz", label: "harfBarz" }] as Item[],

    neon: [{ value: "neon", label: "neon" }] as Item[],

    lightbox: [{ value: "lightbox", label: "lightbox" }] as Item[],

    flex: [{ value: "flex", label: "flex" }] as Item[],

    stickers: [{ value: "stickers", label: "stickers" }] as Item[],

    flags: [{ value: "flags", label: "flags" }] as Item[],
    electronicScreen: [
      { value: "electronic-screen", label: "electronicScreen" },
    ] as Item[],
    exhibitionBooth: [
      { value: "exhibition-booth", label: "exhibitionBooth" },
    ] as Item[],
    Stand: [{ value: "Stand", label: "Stand" }] as Item[],
    RollUp: [{ value: "roll-up", label: "RollUp" }] as Item[],
    stamp: [{ value: "stamp", label: "stamp" }] as Item[],
    pallet: [{ value: "pallet", label: "pallet" }] as Item[],
    dangler: [{ value: "dangler", label: "dangler" }] as Item[],
    lanyard: [{ value: "lanyard", label: "lanyard" }] as Item[],
    wristband: [{ value: "wristband", label: "wristband" }] as Item[],
  },

  Promotion: {
    GiftSets: [{ value: "gift-sets", label: "giftSets" }] as Item[],

    Agendas: [
      {
        value: "victorias-journals-products",
        label: "victoriasJournalsProducts",
      },
      { value: "agendas", label: "agendas" },
      { value: "Organizers", label: "organizers" },
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
    Pens: [
      { value: "pen-sets", label: "penSets" },
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
    Hours: [{ value: "hours", label: "hours" }] as Item[],
    DesktopProducts: [
      { value: "desktop-products", label: "desktopProducts" },
    ] as Item[],
    documentBagAndSecretariats: [
      {
        value: "documentbag-and-Secretariats",
        label: "documentBagAndSecretariats",
      },
    ] as Item[],
    BusinessCardHoldersAndMirrors: [
      {
        value: "business-card-holders-and-mirrors",
        label: "businessCardHoldersAndMirrors",
      },
    ] as Item[],
    flashlightAndPocketknives: [
      {
        value: "flashlight-and-pocketknives",
        label: "flashlightAndPocketknives",
      },
    ] as Item[],
    Lighters: [{ value: "lighters", label: "lighters" }] as Item[],

    UmbrellaAndSunshine: [
      { value: "umbrella-and-sunshine", label: "UmbrellaAndSunshine" },
    ] as Item[],
    MiscellaneousAndPlasticProducts: [
      {
        value: "miscellaneous-and-plastic-products",
        label: "miscellaneousAndPlasticProducts",
      },
    ] as Item[],

    Plaques: [{ value: "plaques", label: "plaques" }] as Item[],
    Bag: [
      { value: "ninon-bag", label: "ninonBag" },
      { value: "row-cloth-bag", label: "rowClothBag" },
      { value: "fiber-bag", label: "fiberBag" },
      { value: "craft-bag", label: "craftBag" },
    ] as Item[],
  },

  Uniform: {
    TShirt: [
      { value: "long-sleeved", label: "longSleeved" },
      { value: "short-sleeved", label: "shortSleeved" },
      { value: "shirt-neck", label: "shirtNeck" },
      { value: "shirt-circle", label: "shirtCircle" },
      { value: "polyester", label: "polyester" },
      { value: "cotton", label: "cotton" },
      { value: "cap", label: "cap" },
    ] as Item[],

    hood: [{ value: "hood", label: "hood" }] as Item[],

    school: [{ value: "school", label: "school" }] as Item[],
    sport: [{ value: "sport", label: "sport" }] as Item[],
    Hospital: [{ value: "hospital", label: "hospital" }] as Item[],
    restaurant: [{ value: "restaurant", label: "restaurant" }] as Item[],
    hotel: [{ value: "hotel", label: "hotel" }] as Item[],
    suit: [{ value: "suit", label: "suit" }] as Item[],

    Jacket: [
      { value: "long-sleeved-jacket", label: "longSleevedJacket" },
      { value: "sleeveless-jacket", label: "sleevelessJacket" },
    ] as Item[],

    eleg: [{ value: "eleg", label: "eleg" }] as Item[],

    logo: [{ value: "logo", label: "logo" }] as Item[],
  },

  Packaging: {
    TableItems: [
      { value: "american-service", label: "americanService" },
      { value: "knives-forks-spoons", label: "knivesForksSpoons" },
      { value: "sugar-salt-spices", label: "sugarSaltSpices" },
    ] as Item[],

    PackagingBox: [
      { value: "thin-box", label: "thinBox" },
      { value: "thick-box", label: "thickBox" },
      { value: "cake-box", label: "cakeBox" },
      { value: "sweet-box", label: "sweetBox" },
      { value: "chocolate-box", label: "chocolateBox" },
      { value: "spice-box", label: "spiceBox" },
      { value: "pizza-box", label: "pizzaBox" },
      { value: "burger-box", label: "burgerBox" },
      { value: "gelory-box", label: "geloryBox" },
      { value: "perfum-box", label: "perfumBox" },
    ] as Item[],

    fingerBowl: [{ value: "finger-bowl", label: "fingerBowl" }] as Item[],
    rezoBowl: [{ value: "rezo-bowl", label: "rezoBowl" }] as Item[],
  },

  Cup: {
    SingleWall: [{ value: "single-wall", label: "singleWall" }] as Item[],
    DoubleWall: [{ value: "double-wall", label: "doubleWall" }] as Item[],
    Craft: [{ value: "craft", label: "craft" }] as Item[],
    petGlass: [{ value: "emboss", label: "emboss" }] as Item[],
    IceCreamCup: [{ value: "plastic", label: "plastic" }] as Item[],
    Lid: [{ value: "ice-cream-cup", label: "iceCreamCup" }] as Item[],
    Stand: [{ value: "lid", label: "lid" }] as Item[],
    Pipette: [{ value: "stand", label: "stand" }] as Item[],
    sleeve: [{ value: "sleeve", label: "sleeve" }] as Item[],
    pipette: [{ value: "pipette", label: "pipette" }] as Item[],
    toothpickFlag: [
      { value: "toothpick-flag", label: "toothpickFlag" },
    ] as Item[],
    wipes: [{ value: "wipes", label: "wipes" }] as Item[],
  },

  Gallary: {
    Promition: [{ value: "promition", label: "promition" }] as Item[],
    Printing: [{ value: "printing", label: "printing" }] as Item[],
    Uniform: [{ value: "uniform", label: "uniform" }] as Item[],
    Packaging: [{ value: "packaging", label: "packaging" }] as Item[],
    Sign: [{ value: "sign", label: "sign" }] as Item[],
    Cup: [{ value: "cup", label: "cup" }] as Item[],
  },
};

export default helpers;
