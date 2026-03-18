const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://rczjersfygughcmvuncq.supabase.co",
  "sb_publishable_AUx-0WAnYfeVrd0SYoZh-A_0xM2jWSN"
);

// ── PROVIDERS ──────────────────────────────────────────────
const providers = [
  {
    name: "Wild Cabo Tours",
    contact_phone: "+52 (624) 105 0177",
    contact_email: "info@wildcabotours.com",
    notes: "Fleet: Cabo Escape, Cabo Legend, Cabo Wave, Tu Enamorado, Buccaneer Queen. Meeting point: La Terminal de Cabo (behind Breathless Hotel). Address: 3320 Boulevard Paseo de la Marina, Cabo San Lucas, BCS 23450",
  },
  {
    name: "Canopy Costa Azul",
    contact_phone: "(624) 1059311",
    contact_email: "reserve@canopycostaazul.com",
    notes: "Location: Costa Azul Canyon, San Jose del Cabo, B.C.S. ~10 min from San Jose del Cabo, ~40 min from Cabo San Lucas. Equipment: PETZL PRO. 14 years of operation.",
  },
  {
    name: "Cactus Tours",
    contact_phone: "+52 624 171 8790",
    contact_email: "onlinereservations@cactusatvtours.com",
    notes: "Address: Carretera Federal 19 KM 100 Migriño, 23597 Cabo San Lucas, B.C.S. All tours have additional $25 USD park entrance fee. Hours: 8am-5pm daily. Kids Club available free with any tour.",
  },
];

// ── ACTIVITIES ─────────────────────────────────────────────
// providerIndex maps to providers array above

