// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { storage } from "../Services/firebase";

// // import profilePic from "./assets/prifle-pic.webp";
// import {
//   FaLinkedin,
//   FaWhatsapp,
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaTelegram,
// } from "react-icons/fa";
// import { FormInstance } from "antd";
// import {
//   DeleteConditions,
//   GetOptions,
//   OptionType,
//   QueryCondition,
// } from "../Types/type";
// import service from "../Services/services";

// interface CityType {
//   value: string;
//   label: string;
// }

// interface StateType {
//   value: string;
//   label: string;
//   cities: CityType[];
// }

// interface CountryType {
//   value: string;
//   label: string;
//   code: string;
//   states: StateType[];
// }

// interface categoriesType {
//   id: string;
//   name: string;
//   children?: categoriesType[];
// }
// interface propertyType {
//   value: string;
//   label: string;
// }
// interface businessType {
//   value: string;
//   label: string;
// }
// interface ageOfListingType {
//   value: string;
//   label: string;
// }
// interface managementType {
//   value: string;
//   label: string;
// }
// interface EvaluatedType {
//   value: string;
//   label: string;
// }
// interface lookingForType {
//   value: string;
//   label: string;
// }
// interface statusOptionsType {
//   value: string;
//   label: string;
// }

// const helpers = {
//   dateFormat: "YYYY-MM-DD",
//   dateFormatWithTime: "YYYY-MM-DD HH:mm:ss",

//   // Function to get localized value based on current language
//   getLocalizedValue: (
//     currentLang: string,
//     enValue: string,
//     kuValue: string,
//     arValue: string
//   ): string => {
//     switch (currentLang) {
//       case "he":
//         return kuValue || enValue;
//       case "ar":
//         return arValue || enValue;
//       case "en":
//       default:
//         return enValue;
//     }
//   },

//   uploadFile: async (file: File, folder: string): Promise<string> => {
//     const storageRef = ref(storage, `${folder}/${file.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     return new Promise((resolve, reject) => {
//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log("Upload is " + progress + "% done");
//         },
//         (error) => {
//           console.error("Upload failed:", error);
//           reject(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             resolve(downloadURL);
//           });
//         }
//       );
//     });
//   },

//   handleUploadImage: async <T>(
//     folder: string,
//     values: T,
//     fieldName: string,
//     id: string,
//     form: FormInstance
//   ) => {
//     try {
//       const currentValue = form.getFieldValue(fieldName);

//       // Handle new file upload
//       if (values[fieldName] && Array.isArray(values[fieldName])) {
//         const file = values[fieldName][0]?.originFileObj;
//         if (file) {
//           // Use consistent naming pattern: folder/id.png
//           const storageRef = ref(storage, `${folder}/${id}.png`);
//           const uploadTask = uploadBytesResumable(storageRef, file);
//           await uploadTask;
//           return await getDownloadURL(uploadTask.snapshot.ref);
//         }
//       }

//       // If no new file and old file was removed, return empty string
//       if (!values[fieldName] || values[fieldName].length === 0) {
//         return "";
//       }

