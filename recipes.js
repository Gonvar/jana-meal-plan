// ─────────────────────────────────────────────────────────────
//  Jana's Meal Plan — Recipe Pool
//  Edit this file to add, remove, or change recipes.
//
//  Each recipe shape:
//  {
//    id:        unique string (used for localStorage)
//    tag:       "meat" | "fish" | "plant" | "egg"
//    tagLabel:  display string
//    title:     recipe name
//    cal, protein, fat, carbs: macros per serving
//    time:      prep/cook time string
//    ingredients: string[]   ← human-readable, shown in recipe card
//    shopItems:  ShopItem[]  ← structured, used to build the shopping list
//      ShopItem: { name, qty (number|null), unit (string|null), category }
//      categories: "proteins" | "vegetables" | "grains" | "fats" | "spices"
//      qty: null → "check stock"  |  number → doubled for 2 servings
//    steps: string[]
//  }
// ─────────────────────────────────────────────────────────────

const recipePool = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ MEAT (10) ━━━
  {
    id: "chicken-quinoa-bowl",
    tag: "meat", tagLabel: "Chicken", tagLabel_de: "Hähnchen",
    title: "Chicken & Quinoa Power Bowl",
    title_de: "Hähnchen & Quinoa Power Bowl",
    cal: 580, protein: 52, fat: 22, carbs: 44, time: "10 min (prepped)",
    ingredients: [
      "150g grilled chicken breast (batch prep)",
      "80g cooked quinoa (batch prep)",
      "½ avocado",
      "80g cherry tomatoes",
      "60g cucumber",
      "Handful mixed greens",
      "1 tbsp olive oil + squeeze of lemon"
    ],
    ingredients_de: [
      "150g gegrillte Hähnchenbrust (Vorbereitungsschritt)",
      "80g gekochter Quinoa (Vorbereitungsschritt)",
      "½ Avocado",
      "80g Kirschtomaten",
      "60g Gurke",
      "Eine Handvoll gemischter Salat",
      "1 EL Olivenöl + Spritzer Zitrone"
    ],
    shopItems: [
      { name: "Chicken breast", qty: 150, unit: "g", category: "proteins" },
      { name: "Quinoa (dry)", qty: 40, unit: "g", category: "grains" },
      { name: "Avocado", qty: 0.5, unit: "whole", category: "fats" },
      { name: "Cherry tomatoes", qty: 80, unit: "g", category: "vegetables" },
      { name: "Cucumber", qty: 60, unit: "g", category: "vegetables" },
      { name: "Mixed salad greens", qty: 30, unit: "g", category: "vegetables" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Lemon", qty: 0.5, unit: "whole", category: "vegetables" }
    ],
    steps: [
      "Assemble greens in a bowl.",
      "Top with sliced chicken, quinoa, diced avocado, halved tomatoes, and cucumber.",
      "Drizzle with olive oil and lemon. Season with salt & pepper."
    ],
    steps_de: [
      "Salat in einer Schüssel anrichten.",
      "Mit Hähnchenscheiben, Quinoa, gewürfelter Avocado, halbierten Tomaten und Gurke belegen.",
      "Mit Olivenöl und Zitrone beträufeln. Mit Salz & Pfeffer würzen."
    ]
  },

  {
    id: "lemon-herb-chicken",
    tag: "meat", tagLabel: "Chicken", tagLabel_de: "Hähnchen",
    title: "Lemon Herb Chicken with Sweet Potato & Green Beans",
    title_de: "Zitronen-Kräuter-Hähnchen mit Süßkartoffel & grünen Bohnen",
    cal: 700, protein: 60, fat: 20, carbs: 58, time: "10 min (prepped)",
    ingredients: [
      "180g grilled chicken breast (batch prep)",
      "200g roasted sweet potato (batch prep)",
      "120g green beans",
      "1 tbsp olive oil",
      "Lemon zest, garlic, herbs (thyme/rosemary)"
    ],
    ingredients_de: [
      "180g gegrillte Hähnchenbrust (Vorbereitungsschritt)",
      "200g geröstete Süßkartoffel (Vorbereitungsschritt)",
      "120g grüne Bohnen",
      "1 EL Olivenöl",
      "Zitronenabrieb, Knoblauch, Kräuter (Thymian/Rosmarin)"
    ],
    shopItems: [
      { name: "Chicken breast", qty: 180, unit: "g", category: "proteins" },
      { name: "Sweet potato", qty: 200, unit: "g", category: "vegetables" },
      { name: "Green beans", qty: 120, unit: "g", category: "vegetables" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Lemon", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Garlic", qty: 2, unit: "cloves", category: "vegetables" }
    ],
    steps: [
      "Steam or sauté green beans 4-5 min until tender-crisp.",
      "Plate with reheated chicken and sweet potato.",
      "Drizzle with olive oil, lemon zest, and herbs."
    ],
    steps_de: [
      "Grüne Bohnen 4–5 Min. dämpfen oder anbraten, bis sie bissfest sind.",
      "Mit aufgewärmtem Hähnchen und Süßkartoffel anrichten.",
      "Mit Olivenöl, Zitronenabrieb und Kräutern beträufeln."
    ]
  },

  {
    id: "turkey-meatballs",
    tag: "meat", tagLabel: "Turkey", tagLabel_de: "Pute",
    title: "Turkey Meatballs with Roasted Veggies & Quinoa",
    title_de: "Putenbällchen mit geröstetem Gemüse & Quinoa",
    cal: 670, protein: 66, fat: 26, carbs: 32, time: "10 min (prepped)",
    ingredients: [
      "200g turkey meatballs (batch prep, ~5 meatballs)",
      "80g cooked quinoa (batch prep)",
      "120g roasted Mediterranean veggies (courgette, pepper, aubergine)",
      "1 tbsp olive oil",
      "Fresh basil, balsamic glaze"
    ],
    ingredients_de: [
      "200g Putenbällchen (Vorbereitungsschritt, ca. 5 Bällchen)",
      "80g gekochter Quinoa (Vorbereitungsschritt)",
      "120g geröstetes mediterranes Gemüse (Zucchini, Paprika, Aubergine)",
      "1 EL Olivenöl",
      "Frisches Basilikum, Balsamico-Creme"
    ],
    shopItems: [
      { name: "Turkey mince", qty: 200, unit: "g", category: "proteins" },
      { name: "Quinoa (dry)", qty: 40, unit: "g", category: "grains" },
      { name: "Courgette", qty: 60, unit: "g", category: "vegetables" },
      { name: "Bell pepper", qty: 60, unit: "g", category: "vegetables" },
      { name: "Aubergine", qty: 60, unit: "g", category: "vegetables" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Balsamic glaze", qty: null, unit: null, category: "fats" },
      { name: "Fresh basil", qty: null, unit: null, category: "vegetables" }
    ],
    steps: [
      "Reheat turkey meatballs and roasted veggies.",
      "Plate with quinoa.",
      "Drizzle with olive oil and balsamic. Top with fresh basil."
    ],
    steps_de: [
      "Putenbällchen und geröstetes Gemüse aufwärmen.",
      "Mit Quinoa anrichten.",
      "Mit Olivenöl und Balsamico beträufeln. Mit frischem Basilikum garnieren."
    ]
  },

  {
    id: "chicken-lettuce-wraps",
    tag: "meat", tagLabel: "Chicken", tagLabel_de: "Hähnchen",
    title: "Chicken Lettuce Wraps with Peanut Sauce",
    title_de: "Hähnchen-Salatwickel mit Erdnusssauce",
    cal: 590, protein: 52, fat: 28, carbs: 32, time: "15 min",
    ingredients: [
      "160g chicken breast (diced)",
      "1 large gem/iceberg lettuce",
      "80g carrot (julienned)",
      "60g cucumber (julienned)",
      "40g peanuts (crushed)",
      "Sauce: 2 tbsp peanut butter, 1 tbsp tamari, 1 tsp lime juice, 1 tsp sesame oil"
    ],
    ingredients_de: [
      "160g Hähnchenbrust (gewürfelt)",
      "1 großer Kopfsalat/Eisbergsalat",
      "80g Karotte (in Streifen)",
      "60g Gurke (in Streifen)",
      "40g Erdnüsse (gehackt)",
      "Sauce: 2 EL Erdnussbutter, 1 EL Tamari, 1 TL Limettensaft, 1 TL Sesamöl"
    ],
    shopItems: [
      { name: "Chicken breast", qty: 160, unit: "g", category: "proteins" },
      { name: "Iceberg lettuce", qty: 1, unit: "whole", category: "vegetables" },
      { name: "Carrot", qty: 80, unit: "g", category: "vegetables" },
      { name: "Cucumber", qty: 60, unit: "g", category: "vegetables" },
      { name: "Peanuts", qty: 40, unit: "g", category: "fats" },
      { name: "Peanut butter", qty: null, unit: null, category: "fats" },
      { name: "Tamari", qty: null, unit: null, category: "fats" },
      { name: "Sesame oil", qty: null, unit: null, category: "fats" },
      { name: "Lime", qty: 0.5, unit: "whole", category: "vegetables" }
    ],
    steps: [
      "Sauté diced chicken until cooked through (6-7 min).",
      "Whisk peanut sauce ingredients until smooth.",
      "Fill lettuce cups with chicken, carrot, cucumber.",
      "Drizzle with peanut sauce, top with crushed peanuts."
    ],
    steps_de: [
      "Gewürfeltes Hähnchen anbraten, bis es gar ist (6–7 Min.).",
      "Erdnusssauce-Zutaten glatt rühren.",
      "Salatblätter mit Hähnchen, Karotte und Gurke füllen.",
      "Mit Erdnusssauce beträufeln und mit gehackten Erdnüssen bestreuen."
    ]
  },

  {
    id: "moroccan-chicken",
    tag: "meat", tagLabel: "Chicken", tagLabel_de: "Hähnchen",
    title: "Moroccan Spiced Chicken with Chickpeas & Cauliflower",
    title_de: "Marokkanisches Hähnchen mit Kichererbsen & Blumenkohl",
    cal: 640, protein: 54, fat: 20, carbs: 56, time: "30 min",
    ingredients: [
      "160g chicken breast (diced)",
      "150g cauliflower florets",
      "120g chickpeas (canned, drained)",
      "100g cherry tomatoes",
      "½ onion",
      "1 tsp cumin, 1 tsp coriander, ½ tsp cinnamon, ½ tsp turmeric",
      "1 tbsp olive oil",
      "Fresh coriander, lemon"
    ],
    ingredients_de: [
      "160g Hähnchenbrust (gewürfelt)",
      "150g Blumenkohlröschen",
      "120g Kichererbsen (aus der Dose, abgetropft)",
      "100g Kirschtomaten",
      "½ Zwiebel",
      "1 TL Kreuzkümmel, 1 TL Koriander, ½ TL Zimt, ½ TL Kurkuma",
      "1 EL Olivenöl",
      "Frischer Koriander, Zitrone"
    ],
    shopItems: [
      { name: "Chicken breast", qty: 160, unit: "g", category: "proteins" },
      { name: "Cauliflower", qty: 150, unit: "g", category: "vegetables" },
      { name: "Chickpeas (canned)", qty: 120, unit: "g", category: "grains" },
      { name: "Cherry tomatoes", qty: 100, unit: "g", category: "vegetables" },
      { name: "Onion", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Lemon", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Fresh coriander", qty: null, unit: null, category: "vegetables" }
    ],
    steps: [
      "Sauté onion in olive oil 3 min. Add spices, cook 1 min.",
      "Add chicken, brown 5 min on each side.",
      "Add cauliflower, chickpeas, tomatoes and 100ml water. Simmer 15 min.",
      "Finish with lemon juice and coriander."
    ],
    steps_de: [
      "Zwiebel in Olivenöl 3 Min. anbraten. Gewürze hinzufügen, 1 Min. rösten.",
      "Hähnchen dazugeben, je 5 Min. von jeder Seite anbraten.",
      "Blumenkohl, Kichererbsen, Tomaten und 100 ml Wasser hinzufügen. 15 Min. köcheln lassen.",
      "Mit Zitronensaft und Koriander abschließen."
    ]
  },

  {
    id: "turkey-taco-bowl",
    tag: "meat", tagLabel: "Turkey", tagLabel_de: "Pute",
    title: "Ground Turkey Taco Bowl",
    title_de: "Puten-Taco-Bowl",
    cal: 620, protein: 54, fat: 22, carbs: 48, time: "20 min",
    ingredients: [
      "180g ground turkey",
      "80g white rice (cooked)",
      "120g black beans (canned, drained)",
      "60g corn kernels",
      "60g cherry tomatoes",
      "½ avocado",
      "1 tsp cumin, 1 tsp smoked paprika, ½ tsp chili",
      "Lime juice, fresh coriander"
    ],
    ingredients_de: [
      "180g Putenhackfleisch",
      "80g weißer Reis (gekocht)",
      "120g schwarze Bohnen (aus der Dose, abgetropft)",
      "60g Maiskörner",
      "60g Kirschtomaten",
      "½ Avocado",
      "1 TL Kreuzkümmel, 1 TL Räucherpaprika, ½ TL Chili",
      "Limettensaft, frischer Koriander"
    ],
    shopItems: [
      { name: "Turkey mince", qty: 180, unit: "g", category: "proteins" },
      { name: "White rice", qty: 40, unit: "g", category: "grains" },
      { name: "Black beans (canned)", qty: 120, unit: "g", category: "grains" },
      { name: "Corn kernels", qty: 60, unit: "g", category: "vegetables" },
      { name: "Cherry tomatoes", qty: 60, unit: "g", category: "vegetables" },
      { name: "Avocado", qty: 0.5, unit: "whole", category: "fats" },
      { name: "Lime", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Fresh coriander", qty: null, unit: null, category: "vegetables" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" }
    ],
    steps: [
      "Cook turkey in a pan with olive oil, breaking up the meat (8 min).",
      "Add spices and cook 2 more min.",
      "Warm beans in the same pan.",
      "Build bowl: rice, turkey, beans, corn, tomatoes, avocado.",
      "Finish with lime juice and coriander."
    ],
    steps_de: [
      "Putenhackfleisch in einer Pfanne mit Olivenöl anbraten, dabei zerkleinern (8 Min.).",
      "Gewürze hinzufügen und noch 2 Min. garen.",
      "Bohnen in derselben Pfanne erwärmen.",
      "Bowl aufbauen: Reis, Pute, Bohnen, Mais, Tomaten, Avocado.",
      "Mit Limettensaft und Koriander abschließen."
    ]
  },

  {
    id: "honey-garlic-chicken",
    tag: "meat", tagLabel: "Chicken", tagLabel_de: "Hähnchen",
    title: "Honey Garlic Chicken with Bok Choy & Rice",
    title_de: "Honig-Knoblauch-Hähnchen mit Pak Choi & Reis",
    cal: 610, protein: 50, fat: 18, carbs: 56, time: "20 min",
    ingredients: [
      "160g chicken breast",
      "2 heads baby bok choy",
      "80g white rice (cooked)",
      "3 garlic cloves (minced)",
      "Glaze: 1 tbsp tamari, 1 tbsp maple syrup, 1 tsp rice vinegar, 1 tsp sesame oil",
      "Sesame seeds, spring onions"
    ],
    ingredients_de: [
      "160g Hähnchenbrust",
      "2 Köpfe Baby-Pak-Choi",
      "80g weißer Reis (gekocht)",
      "3 Knoblauchzehen (gehackt)",
      "Glasur: 1 EL Tamari, 1 EL Ahornsirup, 1 TL Reisessig, 1 TL Sesamöl",
      "Sesamsamen, Frühlingszwiebeln"
    ],
    shopItems: [
      { name: "Chicken breast", qty: 160, unit: "g", category: "proteins" },
      { name: "Bok choy", qty: 200, unit: "g", category: "vegetables" },
      { name: "White rice", qty: 40, unit: "g", category: "grains" },
      { name: "Garlic", qty: 3, unit: "cloves", category: "vegetables" },
      { name: "Tamari", qty: null, unit: null, category: "fats" },
      { name: "Maple syrup", qty: null, unit: null, category: "fats" },
      { name: "Rice vinegar", qty: null, unit: null, category: "fats" },
      { name: "Sesame oil", qty: null, unit: null, category: "fats" },
      { name: "Sesame seeds", qty: null, unit: null, category: "fats" },
      { name: "Spring onions", qty: 2, unit: "stalks", category: "vegetables" }
    ],
    steps: [
      "Mix glaze ingredients.",
      "Pan-sear chicken 5-6 min per side. Add glaze in the last 2 min.",
      "In same pan, stir-fry bok choy with garlic 3-4 min.",
      "Serve over rice. Top with sesame seeds and spring onions."
    ],
    steps_de: [
      "Glasur-Zutaten verrühren.",
      "Hähnchen 5–6 Min. pro Seite anbraten. In den letzten 2 Min. Glasur hinzufügen.",
      "In derselben Pfanne Pak Choi mit Knoblauch 3–4 Min. anbraten.",
      "Auf Reis servieren. Mit Sesamsamen und Frühlingszwiebeln bestreuen."
    ]
  },

  {
    id: "thai-basil-chicken",
    tag: "meat", tagLabel: "Chicken", tagLabel_de: "Hähnchen",
    title: "Thai Basil Chicken Stir-Fry with Jasmine Rice",
    title_de: "Thai-Basilikum-Hähnchen mit Jasminreis",
    cal: 600, protein: 50, fat: 22, carbs: 44, time: "20 min",
    ingredients: [
      "160g chicken breast (minced or finely diced)",
      "80g jasmine rice (cooked)",
      "80g bell pepper (sliced)",
      "1 small onion (diced)",
      "3 garlic cloves",
      "1 red chili",
      "Large handful fresh basil",
      "1 tbsp tamari, 1 tsp fish sauce (omit for GF), 1 tsp sesame oil"
    ],
    ingredients_de: [
      "160g Hähnchenbrust (gehackt oder fein gewürfelt)",
      "80g Jasminreis (gekocht)",
      "80g Paprika (in Streifen)",
      "1 kleine Zwiebel (gewürfelt)",
      "3 Knoblauchzehen",
      "1 rote Chili",
      "Große Handvoll frisches Basilikum",
      "1 EL Tamari, 1 TL Fischsauce (für GF weglassen), 1 TL Sesamöl"
    ],
    shopItems: [
      { name: "Chicken breast", qty: 160, unit: "g", category: "proteins" },
      { name: "White rice", qty: 40, unit: "g", category: "grains" },
      { name: "Bell pepper", qty: 80, unit: "g", category: "vegetables" },
      { name: "Onion", qty: 1, unit: "whole", category: "vegetables" },
      { name: "Garlic", qty: 3, unit: "cloves", category: "vegetables" },
      { name: "Tamari", qty: null, unit: null, category: "fats" },
      { name: "Sesame oil", qty: null, unit: null, category: "fats" },
      { name: "Fresh basil", qty: null, unit: null, category: "vegetables" }
    ],
    steps: [
      "Heat oil in wok on high. Add garlic, chili, onion — stir-fry 2 min.",
      "Add chicken, stir-fry until cooked (5-6 min).",
      "Add peppers and stir-fry 2 min more.",
      "Add tamari and sesame oil. Toss to coat.",
      "Remove from heat, fold in basil. Serve over rice."
    ],
    steps_de: [
      "Öl im Wok stark erhitzen. Knoblauch, Chili, Zwiebel hinzufügen – 2 Min. rühren.",
      "Hähnchen hinzufügen, unter Rühren 5–6 Min. garen.",
      "Paprika hinzufügen und weitere 2 Min. rühren.",
      "Tamari und Sesamöl hinzufügen. Alles gut durchschwenken.",
      "Vom Herd nehmen, Basilikum unterfalten. Auf Reis servieren."
    ]
  },

  {
    id: "chicken-shawarma-bowl",
    tag: "meat", tagLabel: "Chicken", tagLabel_de: "Hähnchen",
    title: "Chicken Shawarma Bowl with Hummus & Tabbouleh",
    title_de: "Hähnchen-Schawarma-Bowl mit Hummus & Taboulé",
    cal: 630, protein: 52, fat: 24, carbs: 48, time: "25 min",
    ingredients: [
      "160g chicken breast",
      "3 tbsp hummus (GF store-bought)",
      "80g cherry tomatoes (halved)",
      "60g cucumber (diced)",
      "30g red onion (finely diced)",
      "30g parsley (chopped)",
      "60g quinoa (cooked)",
      "Marinade: 1 tsp cumin, 1 tsp smoked paprika, ½ tsp turmeric, 1 tbsp olive oil, lemon"
    ],
    ingredients_de: [
      "160g Hähnchenbrust",
      "3 EL Hummus (GF, aus dem Handel)",
      "80g Kirschtomaten (halbiert)",
      "60g Gurke (gewürfelt)",
      "30g rote Zwiebel (fein gewürfelt)",
      "30g Petersilie (gehackt)",
      "60g Quinoa (gekocht)",
      "Marinade: 1 TL Kreuzkümmel, 1 TL Räucherpaprika, ½ TL Kurkuma, 1 EL Olivenöl, Zitrone"
    ],
    shopItems: [
      { name: "Chicken breast", qty: 160, unit: "g", category: "proteins" },
      { name: "Hummus (GF)", qty: 3, unit: "tbsp", category: "fats" },
      { name: "Cherry tomatoes", qty: 80, unit: "g", category: "vegetables" },
      { name: "Cucumber", qty: 60, unit: "g", category: "vegetables" },
      { name: "Red onion", qty: 30, unit: "g", category: "vegetables" },
      { name: "Fresh parsley", qty: null, unit: null, category: "vegetables" },
      { name: "Quinoa (dry)", qty: 30, unit: "g", category: "grains" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Lemon", qty: 0.5, unit: "whole", category: "vegetables" }
    ],
    steps: [
      "Marinate chicken in spices, olive oil, and lemon for 10 min.",
      "Pan-sear chicken 5-6 min per side. Rest and slice.",
      "Mix tomatoes, cucumber, red onion, parsley with lemon juice.",
      "Build bowl: quinoa, hummus, chicken, tabbouleh."
    ],
    steps_de: [
      "Hähnchen mit Gewürzen, Olivenöl und Zitrone 10 Min. marinieren.",
      "Hähnchen 5–6 Min. pro Seite anbraten. Ruhen lassen und in Scheiben schneiden.",
      "Tomaten, Gurke, rote Zwiebel und Petersilie mit Zitronensaft mischen.",
      "Bowl aufbauen: Quinoa, Hummus, Hähnchen, Taboulé."
    ]
  },

  {
    id: "chicken-sweet-potato-curry",
    tag: "meat", tagLabel: "Chicken", tagLabel_de: "Hähnchen",
    title: "Chicken & Sweet Potato Coconut Curry",
    title_de: "Hähnchen-Süßkartoffel-Kokos-Curry",
    cal: 660, protein: 52, fat: 22, carbs: 60, time: "30 min",
    ingredients: [
      "160g chicken breast (diced)",
      "150g sweet potato (diced)",
      "80g white rice (cooked)",
      "100ml coconut milk (light)",
      "½ onion, 2 garlic cloves, 1 tsp ginger",
      "2 tsp curry powder, 1 tsp turmeric",
      "100g baby spinach",
      "1 tbsp olive oil"
    ],
    ingredients_de: [
      "160g Hähnchenbrust (gewürfelt)",
      "150g Süßkartoffel (gewürfelt)",
      "80g weißer Reis (gekocht)",
      "100ml Kokosmilch (leicht)",
      "½ Zwiebel, 2 Knoblauchzehen, 1 TL Ingwer",
      "2 TL Currypulver, 1 TL Kurkuma",
      "100g Babyspinat",
      "1 EL Olivenöl"
    ],
    shopItems: [
      { name: "Chicken breast", qty: 160, unit: "g", category: "proteins" },
      { name: "Sweet potato", qty: 150, unit: "g", category: "vegetables" },
      { name: "White rice", qty: 40, unit: "g", category: "grains" },
      { name: "Coconut milk (light)", qty: 100, unit: "ml", category: "fats" },
      { name: "Onion", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Garlic", qty: 2, unit: "cloves", category: "vegetables" },
      { name: "Ginger (fresh)", qty: null, unit: null, category: "vegetables" },
      { name: "Spinach (baby)", qty: 100, unit: "g", category: "vegetables" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" }
    ],
    steps: [
      "Sauté onion, garlic, ginger 3 min. Add spices, cook 1 min.",
      "Add chicken, brown 4 min.",
      "Add sweet potato, coconut milk and 100ml water. Simmer 15 min.",
      "Stir in spinach until wilted. Serve over rice."
    ],
    steps_de: [
      "Zwiebel, Knoblauch, Ingwer 3 Min. anbraten. Gewürze hinzufügen, 1 Min. rösten.",
      "Hähnchen hinzufügen, 4 Min. anbraten.",
      "Süßkartoffel, Kokosmilch und 100 ml Wasser hinzufügen. 15 Min. köcheln lassen.",
      "Spinat unterrühren, bis er zusammengefallen ist. Auf Reis servieren."
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FISH (8) ━━━━
  {
    id: "salmon-poke-bowl",
    tag: "fish", tagLabel: "Salmon", tagLabel_de: "Lachs",
    title: "Salmon Poke Bowl",
    title_de: "Lachs-Poke-Bowl",
    cal: 650, protein: 42, fat: 26, carbs: 62, time: "15 min",
    ingredients: [
      "140g fresh salmon fillet (diced)",
      "100g cooked jasmine rice",
      "60g edamame (shelled)",
      "½ avocado",
      "50g cucumber (diced)",
      "1 tbsp tamari",
      "1 tsp sesame oil",
      "Sesame seeds, spring onion"
    ],
    ingredients_de: [
      "140g frisches Lachsfilet (gewürfelt)",
      "100g gekochter Jasminreis",
      "60g Edamame (geschält)",
      "½ Avocado",
      "50g Gurke (gewürfelt)",
      "1 EL Tamari",
      "1 TL Sesamöl",
      "Sesamsamen, Frühlingszwiebel"
    ],
    shopItems: [
      { name: "Salmon fillet", qty: 140, unit: "g", category: "proteins" },
      { name: "White rice", qty: 50, unit: "g", category: "grains" },
      { name: "Edamame (frozen)", qty: 60, unit: "g", category: "grains" },
      { name: "Avocado", qty: 0.5, unit: "whole", category: "fats" },
      { name: "Cucumber", qty: 50, unit: "g", category: "vegetables" },
      { name: "Tamari", qty: null, unit: null, category: "fats" },
      { name: "Sesame oil", qty: null, unit: null, category: "fats" },
      { name: "Sesame seeds", qty: null, unit: null, category: "fats" },
      { name: "Spring onions", qty: 2, unit: "stalks", category: "vegetables" }
    ],
    steps: [
      "Cook rice if not prepped. Dice salmon into 2cm cubes.",
      "Marinate salmon in tamari + sesame oil for 5 min.",
      "Assemble bowl: rice base, salmon, edamame, avocado, cucumber.",
      "Top with sesame seeds and sliced spring onion."
    ],
    steps_de: [
      "Reis kochen, falls nicht vorbereitet. Lachs in 2-cm-Würfel schneiden.",
      "Lachs 5 Min. in Tamari und Sesamöl marinieren.",
      "Bowl zusammenstellen: Reis als Basis, Lachs, Edamame, Avocado, Gurke.",
      "Mit Sesamsamen und Frühlingszwiebeln garnieren."
    ]
  },

  {
    id: "teriyaki-salmon",
    tag: "fish", tagLabel: "Salmon", tagLabel_de: "Lachs",
    title: "Teriyaki Salmon with Sesame Broccoli & Rice",
    title_de: "Teriyaki-Lachs mit Sesam-Brokkoli & Reis",
    cal: 680, protein: 48, fat: 26, carbs: 62, time: "20 min",
    ingredients: [
      "150g salmon fillet",
      "100g cooked rice",
      "150g broccoli",
      "Teriyaki glaze: 2 tbsp tamari, 1 tbsp maple syrup, 1 tsp rice vinegar, 1 tsp cornstarch",
      "1 tsp sesame seeds",
      "1 tsp sesame oil"
    ],
    ingredients_de: [
      "150g Lachsfilet",
      "100g gekochter Reis",
      "150g Brokkoli",
      "Teriyaki-Glasur: 2 EL Tamari, 1 EL Ahornsirup, 1 TL Reisessig, 1 TL Stärkemehl",
      "1 TL Sesamsamen",
      "1 TL Sesamöl"
    ],
    shopItems: [
      { name: "Salmon fillet", qty: 150, unit: "g", category: "proteins" },
      { name: "White rice", qty: 50, unit: "g", category: "grains" },
      { name: "Broccoli", qty: 150, unit: "g", category: "vegetables" },
      { name: "Tamari", qty: null, unit: null, category: "fats" },
      { name: "Maple syrup", qty: null, unit: null, category: "fats" },
      { name: "Rice vinegar", qty: null, unit: null, category: "fats" },
      { name: "Sesame oil", qty: null, unit: null, category: "fats" },
      { name: "Sesame seeds", qty: null, unit: null, category: "fats" }
    ],
    steps: [
      "Mix teriyaki sauce ingredients.",
      "Pan-sear salmon skin-side down 4 min, flip, brush with teriyaki.",
      "Cook 3-4 min more, basting with sauce.",
      "Sauté broccoli in sesame oil until tender-crisp.",
      "Serve salmon over rice with broccoli. Sprinkle sesame seeds."
    ],
    steps_de: [
      "Teriyaki-Sauce-Zutaten verrühren.",
      "Lachs mit Haut nach unten 4 Min. anbraten, wenden, mit Teriyaki bestreichen.",
      "Weitere 3–4 Min. garen und immer wieder mit Sauce bestreichen.",
      "Brokkoli in Sesamöl anbraten, bis er bissfest ist.",
      "Lachs auf Reis mit Brokkoli anrichten. Sesamsamen darüberstreuen."
    ]
  },

  {
    id: "miso-salmon",
    tag: "fish", tagLabel: "Salmon", tagLabel_de: "Lachs",
    title: "Miso Glazed Salmon with Edamame Rice",
    title_de: "Miso-glasierter Lachs mit Edamame-Reis",
    cal: 660, protein: 48, fat: 24, carbs: 58, time: "20 min",
    ingredients: [
      "150g salmon fillet",
      "80g jasmine rice (cooked)",
      "80g edamame (shelled)",
      "80g pak choi or baby spinach",
      "Glaze: 1 tbsp white miso paste, 1 tbsp tamari, 1 tsp maple syrup, 1 tsp sesame oil",
      "1 tsp sesame seeds, spring onion"
    ],
    ingredients_de: [
      "150g Lachsfilet",
      "80g Jasminreis (gekocht)",
      "80g Edamame (geschält)",
      "80g Pak Choi oder Babyspinat",
      "Glasur: 1 EL weißes Miso, 1 EL Tamari, 1 TL Ahornsirup, 1 TL Sesamöl",
      "1 TL Sesamsamen, Frühlingszwiebel"
    ],
    shopItems: [
      { name: "Salmon fillet", qty: 150, unit: "g", category: "proteins" },
      { name: "White rice", qty: 40, unit: "g", category: "grains" },
      { name: "Edamame (frozen)", qty: 80, unit: "g", category: "grains" },
      { name: "Spinach (baby)", qty: 80, unit: "g", category: "vegetables" },
      { name: "White miso paste", qty: null, unit: null, category: "fats" },
      { name: "Tamari", qty: null, unit: null, category: "fats" },
      { name: "Maple syrup", qty: null, unit: null, category: "fats" },
      { name: "Sesame oil", qty: null, unit: null, category: "fats" },
      { name: "Sesame seeds", qty: null, unit: null, category: "fats" },
      { name: "Spring onions", qty: 2, unit: "stalks", category: "vegetables" }
    ],
    steps: [
      "Mix miso glaze. Coat salmon and marinate 10 min.",
      "Bake salmon at 200°C for 12-14 min.",
      "Cook edamame in boiling water 3 min. Drain.",
      "Stir edamame through rice. Serve salmon on top with pak choi/spinach.",
      "Top with sesame seeds and spring onion."
    ],
    steps_de: [
      "Miso-Glasur mischen. Lachs damit bestreichen und 10 Min. marinieren.",
      "Lachs bei 200 °C 12–14 Min. backen.",
      "Edamame 3 Min. in kochendem Wasser garen. Abgießen.",
      "Edamame unter den Reis mischen. Lachs obenauf mit Pak Choi/Spinat anrichten.",
      "Mit Sesamsamen und Frühlingszwiebel garnieren."
    ]
  },

  {
    id: "tuna-white-bean-bowl",
    tag: "fish", tagLabel: "Tuna", tagLabel_de: "Thunfisch",
    title: "Tuna & White Bean Mediterranean Bowl",
    title_de: "Mediterrane Bowl mit Thunfisch & weißen Bohnen",
    cal: 580, protein: 52, fat: 16, carbs: 52, time: "10 min",
    ingredients: [
      "160g canned tuna (in water, drained)",
      "120g white beans (canned, drained)",
      "80g cherry tomatoes",
      "60g cucumber",
      "40g red onion",
      "30g Kalamata olives",
      "Handful rocket / arugula",
      "1 tbsp olive oil, 1 tsp red wine vinegar, lemon"
    ],
    ingredients_de: [
      "160g Thunfisch aus der Dose (in Wasser, abgetropft)",
      "120g weiße Bohnen (aus der Dose, abgetropft)",
      "80g Kirschtomaten",
      "60g Gurke",
      "40g rote Zwiebel",
      "30g Kalamata-Oliven",
      "Handvoll Rucola",
      "1 EL Olivenöl, 1 TL Rotweinessig, Zitrone"
    ],
    shopItems: [
      { name: "Canned tuna", qty: 160, unit: "g", category: "proteins" },
      { name: "White beans (canned)", qty: 120, unit: "g", category: "grains" },
      { name: "Cherry tomatoes", qty: 80, unit: "g", category: "vegetables" },
      { name: "Cucumber", qty: 60, unit: "g", category: "vegetables" },
      { name: "Red onion", qty: 40, unit: "g", category: "vegetables" },
      { name: "Kalamata olives", qty: 30, unit: "g", category: "fats" },
      { name: "Rocket / arugula", qty: 30, unit: "g", category: "vegetables" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Lemon", qty: 0.5, unit: "whole", category: "vegetables" }
    ],
    steps: [
      "Drain and flake tuna. Drain and rinse beans.",
      "Halve tomatoes, dice cucumber, finely slice red onion.",
      "Combine all ingredients in a bowl.",
      "Dress with olive oil, red wine vinegar, lemon juice. Toss and serve."
    ],
    steps_de: [
      "Thunfisch abgießen und zerpflücken. Bohnen abgießen und abspülen.",
      "Tomaten halbieren, Gurke würfeln, rote Zwiebel fein schneiden.",
      "Alle Zutaten in einer Schüssel vermengen.",
      "Mit Olivenöl, Rotweinessig und Zitronensaft anmachen. Wenden und servieren."
    ]
  },

  {
    id: "cod-tomato-sauce",
    tag: "fish", tagLabel: "Cod", tagLabel_de: "Kabeljau",
    title: "Cod with Roasted Tomato Sauce & Cauliflower Rice",
    title_de: "Kabeljau mit Tomatensauce & Blumenkohlreis",
    cal: 590, protein: 46, fat: 20, carbs: 50, time: "25 min",
    ingredients: [
      "160g cod fillet",
      "200g cauliflower (riced)",
      "1 can (200g) chopped tomatoes",
      "1 onion (diced)",
      "2 garlic cloves",
      "1 tsp smoked paprika, ½ tsp cumin",
      "50g Kalamata olives",
      "1 tbsp olive oil",
      "Fresh parsley"
    ],
    ingredients_de: [
      "160g Kabeljaufilet",
      "200g Blumenkohl (geraspelt)",
      "1 Dose (200g) gehackte Tomaten",
      "1 Zwiebel (gewürfelt)",
      "2 Knoblauchzehen",
      "1 TL Räucherpaprika, ½ TL Kreuzkümmel",
      "50g Kalamata-Oliven",
      "1 EL Olivenöl",
      "Frische Petersilie"
    ],
    shopItems: [
      { name: "Cod fillet", qty: 160, unit: "g", category: "proteins" },
      { name: "Cauliflower", qty: 200, unit: "g", category: "vegetables" },
      { name: "Canned tomatoes", qty: 200, unit: "g", category: "fats" },
      { name: "Onion", qty: 1, unit: "whole", category: "vegetables" },
      { name: "Garlic", qty: 2, unit: "cloves", category: "vegetables" },
      { name: "Kalamata olives", qty: 50, unit: "g", category: "fats" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Fresh parsley", qty: null, unit: null, category: "vegetables" }
    ],
    steps: [
      "Pulse cauliflower into rice-sized pieces. Sauté in olive oil 5 min. Season.",
      "In a separate pan, sauté onion and garlic. Add spices, cook 1 min.",
      "Add canned tomatoes and olives. Simmer 8 min.",
      "Nestle cod into the sauce. Cover and cook 8-10 min until opaque.",
      "Serve on cauliflower rice. Finish with parsley."
    ],
    steps_de: [
      "Blumenkohl zu reisgroßen Stücken zerkleinern. In Olivenöl 5 Min. anbraten. Würzen.",
      "In einer anderen Pfanne Zwiebel und Knoblauch anbraten. Gewürze hinzufügen, 1 Min. rösten.",
      "Dosentomaten und Oliven hinzufügen. 8 Min. köcheln lassen.",
      "Kabeljau in die Sauce legen. Zugedeckt 8–10 Min. garen, bis er undurchsichtig ist.",
      "Auf Blumenkohlreis servieren. Mit Petersilie abschließen."
    ]
  },

  {
    id: "prawn-cashew-stir-fry",
    tag: "fish", tagLabel: "Prawns", tagLabel_de: "Garnelen",
    title: "Prawn & Cashew Stir-Fry with Jasmine Rice",
    title_de: "Garnelen & Cashew-Pfanne mit Jasminreis",
    cal: 620, protein: 44, fat: 22, carbs: 62, time: "20 min",
    ingredients: [
      "160g raw king prawns (peeled)",
      "80g jasmine rice (cooked)",
      "100g broccoli florets",
      "80g red bell pepper",
      "40g cashews",
      "3 garlic cloves, 1 tsp ginger",
      "1 tbsp tamari, 1 tsp sesame oil, 1 tsp rice vinegar",
      "Spring onions, sesame seeds"
    ],
    ingredients_de: [
      "160g rohe Riesengarnelen (geschält)",
      "80g Jasminreis (gekocht)",
      "100g Brokkoliröschen",
      "80g rote Paprika",
      "40g Cashews",
      "3 Knoblauchzehen, 1 TL Ingwer",
      "1 EL Tamari, 1 TL Sesamöl, 1 TL Reisessig",
      "Frühlingszwiebeln, Sesamsamen"
    ],
    shopItems: [
      { name: "Prawns (raw)", qty: 160, unit: "g", category: "proteins" },
      { name: "White rice", qty: 40, unit: "g", category: "grains" },
      { name: "Broccoli", qty: 100, unit: "g", category: "vegetables" },
      { name: "Bell pepper", qty: 80, unit: "g", category: "vegetables" },
      { name: "Cashews", qty: 40, unit: "g", category: "fats" },
      { name: "Garlic", qty: 3, unit: "cloves", category: "vegetables" },
      { name: "Ginger (fresh)", qty: null, unit: null, category: "vegetables" },
      { name: "Tamari", qty: null, unit: null, category: "fats" },
      { name: "Sesame oil", qty: null, unit: null, category: "fats" },
      { name: "Spring onions", qty: 2, unit: "stalks", category: "vegetables" },
      { name: "Sesame seeds", qty: null, unit: null, category: "fats" }
    ],
    steps: [
      "Heat wok on high. Stir-fry garlic and ginger 30 sec.",
      "Add prawns, cook 3-4 min until pink. Remove.",
      "Stir-fry broccoli and pepper 4-5 min.",
      "Return prawns, add cashews, tamari, sesame oil, vinegar. Toss 1 min.",
      "Serve over rice. Top with spring onions and sesame seeds."
    ],
    steps_de: [
      "Wok stark erhitzen. Knoblauch und Ingwer 30 Sek. rühren.",
      "Garnelen hinzufügen, 3–4 Min. garen bis sie rosa sind. Herausnehmen.",
      "Brokkoli und Paprika 4–5 Min. anbraten.",
      "Garnelen zurückgeben, Cashews, Tamari, Sesamöl, Essig hinzufügen. 1 Min. schwenken.",
      "Auf Reis servieren. Mit Frühlingszwiebeln und Sesamsamen bestreuen."
    ]
  },

  {
    id: "baked-salmon-asparagus",
    tag: "fish", tagLabel: "Salmon", tagLabel_de: "Lachs",
    title: "Baked Salmon with Asparagus & Lemon Quinoa",
    title_de: "Gebackener Lachs mit Spargel & Zitronen-Quinoa",
    cal: 640, protein: 48, fat: 28, carbs: 44, time: "25 min",
    ingredients: [
      "150g salmon fillet",
      "150g asparagus spears",
      "80g quinoa (cooked)",
      "1 tbsp olive oil",
      "Zest and juice of 1 lemon",
      "2 garlic cloves (minced)",
      "Fresh dill (optional)"
    ],
    ingredients_de: [
      "150g Lachsfilet",
      "150g Spargelstangen",
      "80g Quinoa (gekocht)",
      "1 EL Olivenöl",
      "Abrieb und Saft von 1 Zitrone",
      "2 Knoblauchzehen (gehackt)",
      "Frischer Dill (optional)"
    ],
    shopItems: [
      { name: "Salmon fillet", qty: 150, unit: "g", category: "proteins" },
      { name: "Asparagus", qty: 150, unit: "g", category: "vegetables" },
      { name: "Quinoa (dry)", qty: 40, unit: "g", category: "grains" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Lemon", qty: 1, unit: "whole", category: "vegetables" },
      { name: "Garlic", qty: 2, unit: "cloves", category: "vegetables" }
    ],
    steps: [
      "Preheat oven to 200°C.",
      "Place salmon and asparagus on a lined tray. Drizzle with olive oil, garlic, lemon.",
      "Bake 14-16 min.",
      "Cook quinoa, then stir through lemon zest and juice.",
      "Serve salmon and asparagus over lemon quinoa."
    ],
    steps_de: [
      "Ofen auf 200 °C vorheizen.",
      "Lachs und Spargel auf einem belegten Blech anrichten. Mit Olivenöl, Knoblauch und Zitrone beträufeln.",
      "14–16 Min. backen.",
      "Quinoa kochen, dann Zitronenabrieb und -saft unterrühren.",
      "Lachs und Spargel auf dem Zitronen-Quinoa servieren."
    ]
  },

  {
    id: "spiced-tuna-avocado-rice",
    tag: "fish", tagLabel: "Tuna", tagLabel_de: "Thunfisch",
    title: "Spiced Tuna with Avocado & Brown Rice Bowl",
    title_de: "Gewürzte Bowl mit Thunfisch, Avocado & braunem Reis",
    cal: 600, protein: 46, fat: 22, carbs: 54, time: "15 min",
    ingredients: [
      "160g canned tuna (in water, drained)",
      "80g brown rice (cooked)",
      "½ avocado",
      "80g edamame (shelled, cooked)",
      "60g cucumber",
      "1 tsp smoked paprika, ½ tsp cumin",
      "1 tbsp lime juice, 1 tsp sesame oil",
      "Fresh coriander, sesame seeds"
    ],
    ingredients_de: [
      "160g Thunfisch aus der Dose (in Wasser, abgetropft)",
      "80g brauner Reis (gekocht)",
      "½ Avocado",
      "80g Edamame (geschält, gegart)",
      "60g Gurke",
      "1 TL Räucherpaprika, ½ TL Kreuzkümmel",
      "1 EL Limettensaft, 1 TL Sesamöl",
      "Frischer Koriander, Sesamsamen"
    ],
    shopItems: [
      { name: "Canned tuna", qty: 160, unit: "g", category: "proteins" },
      { name: "Brown rice", qty: 40, unit: "g", category: "grains" },
      { name: "Avocado", qty: 0.5, unit: "whole", category: "fats" },
      { name: "Edamame (frozen)", qty: 80, unit: "g", category: "grains" },
      { name: "Cucumber", qty: 60, unit: "g", category: "vegetables" },
      { name: "Lime", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Sesame oil", qty: null, unit: null, category: "fats" },
      { name: "Sesame seeds", qty: null, unit: null, category: "fats" },
      { name: "Fresh coriander", qty: null, unit: null, category: "vegetables" }
    ],
    steps: [
      "Mix tuna with paprika, cumin, lime juice, and sesame oil.",
      "Build bowl: rice base, spiced tuna, avocado, edamame, cucumber.",
      "Top with coriander and sesame seeds."
    ],
    steps_de: [
      "Thunfisch mit Paprika, Kreuzkümmel, Limettensaft und Sesamöl mischen.",
      "Bowl aufbauen: Reis als Basis, gewürzter Thunfisch, Avocado, Edamame, Gurke.",
      "Mit Koriander und Sesamsamen garnieren."
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ PLANT (10) ━━━
  {
    id: "lentil-sweet-potato-soup",
    tag: "plant", tagLabel: "Legumes", tagLabel_de: "Hülsenfrüchte",
    title: "Spiced Lentil & Sweet Potato Soup",
    title_de: "Gewürzte Linsen-Süßkartoffel-Suppe",
    cal: 620, protein: 42, fat: 18, carbs: 64, time: "10 min (prepped)",
    ingredients: [
      "200g cooked red lentils (batch prep)",
      "150g roasted sweet potato (batch prep)",
      "400ml vegetable broth",
      "1 tsp cumin, 1 tsp smoked paprika, ½ tsp turmeric",
      "1 tbsp olive oil",
      "Squeeze of lemon",
      "Optional: 150g silken tofu blended in for extra protein"
    ],
    ingredients_de: [
      "200g gekochte rote Linsen (Vorbereitungsschritt)",
      "150g geröstete Süßkartoffel (Vorbereitungsschritt)",
      "400ml Gemüsebrühe",
      "1 TL Kreuzkümmel, 1 TL Räucherpaprika, ½ TL Kurkuma",
      "1 EL Olivenöl",
      "Spritzer Zitrone",
      "Optional: 150g Seidentofu einmixen für extra Protein"
    ],
    shopItems: [
      { name: "Red lentils (dry)", qty: 80, unit: "g", category: "grains" },
      { name: "Sweet potato", qty: 150, unit: "g", category: "vegetables" },
      { name: "Silken tofu", qty: 150, unit: "g", category: "proteins" },
      { name: "Vegetable broth", qty: 400, unit: "ml", category: "fats" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Lemon", qty: 0.5, unit: "whole", category: "vegetables" }
    ],
    steps: [
      "Combine lentils, diced sweet potato, and broth in a pot.",
      "Add spices, simmer 8-10 min. Blend silken tofu in, then blend half the soup.",
      "Serve with a drizzle of olive oil and squeeze of lemon."
    ],
    steps_de: [
      "Linsen, gewürfelte Süßkartoffel und Brühe in einem Topf vermengen.",
      "Gewürze hinzufügen, 8–10 Min. köcheln lassen. Seidentofu einmixen, dann die Hälfte der Suppe pürieren.",
      "Mit einem Schuss Olivenöl und Zitronensaft servieren."
    ]
  },

  {
    id: "chickpea-coconut-curry",
    tag: "plant", tagLabel: "Legumes", tagLabel_de: "Hülsenfrüchte",
    title: "Chickpea & Spinach Coconut Curry with Rice",
    title_de: "Kichererbsen-Spinat-Kokos-Curry mit Reis",
    cal: 680, protein: 54, fat: 18, carbs: 62, time: "25 min",
    ingredients: [
      "240g chickpeas (1 can, drained)",
      "100g spinach",
      "150ml coconut milk (light)",
      "100g cooked rice",
      "1 onion, 3 garlic cloves, 1 tsp ginger",
      "2 tsp curry powder, 1 tsp garam masala",
      "100g canned tomatoes",
      "150g silken tofu (blended in for protein boost)"
    ],
    ingredients_de: [
      "240g Kichererbsen (1 Dose, abgetropft)",
      "100g Spinat",
      "150ml Kokosmilch (leicht)",
      "100g gekochter Reis",
      "1 Zwiebel, 3 Knoblauchzehen, 1 TL Ingwer",
      "2 TL Currypulver, 1 TL Garam Masala",
      "100g Dosentomaten",
      "150g Seidentofu (eingemixxt für mehr Protein)"
    ],
    shopItems: [
      { name: "Chickpeas (canned)", qty: 240, unit: "g", category: "grains" },
      { name: "Spinach (baby)", qty: 100, unit: "g", category: "vegetables" },
      { name: "Coconut milk (light)", qty: 150, unit: "ml", category: "fats" },
      { name: "White rice", qty: 50, unit: "g", category: "grains" },
      { name: "Onion", qty: 1, unit: "whole", category: "vegetables" },
      { name: "Garlic", qty: 3, unit: "cloves", category: "vegetables" },
      { name: "Ginger (fresh)", qty: null, unit: null, category: "vegetables" },
      { name: "Canned tomatoes", qty: 100, unit: "g", category: "fats" },
      { name: "Silken tofu", qty: 150, unit: "g", category: "proteins" }
    ],
    steps: [
      "Sauté onion, garlic, ginger. Add spices, cook 1 min.",
      "Add canned tomatoes and coconut milk. Simmer 5 min.",
      "Blend silken tofu and stir in (adds creaminess + protein).",
      "Add chickpeas, cook 8 min. Stir in spinach until wilted.",
      "Serve over rice."
    ],
    steps_de: [
      "Zwiebel, Knoblauch, Ingwer anbraten. Gewürze hinzufügen, 1 Min. rösten.",
      "Dosentomaten und Kokosmilch hinzufügen. 5 Min. köcheln lassen.",
      "Seidentofu einmixen und unterrühren (macht das Curry cremiger + mehr Protein).",
      "Kichererbsen hinzufügen, 8 Min. köcheln. Spinat unterrühren, bis er zusammengefallen ist.",
      "Auf Reis servieren."
    ]
  },

  {
    id: "crispy-tofu-buddha",
    tag: "plant", tagLabel: "Tofu", tagLabel_de: "Tofu",
    title: "Crispy Tofu Buddha Bowl with Tahini Dressing",
    title_de: "Knusprige Buddha-Bowl mit Tofu & Tahini-Dressing",
    cal: 610, protein: 48, fat: 22, carbs: 42, time: "25 min",
    ingredients: [
      "200g firm tofu (pressed, cubed)",
      "80g cooked quinoa",
      "80g roasted sweet potato",
      "60g edamame",
      "60g red cabbage (shredded)",
      "50g carrot (grated)",
      "Dressing: 2 tbsp tahini, 1 tbsp lemon juice, 1 tsp tamari, water to thin"
    ],
    ingredients_de: [
      "200g fester Tofu (gepresst, gewürfelt)",
      "80g gekochter Quinoa",
      "80g geröstete Süßkartoffel",
      "60g Edamame",
      "60g Rotkohl (geraspelt)",
      "50g Karotte (gerieben)",
      "Dressing: 2 EL Tahini, 1 EL Zitronensaft, 1 TL Tamari, Wasser zum Verdünnen"
    ],
    shopItems: [
      { name: "Firm tofu", qty: 200, unit: "g", category: "proteins" },
      { name: "Quinoa (dry)", qty: 40, unit: "g", category: "grains" },
      { name: "Sweet potato", qty: 80, unit: "g", category: "vegetables" },
      { name: "Edamame (frozen)", qty: 60, unit: "g", category: "grains" },
      { name: "Red cabbage", qty: 60, unit: "g", category: "vegetables" },
      { name: "Carrot", qty: 50, unit: "g", category: "vegetables" },
      { name: "Tahini", qty: null, unit: null, category: "fats" },
      { name: "Tamari", qty: null, unit: null, category: "fats" },
      { name: "Lemon", qty: 0.5, unit: "whole", category: "vegetables" }
    ],
    steps: [
      "Press tofu, cut into cubes. Toss with cornstarch and salt.",
      "Pan-fry in a little oil until crispy on all sides (8 min).",
      "Assemble bowl: quinoa base, sweet potato, edamame, cabbage, carrot.",
      "Top with crispy tofu.",
      "Drizzle with tahini dressing."
    ],
    steps_de: [
      "Tofu pressen, in Würfel schneiden. Mit Stärkemehl und Salz wenden.",
      "In etwas Öl von allen Seiten knusprig braten (8 Min.).",
      "Bowl aufbauen: Quinoa als Basis, Süßkartoffel, Edamame, Kohl, Karotte.",
      "Mit knusprigem Tofu belegen.",
      "Mit Tahini-Dressing beträufeln."
    ]
  },

  {
    id: "sweet-potato-black-bean-tacos",
    tag: "plant", tagLabel: "Legumes", tagLabel_de: "Hülsenfrüchte",
    title: "Mexican-Style Sweet Potato & Black Bean Tacos",
    title_de: "Mexikanische Süßkartoffel- & Schwarze-Bohnen-Tacos",
    cal: 720, protein: 60, fat: 16, carbs: 62, time: "25 min",
    ingredients: [
      "200g sweet potato (diced small)",
      "200g black beans (canned, drained)",
      "6 small corn tortillas",
      "80g corn kernels",
      "½ avocado",
      "Lime juice, cumin, smoked paprika, chili",
      "Fresh coriander, pickled red onion"
    ],
    ingredients_de: [
      "200g Süßkartoffel (fein gewürfelt)",
      "200g schwarze Bohnen (aus der Dose, abgetropft)",
      "6 kleine Maistortillas",
      "80g Maiskörner",
      "½ Avocado",
      "Limettensaft, Kreuzkümmel, Räucherpaprika, Chili",
      "Frischer Koriander, eingelegte rote Zwiebel"
    ],
    shopItems: [
      { name: "Sweet potato", qty: 200, unit: "g", category: "vegetables" },
      { name: "Black beans (canned)", qty: 200, unit: "g", category: "grains" },
      { name: "Corn tortillas", qty: 6, unit: "whole", category: "grains" },
      { name: "Corn kernels", qty: 80, unit: "g", category: "vegetables" },
      { name: "Avocado", qty: 0.5, unit: "whole", category: "fats" },
      { name: "Lime", qty: 1, unit: "whole", category: "vegetables" },
      { name: "Fresh coriander", qty: null, unit: null, category: "vegetables" }
    ],
    steps: [
      "Roast diced sweet potato with cumin and paprika at 200°C for 20 min.",
      "Heat beans with spices in a small pan.",
      "Warm corn tortillas in a dry pan.",
      "Fill tacos with sweet potato, beans, corn, avocado.",
      "Top with coriander, pickled onion, lime juice."
    ],
    steps_de: [
      "Gewürfelte Süßkartoffel mit Kreuzkümmel und Paprika bei 200 °C 20 Min. rösten.",
      "Bohnen mit Gewürzen in einer kleinen Pfanne erwärmen.",
      "Maistortillas in einer trockenen Pfanne erwärmen.",
      "Tacos mit Süßkartoffel, Bohnen, Mais und Avocado füllen.",
      "Mit Koriander, eingelegter Zwiebel und Limettensaft garnieren."
    ]
  },

  {
    id: "black-bean-burrito-bowl",
    tag: "plant", tagLabel: "Legumes", tagLabel_de: "Hülsenfrüchte",
    title: "Black Bean & Roasted Veggie Burrito Bowl",
    title_de: "Burrito-Bowl mit schwarzen Bohnen & geröstetem Gemüse",
    cal: 620, protein: 42, fat: 20, carbs: 64, time: "25 min",
    ingredients: [
      "200g black beans (canned, drained)",
      "80g brown rice (cooked)",
      "100g bell pepper (sliced)",
      "100g courgette (diced)",
      "60g corn kernels",
      "½ avocado",
      "1 tsp cumin, 1 tsp smoked paprika",
      "1 tbsp olive oil, lime juice, fresh coriander"
    ],
    ingredients_de: [
      "200g schwarze Bohnen (aus der Dose, abgetropft)",
      "80g brauner Reis (gekocht)",
      "100g Paprika (in Streifen)",
      "100g Zucchini (gewürfelt)",
      "60g Maiskörner",
      "½ Avocado",
      "1 TL Kreuzkümmel, 1 TL Räucherpaprika",
      "1 EL Olivenöl, Limettensaft, frischer Koriander"
    ],
    shopItems: [
      { name: "Black beans (canned)", qty: 200, unit: "g", category: "grains" },
      { name: "Brown rice", qty: 40, unit: "g", category: "grains" },
      { name: "Bell pepper", qty: 100, unit: "g", category: "vegetables" },
      { name: "Courgette", qty: 100, unit: "g", category: "vegetables" },
      { name: "Corn kernels", qty: 60, unit: "g", category: "vegetables" },
      { name: "Avocado", qty: 0.5, unit: "whole", category: "fats" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Lime", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Fresh coriander", qty: null, unit: null, category: "vegetables" }
    ],
    steps: [
      "Toss pepper and courgette with olive oil and spices. Roast at 200°C for 20 min.",
      "Warm beans in a pan with cumin, paprika, and a splash of water.",
      "Build bowl: rice, beans, roasted veggies, corn, avocado.",
      "Finish with lime juice and coriander."
    ],
    steps_de: [
      "Paprika und Zucchini mit Olivenöl und Gewürzen wenden. Bei 200 °C 20 Min. rösten.",
      "Bohnen in einer Pfanne mit Kreuzkümmel, Paprika und etwas Wasser erwärmen.",
      "Bowl aufbauen: Reis, Bohnen, geröstetes Gemüse, Mais, Avocado.",
      "Mit Limettensaft und Koriander abschließen."
    ]
  },

  {
    id: "red-lentil-dal",
    tag: "plant", tagLabel: "Legumes", tagLabel_de: "Hülsenfrüchte",
    title: "Red Lentil Dal with Cauliflower & Spinach",
    title_de: "Rote Linsen Dal mit Blumenkohl & Spinat",
    cal: 600, protein: 38, fat: 18, carbs: 66, time: "30 min",
    ingredients: [
      "120g red lentils (dry)",
      "150g cauliflower florets",
      "80g baby spinach",
      "1 onion, 3 garlic cloves, 1 tsp ginger",
      "1 tsp cumin, 1 tsp turmeric, 1 tsp garam masala",
      "400ml vegetable broth",
      "1 tbsp olive oil",
      "Fresh coriander, lemon"
    ],
    ingredients_de: [
      "120g rote Linsen (trocken)",
      "150g Blumenkohlröschen",
      "80g Babyspinat",
      "1 Zwiebel, 3 Knoblauchzehen, 1 TL Ingwer",
      "1 TL Kreuzkümmel, 1 TL Kurkuma, 1 TL Garam Masala",
      "400ml Gemüsebrühe",
      "1 EL Olivenöl",
      "Frischer Koriander, Zitrone"
    ],
    shopItems: [
      { name: "Red lentils (dry)", qty: 120, unit: "g", category: "grains" },
      { name: "Cauliflower", qty: 150, unit: "g", category: "vegetables" },
      { name: "Spinach (baby)", qty: 80, unit: "g", category: "vegetables" },
      { name: "Onion", qty: 1, unit: "whole", category: "vegetables" },
      { name: "Garlic", qty: 3, unit: "cloves", category: "vegetables" },
      { name: "Ginger (fresh)", qty: null, unit: null, category: "vegetables" },
      { name: "Vegetable broth", qty: 400, unit: "ml", category: "fats" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Lemon", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Fresh coriander", qty: null, unit: null, category: "vegetables" }
    ],
    steps: [
      "Sauté onion, garlic, ginger in oil 3 min. Add spices, cook 1 min.",
      "Add lentils, cauliflower, and broth. Bring to boil, simmer 20 min.",
      "Stir in spinach until wilted.",
      "Finish with lemon juice and fresh coriander."
    ],
    steps_de: [
      "Zwiebel, Knoblauch, Ingwer in Öl 3 Min. anbraten. Gewürze hinzufügen, 1 Min. rösten.",
      "Linsen, Blumenkohl und Brühe hinzufügen. Aufkochen, 20 Min. köcheln lassen.",
      "Spinat unterrühren, bis er zusammengefallen ist.",
      "Mit Zitronensaft und frischem Koriander abschließen."
    ]
  },

  {
    id: "smoky-aubergine-chickpea",
    tag: "plant", tagLabel: "Legumes", tagLabel_de: "Hülsenfrüchte",
    title: "Smoky Aubergine & Chickpea Stew",
    title_de: "Rauchiger Auberginen-Kichererbsen-Eintopf",
    cal: 580, protein: 36, fat: 20, carbs: 58, time: "30 min",
    ingredients: [
      "1 large aubergine (diced)",
      "240g chickpeas (1 can, drained)",
      "1 can chopped tomatoes",
      "1 onion, 3 garlic cloves",
      "1 tsp smoked paprika, 1 tsp cumin, ½ tsp cinnamon",
      "1 tbsp olive oil",
      "80g quinoa (cooked)",
      "Fresh parsley"
    ],
    ingredients_de: [
      "1 große Aubergine (gewürfelt)",
      "240g Kichererbsen (1 Dose, abgetropft)",
      "1 Dose gehackte Tomaten",
      "1 Zwiebel, 3 Knoblauchzehen",
      "1 TL Räucherpaprika, 1 TL Kreuzkümmel, ½ TL Zimt",
      "1 EL Olivenöl",
      "80g Quinoa (gekocht)",
      "Frische Petersilie"
    ],
    shopItems: [
      { name: "Aubergine", qty: 1, unit: "whole", category: "vegetables" },
      { name: "Chickpeas (canned)", qty: 240, unit: "g", category: "grains" },
      { name: "Canned tomatoes", qty: 400, unit: "g", category: "fats" },
      { name: "Onion", qty: 1, unit: "whole", category: "vegetables" },
      { name: "Garlic", qty: 3, unit: "cloves", category: "vegetables" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Quinoa (dry)", qty: 40, unit: "g", category: "grains" },
      { name: "Fresh parsley", qty: null, unit: null, category: "vegetables" }
    ],
    steps: [
      "Salt aubergine cubes, rest 10 min, pat dry.",
      "Sauté onion and garlic 3 min. Add spices and aubergine, cook 8 min.",
      "Add tomatoes and chickpeas. Simmer 15 min until thick.",
      "Serve over quinoa. Finish with parsley."
    ],
    steps_de: [
      "Auberginenwürfel salzen, 10 Min. ziehen lassen, trocken tupfen.",
      "Zwiebel und Knoblauch 3 Min. anbraten. Gewürze und Aubergine hinzufügen, 8 Min. garen.",
      "Tomaten und Kichererbsen hinzufügen. 15 Min. köcheln lassen, bis es eingedickt ist.",
      "Auf Quinoa servieren. Mit Petersilie abschließen."
    ]
  },

  {
    id: "miso-tofu-greens-noodles",
    tag: "plant", tagLabel: "Tofu", tagLabel_de: "Tofu",
    title: "Miso Tofu with Stir-Fried Greens & Rice Noodles",
    title_de: "Miso-Tofu mit gebratenem Grüngemüse & Reisnudeln",
    cal: 620, protein: 44, fat: 20, carbs: 60, time: "25 min",
    ingredients: [
      "200g firm tofu (pressed, sliced)",
      "100g rice noodles (dry)",
      "100g broccoli florets",
      "80g pak choi",
      "3 garlic cloves, 1 tsp ginger",
      "Sauce: 1 tbsp white miso, 1 tbsp tamari, 1 tsp sesame oil, 1 tsp maple syrup",
      "Sesame seeds, spring onions"
    ],
    ingredients_de: [
      "200g fester Tofu (gepresst, in Scheiben)",
      "100g Reisnudeln (trocken)",
      "100g Brokkoliröschen",
      "80g Pak Choi",
      "3 Knoblauchzehen, 1 TL Ingwer",
      "Sauce: 1 EL weißes Miso, 1 EL Tamari, 1 TL Sesamöl, 1 TL Ahornsirup",
      "Sesamsamen, Frühlingszwiebeln"
    ],
    shopItems: [
      { name: "Firm tofu", qty: 200, unit: "g", category: "proteins" },
      { name: "Rice noodles", qty: 100, unit: "g", category: "grains" },
      { name: "Broccoli", qty: 100, unit: "g", category: "vegetables" },
      { name: "Bok choy", qty: 80, unit: "g", category: "vegetables" },
      { name: "Garlic", qty: 3, unit: "cloves", category: "vegetables" },
      { name: "Ginger (fresh)", qty: null, unit: null, category: "vegetables" },
      { name: "White miso paste", qty: null, unit: null, category: "fats" },
      { name: "Tamari", qty: null, unit: null, category: "fats" },
      { name: "Sesame oil", qty: null, unit: null, category: "fats" },
      { name: "Maple syrup", qty: null, unit: null, category: "fats" },
      { name: "Sesame seeds", qty: null, unit: null, category: "fats" },
      { name: "Spring onions", qty: 2, unit: "stalks", category: "vegetables" }
    ],
    steps: [
      "Press and slice tofu. Pan-fry in sesame oil until golden (8 min). Set aside.",
      "Cook noodles per pack. Drain.",
      "Stir-fry garlic, ginger, broccoli, pak choi 4-5 min.",
      "Add noodles and sauce. Toss everything together.",
      "Top with tofu, sesame seeds, and spring onions."
    ],
    steps_de: [
      "Tofu pressen und in Scheiben schneiden. In Sesamöl goldbraun braten (8 Min.). Beiseite stellen.",
      "Nudeln nach Packungsanweisung kochen. Abgießen.",
      "Knoblauch, Ingwer, Brokkoli, Pak Choi 4–5 Min. anbraten.",
      "Nudeln und Sauce hinzufügen. Alles gut durchschwenken.",
      "Mit Tofu, Sesamsamen und Frühlingszwiebeln garnieren."
    ]
  },

  {
    id: "roasted-veggie-chickpea-bowl",
    tag: "plant", tagLabel: "Legumes", tagLabel_de: "Hülsenfrüchte",
    title: "Roasted Veggie & Chickpea Grain Bowl",
    title_de: "Getreide-Bowl mit geröstetem Gemüse & Kichererbsen",
    cal: 640, protein: 42, fat: 24, carbs: 64, time: "30 min",
    ingredients: [
      "200g chickpeas (1 can, drained — pat dry for crispiness)",
      "100g sweet potato (diced)",
      "80g courgette (diced)",
      "80g bell pepper",
      "80g quinoa (cooked)",
      "2 tbsp tahini dressing (tahini, lemon, garlic, water)",
      "1 tbsp olive oil, 1 tsp cumin, 1 tsp smoked paprika"
    ],
    ingredients_de: [
      "200g Kichererbsen (1 Dose, abgetropft – für Knusprigkeit trocken tupfen)",
      "100g Süßkartoffel (gewürfelt)",
      "80g Zucchini (gewürfelt)",
      "80g Paprika",
      "80g Quinoa (gekocht)",
      "2 EL Tahini-Dressing (Tahini, Zitrone, Knoblauch, Wasser)",
      "1 EL Olivenöl, 1 TL Kreuzkümmel, 1 TL Räucherpaprika"
    ],
    shopItems: [
      { name: "Chickpeas (canned)", qty: 200, unit: "g", category: "grains" },
      { name: "Sweet potato", qty: 100, unit: "g", category: "vegetables" },
      { name: "Courgette", qty: 80, unit: "g", category: "vegetables" },
      { name: "Bell pepper", qty: 80, unit: "g", category: "vegetables" },
      { name: "Quinoa (dry)", qty: 40, unit: "g", category: "grains" },
      { name: "Tahini", qty: null, unit: null, category: "fats" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Lemon", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Garlic", qty: 1, unit: "cloves", category: "vegetables" }
    ],
    steps: [
      "Toss chickpeas and veg with olive oil and spices. Spread on a tray.",
      "Roast at 200°C for 25 min, shaking once.",
      "Make tahini dressing: blend tahini, lemon, garlic, water until smooth.",
      "Serve roasted mix over quinoa. Drizzle with tahini."
    ],
    steps_de: [
      "Kichererbsen und Gemüse mit Olivenöl und Gewürzen vermengen. Auf einem Blech verteilen.",
      "Bei 200 °C 25 Min. rösten, einmal durchschütteln.",
      "Tahini-Dressing zubereiten: Tahini, Zitrone, Knoblauch, Wasser glatt mixen.",
      "Geröstete Mischung auf Quinoa anrichten. Mit Tahini beträufeln."
    ]
  },

  {
    id: "pea-spinach-tofu-soup",
    tag: "plant", tagLabel: "Tofu", tagLabel_de: "Tofu",
    title: "Pea & Spinach Soup with Crispy Tofu",
    title_de: "Erbsen-Spinat-Suppe mit knusprigem Tofu",
    cal: 590, protein: 44, fat: 22, carbs: 46, time: "20 min",
    ingredients: [
      "200g firm tofu (pressed, cubed)",
      "200g frozen peas",
      "100g baby spinach",
      "1 onion, 2 garlic cloves",
      "500ml vegetable broth",
      "1 tbsp olive oil",
      "Fresh mint or basil",
      "Lemon juice"
    ],
    ingredients_de: [
      "200g fester Tofu (gepresst, gewürfelt)",
      "200g gefrorene Erbsen",
      "100g Babyspinat",
      "1 Zwiebel, 2 Knoblauchzehen",
      "500ml Gemüsebrühe",
      "1 EL Olivenöl",
      "Frische Minze oder Basilikum",
      "Zitronensaft"
    ],
    shopItems: [
      { name: "Firm tofu", qty: 200, unit: "g", category: "proteins" },
      { name: "Peas (frozen)", qty: 200, unit: "g", category: "vegetables" },
      { name: "Spinach (baby)", qty: 100, unit: "g", category: "vegetables" },
      { name: "Onion", qty: 1, unit: "whole", category: "vegetables" },
      { name: "Garlic", qty: 2, unit: "cloves", category: "vegetables" },
      { name: "Vegetable broth", qty: 500, unit: "ml", category: "fats" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Lemon", qty: 0.5, unit: "whole", category: "vegetables" }
    ],
    steps: [
      "Pan-fry cubed tofu in olive oil until crispy (8 min). Set aside.",
      "Sauté onion and garlic 3 min. Add broth and peas, simmer 5 min.",
      "Add spinach. Blend smooth.",
      "Season with lemon juice, salt and pepper.",
      "Serve topped with crispy tofu."
    ],
    steps_de: [
      "Tofuwürfel in Olivenöl knusprig braten (8 Min.). Beiseite stellen.",
      "Zwiebel und Knoblauch 3 Min. anbraten. Brühe und Erbsen hinzufügen, 5 Min. köcheln lassen.",
      "Spinat hinzufügen. Glatt pürieren.",
      "Mit Zitronensaft, Salz und Pfeffer abschmecken.",
      "Mit knusprigem Tofu servieren."
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ EGG (7) ━━━━━
  {
    id: "tofu-egg-stir-fry",
    tag: "egg", tagLabel: "Eggs + Tofu", tagLabel_de: "Eier + Tofu",
    title: "Tofu & Egg Veggie Stir-Fry with Rice",
    title_de: "Tofu-Ei-Gemüsepfanne mit Reis",
    cal: 660, protein: 56, fat: 22, carbs: 46, time: "20 min",
    ingredients: [
      "150g firm tofu (pressed, cubed)",
      "3 eggs",
      "100g broccoli",
      "80g bell pepper",
      "80g courgette",
      "1 tbsp tamari",
      "1 tbsp sesame oil",
      "Garlic, ginger, chili flakes",
      "80g cooked rice"
    ],
    ingredients_de: [
      "150g fester Tofu (gepresst, gewürfelt)",
      "3 Eier",
      "100g Brokkoli",
      "80g Paprika",
      "80g Zucchini",
      "1 EL Tamari",
      "1 EL Sesamöl",
      "Knoblauch, Ingwer, Chiliflocken",
      "80g gekochter Reis"
    ],
    shopItems: [
      { name: "Firm tofu", qty: 150, unit: "g", category: "proteins" },
      { name: "Eggs (free range)", qty: 3, unit: "whole", category: "proteins" },
      { name: "Broccoli", qty: 100, unit: "g", category: "vegetables" },
      { name: "Bell pepper", qty: 80, unit: "g", category: "vegetables" },
      { name: "Courgette", qty: 80, unit: "g", category: "vegetables" },
      { name: "White rice", qty: 40, unit: "g", category: "grains" },
      { name: "Tamari", qty: null, unit: null, category: "fats" },
      { name: "Sesame oil", qty: null, unit: null, category: "fats" },
      { name: "Garlic", qty: 2, unit: "cloves", category: "vegetables" },
      { name: "Ginger (fresh)", qty: null, unit: null, category: "vegetables" }
    ],
    steps: [
      "Press tofu, cut into cubes. Scramble eggs in a wok, set aside.",
      "Sauté tofu in sesame oil until golden (5 min).",
      "Add chopped veggies, garlic, ginger. Stir-fry 4-5 min.",
      "Return eggs, add tamari. Toss well.",
      "Serve over rice."
    ],
    steps_de: [
      "Tofu pressen, in Würfel schneiden. Eier im Wok rühren, beiseite stellen.",
      "Tofu in Sesamöl goldbraun anbraten (5 Min.).",
      "Gemüse, Knoblauch, Ingwer hinzufügen. 4–5 Min. unter Rühren braten.",
      "Eier zurückgeben, Tamari hinzufügen. Gut durchschwenken.",
      "Auf Reis servieren."
    ]
  },

  {
    id: "egg-veggie-frittata",
    tag: "egg", tagLabel: "Eggs", tagLabel_de: "Eier",
    title: "Egg & Veggie Frittata with Roasted Potatoes",
    title_de: "Gemüse-Frittata mit gerösteten Kartoffeln",
    cal: 620, protein: 38, fat: 28, carbs: 52, time: "25 min",
    ingredients: [
      "4 eggs",
      "80g spinach",
      "60g roasted red pepper",
      "50g onion",
      "100g baby potatoes",
      "1 tbsp olive oil",
      "Salt, pepper, dried oregano"
    ],
    ingredients_de: [
      "4 Eier",
      "80g Spinat",
      "60g geröstete rote Paprika",
      "50g Zwiebel",
      "100g Babykartoffeln",
      "1 EL Olivenöl",
      "Salz, Pfeffer, getrockneter Oregano"
    ],
    shopItems: [
      { name: "Eggs (free range)", qty: 4, unit: "whole", category: "proteins" },
      { name: "Spinach (baby)", qty: 80, unit: "g", category: "vegetables" },
      { name: "Bell pepper", qty: 60, unit: "g", category: "vegetables" },
      { name: "Onion", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Baby potatoes", qty: 100, unit: "g", category: "vegetables" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" }
    ],
    steps: [
      "Parboil diced potatoes 8 min. Drain.",
      "Sauté onion and pepper in olive oil. Add spinach, wilt.",
      "Beat eggs with seasoning, pour over veggies.",
      "Cook on medium-low 5 min, then under grill/broiler 3-4 min until set.",
      "Serve with roasted potatoes alongside."
    ],
    steps_de: [
      "Gewürfelte Kartoffeln 8 Min. vorkochen. Abgießen.",
      "Zwiebel und Paprika in Olivenöl anbraten. Spinat hinzufügen, zusammenfallen lassen.",
      "Eier mit Gewürzen verquirlen, über das Gemüse gießen.",
      "5 Min. bei mittlerer bis niedriger Hitze garen, dann 3–4 Min. unter den Grill, bis alles gestockt ist.",
      "Mit gerösteten Kartoffeln servieren."
    ]
  },

  {
    id: "black-bean-egg-stuffed-peppers",
    tag: "egg", tagLabel: "Eggs + Legumes", tagLabel_de: "Eier + Hülsenfrüchte",
    title: "Black Bean & Egg Stuffed Peppers",
    title_de: "Gefüllte Paprika mit schwarzen Bohnen & Ei",
    cal: 720, protein: 66, fat: 14, carbs: 62, time: "30 min",
    ingredients: [
      "3 large bell peppers (halved)",
      "200g black beans (canned, drained)",
      "3 eggs",
      "80g cooked rice",
      "100g canned tomatoes",
      "1 tsp cumin, 1 tsp smoked paprika",
      "Fresh coriander, lime"
    ],
    ingredients_de: [
      "3 große Paprika (halbiert)",
      "200g schwarze Bohnen (aus der Dose, abgetropft)",
      "3 Eier",
      "80g gekochter Reis",
      "100g Dosentomaten",
      "1 TL Kreuzkümmel, 1 TL Räucherpaprika",
      "Frischer Koriander, Limette"
    ],
    shopItems: [
      { name: "Bell pepper", qty: 3, unit: "whole", category: "vegetables" },
      { name: "Black beans (canned)", qty: 200, unit: "g", category: "grains" },
      { name: "Eggs (free range)", qty: 3, unit: "whole", category: "proteins" },
      { name: "White rice", qty: 40, unit: "g", category: "grains" },
      { name: "Canned tomatoes", qty: 100, unit: "g", category: "fats" },
      { name: "Lime", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Fresh coriander", qty: null, unit: null, category: "vegetables" }
    ],
    steps: [
      "Preheat oven to 200°C. Halve peppers, remove seeds.",
      "Mix beans, rice, tomatoes, spices. Fill pepper halves.",
      "Bake 15 min. Crack an egg into each pepper.",
      "Bake another 12-15 min until egg is set.",
      "Top with coriander and lime juice."
    ],
    steps_de: [
      "Ofen auf 200 °C vorheizen. Paprika halbieren, Kerne entfernen.",
      "Bohnen, Reis, Tomaten und Gewürze mischen. In die Paprikahälften füllen.",
      "15 Min. backen. Je ein Ei in jede Paprikahälfte aufschlagen.",
      "Weitere 12–15 Min. backen, bis das Ei gestockt ist.",
      "Mit Koriander und Limettensaft garnieren."
    ]
  },

  {
    id: "shakshuka",
    tag: "egg", tagLabel: "Eggs", tagLabel_de: "Eier",
    title: "Shakshuka with GF Toast",
    title_de: "Shakshuka mit glutenfreiem Toast",
    cal: 560, protein: 34, fat: 24, carbs: 48, time: "20 min",
    ingredients: [
      "4 eggs",
      "200g canned tomatoes",
      "1 bell pepper (diced)",
      "½ onion (diced)",
      "2 garlic cloves",
      "1 tsp cumin, 1 tsp smoked paprika, pinch of chili",
      "1 tbsp olive oil",
      "2 slices GF bread",
      "Fresh parsley"
    ],
    ingredients_de: [
      "4 Eier",
      "200g Dosentomaten",
      "1 Paprika (gewürfelt)",
      "½ Zwiebel (gewürfelt)",
      "2 Knoblauchzehen",
      "1 TL Kreuzkümmel, 1 TL Räucherpaprika, Prise Chili",
      "1 EL Olivenöl",
      "2 Scheiben glutenfreies Brot",
      "Frische Petersilie"
    ],
    shopItems: [
      { name: "Eggs (free range)", qty: 4, unit: "whole", category: "proteins" },
      { name: "Canned tomatoes", qty: 200, unit: "g", category: "fats" },
      { name: "Bell pepper", qty: 1, unit: "whole", category: "vegetables" },
      { name: "Onion", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Garlic", qty: 2, unit: "cloves", category: "vegetables" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" },
      { name: "Gluten-free bread", qty: 2, unit: "slices", category: "grains" },
      { name: "Fresh parsley", qty: null, unit: null, category: "vegetables" }
    ],
    steps: [
      "Sauté onion and pepper in olive oil 5 min.",
      "Add garlic and spices, cook 1 min.",
      "Add canned tomatoes, simmer 8 min until thickened.",
      "Make 4 wells, crack eggs in. Cover and cook 5-6 min.",
      "Serve with toasted GF bread and parsley."
    ],
    steps_de: [
      "Zwiebel und Paprika in Olivenöl 5 Min. anbraten.",
      "Knoblauch und Gewürze hinzufügen, 1 Min. garen.",
      "Dosentomaten hinzufügen, 8 Min. köcheln lassen bis eingedickt.",
      "4 Mulden formen, Eier hineinschlagen. Zugedeckt 5–6 Min. garen.",
      "Mit geröstetem GF-Brot und Petersilie servieren."
    ]
  },

  {
    id: "egg-fried-rice",
    tag: "egg", tagLabel: "Eggs", tagLabel_de: "Eier",
    title: "Egg Fried Rice with Vegetables & Edamame",
    title_de: "Gebratener Eierreis mit Gemüse & Edamame",
    cal: 600, protein: 40, fat: 18, carbs: 60, time: "15 min",
    ingredients: [
      "3 eggs",
      "150g cooked rice (day-old is best)",
      "80g edamame (shelled, cooked)",
      "80g broccoli (small florets)",
      "60g carrot (diced small)",
      "3 garlic cloves",
      "1 tbsp tamari",
      "1 tsp sesame oil",
      "Spring onions, sesame seeds"
    ],
    ingredients_de: [
      "3 Eier",
      "150g gekochter Reis (vom Vortag ist ideal)",
      "80g Edamame (geschält, gegart)",
      "80g Brokkoli (kleine Röschen)",
      "60g Karotte (fein gewürfelt)",
      "3 Knoblauchzehen",
      "1 EL Tamari",
      "1 TL Sesamöl",
      "Frühlingszwiebeln, Sesamsamen"
    ],
    shopItems: [
      { name: "Eggs (free range)", qty: 3, unit: "whole", category: "proteins" },
      { name: "White rice", qty: 75, unit: "g", category: "grains" },
      { name: "Edamame (frozen)", qty: 80, unit: "g", category: "grains" },
      { name: "Broccoli", qty: 80, unit: "g", category: "vegetables" },
      { name: "Carrot", qty: 60, unit: "g", category: "vegetables" },
      { name: "Garlic", qty: 3, unit: "cloves", category: "vegetables" },
      { name: "Tamari", qty: null, unit: null, category: "fats" },
      { name: "Sesame oil", qty: null, unit: null, category: "fats" },
      { name: "Spring onions", qty: 2, unit: "stalks", category: "vegetables" },
      { name: "Sesame seeds", qty: null, unit: null, category: "fats" }
    ],
    steps: [
      "Beat eggs. Scramble in a hot wok, remove when just set.",
      "Stir-fry garlic, carrot, broccoli 4 min.",
      "Add cold rice, breaking up any clumps. Fry 3-4 min on high.",
      "Add edamame, tamari, sesame oil. Toss.",
      "Return eggs. Top with spring onions and sesame seeds."
    ],
    steps_de: [
      "Eier verquirlen. Im heißen Wok rühren, herausnehmen wenn gerade gestockt.",
      "Knoblauch, Karotte, Brokkoli 4 Min. anbraten.",
      "Kalten Reis hinzufügen, Klumpen aufbrechen. 3–4 Min. bei starker Hitze braten.",
      "Edamame, Tamari, Sesamöl hinzufügen. Durchschwenken.",
      "Eier zurückgeben. Mit Frühlingszwiebeln und Sesamsamen bestreuen."
    ]
  },

  {
    id: "huevos-rancheros-bowl",
    tag: "egg", tagLabel: "Eggs + Legumes", tagLabel_de: "Eier + Hülsenfrüchte",
    title: "Huevos Rancheros Bowl",
    title_de: "Huevos-Rancheros-Bowl",
    cal: 640, protein: 44, fat: 22, carbs: 62, time: "20 min",
    ingredients: [
      "3 eggs",
      "120g black beans (canned, drained)",
      "80g brown rice (cooked)",
      "200g canned tomatoes",
      "½ onion, 2 garlic cloves",
      "1 tsp cumin, ½ tsp smoked paprika, chili to taste",
      "½ avocado",
      "Fresh coriander, lime"
    ],
    ingredients_de: [
      "3 Eier",
      "120g schwarze Bohnen (aus der Dose, abgetropft)",
      "80g brauner Reis (gekocht)",
      "200g Dosentomaten",
      "½ Zwiebel, 2 Knoblauchzehen",
      "1 TL Kreuzkümmel, ½ TL Räucherpaprika, Chili nach Geschmack",
      "½ Avocado",
      "Frischer Koriander, Limette"
    ],
    shopItems: [
      { name: "Eggs (free range)", qty: 3, unit: "whole", category: "proteins" },
      { name: "Black beans (canned)", qty: 120, unit: "g", category: "grains" },
      { name: "Brown rice", qty: 40, unit: "g", category: "grains" },
      { name: "Canned tomatoes", qty: 200, unit: "g", category: "fats" },
      { name: "Onion", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Garlic", qty: 2, unit: "cloves", category: "vegetables" },
      { name: "Avocado", qty: 0.5, unit: "whole", category: "fats" },
      { name: "Lime", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Fresh coriander", qty: null, unit: null, category: "vegetables" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" }
    ],
    steps: [
      "Sauté onion and garlic. Add spices, then canned tomatoes. Simmer 8 min.",
      "Add beans, heat through.",
      "Make wells in the sauce, crack in eggs. Cover and cook 5-6 min.",
      "Serve over rice with avocado, coriander, and lime."
    ],
    steps_de: [
      "Zwiebel und Knoblauch anbraten. Gewürze, dann Dosentomaten hinzufügen. 8 Min. köcheln lassen.",
      "Bohnen hinzufügen, erhitzen.",
      "Mulden in die Sauce drücken, Eier hineinschlagen. Zugedeckt 5–6 Min. garen.",
      "Auf Reis mit Avocado, Koriander und Limette servieren."
    ]
  },

  {
    id: "egg-sweet-potato-hash",
    tag: "egg", tagLabel: "Eggs", tagLabel_de: "Eier",
    title: "Egg & Sweet Potato Hash with Avocado",
    title_de: "Süßkartoffel-Hash mit Ei & Avocado",
    cal: 580, protein: 38, fat: 26, carbs: 44, time: "25 min",
    ingredients: [
      "3 eggs",
      "200g sweet potato (diced small)",
      "½ onion (diced)",
      "80g bell pepper (diced)",
      "60g spinach",
      "½ avocado",
      "1 tsp smoked paprika, ½ tsp cumin",
      "1 tbsp olive oil"
    ],
    ingredients_de: [
      "3 Eier",
      "200g Süßkartoffel (fein gewürfelt)",
      "½ Zwiebel (gewürfelt)",
      "80g Paprika (gewürfelt)",
      "60g Spinat",
      "½ Avocado",
      "1 TL Räucherpaprika, ½ TL Kreuzkümmel",
      "1 EL Olivenöl"
    ],
    shopItems: [
      { name: "Eggs (free range)", qty: 3, unit: "whole", category: "proteins" },
      { name: "Sweet potato", qty: 200, unit: "g", category: "vegetables" },
      { name: "Onion", qty: 0.5, unit: "whole", category: "vegetables" },
      { name: "Bell pepper", qty: 80, unit: "g", category: "vegetables" },
      { name: "Spinach (baby)", qty: 60, unit: "g", category: "vegetables" },
      { name: "Avocado", qty: 0.5, unit: "whole", category: "fats" },
      { name: "Olive oil", qty: null, unit: null, category: "fats" }
    ],
    steps: [
      "Fry sweet potato in olive oil on medium-high, covered, 8 min until tender.",
      "Add onion, pepper, and spices. Cook 5 min.",
      "Add spinach, stir until wilted.",
      "Create 3 wells, crack in eggs. Cover and cook 4-5 min to desired doneness.",
      "Serve with sliced avocado."
    ],
    steps_de: [
      "Süßkartoffel in Olivenöl bei mittlerer bis starker Hitze, zugedeckt, 8 Min. braten, bis weich.",
      "Zwiebel, Paprika und Gewürze hinzufügen. 5 Min. garen.",
      "Spinat hinzufügen, rühren bis zusammengefallen.",
      "3 Mulden formen, Eier hineinschlagen. Zugedeckt 4–5 Min. nach Belieben garen.",
      "Mit aufgeschnittener Avocado servieren."
    ]
  }

]; // end recipePool

// ─────────────────────────────────────────────────────────────
//  Shopping list section display names
// ─────────────────────────────────────────────────────────────
const ingredientCategories = {
  proteins:   "🥩 Proteins",
  vegetables: "🥬 Vegetables & Herbs",
  grains:     "🫘 Legumes & Grains",
  fats:       "🥑 Fats & Sauces",
  spices:     "🧂 Spice Check"
};

// ─────────────────────────────────────────────────────────────
//  Batch prep rules
//  Key = exact ingredient name as it appears in shopItems.
//  When a selected recipe uses that ingredient, this prep step
//  is shown in the Prep tab.
// ─────────────────────────────────────────────────────────────
const batchPrepRules = {
  "Chicken breast": {
    title: "Grill chicken breasts",
    title_de: "Hähnchenbrüste grillen",
    desc: "Season with salt, pepper, lemon, and herbs. Grill or pan-sear until cooked through. Slice when cool and refrigerate.",
    desc_de: "Mit Salz, Pfeffer, Zitrone und Kräutern würzen. Grillen oder anbraten bis gar. Nach dem Abkühlen in Scheiben schneiden und kühlstellen.",
    time: "15 min"
  },
  "Turkey mince": {
    title: "Make turkey meatballs",
    title_de: "Putenbällchen zubereiten",
    desc: "Mix 400g turkey mince with 1 egg, garlic, oregano, salt, pepper. Form ~10 meatballs. Bake at 200°C for 18 min.",
    desc_de: "400g Putenhackfleisch mit 1 Ei, Knoblauch, Oregano, Salz und Pfeffer vermengen. Ca. 10 Bällchen formen. Bei 200 °C 18 Min. backen.",
    time: "10 min prep + 18 min oven"
  },
  "Quinoa (dry)": {
    title: "Cook quinoa",
    title_de: "Quinoa kochen",
    desc: "Simmer quinoa in 2× water for 15 min until fluffy. Cool and refrigerate.",
    desc_de: "Quinoa in der doppelten Menge Wasser 15 Min. köcheln lassen bis locker. Abkühlen lassen und kühlstellen.",
    time: "15 min"
  },
  "Sweet potato": {
    title: "Roast sweet potatoes",
    title_de: "Süßkartoffeln rösten",
    desc: "Dice, toss with olive oil, salt, and cumin. Roast at 200°C for 25 min.",
    desc_de: "Würfeln, mit Olivenöl, Salz und Kreuzkümmel wenden. Bei 200 °C 25 Min. rösten.",
    time: "5 min prep + 25 min oven"
  },
  "Red lentils (dry)": {
    title: "Cook red lentils",
    title_de: "Rote Linsen kochen",
    desc: "Simmer lentils in 2× water for 15 min until soft. Drain, cool, refrigerate.",
    desc_de: "Linsen in der doppelten Menge Wasser 15 Min. köcheln lassen bis weich. Abgießen, abkühlen lassen, kühlstellen.",
    time: "15 min"
  },
  "Eggs (free range)": {
    title: "Hard-boil eggs",
    title_de: "Eier hartkochen",
    desc: "Boil 6 eggs for 10 min. Transfer to ice water. Refrigerate in shells.",
    desc_de: "6 Eier 10 Min. kochen. In Eiswasser legen. In der Schale kühlstellen.",
    time: "12 min"
  },
  "Brown rice": {
    title: "Cook brown rice",
    title_de: "Braunen Reis kochen",
    desc: "Simmer brown rice in 2.5× water for 25-30 min. Fluff and refrigerate.",
    desc_de: "Braunen Reis in der 2,5-fachen Menge Wasser 25–30 Min. köcheln lassen. Auflockern und kühlstellen.",
    time: "30 min"
  },
  "White rice": {
    title: "Cook white rice",
    title_de: "Weißen Reis kochen",
    desc: "Simmer rice in 1.5× water for 12 min, rest 5 min covered. Refrigerate.",
    desc_de: "Reis in der 1,5-fachen Menge Wasser 12 Min. köcheln lassen, 5 Min. zugedeckt ruhen lassen. Kühlstellen.",
    time: "17 min"
  },
  "Firm tofu": {
    title: "Press and cube tofu",
    title_de: "Tofu pressen und würfeln",
    desc: "Press each block for 15 min under a heavy pan. Cut into cubes, refrigerate uncovered to dry out (improves crispiness).",
    desc_de: "Jeden Block 15 Min. unter einer schweren Pfanne pressen. In Würfel schneiden, unbedeckt kühlstellen zum Austrocknen (verbessert die Knusprigkeit).",
    time: "15 min (passive)"
  },
  "Cauliflower": {
    title: "Roast cauliflower",
    title_de: "Blumenkohl rösten",
    desc: "Cut into florets, toss with olive oil, cumin, salt. Roast at 200°C for 20-22 min.",
    desc_de: "In Röschen teilen, mit Olivenöl, Kreuzkümmel und Salz wenden. Bei 200 °C 20–22 Min. rösten.",
    time: "5 min prep + 22 min oven"
  }
};