const activities = [
  // ═══════════════════════════════════════════════════════════
  // WILD CABO TOURS (providerIndex: 0)
  // ═══════════════════════════════════════════════════════════
  {
    providerIndex: 0,
    name_en: "Marine Safari in Cabo San Lucas",
    name_es: "Safari Marino en Cabo San Lucas",
    description_en: "Set off on an unforgettable adventure through the majestic Sea of Cortez and witness incredible marine life up close -- humpback whales, dolphins, sea turtles, sea lions, and manta rays! Scenic cruise by El Arco, Lover's Beach, Divorce Beach, and rock formations. Optional beach stop (weather permitting). Family-friendly with morning and afternoon departures. Duration: 2 hours.",
    description_es: "Embárcate en una aventura inolvidable por el majestuoso Mar de Cortés y observa la increíble vida marina de cerca: ballenas jorobadas, delfines, tortugas marinas, lobos marinos y mantarrayas. Crucero panorámico por El Arco, Playa del Amor, Playa del Divorcio y formaciones rocosas. Duración: 2 horas.",
    category: "boat",
    price_usd: 72,
    price_mxn: 0,
    emoji: "🐋",
    image_url: "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2025/12/MARINE-SAFARI-in-Cabo-San-Lucas-image-1.jpg",
  },
  {
    providerIndex: 0,
    name_en: "Land's End Paddle Boarding Tour",
    name_es: "Tour de Paddle Board a Land's End",
    description_en: "We departure from Medano Beach toward the Arch of Cabo San Lucas with the sun rising on the horizon, where you'll have a unique opportunity to take up-close photos. Discover the stunting rock formations, like the Neptune's finger and the Pelicans Rock, later on take a bath sun on the Lover's beach. All the tour will be guided and assisted by our team to insurance your experience goes perfect. Maximum 4 people per group. Duration: 2 hours.",
    description_es: "Salimos de Playa Médano hacia el Arco de Cabo San Lucas con el sol saliendo en el horizonte, donde tendrás la oportunidad única de tomar fotos de cerca. Descubre las impresionantes formaciones rocosas como el Dedo de Neptuno y la Roca de los Pelícanos, y después toma el sol en la Playa del Amor. Máximo 4 personas por grupo. Duración: 2 horas.",
    category: "adventure",
    price_usd: 69,
    price_mxn: 0,
    emoji: "🏄",
    image_url: null,
  },
  {
    providerIndex: 0,
    name_en: "Land's End Tour",
    name_es: "Tour a Land's End",
    description_en: "Visit the World Famous El Arco, Lover's Beach, The Window, Neptunes Finger. Duration: 45 minutes.",
    description_es: "Visita el famoso Arco, Playa del Amor, La Ventana, el Dedo de Neptuno. Duración: 45 minutos.",
    category: "boat",
    price_usd: 40,
    price_mxn: 0,
    emoji: "⛵",
    image_url: "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2025/11/la-terminalDJI_0038.jpg",
  },
  {
    providerIndex: 0,
    name_en: "Parasailing",
    name_es: "Parasailing",
    description_en: "Enjoy a smooth and exciting parasailing experience as you soar above Cabo's coastline, taking in stunning views of the ocean, beaches, and iconic landmarks. 50 minutes total with 10-minute aerial flight. Includes boat cruise through Bay of Cabo San Lucas with views of El Arco, Lover's Beach, and rock formations. Private experience upgrade available for $450 USD (up to 6 guests). Port fee $5 USD/person additional.",
    description_es: "Disfruta de una experiencia emocionante de parasailing mientras vuelas sobre la costa de Cabo, contemplando impresionantes vistas del océano, playas y monumentos icónicos. 50 minutos totales con 10 minutos de vuelo. Incluye crucero por la Bahía de Cabo San Lucas con vistas al Arco y Playa del Amor. Duración: 50 minutos.",
    category: "adventure",
    price_usd: 79,
    price_mxn: 0,
    emoji: "🪂",
    image_url: "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2025/12/Parasailing-image-1.jpg",
  },
  {
    providerIndex: 0,
    name_en: "Sunset Fajita Dinner & Entertainment Cruise",
    name_es: "Crucero de Cena Fajitas al Atardecer con Entretenimiento",
    description_en: "Enjoy an exciting sightseeing cruise of the world-famous Land's End, a spectacular sunset, and a delicious dinner prepared right on deck. Cabo's greatest party starter for all ages. Includes chicken or beef fajitas prepared on deck, bottomless open bar featuring tropical cocktails, live music and dancing, views of Land's End and the Arch. Boat: Cabo Escape. Duration: 2 hours.",
    description_es: "Disfruta de un emocionante crucero panorámico del famoso Land's End, un espectacular atardecer y una deliciosa cena preparada en cubierta. Incluye fajitas de pollo o res, barra libre con cócteles tropicales, música en vivo y baile. Barco: Cabo Escape. Duración: 2 horas.",
    category: "boat",
    price_usd: 99,
    price_mxn: 0,
    emoji: "🌅",
    image_url: "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/10/Cabo-Escape-Sunset.jpg",
  },
  {
    providerIndex: 0,
    name_en: "Sunset Yacht & Dinner Cruise - Tu Enamorado",
    name_es: "Crucero en Yate al Atardecer con Cena - Tu Enamorado",
    description_en: "Enjoy an Adults only exciting sightseeing sail of the world-famous Land's End, a spectacular sunset, with a high end dinner and premium open bar on our beautiful yacht! Welcome signature cocktail and antipasto platter (charcuterie, cheeses, olives, melon, nuts, bruschettas). Dinner: Baja Duo - Jumbo shrimp Kabob over a delicious beef filet with red wine sauce, organic green salad. Top the shelf brands in the open premium bar prepared by our in-house mixologist. Live music and dancing. Boat: Tu Enamorado. Adults only (18+). Duration: 3 hours.",
    description_es: "Disfruta de un emocionante crucero en velero solo para adultos por el famoso Land's End, con un espectacular atardecer, cena de alta cocina y barra premium. Cóctel de bienvenida y plato de antipasto. Cena: Dúo Baja - Brocheta de camarón jumbo sobre filete de res con salsa de vino tinto. Barra premium con mixólogo. Barco: Tu Enamorado. Solo adultos (18+). Duración: 3 horas.",
    category: "yacht",
    price_usd: 199,
    price_mxn: 0,
    emoji: "🛥️",
    image_url: null,
  },
  {
    providerIndex: 0,
    name_en: "Yo Ho Ho Sunset Dinner & Pirate Show Cruise",
    name_es: "Crucero Pirata Yo Ho Ho al Atardecer con Cena y Show",
    description_en: "Hop aboard our wooden pirate ship and hoist sails as part of our hands-on pirate adventure. A phenomenal thematic tour with animation, acrobats, and fire. Hear tall tales of Cabo's pirate history and secrets while enjoying the famous Baja sunsets. Chant, dance, and shout with our pirate crew -- guest participation highly recommended. Includes BBQ ribs and chicken prepared onboard using our galley secret pirate recipe, open bar with wine/beer/cocktails. Boat: Cabo Legend. Duration: 2 hours.",
    description_es: "Sube a nuestro barco pirata de madera y prepárate para una aventura pirata interactiva. Un tour temático fenomenal con animación, acróbatas y fuego. Escucha historias de la historia pirata de Cabo mientras disfrutas los famosos atardeceres de Baja. Incluye costillas BBQ y pollo preparados a bordo con receta secreta pirata, barra libre. Barco: Cabo Legend. Duración: 2 horas.",
    category: "boat",
    price_usd: 99,
    price_mxn: 0,
    emoji: "🏴‍☠️",
    image_url: null,
  },
  {
    providerIndex: 0,
    name_en: "Luxury Sunset Dinner - Cabo Wave",
    name_es: "Cena de Lujo al Atardecer - Cabo Wave",
    description_en: "Enjoy an exciting sightseeing cruise of the world-famous Land's End, a spectacular sunset, with a great dinner and open bar. DJ & MC keep you entertained. An idyllic experience to the rhythm of great music and the swing of the waves. Includes signature cocktails and international open bar, traditional Mexican cuisine (homemade tamales, fajitas, chef's salad), live music entertainment. Boat: Cabo Wave. Duration: 2 hours.",
    description_es: "Disfruta de un emocionante crucero panorámico del famoso Land's End, un espectacular atardecer, con una gran cena y barra libre. DJ y MC te mantienen entretenido. Una experiencia idílica al ritmo de buena música y el vaivén de las olas. Incluye cócteles de autor, cocina mexicana tradicional (tamales caseros, fajitas, ensalada del chef). Barco: Cabo Wave. Duración: 2 horas.",
    category: "boat",
    price_usd: 99,
    price_mxn: 0,
    emoji: "🍽️",
    image_url: null,
  },
  {
    providerIndex: 0,
    name_en: "Yo Ho Show (Buccaneer Queen) - Sunset",
    name_es: "Yo Ho Show (Buccaneer Queen) - Atardecer",
    description_en: "See the most beautiful sights in Cabo San Lucas illuminated by the magnificent sunset. A phenomenal thematic tour with animation, fire and acrobats. Journey to the Arch for photos, Pacific coast exploration, exclusive residences, games and contests on the bay. Pirate show featuring a captain who lost everything and must journey to regain his ship, crew, and treasure -- with lights and audio effects, laughs, emotion, suspense, and lots of fun. Includes dinner and open bar (18+ to drink). Boat: Buccaneer Queen. Duration: 2 hours.",
    description_es: "Contempla los paisajes más hermosos de Cabo San Lucas iluminados por el magnífico atardecer. Un tour temático fenomenal con animación, fuego y acróbatas. Show pirata con un capitán que perdió todo y debe emprender un viaje para recuperar su barco, tripulación y tesoro. Incluye cena y barra libre (18+ para bebidas alcohólicas). Barco: Buccaneer Queen. Duración: 2 horas.",
    category: "boat",
    price_usd: 99,
    price_mxn: 0,
    emoji: "🏴‍☠️",
    image_url: "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/10/0-Buccaneer-barco1.jpg",
  },
  {
    providerIndex: 0,
    name_en: "Snorkel Fun with Lunch",
    name_es: "Snorkel Divertido con Almuerzo",
    description_en: "Visit Cabo's world-famous Arch at Land's End, then enjoy a scenic cruise up the Sea of Cortez. Snorkeling at Chileno Bay, one of the best snorkel spots in Baja, with provided gear and experienced guide. Enjoy a delicious lunch prepared right on board along with an open bar. Return with reggae, Latin and light dance music plus fun and games. Boat: Cabo Escape. Duration: 3.5 hours.",
    description_es: "Visita el famoso Arco en Land's End, luego disfruta un crucero panorámico por el Mar de Cortés. Snorkel en Bahía Chileno, uno de los mejores spots de snorkel en Baja, con equipo y guía experimentado. Almuerzo delicioso preparado a bordo y barra libre. Barco: Cabo Escape. Duración: 3.5 horas.",
    category: "boat",
    price_usd: 99,
    price_mxn: 0,
    emoji: "🤿",
    image_url: "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/10/Snorkel-Fun-Lunch-image-1.jpg",
  },
  {
    providerIndex: 0,
    name_en: "Treasure Hunt Guided Snorkel & Lunch Pirate Tour",
    name_es: "Tour Pirata de Snorkel y Almuerzo - Búsqueda del Tesoro",
    description_en: "Tour transports you back in time to experience Cabo's 500-year pirate history. Tall tales about Cabo history and the pirates that sailed its seas, working sails, snorkeling at anchor. Striking sails and viewing the world-famous arch while hearing tall tales. For those looking to get loose, relax, and act like a real pirate for a day. Includes guided snorkeling, full lunch buffet (beef and chicken burritos, guacamole, chips, salads), open bar (grog/pirate rum punch, Mai Tais, margaritas, lots of juices for the kids), live music. Get Your Guide Award Winner 2019. Boat: Cabo Legend. Duration: 3.5 hours.",
    description_es: "Un tour que te transporta en el tiempo para vivir los 500 años de historia pirata de Cabo. Historias de los piratas que navegaron estos mares, velas de trabajo, snorkel. Incluye snorkel guiado, bufete completo (burritos de res y pollo, guacamole, chips, ensaladas), barra libre (grog, Mai Tais, margaritas), música en vivo. Barco: Cabo Legend. Duración: 3.5 horas.",
    category: "boat",
    price_usd: 99,
    price_mxn: 0,
    emoji: "🏴‍☠️",
    image_url: null,
  },
  {
    providerIndex: 0,
    name_en: "Whale Watching with Breakfast",
    name_es: "Avistamiento de Ballenas con Desayuno",
    description_en: "Scenic views of Cabo's Arch and coastline with marine life encounters while enjoying a wonderful breakfast of coffee, hot cakes, scrambled eggs, chilaquiles, beans, the best Bloody Marys in Cabo and our open bar. Crew practices respectful wildlife viewing with knowledgeable marine naturalists. Season: December 15 to April 15. Boat: Cabo Escape. Duration: 2 hours.",
    description_es: "Vistas panorámicas del Arco de Cabo y la costa con encuentros de vida marina mientras disfrutas un desayuno maravilloso: café, hot cakes, huevos revueltos, chilaquiles, frijoles, los mejores Bloody Marys de Cabo y barra libre. Temporada: 15 de diciembre a 15 de abril. Barco: Cabo Escape. Duración: 2 horas.",
    category: "boat",
    price_usd: 99,
    price_mxn: 0,
    emoji: "🐳",
    image_url: null,
  },
  {
    providerIndex: 0,
    name_en: "Thar She Blows! Whale Watching (Buccaneer Queen)",
    name_es: "¡Ahí Va! Avistamiento de Ballenas (Buccaneer Queen)",
    description_en: "Chase the Kraken throughout the Pacific Ocean and Sea of Cortez! Begins at marina, heading to rock formations, Lover's Beach, and the Arch for photos with sea lions. Observing gray whales and humpback whales during mating season, accompanied by certified bilingual guide explaining animal behavior. Includes breakfast and open bar (18+ for alcohol). Season: December to April. Boat: Buccaneer Queen. Duration: 2 hours.",
    description_es: "¡Persigue al Kraken por el Océano Pacífico y el Mar de Cortés! Formaciones rocosas, Playa del Amor, y el Arco para fotos con lobos marinos. Observación de ballenas grises y jorobadas en temporada de apareamiento, con guía bilingüe certificado. Incluye desayuno y barra libre. Temporada: diciembre a abril. Barco: Buccaneer Queen. Duración: 2 horas.",
    category: "boat",
    price_usd: 99,
    price_mxn: 0,
    emoji: "🐳",
    image_url: "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/10/Kraken-Chase-Whale-Watching-Tour-image-1.jpg",
  },
  {
    providerIndex: 0,
    name_en: "Thar She Blows! Whale Watching (Cabo Legend)",
    name_es: "¡Ahí Va! Avistamiento de Ballenas (Cabo Legend)",
    description_en: "Encounter the whales as the early pirates did when they reached the Baja peninsula. Educational content about whale lifestyle and habits as you watch them jump, play, and float near the boat, plus how the Baja region was discovered and the pirates that sailed its seas. Excellent ambiance and hands-on activities with our crew. Includes breakfast and open bar. Season: December to April. Boat: Cabo Legend. Duration: 2 hours.",
    description_es: "Encuentra las ballenas como lo hacían los piratas cuando llegaban a la península de Baja. Contenido educativo sobre el estilo de vida de las ballenas mientras las ves saltar, jugar y flotar cerca del barco. Incluye desayuno y barra libre. Temporada: diciembre a abril. Barco: Cabo Legend. Duración: 2 horas.",
    category: "boat",
    price_usd: 99,
    price_mxn: 0,
    emoji: "🐳",
    image_url: null,
  },
  {
    providerIndex: 0,
    name_en: "Breakfast Snorkel Cruise",
    name_es: "Crucero de Snorkel con Desayuno",
    description_en: "Visit Cabo's world-famous arch at land's end, then enjoy a scenic cruise up the Sea of Cortez, widely known for its incredible sea life. Snorkeling at Chileno Bay, one of the best snorkel spots in Baja. Afterward, enjoy a delicious breakfast prepared right on board along with an open bar. Return with reggae, Latin, and light dance music. Boat: Cabo Escape. Duration: 3 hours.",
    description_es: "Visita el famoso Arco en Land's End, luego disfruta un crucero panorámico por el Mar de Cortés. Snorkel en Bahía Chileno, uno de los mejores spots de snorkel en Baja. Desayuno preparado a bordo y barra libre. Barco: Cabo Escape. Duración: 3 horas.",
    category: "boat",
    price_usd: 69,
    price_mxn: 0,
    emoji: "🤿",
    image_url: null,
  },
  {
    providerIndex: 0,
    name_en: "Cabo Wave Morning Snorkel & Breakfast",
    name_es: "Snorkel Matutino y Desayuno - Cabo Wave",
    description_en: "Visit Cabo's world-famous arch at lands end then cruise to Chileno Bay. Jump into the ocean to get an up-close view of the sea life. A delicious breakfast before your eyes right on board along with an open bar. Returns with reggae, Latin and light dance music plus fun and games. Includes breakfast, domestic bar, snorkel gear, life jackets. Boat: Cabo Wave. Duration: 3.5 hours.",
    description_es: "Visita el famoso Arco en Land's End y navega a Bahía Chileno. Salta al océano para ver la vida marina de cerca. Desayuno preparado frente a ti a bordo con barra libre. Incluye desayuno, barra doméstica, equipo de snorkel, chalecos salvavidas. Barco: Cabo Wave. Duración: 3.5 horas.",
    category: "boat",
    price_usd: 89,
    price_mxn: 0,
    emoji: "🤿",
    image_url: null,
  },
  {
    providerIndex: 0,
    name_en: "Quest of the Bay Lunch Snorkel (Buccaneer Queen)",
    name_es: "Aventura en la Bahía Snorkel con Almuerzo (Buccaneer Queen)",
    description_en: "All the best of Cabo on this all-inclusive adventure. Take in the sights, swim with the tropical fish, feast on a delicious lunch, and get a sneak peak of our one-of-a-kind pirate show. Includes cruise through the Arch, snorkeling at Chileno Bay, on-board lunch, open bar (18+ to drink), snorkel equipment, paddle boards. Boat: Buccaneer Queen. Duration: 3.5 hours.",
    description_es: "Lo mejor de Cabo en esta aventura todo incluido. Disfruta las vistas, nada con los peces tropicales, saborea un delicioso almuerzo y obtén un adelanto de nuestro show pirata único. Incluye crucero por el Arco, snorkel en Bahía Chileno, almuerzo a bordo, barra libre, equipo de snorkel y paddle boards. Barco: Buccaneer Queen. Duración: 3.5 horas.",
    category: "boat",
    price_usd: 99,
    price_mxn: 0,
    emoji: "🏴‍☠️",
    image_url: null,
  },
  {
    providerIndex: 0,
    name_en: "Wind Sea Luxury Snorkel and Lunch Yacht Cruise",
    name_es: "Crucero de Lujo en Yate Wind Sea - Snorkel y Almuerzo",
    description_en: "An adults only snorkeling tour that feels like a sailing vacation. Scenic cruising on the Sea of Cortez, Cabo's arch and sea lion colony, snorkeling at Chileno Bay in a protected area. Includes snorkeling gear and guidance, premium lunch (fresh fish tacos, grilled shrimp, prime steak, grilled onions, traditional salsas, fire-roasted vegetables, handmade corn tortillas), fresh ceviche, mixology open premium bar. Adults only. Boat: Tu Enamorado. Duration: 4 hours.",
    description_es: "Un tour de snorkel solo para adultos que se siente como unas vacaciones en velero. Crucero panorámico por el Mar de Cortés, el Arco y la colonia de lobos marinos, snorkel en Bahía Chileno. Incluye equipo de snorkel, almuerzo premium (tacos de pescado fresco, camarón a la parrilla, filete prime, vegetales asados, tortillas de maíz hechas a mano), ceviche fresco, barra premium con mixología. Solo adultos. Barco: Tu Enamorado. Duración: 4 horas.",
    category: "yacht",
    price_usd: 199,
    price_mxn: 0,
    emoji: "🛥️",
    image_url: null,
  },
  {
    providerIndex: 0,
    name_en: "Pirate Guided Snorkel & Breakfast Cruise",
    name_es: "Crucero Pirata de Snorkel y Desayuno Guiado",
    description_en: "Wake up bright and early and get a head start on the day's adventures with our morning snorkel cruise. Avoid the rush and the midday sun. Board the Cabo Legend pirate vessel to explore tropical marine life while enjoying a fresh breakfast buffet (pancakes, eggs, bacon, chilaquiles). Includes guided snorkeling and full breakfast buffet aboard the vessel. Boat: Cabo Legend. Duration: 3 hours.",
    description_es: "Despierta temprano y adelántate a las aventuras del día con nuestro crucero matutino de snorkel. Evita las multitudes y el sol del mediodía. Aborda el barco pirata Cabo Legend para explorar la vida marina tropical mientras disfrutas un bufete de desayuno fresco (pancakes, huevos, tocino, chilaquiles). Barco: Cabo Legend. Duración: 3 horas.",
    category: "boat",
    price_usd: 99,
    price_mxn: 0,
    emoji: "🏴‍☠️",
    image_url: null,
  },
  {
    providerIndex: 0,
    name_en: "Cabo Wave Snorkel Fun with Lunch",
    name_es: "Snorkel Divertido con Almuerzo - Cabo Wave",
    description_en: "Visit Cabo's arch at Land's End, cruise the Sea of Cortez. Snorkeling at Chileno Bay, one of the best snorkel spots in Baja. Enjoy a delicious lunch grilled before your eyes right on board along with an open bar, with reggae and Latin music. Includes lunch, domestic bar, snorkel gear, life jackets. Boat: Cabo Wave. Duration: 3.5 hours.",
    description_es: "Visita el Arco en Land's End, navega por el Mar de Cortés. Snorkel en Bahía Chileno, uno de los mejores spots de snorkel en Baja. Disfruta un delicioso almuerzo preparado a la parrilla frente a ti a bordo con barra libre, con música reggae y latina. Barco: Cabo Wave. Duración: 3.5 horas.",
    category: "boat",
    price_usd: 99,
    price_mxn: 0,
    emoji: "🤿",
    image_url: "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2026/02/Cabo-Wave-Snorkel-Fun-image-1.jpg",
  },
  {
    providerIndex: 0,
    name_en: "Roots of Baja - Magical Town Tour in Todos Santos",
    name_es: "Raíces de Baja - Tour al Pueblo Mágico de Todos Santos",
    description_en: "Discover the authentic heart of Baja California on a private cultural and scenic journey to Todos Santos. Visit stunning viewpoints, learn the story behind pearl cultivation, and enjoy a tequila tasting at a beachfront club. This exclusive experience blends nature, history, and flavor -- offering a genuine connection with the spirit of Baja. Includes lunch, private transportation, refreshments. Stops: Velvet Pearl & Gallery, Hotel California, Mirador Ocean view, Punta Lobos, Oystera gardens, artisan shops. Price is per private van (1-4 passengers). Duration: 5.5 hours.",
    description_es: "Descubre el corazón auténtico de Baja California en un viaje privado cultural y panorámico a Todos Santos. Visita miradores impresionantes, aprende la historia del cultivo de perlas y disfruta una degustación de tequila en un club de playa. Incluye almuerzo, transporte privado, refrigerios. Paradas: Velvet Pearl & Gallery, Hotel California, Mirador, Punta Lobos, Oystera gardens, tiendas artesanales. Precio por van privada (1-4 pasajeros). Duración: 5.5 horas.",
    category: "adventure",
    price_usd: 756,
    price_mxn: 0,
    emoji: "🌵",
    image_url: "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2025/12/Roots-of-Baja-Magical-Town-Tour-in-Todos-Santos-image-1.jpg",
  },
  {
    providerIndex: 0,
    name_en: "Roundtrip Los Cabos Airport Transfer",
    name_es: "Traslado Redondo al Aeropuerto de Los Cabos",
    description_en: "Door-to-door pickup and drop-off so you can relax after your flight and start or end your trip smoothly. Your Cabo experience starts the moment you land. Modern, air-conditioned vehicles, no sharing. Includes complimentary bottled water, on-time pick-up at SJD airport, direct service, friendly professional drivers. Private Van (1-8 pax): $275 USD. Private Van (9-17 pax): $400 USD. Duration: ~45 minutes.",
    description_es: "Servicio puerta a puerta para que te relajes después de tu vuelo. Tu experiencia en Cabo comienza al aterrizar. Vehículos modernos con aire acondicionado, sin compartir. Incluye agua embotellada de cortesía, recogida puntual en aeropuerto SJD, servicio directo. Van Privada (1-8 pax): $275 USD. Van Privada (9-17 pax): $400 USD. Duración: ~45 minutos.",
    category: "adventure",
    price_usd: 275,
    price_mxn: 0,
    emoji: "🚐",
    image_url: null,
  },

  // ═══════════════════════════════════════════════════════════
  // CANOPY COSTA AZUL (providerIndex: 1)
  // ═══════════════════════════════════════════════════════════
  {
    providerIndex: 1,
    name_en: "Shared Zip-Lines and Rappelling",
    name_es: "Tirolesas y Rappel Compartido",
    description_en: "You ride on an aircraft-grade steel cable using a pulley and a safety harness with a main strap that can carry over 20 times your weight and a backup. Includes 7 ziplines, suspension bridge, 180-foot natural rappel wall, racing cables, purified water, tequila tasting, complimentary lockers. Shared shuttle from most Cabo San Lucas / San Jose del Cabo hotels. Park entrance fee: $15 USD per person (paid in cash on arrival). Circuit duration: 2 hours 15 minutes. Total with transportation: 3 hours. Min age: 7. Max weight: 265 lbs (ziplining), 235 lbs (rappelling). Equipment: PETZL PRO certified professional gear. Pulley-based braking system -- no gloves required.",
    description_es: "Recorre un cable de acero de grado aeronáutico usando una polea y arnés de seguridad con una cinta principal que soporta más de 20 veces tu peso y un respaldo. Incluye 7 tirolesas, puente colgante, pared de rappel natural de 55 metros, cables de carreras, agua purificada, degustación de tequila, lockers. Transporte compartido desde la mayoría de hoteles de Cabo San Lucas / San Jose del Cabo. Entrada al parque: $15 USD por persona (en efectivo). Duración del circuito: 2 horas 15 minutos. Total con transporte: 3 horas. Edad mínima: 7 años. Peso máximo: 120 kg (tirolesa), 107 kg (rappel). Equipo: PETZL PRO certificado profesional.",
    category: "adventure",
    price_usd: 99,
    price_mxn: 1782,
    emoji: "🧗",
    image_url: "https://www.costaazulziplines.com/assets/images/1-large-1000x664.webp",
  },
  {
    providerIndex: 1,
    name_en: "Private Zip-Lines and Rappelling",
    name_es: "Tirolesas y Rappel Privado",
    description_en: "Private experience with 7 ziplines, suspension bridge, 180-foot natural rappel wall, purified water, tequila tasting, complimentary lockers. Private transportation and entrance fee INCLUDED (unlike shared option). Minimum group size: 5 guests. Min age: 7. Max weight: 265 lbs (ziplining), 235 lbs (rappelling). Equipment: PETZL PRO certified professional gear. Cancellation: 7 days minimum notice required. Duration: 2 hours.",
    description_es: "Experiencia privada con 7 tirolesas, puente colgante, pared de rappel natural de 55 metros, agua purificada, degustación de tequila, lockers. Transporte privado y entrada INCLUIDOS. Grupo mínimo: 5 personas. Edad mínima: 7 años. Peso máximo: 120 kg (tirolesa), 107 kg (rappel). Equipo: PETZL PRO certificado profesional. Cancelación: 7 días de anticipación mínimo. Duración: 2 horas.",
    category: "adventure",
    price_usd: 197,
    price_mxn: 3645,
    emoji: "🧗",
    image_url: "https://www.costaazulziplines.com/assets/images/3-1256x841.webp",
  },

  // ═══════════════════════════════════════════════════════════
  // CACTUS TOURS (providerIndex: 2)
  // ═══════════════════════════════════════════════════════════
  {
    providerIndex: 2,
    name_en: "Migriño ATV",
    name_es: "Migriño ATV",
    description_en: "Discover the excitement of exploring the Los Cabos Desert with the Honda Recon 250, easy to drive for everyone, making your trip the most fun tour. Drive through the desert, mountains, canyons, a huge stream and wonderful beaches. Includes water, safety equipment, tequila tasting, round-trip transportation, Kids Club, locker. Vehicle: Honda Recon 250 (automatic). Min age: 7. Departures: 9am-4pm hourly. Additional $25 USD park entrance fee. Duration: 2 hours.",
    description_es: "Descubre la emocion de explorar el Desierto de Los Cabos con la Honda Recon 250, facil de manejar para todos, convirtiendo tu viaje en el tour mas divertido. Maneja a traves del desierto, montanas, canones, un enorme arroyo y las maravillosas playas. Incluye agua, equipo de seguridad, degustación de tequila, transporte redondo, Kids Club, locker. Vehículo: Honda Recon 250 (automático). Edad mínima: 7. Salidas: 9am-4pm cada hora. Entrada al parque $25 USD adicional. Duración: 2 horas.",
    category: "adventure",
    price_usd: 96,
    price_mxn: 0,
    emoji: "🏍️",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2024/05/image00001.webp",
  },
  {
    providerIndex: 2,
    name_en: "Beach & Dunes ATV 4X4",
    name_es: "Explora Playa y Dunas en Cuatrimoto 4X4",
    description_en: "Experience the ultimate thrill with this 4x4 All Wheel Drive tour -- you'll reach any destination. Enjoy 50% more beach time thanks to its power and traction. With our Premium ATV tour, you can explore more beaches and dunes. Includes water, 4X4 AWD vehicle, safety equipment, tequila tasting, round-trip transportation. Additional $25 USD park entrance fee. Duration: 2 hours.",
    description_es: "Vive la maxima emocion con este tour 4x4 All Wheel Drive llegaras a cualquier lugar. Disfruta de 50% mas tiempo por la playa gracias su potencia y traccion. Con nuestro tour Premium de ATV, podras recorrer mas playas y dunas. Incluye agua, vehículo 4X4 AWD, equipo de seguridad, degustación de tequila, transporte redondo. Entrada al parque $25 USD adicional. Duración: 2 horas.",
    category: "adventure",
    price_usd: 136,
    price_mxn: 0,
    emoji: "🏍️",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2024/05/image00029.webp",
  },
  {
    providerIndex: 2,
    name_en: "Side by Side Adventure (UTV)",
    name_es: "Side by Side Adventure (UTV)",
    description_en: "Enjoy exciting routes through the desert and white sand beaches with impressive dunes. Beginner? No worries, if you know how to drive an automatic car, you're ready for the fun! Off-road experience perfect for enjoying the desert. Pricing: 1 person $205, 2 people $290, 3 people $350, 4 people $405. Includes water, helmet & goggles, tequila tasting, Kids Club, round-trip transportation, bilingual guide, locker. Min driver age: 16 with license. Min passenger age: 5. Max weight: 275 lbs. Additional $25 USD park entrance fee. Duration: 2 hours.",
    description_es: "Disfruta de emocionantes recorridos por el desierto y playas de arena blanca con dunas impresionantes. Principiante? Sin preocupaciones, si sabes manejar un automovil automatico, estaras listo para la diversion! Vive una experiencia todo terreno relajada con el tour basico perfecto para disfrutar del desierto. Precios: 1 persona $205, 2 personas $290, 3 personas $350, 4 personas $405. Incluye agua, casco y goggles, degustación de tequila, Kids Club, transporte redondo, guía bilingüe, locker. Edad mínima conductor: 16 con licencia. Peso máximo: 125 kg. Entrada al parque $25 USD adicional. Duración: 2 horas.",
    category: "adventure",
    price_usd: 164,
    price_mxn: 0,
    emoji: "🚙",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2024/08/2_Side-by-side-Adventure--1024x769.webp",
  },
  {
    providerIndex: 2,
    name_en: "Can-Am X3 Turbo Adventure (UTV)",
    name_es: "Can-Am X3 Turbo Adventure (UTV)",
    description_en: "Experience the power behind the wheel of the king of off-road vehicles with its patented suspension. Defy the norms of off-road vehicles! Climb into a Can Am Maverick X3 Turbocharged that breaks the rules of side-by-side vehicles, accelerating from 0 to 100 km/h in less than 4.5 seconds with its 172 HP engine. Pricing: 1 person $240, 2 people $400, 3 people $450, 4 people $500. Includes water, helmet & goggles, tequila tasting, beach route, Kids Club, round-trip transportation, locker, bilingual guide. Min driver age: 16 with license. Max weight: 275 lbs. Additional $25 USD park entrance fee. Duration: 2 hours.",
    description_es: "Experimenta la potencia al volante del rey de los vehiculos todo terreno por su suspension patentada. Desafia las normas de los vehiculos todo terreno! Sube a un Can Am Maverick X3 Turbocharged que rompe el reglamento de los vehiculos side-by-side acelerando de 0 a 100 km/h en menos de 4,5 segundos con su motor de 172 CV. Precios: 1 persona $240, 2 personas $400, 3 personas $450, 4 personas $500. Incluye agua, casco y goggles, degustación de tequila, ruta de playa, Kids Club, transporte redondo, locker, guía bilingüe. Edad mínima conductor: 16 con licencia. Peso máximo: 125 kg. Entrada al parque $25 USD adicional. Duración: 2 horas.",
    category: "adventure",
    price_usd: 240,
    price_mxn: 0,
    emoji: "🚙",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2026/02/3_Can-am-X3-Adventure--1024x819.webp",
  },
  {
    providerIndex: 2,
    name_en: "Maverick RC/RS Turbo Adventure (UTV)",
    name_es: "Maverick RC/RS Turbo Adventure (UTV)",
    description_en: "Do you dare to push the limits? Experience a turbo engine that unleashes impressive power. This vehicle gives you stability on any terrain. We're ready to take you to places where others don't dare! Take your off-road experience to the maximum level with our most powerful, fast, and sophisticated vehicle. 195 HP turbo, dynamic power steering. Includes water, helmet & goggles, tequila tasting, beach route, Kids Club, round-trip transportation, locker, bilingual guide. Min driver age: 16 with license. Max weight: 275 lbs. Additional $25 USD park entrance fee. Duration: 2 hours.",
    description_es: "Te atreves a desafiar los limites? Experimenta su motor turbo que desata una potencia impresionante. Este vehiculo te brinda estabilidad en cualquier terreno. Estamos listos para llevarte a lugares donde otros no se atreven! Lleva tu experiencia todo terreno al maximo nivel con nuestro vehiculo mas potente, veloz y sofisticado. 195 HP turbo, dirección dinámica. Incluye agua, casco y goggles, degustación de tequila, ruta de playa, Kids Club, transporte redondo, locker, guía bilingüe. Edad mínima conductor: 16 con licencia. Peso máximo: 125 kg. Entrada al parque $25 USD adicional. Duración: 2 horas.",
    category: "adventure",
    price_usd: 480,
    price_mxn: 0,
    emoji: "🏎️",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2024/05/5_Can-am-Maverick-RC-.webp",
  },
  {
    providerIndex: 2,
    name_en: "Mini RZR (Kids UTV)",
    name_es: "Mini RZR (UTV para Niños)",
    description_en: "We created an off-road tour on a safe route for kids. Don't miss the chance to see your kids smiling! Let the little ones have their own off-road adventure -- kids can drive their own vehicle. Pricing: 1 participant $112, 2 participants $175. Min driver age: 10. Min passenger age: 8 (or 7 as passenger). Additional $25 USD park entrance fee. Duration: 2 hours.",
    description_es: "Hemos creamos un tour todo terreno en una ruta segura para ninos. No pierdas la oportunidad de ver a tus hijos sonriendo. Que los mas pequenos vivan su propia aventura todo terreno! Los ninos podran conducir su vehiculo. Precios: 1 participante $112, 2 participantes $175. Edad mínima conductor: 10. Edad mínima pasajero: 8 (o 7 como pasajero). Entrada al parque $25 USD adicional. Duración: 2 horas.",
    category: "adventure",
    price_usd: 112,
    price_mxn: 0,
    emoji: "👧",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2024/05/I8A0495-corregida.webp",
  },
  {
    providerIndex: 2,
    name_en: "Camel Ride",
    name_es: "Paseo en Camello",
    description_en: "The best camel tour experience. Includes safari through the Baja California Sur desert to reach the camel sanctuary, peaceful beach ride with Pacific Ocean views. During winter months you may spot humpback whales. Interact with rescued camels including Choyerito, the first camel born in Los Cabos. Concludes with tequila tasting, buffet meal, professional photos (available for purchase), and a desert walk where guides explain native cacti species. SEMARNAT certified sanctuary. Includes round-trip transportation, safety equipment, bilingual guide, water, Kids Club, tequila tasting, locker. Min age: 7. Max age: 70. Min height: 1.20m. Max weight: 242 lbs. Additional $25 USD park entrance fee. Duration: 2 hours.",
    description_es: "La mejor experiencia de tour en camellos. Disfruta un inolvidable paseo en camello por el desierto de Los Cabos, en un santuario certificado por SEMARNAT. Incluye safari por el desierto de Baja California Sur, paseo por la playa con vistas al Océano Pacífico. En invierno puedes avistar ballenas jorobadas. Interactúa con camellos rescatados incluyendo Choyerito, el primer camello nacido en Los Cabos. Incluye degustación de tequila, bufete, fotos profesionales (a la venta), caminata por el desierto con explicación de cactus nativos. Incluye transporte redondo, equipo de seguridad, guía bilingüe, agua, Kids Club, locker. Edad mínima: 7. Edad máxima: 70. Estatura mínima: 1.20m. Peso máximo: 110 kg. Entrada al parque $25 USD adicional. Duración: 2 horas.",
    category: "adventure",
    price_usd: 96,
    price_mxn: 0,
    emoji: "🐪",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2024/05/CAMELLO-CTS.webp",
  },
  {
    providerIndex: 2,
    name_en: "Horseback Riding",
    name_es: "Paseo en Caballo",
    description_en: "Get ready for a ride on the wild side! This horseback riding tour through the beach and desert will take you on an unforgettable adventure. You'll live a relaxing trot experience on an excellent horse, feeling the sensation of the breeze touching your face. Includes round-trip transportation, safety equipment (helmet), bilingual guide, water, Kids Club, tequila tasting, locker. Min age: 7 (6 with 1.20m height). Max age: 70. Max weight: 242 lbs. Additional $25 USD park entrance fee. Duration: 2 hours.",
    description_es: "Preparate para dar un paseo por el lado salvaje! Este recorrido a caballo por la playa y el desierto te llevara a una aventura inolvidable. Viviras una experiencia de trote relajante en un excelente caballo, sentiras la sensacion de la brisa tocando tu rostro. Incluye transporte redondo, equipo de seguridad (casco), guía bilingüe, agua, Kids Club, degustación de tequila, locker. Edad mínima: 7 (6 con estatura de 1.20m). Edad máxima: 70. Peso máximo: 110 kg. Entrada al parque $25 USD adicional. Duración: 2 horas.",
    category: "adventure",
    price_usd: 96,
    price_mxn: 0,
    emoji: "🐴",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2025/01/357A7585.webp",
  },
  {
    providerIndex: 2,
    name_en: "Sky Bike",
    name_es: "Sky Bike",
    description_en: "GET READY FOR AN EPIC ADVENTURE! Pedal at great heights and conquer your fears on the longest aerial bike route in the world, stretching an impressive 854 meters. Guinness World Record certified. Features simultaneous 4-bike routes for all ages and fitness levels. Towers engineered to withstand 168 tons of tension, cables rated for 17.5 tons per person. Includes exquisite buffet with agua fresca or soft drinks, tequila museum tasting, ecological walking tour, safety equipment, safari ride through desert, round-trip transportation. Min age: 8. Min height: 1.20m. Max weight: 264 lbs. Departures: 9am, 10am, 3pm, 4pm only. Additional $25 USD park entrance fee. Duration: 2 hours.",
    description_es: "PREPARATE PARA UNA AVENTURA EPICA! Pedalea a grandes alturas y vence tus miedos en la ruta de bicicletas aereas mas larga del mundo, que se extiende a lo largo de impresionantes 854 metros. Conquista el cielo en la Sky Bike mas larga del mundo, reconocida oficialmente con un Record Guinness. 4 rutas simultáneas para todas las edades y niveles. Torres diseñadas para soportar 168 toneladas de tensión. Incluye bufete exquisito con agua fresca o refresco, degustación en museo del tequila, tour ecológico, equipo de seguridad, safari por el desierto, transporte redondo. Edad mínima: 8. Estatura mínima: 1.20m. Peso máximo: 120 kg. Salidas: 9am, 10am, 3pm, 4pm únicamente. Entrada al parque $25 USD adicional. Duración: 2 horas.",
    category: "adventure",
    price_usd: 96,
    price_mxn: 0,
    emoji: "🚲",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2024/05/Combo-Cactus-Skybike-Tour-1220x-1040-1024x873.webp",
  },
  {
    providerIndex: 2,
    name_en: "Electric Bike Tour",
    name_es: "Bicicleta Eléctrica",
    description_en: "Enjoy a ride on our electric bikes through the beach and desert with incredible views. Includes round-trip transportation, safety equipment, bilingual guide, water, Kids Club, tequila tasting, locker. Min height: 1.20m. Max weight: 400 lbs. Departures: 9am, 11am, 12pm, 2pm, 3pm. Additional $25 USD park entrance fee. Duration: 2 hours.",
    description_es: "Disfruta de un recorrido en nuestras bicicletas electricas. Este recorrido te llevara por la playa y el desierto con vistas increibles en nuestras bicicletas electricas. Incluye transporte redondo, equipo de seguridad, guía bilingüe, agua, Kids Club, degustación de tequila, locker. Estatura mínima: 1.20m. Peso máximo: 182 kg. Salidas: 9am, 11am, 12pm, 2pm, 3pm. Entrada al parque $25 USD adicional. Duración: 2 horas.",
    category: "adventure",
    price_usd: 60,
    price_mxn: 0,
    emoji: "🚴",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2024/05/IMG_9015.webp",
  },
  {
    providerIndex: 2,
    name_en: "Mountain Bike Tour",
    name_es: "Bicicleta de Montaña",
    description_en: "Enjoy the most incredible bike ride of your life on our mountain bike tour. Desert trails and seaside cliffs in Los Cabos, guided by bilingual experts showcasing local landscapes, flora, and fauna. Includes round-trip transportation, safety equipment, bilingual guide, water, Kids Club, tequila tasting, locker. Min height: 1.20m. Max weight: 400 lbs. Departures: 9am, 11am, 12pm, 2pm, 3pm. Additional $25 USD park entrance fee. Duration: 2 hours.",
    description_es: "Disfruta del paseo en bicicleta mas increible de tu vida en nuestro recorrido en bicicleta de montana. Este recorrido te llevara por las montanas con vistas increibles. Senderos del desierto y acantilados junto al mar en Los Cabos, guiados por expertos bilingües. Incluye transporte redondo, equipo de seguridad, guía bilingüe, agua, Kids Club, degustación de tequila, locker. Estatura mínima: 1.20m. Peso máximo: 182 kg. Salidas: 9am, 11am, 12pm, 2pm, 3pm. Entrada al parque $25 USD adicional. Duración: 2 horas.",
    category: "adventure",
    price_usd: 69,
    price_mxn: 0,
    emoji: "🚵",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2024/05/1_Mountain-Bike.webp",
  },
  {
    providerIndex: 2,
    name_en: "Combo 2x1",
    name_es: "Combo 2x1",
    description_en: "Discover double the excitement with our Combo 2x1. 2 adventures for the price of 1, in the time of 1! Affordable and full of fun. Choose 2 of: camel riding, UTV/ATV driving, horseback riding, Sky Bikes. Includes round-trip transportation, safety equipment, bilingual guide, water, Kids Club, tequila tasting, locker. Additional $25 USD park entrance fee. Duration: 2 hours (1 hour per activity).",
    description_es: "Descubre el doble de emociones con nuestro Combo 2x1. 2 aventuras por el precio de 1, en el tiempo de 1! Accesible y lleno de diversion. Elige 2 de: paseo en camello, UTV/ATV, paseo a caballo, Sky Bikes. Incluye transporte redondo, equipo de seguridad, guía bilingüe, agua, Kids Club, degustación de tequila, locker. Entrada al parque $25 USD adicional. Duración: 2 horas (1 hora por actividad).",
    category: "adventure",
    price_usd: 100,
    price_mxn: 0,
    emoji: "🎯",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2026/02/Combo-2x1-1-1024x873.jpg",
  },
  {
    providerIndex: 2,
    name_en: "Combo 2x1 Premium",
    name_es: "Combo 2x1 Premium",
    description_en: "Unlike the basic version, this tour lets you live a more challenging and spectacular ride with the best vehicles. This tour includes a buffet meal and soft drinks. Choose 2 of: camel rides, Can-Am X3 UTV, automatic ATV, horseback riding. Includes round-trip transportation, safety equipment, water, premium vehicles, buffet meal & soft drinks. Additional $25 USD park entrance fee. Duration: 2 hours (1 hour per activity).",
    description_es: "A diferencia de la version basica, este tour te permite vivir un recorrido mas desafiante y espectacular con los mejores vehiculos. Este tour si incluye comida y soft drinks. Elige 2 de: paseo en camello, Can-Am X3 UTV, ATV automático, paseo a caballo. Incluye transporte redondo, equipo de seguridad, agua, vehículos premium, bufete y refrescos. Entrada al parque $25 USD adicional. Duración: 2 horas (1 hora por actividad).",
    category: "adventure",
    price_usd: 140,
    price_mxn: 0,
    emoji: "⭐",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2026/02/Combo-Premium-1024x873.jpg",
  },
  {
    providerIndex: 2,
    name_en: "Combo 3x1",
    name_es: "Combo 3x1",
    description_en: "Enjoy 3 tours instead of 1! Discover triple the excitement with our Combo 3x1. Three adventures at the price of one! Affordable and full of fun. Choose 3 of: Sky Bikes, camel riding, horseback riding, UTV driving, ATV driving. Includes round-trip transportation, safety equipment, bilingual guide, water, Kids Club, tequila tasting, locker. Additional $25 USD park entrance fee. Duration: 3 hours (1 hour per activity).",
    description_es: "Disfruta 3 tours en lugar de 1! Descubre el triple de emocion con nuestro Combo 3x1. Tres aventuras al precio de una! Economico y lleno de diversion. Elige 3 de: Sky Bikes, paseo en camello, paseo a caballo, UTV, ATV. Incluye transporte redondo, equipo de seguridad, guía bilingüe, agua, Kids Club, degustación de tequila, locker. Entrada al parque $25 USD adicional. Duración: 3 horas (1 hora por actividad).",
    category: "adventure",
    price_usd: 125,
    price_mxn: 0,
    emoji: "🎯",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2026/02/Combo-3x1-1-1024x873.jpg",
  },
  {
    providerIndex: 2,
    name_en: "All Attractions Combo",
    name_es: "Combo de Todas las Atracciones",
    description_en: "Experience five exciting adventures in one or two days, designed for those who want to enjoy the park to the fullest. Includes all 5: camel riding, ATV/Quad, horseback riding, UTV adventures, Sky Bikes. Can be split across 2 days. Additional $25 USD park entrance fee. Duration: 5 hours.",
    description_es: "Vive cinco aventuras emocionantes en uno o dos dias, disenadas para quienes quieren disfrutar al maximo todo el dia en el parque. Incluye las 5: paseo en camello, ATV/Quad, paseo a caballo, UTV, Sky Bikes. Se puede dividir en 2 días. Entrada al parque $25 USD adicional. Duración: 5 horas.",
    category: "adventure",
    price_usd: 160,
    price_mxn: 0,
    emoji: "🏆",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2026/02/Combo-ALL-1024x873.jpg",
  },
  {
    providerIndex: 2,
    name_en: "Balandra Combo",
    name_es: "Combo Balandra",
    description_en: "Combine nature, culture and adventure. Discover Balandra Beach, the Malecon de La Paz and enjoy unique activities at Cactus Tours. Get ready for a trip that has EVERYTHING! A perfect combination of nature, culture, gastronomy and adventure in some of the most spectacular places in Baja California Sur. Itinerary: Playa Balandra, Playa Coromuel, local restaurant lunch, Malecon de La Paz, plus 1 Cactus Tours activity. Includes round-trip transportation, light breakfast, certified guide, access wristband, Mexican restaurant lunch, 1 activity, water, tequila tasting. Duration: 12 hours (full day).",
    description_es: "Combina naturaleza, cultura y aventura. Descubre Balandra Beach, el Malecon de La Paz y disfruta actividades unicas en Cactus Tours. Preparate para un viaje que lo tiene TODO! Este tour es una combinacion perfecta de naturaleza, cultura, gastronomia y aventura en algunos de los lugares mas espectaculares de Baja California Sur. Itinerario: Playa Balandra, Playa Coromuel, almuerzo en restaurante local, Malecón de La Paz, más 1 actividad Cactus Tours. Incluye transporte redondo, desayuno ligero, guía certificado, pulsera de acceso, almuerzo en restaurante mexicano, 1 actividad, agua, degustación de tequila. Duración: 12 horas (día completo).",
    category: "adventure",
    price_usd: 100,
    price_mxn: 0,
    emoji: "🏖️",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2026/02/I8A0430-600x540.jpg",
  },
  {
    providerIndex: 2,
    name_en: "Todos Santos Combo",
    name_es: "Combo Todos Santos",
    description_en: "Experience a day full of culture, adventure and flavor in the Magical Town of Todos Santos, while enjoying exciting activities. Itinerary: 8:30am pickup, 9:30am Todos Santos guided cultural tour, free time for shops/tequila/artisans, blanket-making workshop at Casitas El Salitral, then 1 activity at Cactus Tours. Includes round-trip transportation, buffet meal, selected activity, full 9-hour experience. Duration: 12 hours.",
    description_es: "Vive un dia lleno de cultura, aventura y sabor en el Pueblo Magico de Todos Santos, mientras disfrutas de emocionantes actividades. Itinerario: recogida 8:30am, 9:30am tour cultural guiado en Todos Santos, tiempo libre para tiendas/tequila/artesanos, taller de cobijas en Casitas El Salitral, luego 1 actividad en Cactus Tours. Incluye transporte redondo, bufete, actividad seleccionada, experiencia completa de 9 horas. Duración: 12 horas.",
    category: "adventure",
    price_usd: 100,
    price_mxn: 0,
    emoji: "🎨",
    image_url: "https://cactustours.com.mx/wp-content/uploads/2026/02/I8A1103-copia-600x540.jpg",
  },
];