//       // Return existing URL if no new file was uploaded
//       return typeof currentValue === "string" ? currentValue : "";
//     } catch (error) {
//       console.error("Error in handleUploadImage:", error);
//       return "";
//     }
//   },
//   countries: [
//     {
//       value: "iraq",
//       label: "iraq",
//       code: "IQ",
//       states: [
//         {
//           value: "erbil",
//           label: "erbil",
//           cities: [
//             { value: "erbil_center", label: "erbil_center" },
//             { value: "shaqlawa", label: "shaqlawa" },
//             { value: "koya", label: "koya" },
//             { value: "rawanduz", label: "rawanduz" },
//             { value: "choman", label: "choman" },
//             { value: "margasor", label: "margasor" },
//             { value: "soran", label: "soran" },
//             { value: "makhmur", label: "makhmur" },
//           ],
//         },
//         {
//           value: "sulaymaniyah",
//           label: "sulaymaniyah",
//           cities: [
//             { value: "sulaymaniyah_center", label: "sulaymaniyah_center" },
//             { value: "pishdar", label: "pishdar" },
//             { value: "sharbazher", label: "sharbazher" },
//             { value: "darbandikhan", label: "darbandikhan" },
//             { value: "ranya", label: "ranya" },
//             { value: "kalar", label: "kalar" },
//             { value: "kifri", label: "kifri" },
//             { value: "chamchamal", label: "chamchamal" },
//           ],
//         },
//         {
//           value: "dahuk",
//           label: "dahuk",
//           cities: [
//             { value: "dahuk_center", label: "dahuk_center" },
//             { value: "zakho", label: "zakho" },
//             { value: "amadiya", label: "amadiya" },
//             { value: "sumel", label: "sumel" },
//             { value: "shiladze", label: "shiladze" },
//             { value: "batifa", label: "batifa" },
//             { value: "berwari", label: "berwari" },
//           ],
//         },
//         {
//           value: "halabja",
//           label: "halabja",
//           cities: [
//             { value: "halabja_center", label: "halabja_center" },
//             { value: "sayid_sadiq", label: "sayid_sadiq" },
//             { value: "khurmal", label: "khurmal" },
//             { value: "as_sulayman_bek", label: "as_sulayman_bek" },
//           ],
//         },
//         {
//           value: "baghdad",
//           label: "baghdad",
//           cities: [
//             { value: "karkh", label: "karkh" },
//             { value: "rusafa", label: "rusafa" },
//             { value: "adhamiya", label: "adhamiya" },
//             { value: "kadhimiyah", label: "kadhimiyah" },
//             { value: "mansour", label: "mansour" },
//             { value: "karrada", label: "karrada" },
//             { value: "sadr_city", label: "sadr_city" },
//             { value: "dora", label: "dora" },
//             { value: "abu_ghraib", label: "abu_ghraib" },
//             { value: "taji", label: "taji" },
//             { value: "mahmudiya", label: "mahmudiya" },
//             { value: "latifiya", label: "latifiya" },
//             { value: "yusufiya", label: "yusufiya" },
//             { value: "iskan", label: "iskan" },
//             { value: "zayouna", label: "zayouna" },
//             { value: "jihad", label: "jihad" },
//             { value: "amiriyat_al_fallujah", label: "amiriyat_al_fallujah" },
//           ],
//         },
//         {
//           value: "basra",
//           label: "basra",
//           cities: [
//             { value: "basra_center", label: "basra_center" },
//             { value: "fao", label: "fao" },
//             { value: "abdan", label: "abdan" },
//             { value: "shatt_al_arab", label: "shatt_al_arab" },
//             { value: "qurna", label: "qurna" },
//             { value: "zubayr", label: "zubayr" },
//             { value: "um_qasr", label: "um_qasr" },
//             { value: "khor_al_zubair", label: "khor_al_zubair" },
//             { value: "shuaiba", label: "shuaiba" },
//             { value: "medina", label: "medina" },
//             { value: "hartha", label: "hartha" },
//             { value: "tannuma", label: "tannuma" },
//             { value: "jubaila", label: "jubaila" },
//           ],
//         },
//         {
//           value: "nineveh",
//           label: "nineveh",
//           cities: [
//             { value: "mosul", label: "mosul" },
//             { value: "tel_afar", label: "tel_afar" },
//             { value: "sinjar", label: "sinjar" },
//             { value: "tel_kaif", label: "tel_kaif" },
//             { value: "al_hamdaniya", label: "al_hamdaniya" },
//             { value: "al_baaj", label: "al_baaj" },
//             { value: "hatra", label: "hatra" },
//             { value: "al_shikhan", label: "al_shikhan" },
//             { value: "al_mosul_al_jadida", label: "al_mosul_al_jadida" },
//             { value: "al_qayyarah", label: "al_qayyarah" },
//             { value: "al_hadar", label: "al_hadar" },
//             { value: "rabia", label: "rabia" },
//             { value: "zumar", label: "zumar" },
//             { value: "al_ayyathiya", label: "al_ayyathiya" },
//           ],
//         },
//         {
//           value: "kirkuk",
//           label: "kirkuk",
//           cities: [
//             { value: "kirkuk_center", label: "kirkuk_center" },
//             { value: "dibis", label: "dibis" },
//             { value: "al_hawija", label: "al_hawija" },
//             { value: "dakuk", label: "dakuk" },
//             { value: "al_abbasi", label: "al_abbasi" },
//             { value: "al_ryadh", label: "al_ryadh" },
//             { value: "al_zab", label: "al_zab" },
//             { value: "al_multaqa", label: "al_multaqa" },
//           ],
//         },
//         {
//           value: "salah_ad_din",
//           label: "salah_ad_din",
//           cities: [
//             { value: "tikrit", label: "tikrit" },
//             { value: "samarra", label: "samarra" },
//             { value: "al_dour", label: "al_dour" },
//             { value: "al_alam", label: "al_alam" },
//             { value: "al_shirqat", label: "al_shirqat" },
//             { value: "balad", label: "balad" },
//             { value: "duluiya", label: "duluiya" },
//             { value: "al_ishaqi", label: "al_ishaqi" },
//             { value: "al_faris", label: "al_faris" },
//             { value: "al_mutasim", label: "al_mutasim" },
//             { value: "al_yathrib", label: "al_yathrib" },
//             { value: "al_aziziyah", label: "al_aziziyah" },
//           ],
//         },
//         {
//           value: "anbar",
//           label: "anbar",
//           cities: [
//             { value: "ramadi", label: "ramadi" },
//             { value: "fallujah", label: "fallujah" },
//             { value: "al_qaim", label: "al_qaim" },
//             { value: "al_rumadi", label: "al_rumadi" },
//             { value: "al_anah", label: "al_anah" },
//             { value: "al_haditha", label: "al_haditha" },
//             { value: "al_karmah", label: "al_karmah" },
//             { value: "al_amiriyah", label: "al_amiriyah" },
//             { value: "al_saqlawiyah", label: "al_saqlawiyah" },
//             { value: "al_habbaniyah", label: "al_habbaniyah" },
//           ],
//         },
//         {
//           value: "babil",
//           label: "babil",
//           cities: [
//             { value: "hilla", label: "hilla" },
//             { value: "al_hashimiyah", label: "al_hashimiyah" },
//             { value: "al_mahawil", label: "al_mahawil" },
//             { value: "al_musayyib", label: "al_musayyib" },
//             { value: "al_ishkandariyah", label: "al_ishkandariyah" },
//             { value: "al_taal", label: "al_taal" },
//           ],
//         },
//         {
//           value: "karbala",
//           label: "karbala",
//           cities: [
//             { value: "karbala_center", label: "karbala_center" },
//             { value: "al_hindiya", label: "al_hindiya" },
//             { value: "al_ain", label: "al_ain" },
//           ],
//         },
//         {
//           value: "najaf",
//           label: "najaf",
//           cities: [
//             { value: "najaf_center", label: "najaf_center" },
//             { value: "al_manathera", label: "al_manathera" },
//             { value: "al_mishkhab", label: "al_mishkhab" },
//             { value: "al_hamza", label: "al_hamza" },
//             { value: "al_abbasiyah", label: "al_abbasiyah" },
//           ],
//         },
//         {
//           value: "qadisiyah",
//           label: "qadisiyah",
//           cities: [
//             { value: "diwaniyah", label: "diwaniyah" },
//             { value: "al_shamiya", label: "al_shamiya" },
//             { value: "al_hamza", label: "al_hamza" },
//             { value: "al_abbasiyah", label: "al_abbasiyah" },
//           ],
//         },
//         {
//           value: "wasit",
//           label: "wasit",
//           cities: [
//             { value: "kut", label: "kut" },
//             { value: "al_aziziyah", label: "al_aziziyah" },
//             { value: "al_suwaira", label: "al_suwaira" },
//             { value: "al_badra", label: "al_badra" },
//           ],
//         },
//         {
//           value: "maysan",
//           label: "maysan",
//           cities: [
//             { value: "amarah", label: "amarah" },
//             { value: "al_majar_al_kabir", label: "al_majar_al_kabir" },
//             { value: "al_kahla", label: "al_kahla" },
//           ],
//         },
//         {
//           value: "dhi_qar",
//           label: "dhi_qar",
//           cities: [
//             { value: "nasiriyah", label: "nasiriyah" },
//             { value: "al_rifai", label: "al_rifai" },
//             { value: "al_shatra", label: "al_shatra" },
//           ],
//         },
//         {
//           value: "muthanna",
//           label: "muthanna",
//           cities: [
//             { value: "samawa", label: "samawa" },
//             { value: "al_rumitha", label: "al_rumitha" },
//             { value: "al_salman", label: "al_salman" },
//           ],
//         },
//       ],
//     },
//     {
//       value: "united_arab_emirates",
//       label: "united_arab_emirates",
//       code: "AE",
//       states: [
//         {
//           value: "dubai",
//           label: "dubai",
//           cities: [
//             { value: "dubai_center", label: "dubai_center" },
//             { value: "downtown_dubai", label: "downtown_dubai" },
//             { value: "jumeirah", label: "jumeirah" },
//             { value: "deira", label: "deira" },
//           ],
//         },
//         {
//           value: "abu_dhabi",
//           label: "abu_dhabi",
//           cities: [
//             { value: "abu_dhabi_center", label: "abu_dhabi_center" },
//             { value: "al_ain", label: "al_ain" },
//             { value: "al_gharbia", label: "al_gharbia" },
//           ],
//         },
//       ],
//     },
//     {
//       value: "saudi_arabia",
//       label: "saudi_arabia",
//       code: "SA",
//       states: [
//         {
//           value: "riyadh",
//           label: "riyadh",
//           cities: [
//             { value: "riyadh_center", label: "riyadh_center" },
//             { value: "diriyah", label: "diriyah" },
//             { value: "al_kharj", label: "al_kharj" },
//           ],
//         },
//         {
//           value: "makkah",
//           label: "makkah",
//           cities: [
//             { value: "jeddah", label: "jeddah" },
//             { value: "mecca", label: "mecca" },
//             { value: "jeddah_center", label: "jeddah_center" },
//             { value: "corniche", label: "corniche" },
//             { value: "al_balad", label: "al_balad" },
//             { value: "mecca_center", label: "mecca_center" },
//             { value: "al_haram", label: "al_haram" },
//             { value: "al_aziziyah", label: "al_aziziyah" },
//           ],
//         },
//       ],
//     },
//     {
//       value: "qatar",
//       label: "qatar",
//       code: "QA",
//       states: [
//         {
//           value: "doha",
//           label: "doha",
//           cities: [
//             { value: "doha_center", label: "doha_center" },
//             { value: "west_bay", label: "west_bay" },
//             { value: "the_pearl", label: "the_pearl" },
//             { value: "katara", label: "katara" },
//           ],
//         },
//       ],
//     },
//     {
//       value: "kuwait",
//       label: "kuwait",
//       code: "KW",
//       states: [
//         {
//           value: "kuwait_city",
//           label: "kuwait_city",
//           cities: [
//             { value: "kuwait_center", label: "kuwait_center" },
//             { value: "salmiya", label: "salmiya" },
//             { value: "hawally", label: "hawally" },
//           ],
//         },
//       ],
//     },
//     {
//       value: "oman",
//       label: "oman",
//       code: "OM",
//       states: [
//         {
//           value: "muscat",
//           label: "muscat",
//           cities: [
//             { value: "muscat_center", label: "muscat_center" },
//             { value: "mutrah", label: "mutrah" },
//             { value: "ruwi", label: "ruwi" },
//             { value: "al_ghubra", label: "al_ghubra" },
//           ],
//         },
//       ],
//     },
//     {
//       value: "bahrain",
//       label: "bahrain",
//       code: "BH",
//       states: [
//         {
//           value: "manama",
//           label: "manama",
//           cities: [
//             { value: "manama_center", label: "manama_center" },
//             { value: "juffair", label: "juffair" },
//             { value: "adliya", label: "adliya" },
//           ],
//         },
//       ],
//     },
//     {
//       value: "iran",
//       label: "iran",
//       code: "IR",
//       states: [
//         {
//           value: "tehran",
//           label: "tehran",
//           cities: [
//             { value: "tehran_center", label: "tehran_center" },
//             { value: "shemiran", label: "shemiran" },
//             { value: "rey", label: "rey" },
//           ],
//         },
//       ],
//     },
//     {
//       value: "jordan",
//       label: "jordan",
//       code: "JO",
//       states: [
//         {
//           value: "amman",
//           label: "amman",
//           cities: [
//             { value: "amman_center", label: "amman_center" },
//             { value: "abdoun", label: "abdoun" },
//             { value: "sweifieh", label: "sweifieh" },
//           ],
//         },
//       ],
//     },
//     {
//       value: "lebanon",
//       label: "lebanon",
//       code: "LB",
//       states: [
//         {
//           value: "beirut",
//           label: "beirut",
//           cities: [
//             { value: "beirut_center", label: "beirut_center" },
//             { value: "downtown_beirut", label: "downtown_beirut" },
//             { value: "hamra", label: "hamra" },
//             { value: "gemmayzeh", label: "gemmayzeh" },
//           ],
//         },
//       ],
//     },
//     {
//       value: "turkey",
//       label: "turkey",
//       code: "TR",
//       states: [
//         {
//           value: "istanbul",
//           label: "istanbul",
//           cities: [
//             { value: "istanbul_center", label: "istanbul_center" },
//             { value: "sultanahmet", label: "sultanahmet" },
//             { value: "taksim", label: "taksim" },
//             { value: "kadikoy", label: "kadikoy" },
//           ],
//         },
//       ],
//     },
//     {
//       value: "egypt",
//       label: "egypt",
//       code: "EG",
//       states: [
//         {
//           value: "cairo",
//           label: "cairo",
//           cities: [
//             { value: "cairo_center", label: "cairo_center" },
//             { value: "downtown_cairo", label: "downtown_cairo" },
//             { value: "zamalek", label: "zamalek" },
//             { value: "maadi", label: "maadi" },
//           ],
//         },
//       ],
//     },
//   ] as CountryType[],

