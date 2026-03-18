const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://rczjersfygughcmvuncq.supabase.co",
  "sb_publishable_AUx-0WAnYfeVrd0SYoZh-A_0xM2jWSN"
);

// Map: name_en -> new image_url
const imageUpdates = {
  // ── WILD CABO TOURS (missing images) ──
  "Land's End Paddle Boarding Tour":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2019/05/348406c9-9d3c-4b0e-a128-43ef220229a2.jpg",
  "Sunset Yacht & Dinner Cruise - Tu Enamorado":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/12/Actual_sunset_sails12.jpg",
  "Yo Ho Ho Sunset Dinner & Pirate Show Cruise":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/10/Yo-Ho-Ho-Sunset-Cruise-image-1.jpg",
  "Luxury Sunset Dinner - Cabo Wave":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2020/03/dinner-cruise.jpg",
  "Treasure Hunt Guided Snorkel & Lunch Pirate Tour":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/10/3..jpg",
  "Whale Watching with Breakfast":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/10/Whale-Watching-Breakfast-image-1.jpg",
  "Thar She Blows! Whale Watching (Cabo Legend)":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/10/Whales-Tales-Breakfast-image-1.jpg",
  "Breakfast Snorkel Cruise":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/10/Snorkel-Cruise-Breakfast-image-1.jpg",
  "Cabo Wave Morning Snorkel & Breakfast":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2025/12/Cabo-Wave-Morning-Snorkel-Breakfast-image-1.jpg",
  "Quest of the Bay Lunch Snorkel (Buccaneer Queen)":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/10/Quest-of-the-Bay-Lunch-Snorkel-image-1.jpg",
  "Wind Sea Luxury Snorkel and Lunch Yacht Cruise":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/12/Actual_sunset_sails2.jpg",
  "Pirate Guided Snorkel & Breakfast Cruise":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2018/10/18-Buccaneer-barco1.jpg",
  "Roundtrip Los Cabos Airport Transfer":
    "https://www.wildcabotours.com/wp-content/uploads/sites/1903/2026/01/Roundtrip-Los-Cabos-International-Airport-Transfer-image-2.jpg",

  // ── CANOPY COSTA AZUL (better images) ──
  "Shared Zip-Lines and Rappelling":
    "https://www.costaazulziplines.com/assets/images/caz-7-large-816x546.webp",
  "Private Zip-Lines and Rappelling":
    "https://www.costaazulziplines.com/assets/images/img-5230-816x544.webp",

  // ── CACTUS TOURS (hero images from individual pages) ──
  "Migriño ATV":
    "https://cactustours.com.mx/wp-content/uploads/2024/07/Portada-Migrino-ATV.webp",
  "Beach & Dunes ATV 4X4":
    "https://cactustours.com.mx/wp-content/uploads/2024/07/Portada-BeachDunes.webp",
  "Side by Side Adventure (UTV)":
    "https://cactustours.com.mx/wp-content/uploads/2024/08/SIDE-BY-SIDE.webp",
  "Can-Am X3 Turbo Adventure (UTV)":
    "https://cactustours.com.mx/wp-content/uploads/2024/08/CANAM-X3.webp",
  "Maverick RC/RS Turbo Adventure (UTV)":
    "https://cactustours.com.mx/wp-content/uploads/2024/08/MAVERICK-RC.webp",
  "Mini RZR (Kids UTV)":
    "https://cactustours.com.mx/wp-content/uploads/2024/08/RZR.webp",
  "Camel Ride":
    "https://cactustours.com.mx/wp-content/uploads/2024/08/CAMELLOS.webp",
  "Horseback Riding":
    "https://cactustours.com.mx/wp-content/uploads/2024/08/CABALLOS-1.webp",
  "Sky Bike":
    "https://cactustours.com.mx/wp-content/uploads/2025/06/Cactus-Web-Page-Skybikes.webp",
  "Electric Bike Tour":
    "https://cactustours.com.mx/wp-content/uploads/2024/08/EBIKE.webp",
  "Mountain Bike Tour":
    "https://cactustours.com.mx/wp-content/uploads/2024/08/MOUNTAINBIKE-copia.webp",
  "Combo 2x1":
    "https://cactustours.com.mx/wp-content/uploads/2024/08/portada-COMBO-2-X-1.webp",
  "Combo 2x1 Premium":
    "https://cactustours.com.mx/wp-content/uploads/2024/04/combo-2x1-1.webp",
  "Combo 3x1":
    "https://cactustours.com.mx/wp-content/uploads/2024/12/COMBO-3X1-PORTADA-scaled.webp",
  "All Attractions Combo":
    "https://cactustours.com.mx/wp-content/uploads/2024/12/TODAS-LAS-ATRACCIONES-COMBO-PORTADA-scaled.webp",
  "Balandra Combo":
    "https://cactustours.com.mx/wp-content/uploads/2026/02/I8A0430.jpg",
  "Todos Santos Combo":
    "https://cactustours.com.mx/wp-content/uploads/2026/02/I8A1077-1024x574.jpg",
};

async function updateImages() {
  console.log("Updating activity images...\n");

  let updated = 0;
  let skipped = 0;
  let notFound = 0;

  for (const [name, imageUrl] of Object.entries(imageUpdates)) {
    const { data, error } = await supabase
      .from("activities")
      .update({ image_url: imageUrl })
      .eq("name_en", name)
      .select("id, name_en, image_url");

    if (error) {
      console.error(`  ✗ Error updating "${name}":`, error.message);
      continue;
    }

    if (!data || data.length === 0) {
      console.log(`  ? Not found: "${name}"`);
      notFound++;
      continue;
    }

    updated++;
    console.log(`  ✓ ${name}`);
  }

  // Verify: check for any remaining null images
  const { data: nullImages } = await supabase
    .from("activities")
    .select("name_en, image_url")
    .is("image_url", null)
    .eq("active", true);

  console.log(`\n══════════════════════════════════════`);
  console.log(`Updated: ${updated} | Not found: ${notFound}`);

  if (nullImages && nullImages.length > 0) {
    console.log(`\nStill missing images (${nullImages.length}):`);
    nullImages.forEach((a) => console.log(`  - ${a.name_en}`));
  } else {
    console.log(`\nAll activities now have images!`);
  }
}

updateImages().catch(console.error);