async function seed() {
  console.log("Starting seed...\n");

  // 1. Insert providers
  const providerIds = [];
  for (const provider of providers) {
    const { data, error } = await supabase
      .from("providers")
      .insert(provider)
      .select("id")
      .single();

    if (error) {
      console.error(`Error inserting provider "${provider.name}":`, error.message);
      return;
    }
    providerIds.push(data.id);
    console.log(`✓ Provider: ${provider.name} (${data.id})`);
  }

  // 2. Insert activities and track IDs per provider
  const activityIdsByProvider = { 0: [], 1: [], 2: [] };

  for (const activity of activities) {
    const { providerIndex, ...activityData } = activity;
    const { data, error } = await supabase
      .from("activities")
      .insert(activityData)
      .select("id")
      .single();

    if (error) {
      console.error(`Error inserting activity "${activity.name_en}":`, error.message);
      continue;
    }
    activityIdsByProvider[providerIndex].push(data.id);
    console.log(`  ✓ Activity: ${activity.name_en} ($${activity.price_usd} USD)`);
  }

  // 3. Update providers with activity_ids
  for (let i = 0; i < providers.length; i++) {
    const ids = activityIdsByProvider[i];
    if (ids.length > 0) {
      const { error } = await supabase
        .from("providers")
        .update({ activity_ids: ids })
        .eq("id", providerIds[i]);

      if (error) {
        console.error(`Error updating provider activity_ids:`, error.message);
      } else {
        console.log(`\n✓ Updated ${providers[i].name} with ${ids.length} activity IDs`);
      }
    }
  }

  console.log("\n═══════════════════════════════════════");
  console.log(`Done! Inserted ${providers.length} providers and ${activities.length} activities.`);
}

seed().catch(console.error);