//   categories: [
//     {
//       id: "all-sectors",
//       name: "categories.all_sectors",
//       children: [
//         {
//           id: "accommodation-cafes",
//           name: "categories.accommodation_cafes",
//           children: [
//             { id: "bars-pubs", name: "categories.bars_pubs" },
//             { id: "cafes-coffee-shops", name: "categories.cafes_coffee_shops" },
//             {
//               id: "hotels-accommodation",
//               name: "categories.hotels_accommodation",
//             },
//             { id: "restaurants", name: "categories.restaurants" },
//             { id: "takeaway-food", name: "categories.takeaway_food" },
//           ],
//         },
//         {
//           id: "retail",
//           name: "categories.retail",
//           children: [
//             {
//               id: "clothing-accessories",
//               name: "categories.clothing_accessories",
//             },
//             { id: "convenience-stores", name: "categories.convenience_stores" },
//             { id: "general-retail", name: "categories.general_retail" },
//             { id: "newsagents", name: "categories.newsagents" },
//             { id: "supermarkets", name: "categories.supermarkets" },
//           ],
//         },
//         {
//           id: "services",
//           name: "categories.services",
//           children: [
//             { id: "cleaning-services", name: "categories.cleaning_services" },
//             { id: "hair-beauty", name: "categories.hair_beauty" },
//             { id: "health-fitness", name: "categories.health_fitness" },
//             {
//               id: "professional-services",
//               name: "categories.professional_services",
//             },
//             { id: "transport-services", name: "categories.transport_services" },
//           ],
//         },
//         {
//           id: "manufacturing",
//           name: "categories.manufacturing",
//           children: [
//             {
//               id: "building-construction",
//               name: "categories.building_construction",
//             },
//             { id: "engineering", name: "categories.engineering" },
//             { id: "food-beverage", name: "categories.food_beverage" },
//             {
//               id: "printing-publishing",
//               name: "categories.printing_publishing",
//             },
//             { id: "textile-clothing", name: "categories.textile_clothing" },
//           ],
//         },
//       ],
//     },
//   ] as categoriesType[],
//   socialMedia: [
//     {
//       value: "linkedin",
//       label: "linkedin",
//       icon: FaLinkedin,
//     },
//     {
//       value: "whatsapp",
//       label: "whatsapp",
//       icon: FaWhatsapp,
//     },
//     {
//       value: "facebook",
//       label: "facebook",
//       icon: FaFacebook,
//     },
//     {
//       value: "instagram",
//       label: "instagram",
//       icon: FaInstagram,
//     },
//     {
//       value: "youtube",
//       label: "youtube",
//       icon: FaYoutube,
//     },
//     {
//       value: "telegram",
//       label: "telegram",
//       icon: FaTelegram,
//     },
//   ],
//   properties: [
//     { value: "officeBuildings", label: "officeBuildings" },
//     { value: "retail", label: "retail" },
//     { value: "warehouses", label: "warehouses" },
//     { value: "industrial", label: "industrial" },
//     { value: "multiUse", label: "multiUse" },
//     { value: "shoppingMalls", label: "shoppingMalls" },
//     { value: "others", label: "others" },
//   ] as propertyType[],

