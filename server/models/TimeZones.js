const timezones = {
	"China": [
		"Asia/Shanghai"
	],
	"Japan": [
		"Asia/Tokyo"
	],
	"Mongolia": [
		"Asia/Ulaanbaatar"
	],
	"North Korea": [
		"Asia/Pyongyang"
	],
	"South Korea": [
		"Asia/Seoul"
	],
	"Taiwan": [
		"Asia/Taipei"
	],
	"Afghanistan": [
		"Asia/Kabul"
	],
	"Bangladesh": [
		"Asia/Dhaka"
	],
	"Bhutan": [
		"Asia/Thimphu"
	],
	"India": [
		"Asia/Kolkata"
	],
	"Maldives": [
		"Indian/Maldives"
	],
	"Nepal": [
		"Asia/Kathmandu"
	],
	"Pakistan": [
		"Asia/Karachi"
	],
	"Sri Lanka": [
		"Asia/Colombo"
	],
	"Brunei": [
		"Asia/Brunei"
	],
	"Cambodia": [
		"Asia/Phnom_Penh"
	],
	"Indonesia": [
		"Asia/Jakarta"
	],
	"Laos": [
		"Asia/Vientiane"
	],
	"Malaysia": [
		"Asia/Kuala_Lumpur"
	],
	"Myanmar (Burma)": [
		"Asia/Yangon"
	],
	"Philippines": [
		"Asia/Manila"
	],
	"Singapore": [
		"Asia/Singapore"
	],
	"Thailand": [
		"Asia/Bangkok"
	],
	"Timor-Leste": [
		"Asia/Dili"
	],
	"Vietnam": [
		"Asia/Ho_Chi_Minh"
	],
	"Kazakhstan": [
		"Asia/Almaty"
	],
	"Kyrgyzstan": [
		"Asia/Bishkek"
	],
	"Tajikistan": [
		"Asia/Dushanbe"
	],
	"Turkmenistan": [
		"Asia/Ashgabat"
	],
	"Uzbekistan": [
		"Asia/Tashkent"
	],
	"Armenia": [
		"Asia/Yerevan"
	],
	"Azerbaijan": [
		"Asia/Baku"
	],
	"Bahrain": [
		"Asia/Bahrain"
	],
	"Cyprus": [
		"Asia/Nicosia"
	],
	"Georgia": [
		"Asia/Tbilisi"
	],
	"Iraq": [
		"Asia/Baghdad"
	],
	"Israel": [
		"Asia/Jerusalem"
	],
	"Jordan": [
		"Asia/Amman"
	],
	"Kuwait": [
		"Asia/Kuwait"
	],
	"Lebanon": [
		"Asia/Beirut"
	],
	"Oman": [
		"Asia/Muscat"
	],
	"Saudi Arabia": [
		"Asia/Riyadh"
	],
	"Syria": [
		"Asia/Damascus"
	],
	"Turkey": [
		"Asia/Istanbul"
	],
	"United Arab Emirates": [
		"Asia/Dubai"
	],
	"Yemen": [
		"Asia/Aden"
	],
	"Algeria": [
		"Africa/Algiers"
	],
	"Egypt": [
		"Africa/Cairo"
	],
	"Libya": [
		"Africa/Tripoli"
	],
	"Morocco": [
		"Africa/Casablanca"
	],
	"Sudan": [
		"Africa/Khartoum"
	],
	"Tunisia": [
		"Africa/Tunis"
	],
	"Benin": [
		"Africa/Lagos"
	],
	"Burkina Faso": [
		"Africa/Ouagadougou"
	],
	"Cape Verde": [
		"Atlantic/Cape_Verde"
	],
	"Côte d'Ivoire": [
		"Africa/Abidjan"
	],
	"Gambia": [
		"Africa/Banjul"
	],
	"Ghana": [
		"Africa/Accra"
	],
	"Guinea": [
		"Africa/Conakry"
	],
	"Guinea-Bissau": [
		"Africa/Bissau"
	],
	"Liberia": [
		"Africa/Monrovia"
	],
	"Mali": [
		"Africa/Bamako"
	],
	"Niger": [
		"Africa/Niamey"
	],
	"Nigeria": [
		"Africa/Lagos"
	],
	"Senegal": [
		"Africa/Dakar"
	],
	"Sierra Leone": [
		"Africa/Freetown"
	],
	"Togo": [
		"Africa/Lome"
	],
	"Burundi": [
		"Africa/Bujumbura"
	],
	"Djibouti": [
		"Africa/Djibouti"
	],
	"Eritrea": [
		"Africa/Asmara"
	],
	"Ethiopia": [
		"Africa/Addis_Ababa"
	],
	"Kenya": [
		"Africa/Nairobi"
	],
	"Madagascar": [
		"Indian/Antananarivo"
	],
	"Malawi": [
		"Africa/Blantyre"
	],
	"Mauritius": [
		"Indian/Mauritius"
	],
	"Mozambique": [
		"Africa/Maputo"
	],
	"Rwanda": [
		"Africa/Kigali"
	],
	"Seychelles": [
		"Indian/Mahe"
	],
	"Somalia": [
		"Africa/Mogadishu"
	],
	"South Sudan": [
		"Africa/Juba"
	],
	"Tanzania": [
		"Africa/Dar_es_Salaam"
	],
	"Uganda": [
		"Africa/Kampala"
	],
	"Zambia": [
		"Africa/Lusaka"
	],
	"Zimbabwe": [
		"Africa/Harare"
	],
	"Angola": [
		"Africa/Luanda"
	],
	"Botswana": [
		"Africa/Gaborone"
	],
	"Eswatini (Swaziland)": [
		"Africa/Mbabane"
	],
	"Lesotho": [
		"Africa/Maseru"
	],
	"Namibia": [
		"Africa/Windhoek"
	],
	"South Africa": [
		"Africa/Johannesburg"
	],
	"Cameroon": [
		"Africa/Douala"
	],
	"Central African Republic": [
		"Africa/Bangui"
	],
	"Chad": [
		"Africa/Ndjamena"
	],
	"Democratic Republic of the Congo": [
		"Africa/Kinshasa"
	],
	"Equatorial Guinea": [
		"Africa/Malabo"
	],
	"Gabon": [
		"Africa/Libreville"
	],
	"Republic of the Congo": [
		"Africa/Brazzaville"
	],
	"Albania": [
		"Europe/Tirane"
	],
	"Andorra": [
		"Europe/Andorra"
	],
	"Austria": [
		"Europe/Vienna"
	],
	"Belarus": [
		"Europe/Minsk"
	],
	"Belgium": [
		"Europe/Brussels"
	],
	"Bosnia and Herzegovina": [
		"Europe/Sarajevo"
	],
	"Bulgaria": [
		"Europe/Sofia"
	],
	"Croatia": [
		"Europe/Zagreb"
	],
	"Czech Republic": [
		"Europe/Prague"
	],
	"Denmark": [
		"Europe/Copenhagen"
	],
	"Estonia": [
		"Europe/Tallinn"
	],
	"Finland": [
		"Europe/Helsinki"
	],
	"France": [
		"Europe/Paris"
	],
	"Germany": [
		"Europe/Berlin"
	],
	"Greece": [
		"Europe/Athens"
	],
	"Hungary": [
		"Europe/Budapest"
	],
	"Iceland": [
		"Atlantic/Reykjavik"
	],
	"Ireland": [
		"Europe/Dublin"
	],
	"Italy": [
		"Europe/Rome"
	],
	"Latvia": [
		"Europe/Riga"
	],
	"Liechtenstein": [
		"Europe/Zurich"
	],
	"Lithuania": [
		"Europe/Vilnius"
	],
	"Luxembourg": [
		"Europe/Luxembourg"
	],
	"Malta": [
		"Europe/Malta"
	],
	"Moldova": [
		"Europe/Chisinau"
	],
	"Monaco": [
		"Europe/Paris"
	],
	"Montenegro": [
		"Europe/Podgorica"
	],
	"Netherlands": [
		"Europe/Amsterdam"
	],
	"North Macedonia": [
		"Europe/Skopje"
	],
	"Norway": [
		"Europe/Oslo"
	],
	"Poland": [
		"Europe/Warsaw"
	],
	"Portugal": [
		"Europe/Lisbon"
	],
	"Romania": [
		"Europe/Bucharest"
	],
	"Russia": [
		"Europe/Moscow"
	],
	"San Marino": [
		"Europe/Rome"
	],
	"Serbia": [
		"Europe/Belgrade"
	],
	"Slovakia": [
		"Europe/Bratislava"
	],
	"Slovenia": [
		"Europe/Ljubljana"
	],
	"Spain": [
		"Europe/Madrid"
	],
	"Sweden": [
		"Europe/Stockholm"
	],
	"Switzerland": [
		"Europe/Zurich"
	],
	"Ukraine": [
		"Europe/Kiev"
	],
	"United Kingdom": [
		"Europe/London"
	],
	"Vatican City": [
		"Europe/Rome"
	],
	"Argentina": [
		"America/Buenos_Aires"
	],
	"Bolivia": [
		"America/La_Paz"
	],
	"Brazil": [
		"America/Sao_Paulo"
	],
	"Chile": [
		"America/Santiago"
	],
	"Colombia": [
		"America/Bogota"
	],
	"Ecuador": [
		"America/Guayaquil"
	],
	"Guyana": [
		"America/Guyana"
	],
	"Paraguay": [
		"America/Asuncion"
	],
	"Peru": [
		"America/Lima"
	],
	"Suriname": [
		"America/Paramaribo"
	],
	"Uruguay": [
		"America/Montevideo"
	],
	"Venezuela": [
		"America/Caracas"
	],
	"Canada": [
		"America/Toronto"
	],
	"United States": [
		"America/New_York"
	],
	"Mexico": [
		"America/Mexico_City"
	],
	"Cuba": [
		"America/Havana"
	],
	"Bahamas": [
		"America/Nassau"
	],
	"Jamaica": [
		"America/Jamaica"
	],
	"Haiti": [
		"America/Port-au-Prince"
	],
	"Dominican Republic": [
		"America/Santo_Domingo"
	],
	"Trinidad and Tobago": [
		"America/Port_of_Spain"
	],
	"Antigua and Barbuda": [
		"America/Antigua"
	],
	"Barbados": [
		"America/Barbados"
	],
	"Belize": [
		"America/Belize"
	],
	"Costa Rica": [
		"America/Costa_Rica"
	],
	"Dominica": [
		"America/Dominica"
	],
	"El Salvador": [
		"America/El_Salvador"
	],
	"Grenada": [
		"America/Grenada"
	],
	"Guatemala": [
		"America/Guatemala"
	],
	"Honduras": [
		"America/Tegucigalpa"
	],
	"Nicaragua": [
		"America/Managua"
	],
	"Panama": [
		"America/Panama"
	],
	"Saint Kitts and Nevis": [
		"America/St_Kitts"
	],
	"Saint Vincent and the Grenadines": [
		"America/St_Vincent"
	],
	"Australia": [
		"Australia/Sydney"
	],
	"New Zealand": [
		"Pacific/Auckland"
	],
	"Papua New Guinea": [
		"Pacific/Port_Moresby"
	],
	"Solomon Islands": [
		"Pacific/Guadalcanal"
	],
	"Fiji": [
		"Pacific/Fiji"
	],
	"Micronesia": [
		"Pacific/Chuuk"
	],
	"Palau": [
		"Pacific/Palau"
	],
	"Marshall Islands": [
		"Pacific/Majuro"
	],
	"Kiribati": [
		"Pacific/Tarawa"
	],
	"Nauru": [
		"Pacific/Nauru"
	],
	"Tonga": [
		"Pacific/Tongatapu"
	],
	"Samoa": [
		"Pacific/Apia"
	]
}

export default timezones;