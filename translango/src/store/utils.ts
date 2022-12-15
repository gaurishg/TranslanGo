import {
  ISO3166_2letter_country_codes,
  ISO639_1LanguageCodeType,
  lang_country_two_letter_codes,
} from "../types/common/common.types";

export const CountryCode2letter2Name: Record<
  ISO3166_2letter_country_codes,
  string
> = {
  AF: "Afghanistan",
  AX: "Åland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AG: "Antigua & Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia & Herzegovina",
  BW: "Botswana",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  VG: "British Virgin Islands",
  BN: "Brunei",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  IC: "Canary Islands",
  CV: "Cape Verde",
  BQ: "Caribbean Netherlands",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  EA: "Ceuta & Melilla",
  TD: "Chad",
  CL: "Chile",
  CN: "China mainland",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo - Brazzaville",
  CD: "Congo - Kinshasa",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Côte d’Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czechia",
  DK: "Denmark",
  DG: "Diego Garcia",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  SZ: "Eswatini",
  ET: "Ethiopia",
  FK: "Falkland Islands",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GW: "Guinea-Bissau",
  GN: "Guinea",
  GY: "Guyana",
  HT: "Haiti",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  XK: "Kosovo",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Laos",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar (Burma)",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  KP: "North Korea",
  MK: "North Macedonia",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestinian Territories",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn Islands",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Romania",
  RU: "Russia",
  RW: "Rwanda",
  WS: "Samoa",
  SM: "San Marino",
  ST: "São Tomé & Príncipe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  KR: "South Korea",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  BL: "St. Barthélemy",
  SH: "St. Helena",
  KN: "St. Kitts & Nevis",
  LC: "St. Lucia",
  MF: "St. Martin",
  PM: "St. Pierre & Miquelon",
  VC: "St. Vincent & Grenadines",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard & Jan Mayen",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syria",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad & Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks & Caicos Islands",
  TV: "Tuvalu",
  UM: "U.S. Outlying Islands",
  VI: "U.S. Virgin Islands",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VA: "Vatican City",
  VE: "Venezuela",
  VN: "Vietnam",
  WF: "Wallis & Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

export const LanguageCode2Name: Record<ISO639_1LanguageCodeType, string> = {
  af: "Afrikaans",
  agq: "Aghem",
  ak: "Akan",
  am: "Amharic",
  ar: "Arabic",
  arn: "Mapuche",
  as: "Assamese",
  asa: "Asu",
  ast: "Asturian",
  az: "Azerbaijani",
  ba: "Bashkir",
  bas: "Basaa",
  be: "Belarusian",
  bem: "Bemba",
  bez: "Bena",
  bg: "Bulgarian",
  bm: "Bambara",
  bn: "Bangla",
  bo: "Tibetan",
  br: "Breton",
  brx: "Bodo",
  bs: "Bosnian",
  byn: "Blin",
  ca: "Catalan",
  ccp: "Chakma",
  ce: "Chechen",
  ceb: "Cebuano",
  cgg: "Chiga",
  chr: "Cherokee",
  ckb: "Kurdish, Sorani",
  co: "Corsican",
  cs: "Czech",
  cv: "Chuvash",
  cy: "Welsh",
  da: "Danish",
  dav: "Taita",
  de: "German",
  dje: "Zarma",
  dsb: "Lower Sorbian",
  dua: "Duala",
  dv: "Dhivehi",
  dyo: "Jola-Fonyi",
  dz: "Dzongkha",
  ebu: "Embu",
  ee: "Ewe",
  el: "Greek",
  en: "English",
  es: "Spanish",
  et: "Estonian",
  eu: "Basque",
  ewo: "Ewondo",
  fa: "Persian",
  ff: "Fulah",
  fi: "Finnish",
  fil: "Filipino",
  fo: "Faroese",
  fr: "French",
  fur: "Friulian",
  fy: "Western Frisian",
  ga: "Irish",
  gaa: "Ga",
  gd: "Scottish Gaelic",
  gez: "Geez",
  gl: "Galician",
  gn: "Guarani",
  gsw: "Swiss German",
  gu: "Gujarati",
  guz: "Gusii",
  gv: "Manx",
  ha: "Hausa",
  haw: "Hawaiian",
  he: "Hebrew",
  hi: "Hindi",
  hr: "Croatian",
  hsb: "Upper Sorbian",
  hu: "Hungarian",
  hy: "Armenian",
  id: "Indonesian",
  ig: "Igbo",
  ii: "Sichuan Yi",
  is: "Icelandic",
  it: "Italian",
  iu: "Inuktitut",
  ja: "Japanese",
  jgo: "Ngomba",
  jmc: "Machame",
  jv: "Javanese",
  ka: "Georgian",
  kab: "Kabyle",
  kaj: "Jju",
  kam: "Kamba",
  kcg: "Tyap",
  kde: "Makonde",
  kea: "Kabuverdianu",
  khq: "Koyra Chiini",
  ki: "Kikuyu",
  kk: "Kazakh",
  kkj: "Kako",
  kl: "Kalaallisut",
  kln: "Kalenjin",
  km: "Khmer",
  kn: "Kannada",
  ko: "Korean",
  kok: "Konkani",
  kpe: "Kpelle",
  ks: "Kashmiri",
  ksb: "Shambala",
  ksf: "Bafia",
  ksh: "Colognian",
  ku: "Kurdish",
  kw: "Cornish",
  ky: "Kyrgyz",
  lag: "Langi",
  lb: "Luxembourgish",
  lg: "Ganda",
  lkt: "Lakota",
  ln: "Lingala",
  lo: "Lao",
  lrc: "Northern Luri",
  lt: "Lithuanian",
  lu: "Luba-Katanga",
  luo: "Luo",
  luy: "Luyia",
  lv: "Latvian",
  mas: "Masai",
  mer: "Meru",
  mfe: "Morisyen",
  mg: "Malagasy",
  mgh: "Makhuwa-Meetto",
  mgo: "Metaʼ",
  mi: "Maori",
  mk: "Macedonian",
  ml: "Malayalam",
  mn: "Mongolian",
  mni: "Manipuri",
  moh: "Mohawk",
  mr: "Marathi",
  ms: "Malay",
  mt: "Maltese",
  mua: "Mundang",
  my: "Burmese",
  myv: "Erzya",
  mzn: "Mazanderani",
  naq: "Nama",
  nb: "Norwegian Bokmål",
  nd: "North Ndebele",
  nds: "Low German",
  ne: "Nepali",
  nl: "Dutch",
  nmg: "Kwasio",
  nn: "Norwegian Nynorsk",
  nnh: "Ngiemboon",
  nqo: "N’Ko",
  nr: "South Ndebele",
  nso: "Northern Sotho",
  nus: "Nuer",
  ny: "Nyanja",
  nyn: "Nyankole",
  oc: "Occitan",
  om: "Oromo",
  or: "Odia",
  os: "Ossetic",
  pa: "Punjabi",
  pl: "Polish",
  ps: "Pashto",
  pt: "Portuguese",
  qu: "Quechua",
  rm: "Romansh",
  rn: "Rundi",
  ro: "Romanian",
  rof: "Rombo",
  ru: "Russian",
  rw: "Kinyarwanda",
  rwk: "Rwa",
  sa: "Sanskrit",
  sah: "Sakha",
  saq: "Samburu",
  sat: "Santali",
  sbp: "Sangu",
  sc: "Sardinian",
  scn: "Sicilian",
  sd: "Sindhi",
  se: "Northern Sami",
  seh: "Sena",
  ses: "Koyraboro Senni",
  sg: "Sango",
  shi: "Tachelhit",
  si: "Sinhala",
  sk: "Slovak",
  sl: "Slovenian",
  smn: "Inari Sami",
  sn: "Shona",
  so: "Somali",
  sq: "Albanian",
  sr: "Serbian",
  ss: "Swati",
  st: "Southern Sotho",
  sv: "Swedish",
  sw: "Swahili",
  syr: "Syriac",
  ta: "Tamil",
  te: "Telugu",
  teo: "Teso",
  tg: "Tajik",
  th: "Thai",
  ti: "Tigrinya",
  tig: "Tigre",
  tk: "Turkmen",
  tn: "Tswana",
  to: "Tongan",
  tr: "Turkish",
  trv: "Taroko",
  ts: "Tsonga",
  tt: "Tatar",
  twq: "Tasawaq",
  tzm: "Central Atlas Tamazight",
  ug: "Uyghur",
  uk: "Ukrainian",
  ur: "Urdu",
  uz: "Uzbek",
  vai: "Vai",
  ve: "Venda",
  vi: "Vietnamese",
  vun: "Vunjo",
  wa: "Walloon",
  wae: "Walser",
  wal: "Wolaytta",
  wo: "Wolof",
  xh: "Xhosa",
  xog: "Soga",
  yav: "Yangben",
  yo: "Yoruba",
  yue: "Cantonese",
  zgh: "Standard Moroccan Tamazight",
  zh: "Chinese",
  zu: "Zulu",
};

export const lang_code_list = new Set<lang_country_two_letter_codes>([
  "ps-AF",
  "fa-AF",
  "uz-AF",
  "sv-AX",
  "sq-AL",
  "en-AL",
  "ar-DZ",
  "fr-DZ",
  "kab-DZ",
  "en-AS",
  "ca-AD",
  "en-AD",
  "ln-AO",
  "pt-AO",
  "en-AI",
  "es-AI",
  "en-AG",
  "es-AG",
  "en-AR",
  "es-AR",
  "hy-AM",
  "nl-AW",
  "es-AW",
  "en-AU",
  "en-AT",
  "de-AT",
  "az-AZ",
  "az-AZ",
  "en-BS",
  "es-BS",
  "ar-BH",
  "bn-BD",
  "ccp-BD",
  "en-BD",
  "en-BB",
  "es-BB",
  "be-BY",
  "ru-BY",
  "nl-BE",
  "en-BE",
  "fr-BE",
  "de-BE",
  "wa-BE",
  "en-BZ",
  "es-BZ",
  "fr-BJ",
  "yo-BJ",
  "en-BM",
  "es-BM",
  "dz-BT",
  "qu-BO",
  "es-BO",
  "bs-BA",
  "bs-BA",
  "hr-BA",
  "en-BA",
  "sr-BA",
  "sr-BA",
  "en-BW",
  "tn-BW",
  "en-BR",
  "pt-BR",
  "es-BR",
  "en-IO",
  "en-VG",
  "es-VG",
  "ms-BN",
  "ms-BN",
  "bg-BG",
  "en-BG",
  "fr-BF",
  "ff-BF",
  "en-BI",
  "fr-BI",
  "rn-BI",
  "km-KH",
  "agq-CM",
  "ksf-CM",
  "bas-CM",
  "dua-CM",
  "en-CM",
  "ewo-CM",
  "fr-CM",
  "ff-CM",
  "kkj-CM",
  "nmg-CM",
  "mgo-CM",
  "mua-CM",
  "nnh-CM",
  "jgo-CM",
  "yav-CM",
  "en-CA",
  "fr-CA",
  "iu-CA",
  "moh-CA",
  "es-CA",
  "es-IC",
  "kea-CV",
  "pt-CV",
  "nl-BQ",
  "es-BQ",
  "en-KY",
  "es-KY",
  "fr-CF",
  "ln-CF",
  "sg-CF",
  "es-EA",
  "ar-TD",
  "fr-TD",
  "en-CL",
  "arn-CL",
  "es-CL",
  "yue-CN",
  "zh-CN",
  "zh-CN",
  "en-CN",
  "ii-CN",
  "bo-CN",
  "ug-CN",
  "en-CX",
  "en-CC",
  "en-CO",
  "es-CO",
  "ar-KM",
  "fr-KM",
  "fr-CG",
  "ln-CG",
  "fr-CD",
  "ln-CD",
  "lu-CD",
  "sw-CD",
  "en-CK",
  "es-CR",
  "fr-CI",
  "hr-HR",
  "en-HR",
  "es-CU",
  "nl-CW",
  "es-CW",
  "en-CY",
  "el-CY",
  "tr-CY",
  "cs-CZ",
  "en-CZ",
  "da-DK",
  "en-DK",
  "fo-DK",
  "en-DG",
  "ar-DJ",
  "fr-DJ",
  "so-DJ",
  "en-DM",
  "es-DM",
  "es-DO",
  "qu-EC",
  "es-EC",
  "ar-EG",
  "es-SV",
  "fr-GQ",
  "pt-GQ",
  "es-GQ",
  "ar-ER",
  "byn-ER",
  "en-ER",
  "gez-ER",
  "tig-ER",
  "ti-ER",
  "en-EE",
  "et-EE",
  "en-SZ",
  "ss-SZ",
  "am-ET",
  "gez-ET",
  "om-ET",
  "so-ET",
  "ti-ET",
  "wal-ET",
  "en-FK",
  "es-FK",
  "fo-FO",
  "en-FJ",
  "en-FI",
  "fi-FI",
  "smn-FI",
  "se-FI",
  "sv-FI",
  "br-FR",
  "ca-FR",
  "co-FR",
  "en-FR",
  "fr-FR",
  "oc-FR",
  "pt-FR",
  "gsw-FR",
  "fr-GF",
  "es-GF",
  "fr-PF",
  "fr-GA",
  "en-GM",
  "ff-GM",
  "ka-GE",
  "os-GE",
  "ksh-DE",
  "en-DE",
  "de-DE",
  "nds-DE",
  "dsb-DE",
  "hsb-DE",
  "ak-GH",
  "en-GH",
  "ee-GH",
  "ff-GH",
  "gaa-GH",
  "ha-GH",
  "en-GI",
  "en-GR",
  "el-GR",
  "da-GL",
  "kl-GL",
  "es-GL",
  "en-GD",
  "es-GD",
  "fr-GP",
  "es-GP",
  "en-GU",
  "es-GT",
  "en-GG",
  "ff-GW",
  "pt-GW",
  "fr-GN",
  "ff-GN",
  "kpe-GN",
  "nqo-GN",
  "en-GY",
  "es-GY",
  "fr-HT",
  "es-HT",
  "es-HN",
  "yue-HK",
  "zh-HK",
  "zh-HK",
  "en-HK",
  "en-HU",
  "hu-HU",
  "en-IS",
  "is-IS",
  "as-IN",
  "bn-IN",
  "brx-IN",
  "ccp-IN",
  "en-IN",
  "gu-IN",
  "hi-IN",
  "kn-IN",
  "ks-IN",
  "ks-IN",
  "ks-IN",
  "kok-IN",
  "ml-IN",
  "mni-IN",
  "mni-IN",
  "mr-IN",
  "ne-IN",
  "or-IN",
  "pa-IN",
  "sa-IN",
  "sat-IN",
  "sat-IN",
  "ta-IN",
  "te-IN",
  "bo-IN",
  "ur-IN",
  "ur-IN",
  "ur-IN",
  "en-ID",
  "id-ID",
  "jv-ID",
  "ckb-IR",
  "mzn-IR",
  "lrc-IR",
  "fa-IR",
  "ar-IQ",
  "ckb-IQ",
  "lrc-IQ",
  "syr-IQ",
  "en-IE",
  "ga-IE",
  "en-IM",
  "gv-IM",
  "ar-IL",
  "en-IL",
  "he-IL",
  "ca-IT",
  "en-IT",
  "fur-IT",
  "de-IT",
  "it-IT",
  "sc-IT",
  "scn-IT",
  "en-JM",
  "en-JP",
  "ja-JP",
  "en-JE",
  "ar-JO",
  "kk-KZ",
  "ru-KZ",
  "ebu-KE",
  "en-KE",
  "guz-KE",
  "kln-KE",
  "kam-KE",
  "ki-KE",
  "luo-KE",
  "luy-KE",
  "mas-KE",
  "mer-KE",
  "om-KE",
  "saq-KE",
  "so-KE",
  "sw-KE",
  "dav-KE",
  "teo-KE",
  "en-KI",
  "sq-XK",
  "sr-XK",
  "sr-XK",
  "ar-KW",
  "ky-KG",
  "ru-KG",
  "lo-LA",
  "en-LV",
  "lv-LV",
  "ar-LB",
  "en-LS",
  "st-LS",
  "en-LR",
  "ff-LR",
  "kpe-LR",
  "vai-LR",
  "vai-LR",
  "ar-LY",
  "de-LI",
  "gsw-LI",
  "en-LT",
  "lt-LT",
  "en-LU",
  "fr-LU",
  "de-LU",
  "lb-LU",
  "pt-LU",
  "zh-MO",
  "zh-MO",
  "en-MO",
  "pt-MO",
  "en-MG",
  "fr-MG",
  "mg-MG",
  "en-MW",
  "ny-MW",
  "en-MY",
  "ms-MY",
  "ms-MY",
  "ta-MY",
  "dv-MV",
  "en-MV",
  "bm-ML",
  "fr-ML",
  "khq-ML",
  "ses-ML",
  "en-MT",
  "mt-MT",
  "en-MH",
  "fr-MQ",
  "es-MQ",
  "ar-MR",
  "fr-MR",
  "ff-MR",
  "en-MU",
  "fr-MU",
  "mfe-MU",
  "fr-YT",
  "en-MX",
  "es-MX",
  "en-FM",
  "ro-MD",
  "ru-MD",
  "fr-MC",
  "mn-MN",
  "en-ME",
  "sr-ME",
  "sr-ME",
  "en-MS",
  "es-MS",
  "ar-MA",
  "tzm-MA",
  "fr-MA",
  "zgh-MA",
  "shi-MA",
  "shi-MA",
  "mgh-MZ",
  "pt-MZ",
  "seh-MZ",
  "my-MM",
  "en-MM",
  "af-NA",
  "en-NA",
  "naq-NA",
  "en-NR",
  "ne-NP",
  "nl-NL",
  "en-NL",
  "nds-NL",
  "fy-NL",
  "fr-NC",
  "en-NZ",
  "mi-NZ",
  "es-NI",
  "fr-NE",
  "ff-NE",
  "ha-NE",
  "twq-NE",
  "dje-NE",
  "en-NG",
  "ff-NG",
  "ha-NG",
  "ig-NG",
  "kaj-NG",
  "kcg-NG",
  "yo-NG",
  "en-NU",
  "en-NF",
  "ko-KP",
  "sq-MK",
  "mk-MK",
  "en-MP",
  "en-NO",
  "se-NO",
  "nb-NO",
  "nn-NO",
  "ar-OM",
  "en-PK",
  "ps-PK",
  "pa-PK",
  "pa-PK",
  "sd-PK",
  "ur-PK",
  "ur-PK",
  "ur-PK",
  "en-PW",
  "ar-PS",
  "es-PA",
  "en-PG",
  "gn-PY",
  "es-PY",
  "qu-PE",
  "es-PE",
  "ceb-PH",
  "en-PH",
  "fil-PH",
  "es-PH",
  "en-PN",
  "en-PL",
  "pl-PL",
  "en-PT",
  "pt-PT",
  "en-PR",
  "es-PR",
  "ar-QA",
  "fr-RE",
  "en-RO",
  "ro-RO",
  "ba-RU",
  "ce-RU",
  "cv-RU",
  "en-RU",
  "myv-RU",
  "os-RU",
  "ru-RU",
  "sah-RU",
  "tt-RU",
  "en-RW",
  "fr-RW",
  "rw-RW",
  "en-WS",
  "it-SM",
  "pt-ST",
  "ar-SA",
  "en-SA",
  "fr-SN",
  "ff-SN",
  "dyo-SN",
  "wo-SN",
  "en-RS",
  "sr-RS",
  "sr-RS",
  "en-SC",
  "fr-SC",
  "en-SL",
  "ff-SL",
  "zh-SG",
  "en-SG",
  "ms-SG",
  "ta-SG",
  "nl-SX",
  "en-SX",
  "es-SX",
  "en-SK",
  "sk-SK",
  "en-SI",
  "sl-SI",
  "en-SB",
  "ar-SO",
  "so-SO",
  "af-ZA",
  "en-ZA",
  "nso-ZA",
  "nr-ZA",
  "st-ZA",
  "ss-ZA",
  "ts-ZA",
  "tn-ZA",
  "ve-ZA",
  "xh-ZA",
  "zu-ZA",
  "en-KR",
  "ko-KR",
  "ar-SS",
  "en-SS",
  "nus-SS",
  "ast-ES",
  "eu-ES",
  "ca-ES",
  "en-ES",
  "gl-ES",
  "es-ES",
  "si-LK",
  "ta-LK",
  "fr-BL",
  "es-BL",
  "en-SH",
  "en-KN",
  "es-KN",
  "en-LC",
  "es-LC",
  "fr-MF",
  "es-MF",
  "fr-PM",
  "es-PM",
  "en-VC",
  "es-VC",
  "ar-SD",
  "en-SD",
  "nl-SR",
  "es-SR",
  "nb-SJ",
  "en-SE",
  "se-SE",
  "sv-SE",
  "en-CH",
  "fr-CH",
  "de-CH",
  "it-CH",
  "pt-CH",
  "rm-CH",
  "gsw-CH",
  "wae-CH",
  "ar-SY",
  "fr-SY",
  "syr-SY",
  "zh-TW",
  "en-TW",
  "trv-TW",
  "tg-TJ",
  "asa-TZ",
  "bez-TZ",
  "en-TZ",
  "lag-TZ",
  "jmc-TZ",
  "kde-TZ",
  "mas-TZ",
  "rof-TZ",
  "rwk-TZ",
  "sbp-TZ",
  "ksb-TZ",
  "sw-TZ",
  "vun-TZ",
  "en-TH",
  "th-TH",
  "pt-TL",
  "ee-TG",
  "fr-TG",
  "en-TK",
  "en-TO",
  "to-TO",
  "en-TT",
  "es-TT",
  "ar-TN",
  "fr-TN",
  "en-TR",
  "ku-TR",
  "tr-TR",
  "tk-TM",
  "en-TC",
  "es-TC",
  "en-TV",
  "en-UM",
  "en-VI",
  "es-VI",
  "cgg-UG",
  "en-UG",
  "lg-UG",
  "nyn-UG",
  "xog-UG",
  "sw-UG",
  "teo-UG",
  "en-UA",
  "ru-UA",
  "uk-UA",
  "ar-AE",
  "en-AE",
  "kw-GB",
  "en-GB",
  "gd-GB",
  "cy-GB",
  "chr-US",
  "en-US",
  "haw-US",
  "lkt-US",
  "es-US",
  "es-UY",
  "uz-UZ",
  "uz-UZ",
  "en-VU",
  "fr-VU",
  "it-VA",
  "es-VE",
  "vi-VN",
  "fr-WF",
  "ar-EH",
  "ar-YE",
  "bem-ZM",
  "en-ZM",
  "en-ZW",
  "nd-ZW",
  "sn-ZW",
]);

export const ISO639_1LanguageCodes = new Set<ISO639_1LanguageCodeType>([
  "af",
  "agq",
  "ak",
  "am",
  "ar",
  "arn",
  "as",
  "asa",
  "ast",
  "az",
  "ba",
  "bas",
  "be",
  "bem",
  "bez",
  "bg",
  "bm",
  "bn",
  "bo",
  "br",
  "brx",
  "bs",
  "byn",
  "ca",
  "ccp",
  "ce",
  "ceb",
  "cgg",
  "chr",
  "ckb",
  "co",
  "cs",
  "cv",
  "cy",
  "da",
  "dav",
  "de",
  "dje",
  "dsb",
  "dua",
  "dv",
  "dyo",
  "dz",
  "ebu",
  "ee",
  "el",
  "en",
  "es",
  "et",
  "eu",
  "ewo",
  "fa",
  "ff",
  "fi",
  "fil",
  "fo",
  "fr",
  "fur",
  "fy",
  "ga",
  "gaa",
  "gd",
  "gez",
  "gl",
  "gn",
  "gsw",
  "gu",
  "guz",
  "gv",
  "ha",
  "haw",
  "he",
  "hi",
  "hr",
  "hsb",
  "hu",
  "hy",
  "id",
  "ig",
  "ii",
  "is",
  "it",
  "iu",
  "ja",
  "jgo",
  "jmc",
  "jv",
  "ka",
  "kab",
  "kaj",
  "kam",
  "kcg",
  "kde",
  "kea",
  "khq",
  "ki",
  "kk",
  "kkj",
  "kl",
  "kln",
  "km",
  "kn",
  "ko",
  "kok",
  "kpe",
  "ks",
  "ksb",
  "ksf",
  "ksh",
  "ku",
  "kw",
  "ky",
  "lag",
  "lb",
  "lg",
  "lkt",
  "ln",
  "lo",
  "lrc",
  "lt",
  "lu",
  "luo",
  "luy",
  "lv",
  "mas",
  "mer",
  "mfe",
  "mg",
  "mgh",
  "mgo",
  "mi",
  "mk",
  "ml",
  "mn",
  "mni",
  "moh",
  "mr",
  "ms",
  "mt",
  "mua",
  "my",
  "myv",
  "mzn",
  "naq",
  "nb",
  "nd",
  "nds",
  "ne",
  "nl",
  "nmg",
  "nn",
  "nnh",
  "nqo",
  "nr",
  "nso",
  "nus",
  "ny",
  "nyn",
  "oc",
  "om",
  "or",
  "os",
  "pa",
  "pl",
  "ps",
  "pt",
  "qu",
  "rm",
  "rn",
  "ro",
  "rof",
  "ru",
  "rw",
  "rwk",
  "sa",
  "sah",
  "saq",
  "sat",
  "sbp",
  "sc",
  "scn",
  "sd",
  "se",
  "seh",
  "ses",
  "sg",
  "shi",
  "si",
  "sk",
  "sl",
  "smn",
  "sn",
  "so",
  "sq",
  "sr",
  "ss",
  "st",
  "sv",
  "sw",
  "syr",
  "ta",
  "te",
  "teo",
  "tg",
  "th",
  "ti",
  "tig",
  "tk",
  "tn",
  "to",
  "tr",
  "trv",
  "ts",
  "tt",
  "twq",
  "tzm",
  "ug",
  "uk",
  "ur",
  "uz",
  "vai",
  "ve",
  "vi",
  "vun",
  "wa",
  "wae",
  "wal",
  "wo",
  "xh",
  "xog",
  "yav",
  "yo",
  "yue",
  "zgh",
  "zh",
  "zu",
]);