//   businesses: [
//     { value: "BusinessForSale, ", label: "businesses.businessForSale" },
//     { value: "IdeaForBusiness", label: "businesses.ideaForBusiness" },
//     { value: "investorLooking", label: "businesses.investorLookingForIdea" },
//     {
//       value: "FranchiseLooking",
//       label: "businesses.FranchiseLookingForDistributor",
//     },
//   ] as businessType[],

//   Evaluated: [
//     { value: "byMastermind", label: "byMastermind" },
//     { value: "byBusinessOwner", label: "byBusinessOwner" },
//     { value: "Others", label: "Others" },
//   ] as EvaluatedType[],

//   lookingFor: [
//     { value: "sellWhole", label: "sellWhole" },
//     { value: "sellPart", label: "sellPart" },
//     { value: "both", label: "both" },
//   ] as lookingForType[],

//   businessTypes: [
//     { value: "startup", label: "startup" },
//     { value: "smallBusiness", label: "smallBusiness" },
//     { value: "mediumEnterprise", label: "mediumEnterprise" },
//     { value: "largeCorporation", label: "largeCorporation" },
//     { value: "nonProfit", label: "nonProfit" },
//   ],
//   getCountryPhoneCodes: (t: (key: string) => string) =>
//     [
//       { value: "+964", label: `+964 (${t("iraq")})` },
//       { value: "+971", label: `+971 (${t("united_arab_emirates")})` },
//       { value: "+968", label: `+968 (${t("oman")})` },
//       { value: "+974", label: `+974 (${t("qatar")})` },
//       { value: "+966", label: `+966 (${t("saudi_arabia")})` },
//       { value: "+965", label: `+965 (${t("kuwait")})` },
//       { value: "+973", label: `+973 (${t("bahrain")})` },
//       { value: "+962", label: `+962 (${t("jordan")})` },
//       { value: "+961", label: `+961 (${t("lebanon")})` },
//       { value: "+20", label: `+20 (${t("egypt")})` },
//       { value: "+90", label: `+90 (${t("turkey")})` },
//       { value: "+98", label: `+98 (${t("iran")})` },
//     ] as OptionType[],

