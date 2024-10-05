const currencies = {
  "China": {
    "currency": "Chinese Yuan Renminbi",
    "symbol": "¥",
    "code": "CNY",
    "unit": "Yuan"
  },
  "Japan": {
    "currency": "Japanese Yen",
    "symbol": "¥",
    "code": "JPY",
    "unit": "Yen"
  },
  "Mongolia": {
    "currency": "Mongolian Tögrög",
    "symbol": "₮",
    "code": "MNT",
    "unit": "Tögrög"
  },
  "North Korea": {
    "currency": "North Korean Won",
    "symbol": "₩",
    "code": "KPW",
    "unit": "Won"
  },
  "South Korea": {
    "currency": "South Korean Won",
    "symbol": "₩",
    "code": "KRW",
    "unit": "Won"
  },
  "Taiwan": {
    "currency": "New Taiwan Dollar",
    "symbol": "NT$",
    "code": "TWD",
    "unit": "Dollar"
  },

	"Afghanistan": {
    "currency": "Afghan Afghani",
    "symbol": "؋",
    "code": "AFN",
    "unit": "Afghani"
  },
  "Bangladesh": {
    "currency": "Bangladeshi Taka",
    "symbol": "৳",
    "code": "BDT",
    "unit": "Taka"
  },
  "Bhutan": {
    "currency": "Bhutanese Ngultrum",
    "symbol": "Nu.",
    "code": "BTN",
    "unit": "Ngultrum"
  },
  "India": {
    "currency": "Indian Rupee",
    "symbol": "₹",
    "code": "INR",
    "unit": "Rupee"
  },
  "Maldives": {
    "currency": "Maldivian Rufiyaa",
    "symbol": ".ރ",
    "code": "MVR",
    "unit": "Rufiyaa"
  },
  "Nepal": {
    "currency": "Nepalese Rupee",
    "symbol": "₨",
    "code": "NPR",
    "unit": "Rupee"
  },
  "Pakistan": {
    "currency": "Pakistani Rupee",
    "symbol": "₨",
    "code": "PKR",
    "unit": "Rupee"
  },
  "Sri Lanka": {
    "currency": "Sri Lankan Rupee",
    "symbol": "Rs",
    "code": "LKR",
    "unit": "Rupee"
  },

  "Brunei": {
    "currency": "Brunei dollar",
    "symbol": "$",
    "code": "BND",
    "unit": "Dollar"
  },
  "Cambodia": {
    "currency": "Cambodian riel",
    "symbol": "៛",
    "code": "KHR",
    "unit": "Riel"
  },
  "Indonesia": {
    "currency": "Indonesian rupiah",
    "symbol": "Rp",
    "code": "IDR",
    "unit": "Rupiah"
  },
  "Laos": {
    "currency": "Lao kip",
    "symbol": "₭",
    "code": "LAK",
    "unit": "Kip"
  },
  "Malaysia": {
    "currency": "Malaysian ringgit",
    "symbol": "RM",
    "code": "MYR",
    "unit": "Ringgit"
  },
  "Myanmar (Burma)": {
    "currency": "Myanmar kyat",
    "symbol": "K",
    "code": "MMK",
    "unit": "Kyat"
  },
  "Philippines": {
    "currency": "Philippine peso",
    "symbol": "₱",
    "code": "PHP",
    "unit": "Peso"
  },
  "Singapore": {
    "currency": "Singapore dollar",
    "symbol": "$",
    "code": "SGD",
    "unit": "Dollar"
  },
  "Thailand": {
    "currency": "Thai baht",
    "symbol": "฿",
    "code": "THB",
    "unit": "Baht"
  },
  "Timor-Leste": {
    "currency": "United States dollar",
    "symbol": "$",
    "code": "USD",
    "unit": "Dollar"
  },
  "Vietnam": {
    "currency": "Vietnamese đồng",
    "symbol": "₫",
    "code": "VND",
    "unit": "Đồng"
  },

  "Kazakhstan": {
    "currency": "Kazakhstani tenge",
    "symbol": "₸",
    "code": "KZT",
    "unit": "Tenge"
  },
  "Kyrgyzstan": {
    "currency": "Kyrgyzstani som",
    "symbol": "сом",
    "code": "KGS",
    "unit": "Som"
  },
  "Tajikistan": {
    "currency": "Tajikistani somoni",
    "symbol": "ЅМ",
    "code": "TJS",
    "unit": "Somoni"
  },
  "Turkmenistan": {
    "currency": "Turkmenistan manat",
    "symbol": "m",
    "code": "TMT",
    "unit": "Manat"
  },
  "Uzbekistan": {
    "currency": "Uzbekistan som",
    "symbol": "so'm",
    "code": "UZS",
    "unit": "Som"
  },

  "Armenia": {
    "currency": "Armenian dram",
    "symbol": "֏",
    "code": "AMD",
    "unit": "Dram"
  },
  "Azerbaijan": {
    "currency": "Azerbaijani manat",
    "symbol": "₼",
    "code": "AZN",
    "unit": "Manat"
  },
  "Bahrain": {
    "currency": "Bahraini dinar",
    "symbol": "ب.د",
    "code": "BHD",
    "unit": "Dinar"
  },
  "Cyprus": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Georgia": {
    "currency": "Georgian lari",
    "symbol": "₾",
    "code": "GEL",
    "unit": "Lari"
  },
  "Iraq": {
    "currency": "Iraqi dinar",
    "symbol": "ع.د",
    "code": "IQD",
    "unit": "Dinar"
  },
  "Israel": {
    "currency": "Israeli new shekel",
    "symbol": "₪",
    "code": "ILS",
    "unit": "Shekel"
  },
  "Jordan": {
    "currency": "Jordanian dinar",
    "symbol": "د.ا",
    "code": "JOD",
    "unit": "Dinar"
  },
  "Kuwait": {
    "currency": "Kuwaiti dinar",
    "symbol": "ك.د",
    "code": "KWD",
    "unit": "Dinar"
  },
  "Lebanon": {
    "currency": "Lebanese pound",
    "symbol": "ل.ل",
    "code": "LBP",
    "unit": "Pound"
  },
  "Oman": {
    "currency": "Omani rial",
    "symbol": "ر.ع.",
    "code": "OMR",
    "unit": "Rial"
  },
  "Qatar": {
    "currency": "Qatari riyal",
    "symbol": "ق.ر",
    "code": "QAR",
    "unit": "Riyal"
  },
  "Saudi Arabia": {
    "currency": "Saudi riyal",
    "symbol": "ر.س",
    "code": "SAR",
    "unit": "Riyal"
  },
  "Syria": {
    "currency": "Syrian pound",
    "symbol": "£س",
    "code": "SYP",
    "unit": "Pound"
  },
  "Turkey": {
    "currency": "Turkish lira",
    "symbol": "₺",
    "code": "TRY",
    "unit": "Lira"
  },
  "United Arab Emirates": {
    "currency": "United Arab Emirates dirham",
    "symbol": "د.إ",
    "code": "AED",
    "unit": "Dirham"
  },
  "Yemen": {
    "currency": "Yemeni rial",
    "symbol": "﷼",
    "code": "YER",
    "unit": "Rial"
  },

  "Algeria": {
    "currency": "Algerian dinar",
    "symbol": "د.ج",
    "code": "DZD",
    "unit": "Dinar"
  },
  "Egypt": {
    "currency": "Egyptian pound",
    "symbol": "ج.م",
    "code": "EGP",
    "unit": "Pound"
  },
  "Libya": {
    "currency": "Libyan dinar",
    "symbol": "ل.د",
    "code": "LYD",
    "unit": "Dinar"
  },
  "Morocco": {
    "currency": "Moroccan dirham",
    "symbol": "د.م.",
    "code": "MAD",
    "unit": "Dirham"
  },
  "Sudan": {
    "currency": "Sudanese pound",
    "symbol": "ج.س.",
    "code": "SDG",
    "unit": "Pound"
  },
  "Tunisia": {
    "currency": "Tunisian dinar",
    "symbol": "د.ت",
    "code": "TND",
    "unit": "Dinar"
  },

  "Benin": {
    "currency": "West African CFA franc",
    "symbol": "CFA",
    "code": "XOF",
    "unit": "Franc"
  },
  "Burkina Faso": {
    "currency": "West African CFA franc",
    "symbol": "CFA",
    "code": "XOF",
    "unit": "Franc"
  },
  "Cape Verde": {
    "currency": "Cape Verde escudo",
    "symbol": "$",
    "code": "CVE",
    "unit": "Escudo"
  },
  "Côte d'Ivoire": {
    "currency": "West African CFA franc",
    "symbol": "CFA",
    "code": "XOF",
    "unit": "Franc"
  },
  "Gambia": {
    "currency": "Gambian dalasi",
    "symbol": "D",
    "code": "GMD",
    "unit": "Dalasi"
  },
  "Ghana": {
    "currency": "Ghanaian cedi",
    "symbol": "₵",
    "code": "GHS",
    "unit": "Cedi"
  },
  "Guinea": {
    "currency": "Guinean franc",
    "symbol": "FG",
    "code": "GNF",
    "unit": "Franc"
  },
  "Guinea-Bissau": {
    "currency": "West African CFA franc",
    "symbol": "CFA",
    "code": "XOF",
    "unit": "Franc"
  },
  "Liberia": {
    "currency": "Liberian dollar",
    "symbol": "$",
    "code": "LRD",
    "unit": "Dollar"
  },
  "Mali": {
    "currency": "West African CFA franc",
    "symbol": "CFA",
    "code": "XOF",
    "unit": "Franc"
  },
  "Mauritania": {
    "currency": "Mauritanian ouguiya",
    "symbol": "UM",
    "code": "MRO",
    "unit": "Ouguiya"
  },
  "Niger": {
    "currency": "West African CFA franc",
    "symbol": "CFA",
    "code": "XOF",
    "unit": "Franc"
  },
  "Nigeria": {
    "currency": "Nigerian naira",
    "symbol": "₦",
    "code": "NGN",
    "unit": "Naira"
  },
  "Senegal": {
    "currency": "West African CFA franc",
    "symbol": "CFA",
    "code": "XOF",
    "unit": "Franc"
  },
  "Sierra Leone": {
    "currency": "Sierra Leonean leone",
    "symbol": "Le",
    "code": "SLL",
    "unit": "Leone"
  },
  "Togo": {
    "currency": "West African CFA franc",
    "symbol": "CFA",
    "code": "XOF",
    "unit": "Franc"
  },

  "Burundi": {
    "currency": "Burundi franc",
    "symbol": "FBu",
    "code": "BIF",
    "unit": "Franc"
  },
  "Djibouti": {
    "currency": "Djibouti franc",
    "symbol": "FrDj",
    "code": "DJF",
    "unit": "Franc"
  },
  "Eritrea": {
    "currency": "Nakfa",
    "symbol": "Nfk",
    "code": "ERN",
    "unit": "Nakfa"
  },
  "Ethiopia": {
    "currency": "Ethiopian birr",
    "symbol": "Br",
    "code": "ETB",
    "unit": "Birr"
  },
  "Kenya": {
    "currency": "Kenyan shilling",
    "symbol": "KSh",
    "code": "KES",
    "unit": "Shilling"
  },
  "Madagascar": {
    "currency": "Malagasy ariary",
    "symbol": "Ar",
    "code": "MGA",
    "unit": "Ariary"
  },
  "Malawi": {
    "currency": "Malawian kwacha",
    "symbol": "MK",
    "code": "MWK",
    "unit": "Kwacha"
  },
  "Mauritius": {
    "currency": "Mauritian rupee",
    "symbol": "₨",
    "code": "MUR",
    "unit": "Rupee"
  },
  "Mozambique": {
    "currency": "Mozambican metical",
    "symbol": "MT",
    "code": "MZN",
    "unit": "Metical"
  },
  "Rwanda": {
    "currency": "Rwanda franc",
    "symbol": "RFw",
    "code": "RWF",
    "unit": "Franc"
  },
  "Seychelles": {
    "currency": "Seychelles rupee",
    "symbol": "₨",
    "code": "SCR",
    "unit": "Rupee"
  },
  "Somalia": {
    "currency": "Somali shilling",
    "symbol": "Sh",
    "code": "SOS",
    "unit": "Shilling"
  },
  "South Sudan": {
    "currency": "South Sudanese pound",
    "symbol": "£",
    "code": "SSP",
    "unit": "Pound"
  },
  "Tanzania": {
    "currency": "Tanzanian shilling",
    "symbol": "TSh",
    "code": "TZS",
    "unit": "Shilling"
  },
  "Uganda": {
    "currency": "Ugandan shilling",
    "symbol": "UGX",
    "code": "UGX",
    "unit": "Shilling"
  },
  "Zambia": {
    "currency": "Zambian kwacha",
    "symbol": "ZK",
    "code": "ZMW",
    "unit": "Kwacha"
  },
  "Zimbabwe": {
    "currency": "Zimbabwe dollar",
    "symbol": "Z$",
    "code": "ZWL",
    "unit": "Dollar"
  },

  "Angola": {
    "currency": "Kwanza",
    "symbol": "Kz",
    "code": "AOA",
    "unit": "Kwanza"
  },
  "Botswana": {
    "currency": "Pula",
    "symbol": "P",
    "code": "BWP",
    "unit": "Pula"
  },
  "Eswatini (Swaziland)": {
    "currency": "Lilangeni",
    "symbol": "L",
    "code": "SZL",
    "unit": "Lilangeni"
  },
  "Lesotho": {
    "currency": "Loti",
    "symbol": "L",
    "code": "LSL",
    "unit": "Loti"
  },
  "Namibia": {
    "currency": "Namibia dollar",
    "symbol": "N$",
    "code": "NAD",
    "unit": "Dollar"
  },
  "South Africa": {
    "currency": "South African rand",
    "symbol": "R",
    "code": "ZAR",
    "unit": "Rand"
  },

  "Cameroon": {
    "currency": "Central African CFA franc",
    "symbol": "CFA",
    "code": "XAF",
    "unit": "Franc"
  },
  "Central African Republic": {
    "currency": "Central African CFA franc",
    "symbol": "CFA",
    "code": "XAF",
    "unit": "Franc"
  },
  "Chad": {
    "currency": "Central African CFA franc",
    "symbol": "CFA",
    "code": "XAF",
    "unit": "Franc"
  },
  "Democratic Republic of the Congo": {
    "currency": "Congolese franc",
    "symbol": "FC",
    "code": "CDF",
    "unit": "Franc"
  },
  "Equatorial Guinea": {
    "currency": "Central African CFA franc",
    "symbol": "CFA",
    "code": "XAF",
    "unit": "Franc"
  },
  "Gabon": {
    "currency": "Central African CFA franc",
    "symbol": "CFA",
    "code": "XAF",
    "unit": "Franc"
  },
  "Republic of the Congo": {
    "currency": "Central African CFA franc",
    "symbol": "CFA",
    "code": "XAF",
    "unit": "Franc"
  },

  "Albania": {
    "currency": "Albanian lek",
    "symbol": "Lek",
    "code": "ALL",
    "unit": "Lek"
  },
  "Andorra": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Austria": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Belarus": {
    "currency": "Belarusian ruble",
    "symbol": "BYN",
    "code": "BYN",
    "unit": "Ruble"
  },
  "Belgium": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Bosnia and Herzegovina": {
    "currency": "Convertible Mark",
    "symbol": "KM",
    "code": "BAM",
    "unit": "Mark"
  },
  "Bulgaria": {
    "currency": "Bulgarian lev",
    "symbol": "лв",
    "code": "BGN",
    "unit": "Lev"
  },
  "Croatia": {
    "currency": "Croatian kuna",
    "symbol": "kn",
    "code": "HRK",
    "unit": "Kuna"
  },
  "Czech Republic": {
    "currency": "Czech koruna",
    "symbol": "Kč",
    "code": "CZK",
    "unit": "Koruna"
  },
  "Denmark": {
    "currency": "Danish krone",
    "symbol": "kr",
    "code": "DKK",
    "unit": "Krone"
  },
  "Estonia": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Finland": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "France": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Germany": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Greece": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Hungary": {
    "currency": "Hungarian forint",
    "symbol": "Ft",
    "code": "HUF",
    "unit": "Forint"
  },
  "Iceland": {
    "currency": "Icelandic króna",
    "symbol": "kr",
    "code": "ISK",
    "unit": "Króna"
  },
  "Ireland": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Italy": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Latvia": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Liechtenstein": {
    "currency": "Swiss franc",
    "symbol": "CHF",
    "code": "CHF",
    "unit": "Franc"
  },
  "Lithuania": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Luxembourg": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Malta": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Moldova": {
    "currency": "Moldovan leu",
    "symbol": "MDL",
    "code": "MDL",
    "unit": "Leu"
  },
  "Monaco": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Montenegro": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Netherlands": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "North Macedonia": {
    "currency": "Denar",
    "symbol": "ден",
    "code": "MKD",
    "unit": "Denar"
  },
  "Norway": {
    "currency": "Norwegian krone",
    "symbol": "kr",
    "code": "NOK",
    "unit": "Krone"
  },
  "Poland": {
    "currency": "Polish złoty",
    "symbol": "zł",
    "code": "PLN",
    "unit": "Złoty"
  },
  "Portugal": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Romania": {
    "currency": "Romanian leu",
    "symbol": "lei",
    "code": "RON",
    "unit": "Leu"
  },
  "Russia": {
    "currency": "Russian ruble",
    "symbol": "₽",
    "code": "RUB",
    "unit": "Ruble"
  },
  "San Marino": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Serbia": {
    "currency": "Serbian dinar",
    "symbol": "дин.",
    "code": "RSD",
    "unit": "Dinar"
  },
  "Slovakia": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Slovenia": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Spain": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },
  "Sweden": {
    "currency": "Swedish krona",
    "symbol": "kr",
    "code": "SEK",
    "unit": "Krona"
  },
  "Switzerland": {
    "currency": "Swiss franc",
    "symbol": "CHF",
    "code": "CHF",
    "unit": "Franc"
  },
  "Ukraine": {
    "currency": "Ukrainian hryvnia",
    "symbol": "₴",
    "code": "UAH",
    "unit": "Hryvnia"
  },
  "United Kingdom": {
    "currency": "Pound sterling",
    "symbol": "£",
    "code": "GBP",
    "unit": "Pound"
  },
  "Vatican City": {
    "currency": "Euro",
    "symbol": "€",
    "code": "EUR",
    "unit": "Euro"
  },

  "Argentina": {
    "currency": "Argentine peso",
    "symbol": "$",
    "code": "ARS",
    "unit": "Peso"
  },
  "Bolivia": {
    "currency": "Bolivian boliviano",
    "symbol": "Bs.",
    "code": "BOB",
    "unit": "Boliviano"
  },
  "Brazil": {
    "currency": "Brazilian real",
    "symbol": "R$",
    "code": "BRL",
    "unit": "Real"
  },
  "Chile": {
    "currency": "Chilean peso",
    "symbol": "$",
    "code": "CLP",
    "unit": "Peso"
  },
  "Colombia": {
    "currency": "Colombian peso",
    "symbol": "$",
    "code": "COP",
    "unit": "Peso"
  },
  "Ecuador": {
    "currency": "United States dollar",
    "symbol": "$",
    "code": "USD",
    "unit": "Dollar"
  },
  "Guyana": {
    "currency": "Guyanese dollar",
    "symbol": "$",
    "code": "GYD",
    "unit": "Dollar"
  },
  "Paraguay": {
    "currency": "Paraguayan guaraní",
    "symbol": "₲",
    "code": "PYG",
    "unit": "Guaraní"
  },
  "Peru": {
    "currency": "Peruvian sol",
    "symbol": "S/",
    "code": "PEN",
    "unit": "Sol"
  },
  "Suriname": {
    "currency": "Surinamese dollar",
    "symbol": "$",
    "code": "SRD",
    "unit": "Dollar"
  },
  "Uruguay": {
    "currency": "Uruguayan peso",
    "symbol": "$U",
    "code": "UYU",
    "unit": "Peso"
  },
  "Venezuela": {
    "currency": "Venezuelan bolívar soberano",
    "symbol": "Bs.S",
    "code": "VES",
    "unit": "Bolívar Soberano"
  },
	
  "Canada": {
    "currency": "Canadian dollar",
    "symbol": "$",
    "code": "CAD",
    "unit": "Dollar"
  },
  "United States": {
    "currency": "United States dollar",
    "symbol": "$",
    "code": "USD",
    "unit": "Dollar"
  },
  "Mexico": {
    "currency": "Mexican peso",
    "symbol": "$",
    "code": "MXN",
    "unit": "Peso"
  },
  "Cuba": {
    "currency": "Cuban peso",
    "symbol": "$",
    "code": "CUP",
    "unit": "Peso"
  },
  "Bahamas": {
    "currency": "Bahamian dollar",
    "symbol": "$",
    "code": "BSD",
    "unit": "Dollar"
  },
  "Jamaica": {
    "currency": "Jamaican dollar",
    "symbol": "J$",
    "code": "JMD",
    "unit": "Dollar"
  },
  "Haiti": {
    "currency": "Haitian gourde",
    "symbol": "G",
    "code": "HTG",
    "unit": "Gourde"
  },
  "Dominican Republic": {
    "currency": "Dominican peso",
    "symbol": "$",
    "code": "DOP",
    "unit": "Peso"
  },
  "Trinidad and Tobago": {
    "currency": "Trinidad and Tobago dollar",
    "symbol": "TT$",
    "code": "TTD",
    "unit": "Dollar"
  },
  "Antigua and Barbuda": {
    "currency": "East Caribbean dollar",
    "symbol": "EC$",
    "code": "XCD",
    "unit": "Dollar"
  },
  "Barbados": {
    "currency": "Barbados dollar",
    "symbol": "$",
    "code": "BBD",
    "unit": "Dollar"
  },
  "Belize": {
    "currency": "Belize dollar",
    "symbol": "BZ$",
    "code": "BZD",
    "unit": "Dollar"
  },
  "Costa Rica": {
    "currency": "Costa Rican colón",
    "symbol": "₡",
    "code": "CRC",
    "unit": "Colón"
  },
  "Dominica": {
    "currency": "East Caribbean dollar",
    "symbol": "EC$",
    "code": "XCD",
    "unit": "Dollar"
  },
  "El Salvador": {
    "currency": "United States dollar",
    "symbol": "$",
    "code": "USD",
    "unit": "Dollar"
  },
  "Grenada": {
    "currency": "East Caribbean dollar",
    "symbol": "EC$",
    "code": "XCD",
    "unit": "Dollar"
  },
  "Guatemala": {
    "currency": "Guatemalan quetzal",
    "symbol": "Q",
    "code": "GTQ",
    "unit": "Quetzal"
  },
  "Honduras": {
    "currency": "Honduran lempira",
    "symbol": "L",
    "code": "HNL",
    "unit": "Lempira"
  },
  "Nicaragua": {
    "currency": "Nicaraguan córdoba",
    "symbol": "C$",
    "code": "NIO",
    "unit": "Córdoba"
  },
  "Panama": {
    "currency": "United States dollar",
    "symbol": "$",
    "code": "USD",
    "unit": "Dollar"
  },
  "Saint Kitts and Nevis": {
    "currency": "East Caribbean dollar",
    "symbol": "EC$",
    "code": "XCD",
    "unit": "Dollar"
  },
  "Saint Lucia": {
    "currency": "East Caribbean dollar",
    "symbol": "EC$",
    "code": "XCD",
    "unit": "Dollar"
  },
  "Saint Vincent and the Grenadines": {
    "currency": "East Caribbean dollar",
    "symbol": "EC$",
    "code": "XCD",
    "unit": "Dollar"
  },

  "Australia": {
    "currency": "Australian dollar",
    "symbol": "$",
    "code": "AUD",
    "unit": "Dollar"
  },
  "New Zealand": {
    "currency": "New Zealand dollar",
    "symbol": "$",
    "code": "NZD",
    "unit": "Dollar"
  },
  "Papua New Guinea": {
    "currency": "Papua New Guinean kina",
    "symbol": "K",
    "code": "PGK",
    "unit": "Kina"
  },
  "Solomon Islands": {
    "currency": "Solomon Islands dollar",
    "symbol": "$",
    "code": "SBD",
    "unit": "Dollar"
  },
  "Vanuatu": {
    "currency": "Vatu",
    "symbol": "Vt",
    "code": "VUV",
    "unit": "Vatu"
  },
  "Fiji": {
    "currency": "Fijian dollar",
    "symbol": "$",
    "code": "FJD",
    "unit": "Dollar"
  },
  "Micronesia": {
    "currency": "United States dollar",
    "symbol": "$",
    "code": "USD",
    "unit": "Dollar"
  },
  "Palau": {
    "currency": "United States dollar",
    "symbol": "$",
    "code": "USD",
    "unit": "Dollar"
  },
  "Marshall Islands": {
    "currency": "United States dollar",
    "symbol": "$",
    "code": "USD",
    "unit": "Dollar"
  },
  "Kiribati": {
    "currency": "Australian dollar",
    "symbol": "$",
    "code": "AUD",
    "unit": "Dollar"
  },
  "Nauru": {
    "currency": "Australian dollar",
    "symbol": "$",
    "code": "AUD",
    "unit": "Dollar"
  },
  "Tonga": {
    "currency": "Tongan paʻanga",
    "symbol": "T$",
    "code": "TOP",
    "unit": "Paʻanga"
  },
  "Samoa": {
    "currency": "Samoan tala",
    "symbol": "WST",
    "code": "WST",
    "unit": "Tala"
  }
}

export default currencies;