//   businessSectors: [
//     { value: "agriculture", label: "agriculture" },
//     { value: "fishing", label: "fishing" },
//     { value: "horticulture", label: "horticulture" },
//     {
//       value: "food_distribution",
//       label: "food_distribution",
//     },
//     { value: "forestry_wood", label: "forestry_wood" },
//     { value: "mining", label: "mining" },
//     { value: "oil_gas", label: "oil_gas" },
//     { value: "food_supermarket", label: "food_supermarket" },
//     {
//       value: "chemicals_petrochemicals",
//       label: "chemicals_petrochemicals",
//     },
//     {
//       value: "basic_metals_steel",
//       label: "basic_metals_steel",
//     },
//     { value: "pharmaceuticals", label: "pharmaceuticals" },
//     {
//       value: "petrochemical_products",
//       label: "petrochemical_products",
//     },
//     { value: "manufacturing", label: "manufacturing" },
//     { value: "auto_parts", label: "auto_parts" },
//     { value: "dairy_products", label: "dairy_products" },
//     {
//       value: "electrical_equipment",
//       label: "electrical_equipment",
//     },
//     {
//       value: "engineering_services",
//       label: "engineering_services",
//     },
//     {
//       value: "industrial_machinery",
//       label: "industrial_machinery",
//     },
//     { value: "electronics", label: "electronics" },
//     {
//       value: "computer_hardware_software",
//       label: "computer_hardware_software",
//     },
//     {
//       value: "telecommunications",
//       label: "telecommunications",
//     },
//     { value: "utilities", label: "utilities" },
//     { value: "construction", label: "construction" },
//     {
//       value: "commercial_real_estate",
//       label: "commercial_real_estate",
//     },
//     {
//       value: "food_production_processing",
//       label: "food_production_processing",
//     },
//     { value: "beverages", label: "beverages" },
//     {
//       value: "textile_apparel_footwear",
//       label: "textile_apparel_footwear",
//     },
//     { value: "furniture", label: "furniture" },
//     { value: "retailing", label: "retailing" },
//     { value: "wholesale_trade", label: "wholesale_trade" },
//     {
//       value: "transportation_logistics",
//       label: "transportation_logistics",
//     },
//     {
//       value: "professional_services",
//       label: "professional_services",
//     },
//     {
//       value: "financial_services",
//       label: "financial_services",
//     },
//     { value: "tourism_leisure", label: "tourism_leisure" },
//     {
//       value: "education_training",
//       label: "education_training",
//     },
//     {
//       value: "healthcare_services",
//       label: "healthcare_services",
//     },
//     { value: "media_publishing", label: "media_publishing" },
//     {
//       value: "advertising_creative",
//       label: "advertising_creative",
//     },
//     {
//       value: "hospitality_leisure",
//       label: "hospitality_leisure",
//     },
//     { value: "it_services", label: "it_services" },
//   ],

//   investmentTypes: [
//     { value: "fullInvestment", label: "fullInvestment" },
//     { value: "partialInvestment", label: "partialInvestment" },
//     { value: "partnership", label: "partnership" },
//     { value: "loan", label: "loan" },
//   ],

//   handleURLSearchParams: (url: string): GetOptions => {
//     const urlSearchParams = new URLSearchParams(url);
//     const options: GetOptions = {};

//     // Handle search and searchField
//     const search = urlSearchParams.get("search");
//     const searchField = urlSearchParams.get("searchField");

//     if (search) options.search = search;
//     if (searchField) options.searchField = searchField;

//     const queries: QueryCondition[] = [];

//     // Job-related parameters (existing functionality)
//     if (
//       urlSearchParams.get("company") !== "" &&
//       urlSearchParams.get("company") !== null &&
//       urlSearchParams.get("company") !== undefined
//     ) {
//       queries.push({
//         field: "company.name",
//         operator: "==" as QueryCondition["operator"],
//         value: urlSearchParams.get("company") ?? "",
//       });
//     }

//     if (
//       urlSearchParams.get("jobCategory") !== "" &&
//       urlSearchParams.get("jobCategory") !== null &&
//       urlSearchParams.get("jobCategory") !== undefined
//     ) {
//       queries.push({
//         field: "jobCategory",
//         operator: "==" as QueryCondition["operator"],
//         value: urlSearchParams.get("jobCategory") ?? "",
//       });
//     }

//     // Business application specific parameters
//     if (
//       urlSearchParams.get("status") !== "" &&
//       urlSearchParams.get("status") !== null &&
//       urlSearchParams.get("status") !== undefined
//     ) {
//       queries.push({
//         field: "status",
//         operator: "==" as QueryCondition["operator"],
//         value: urlSearchParams.get("status") ?? "",
//       });
//     }

//     if (
//       urlSearchParams.get("businessType") !== "" &&
//       urlSearchParams.get("businessType") !== null &&
//       urlSearchParams.get("businessType") !== undefined
//     ) {
//       queries.push({
//         field: "business.businessType",
//         operator: "==" as QueryCondition["operator"],
//         value: urlSearchParams.get("businessType") ?? "",
//       });
//     }

//     if (
//       urlSearchParams.get("businessSector") !== "" &&
//       urlSearchParams.get("businessSector") !== null &&
//       urlSearchParams.get("businessSector") !== undefined
//     ) {
//       queries.push({
//         field: "business.businessSector",
//         operator: "==" as QueryCondition["operator"],
//         value: urlSearchParams.get("businessSector") ?? "",
//       });
//     }

//     // Common location parameters
//     if (
//       urlSearchParams.get("country") !== "" &&
//       urlSearchParams.get("country") !== null &&
//       urlSearchParams.get("country") !== undefined
//     ) {
//       queries.push({
//         field: "country",
//         operator: "==" as QueryCondition["operator"],
//         value: urlSearchParams.get("country") ?? "",
//       });
//     }

//     if (
//       urlSearchParams.get("city") !== "" &&
//       urlSearchParams.get("city") !== null &&
//       urlSearchParams.get("city") !== undefined
//     ) {
//       queries.push({
//         field: "city",
//         operator: "==" as QueryCondition["operator"],
//         value: urlSearchParams.get("city") ?? "",
//       });
//     }

//     // Salary/Price range parameters (existing functionality)
//     if (
//       urlSearchParams.get("minSalary") !== "" &&
//       urlSearchParams.get("minSalary") !== null &&
//       urlSearchParams.get("minSalary") !== undefined
//     ) {
//       queries.push({
//         field: "minSalary",
//         operator: ">=" as QueryCondition["operator"],
//         value: parseFloat(urlSearchParams.get("minSalary") ?? "0"),
//       });
//     }

//     if (
//       urlSearchParams.get("maxSalary") !== "" &&
//       urlSearchParams.get("maxSalary") !== null &&
//       urlSearchParams.get("maxSalary") !== undefined
//     ) {
//       queries.push({
//         field: "maxSalary",
//         operator: "<=" as QueryCondition["operator"],
//         value: parseFloat(urlSearchParams.get("maxSalary") ?? "0"),
//       });
//     }

//     // Business price range parameters
//     if (
//       urlSearchParams.get("minPrice") !== "" &&
//       urlSearchParams.get("minPrice") !== null &&
//       urlSearchParams.get("minPrice") !== undefined
//     ) {
//       queries.push({
//         field: "business.askingPrice",
//         operator: ">=" as QueryCondition["operator"],
//         value: parseFloat(urlSearchParams.get("minPrice") ?? "0"),
//       });
//     }

//     if (
//       urlSearchParams.get("maxPrice") !== "" &&
//       urlSearchParams.get("maxPrice") !== null &&
//       urlSearchParams.get("maxPrice") !== undefined
//     ) {
//       queries.push({
//         field: "business.askingPrice",
//         operator: "<=" as QueryCondition["operator"],
//         value: parseFloat(urlSearchParams.get("maxPrice") ?? "0"),
//       });
//     }

//     if (queries.length > 0) options.queries = queries;

//     return options;
//   },
//   getImageUrl: (url = "") => {
//     if (url) {
//       if (url?.startsWith("http://") || url?.startsWith("https://")) {
//         return url;
//       }
//     }
//     // return profilePic;
//   },

//   checkFieldExists: async <T>(
//     collectionName: string,
//     conditions: Partial<Record<keyof T, T[keyof T]>>
//   ): Promise<boolean> => {
//     try {
//       const queries: QueryCondition[] = Object.entries(conditions).map(
//         ([field, value]) => ({
//           field,
//           operator: "==",
//           value: value as QueryCondition["value"],
//         })
//       );

//       const data = await service.get(collectionName, { queries });
//       return Array.isArray(data) ? data.length > 0 : !!data;
//     } catch (error) {
//       console.error("Error checking field existence:", error);
//       return false;
//     }
//   },
//   statusOptions: [
//     { label: "pending", value: "pending" },
//     { label: "accepted", value: "accepted" },
//     { label: "rejected", value: "rejected" },
//   ] as statusOptionsType[],

//   technicalSpecifications: [
//     { value: "Dimensions", label: "Dimensions" },
//     { value: "OverallDimentions", label: "OverallDimentions" },
//     { value: "weight", label: "weight" },
//     { value: "capacity", label: "capacity" },
//     { value: "Wheel", label: "wheel" },
//   ],

//   preventDeleteRecord: async (
//     conditions: DeleteConditions
//   ): Promise<{ prevent: boolean; message?: string }> => {
//     try {
//       for (const cond of conditions) {
//         const { collectionName, queries, message } = cond;
//         const data = await service.get(collectionName, { queries });
//         if (Array.isArray(data) && data.length > 0) {
//           return { prevent: true, message }; // Return the message for the first matched condition
//         }
//       }
//       return { prevent: false };
//     } catch (error) {
//       console.error("Error checking record existence:", error);
//       return { prevent: false };
//     }
//   },
// };

// export default helpers;
