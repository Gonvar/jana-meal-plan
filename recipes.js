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
    tag: "meat", tagLabel: "Chicken",
    title: "Chicken & Quinoa Power Bowl",
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
    ]
  },

  {
    id: "lemon-herb-chicken",
    tag: "meat", tagLabel: "Chicken",
    title: "Lemon Herb Chicken with Sweet Potato & Green Beans",
    cal: 700, protein: 60, fat: 20, carbs: 58, time: "10 min (prepped)",
    ingredients: [
      "180g grilled chicken breast (batch prep)",
      "200g roasted sweet potato (batch prep)",
      "120g green beans",
      "1 tbsp olive oil",
      "Lemon zest, garlic, herbs (thyme/rosemary)"
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
    ]
  },

  {
    id: "turkey-meatballs",
    tag: "meat", tagLabel: "Turkey",
    title: "Turkey Meatballs with Roasted Veggies & Quinoa",
    cal: 670, protein: 66, fat: 26, carbs: 32, time: "10 min (prepped)",
    ingredients: [
      "200g turkey meatballs (batch prep, ~5 meatballs)",
      "80g cooked quinoa (batch prep)",
      "120g roasted Mediterranean veggies (courgette, pepper, aubergine)",
      "1 tbsp olive oil",
      "Fresh basil, balsamic glaze"
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
    ]
  },

  {
    id: "chicken-lettuce-wraps",
    tag: "meat", tagLabel: "Chicken",
    title: "Chicken Lettuce Wraps with Peanut Sauce",
    cal: 590, protein: 52, fat: 28, carbs: 32, time: "15 min",
    ingredients: [
      "160g chicken breast (diced)",
      "1 large gem/iceberg lettuce",
      "80g carrot (julienned)",
      "60g cucumber (julienned)",
      "40g peanuts (crushed)",
      "Sauce: 2 tbsp peanut butter, 1 tbsp tamari, 1 tsp lime juice, 1 tsp sesame oil"
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
    ]
  },

  {
    id: "moroccan-chicken",
    tag: "meat", tagLabel: "Chicken",
    title: "Moroccan Spiced Chicken with Chickpeas & Cauliflower",
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
    ]
  },

  {
    id: "turkey-taco-bowl",
    tag: "meat", tagLabel: "Turkey",
    title: "Ground Turkey Taco Bowl",
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
    ]
  },

  {
    id: "honey-garlic-chicken",
    tag: "meat", tagLabel: "Chicken",
    title: "Honey Garlic Chicken with Bok Choy & Rice",
    cal: 610, protein: 50, fat: 18, carbs: 56, time: "20 min",
    ingredients: [
      "160g chicken breast",
      "2 heads baby bok choy",
      "80g white rice (cooked)",
      "3 garlic cloves (minced)",
      "Glaze: 1 tbsp tamari, 1 tbsp maple syrup, 1 tsp rice vinegar, 1 tsp sesame oil",
      "Sesame seeds, spring onions"
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
    ]
  },

  {
    id: "thai-basil-chicken",
    tag: "meat", tagLabel: "Chicken",
    title: "Thai Basil Chicken Stir-Fry with Jasmine Rice",
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
    ]
  },

  {
    id: "chicken-shawarma-bowl",
    tag: "meat", tagLabel: "Chicken",
    title: "Chicken Shawarma Bowl with Hummus & Tabbouleh",
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
    ]
  },

  {
    id: "chicken-sweet-potato-curry",
    tag: "meat", tagLabel: "Chicken",
    title: "Chicken & Sweet Potato Coconut Curry",
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
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FISH (8) ━━━━
  {
    id: "salmon-poke-bowl",
    tag: "fish", tagLabel: "Salmon",
    title: "Salmon Poke Bowl",
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
    ]
  },

  {
    id: "teriyaki-salmon",
    tag: "fish", tagLabel: "Salmon",
    title: "Teriyaki Salmon with Sesame Broccoli & Rice",
    cal: 680, protein: 48, fat: 26, carbs: 62, time: "20 min",
    ingredients: [
      "150g salmon fillet",
      "100g cooked rice",
      "150g broccoli",
      "Teriyaki glaze: 2 tbsp tamari, 1 tbsp maple syrup, 1 tsp rice vinegar, 1 tsp cornstarch",
      "1 tsp sesame seeds",
      "1 tsp sesame oil"
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
    ]
  },

  {
    id: "miso-salmon",
    tag: "fish", tagLabel: "Salmon",
    title: "Miso Glazed Salmon with Edamame Rice",
    cal: 660, protein: 48, fat: 24, carbs: 58, time: "20 min",
    ingredients: [
      "150g salmon fillet",
      "80g jasmine rice (cooked)",
      "80g edamame (shelled)",
      "80g pak choi or baby spinach",
      "Glaze: 1 tbsp white miso paste, 1 tbsp tamari, 1 tsp maple syrup, 1 tsp sesame oil",
      "1 tsp sesame seeds, spring onion"
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
    ]
  },

  {
    id: "tuna-white-bean-bowl",
    tag: "fish", tagLabel: "Tuna",
    title: "Tuna & White Bean Mediterranean Bowl",
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
    ]
  },

  {
    id: "cod-tomato-sauce",
    tag: "fish", tagLabel: "Cod",
    title: "Cod with Roasted Tomato Sauce & Cauliflower Rice",
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
    ]
  },

  {
    id: "prawn-cashew-stir-fry",
    tag: "fish", tagLabel: "Prawns",
    title: "Prawn & Cashew Stir-Fry with Jasmine Rice",
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
    ]
  },

  {
    id: "baked-salmon-asparagus",
    tag: "fish", tagLabel: "Salmon",
    title: "Baked Salmon with Asparagus & Lemon Quinoa",
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
    ]
  },

  {
    id: "spiced-tuna-avocado-rice",
    tag: "fish", tagLabel: "Tuna",
    title: "Spiced Tuna with Avocado & Brown Rice Bowl",
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
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ PLANT (10) ━━━
  {
    id: "lentil-sweet-potato-soup",
    tag: "plant", tagLabel: "Legumes",
    title: "Spiced Lentil & Sweet Potato Soup",
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
    ]
  },

  {
    id: "chickpea-coconut-curry",
    tag: "plant", tagLabel: "Legumes",
    title: "Chickpea & Spinach Coconut Curry with Rice",
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
    ]
  },

  {
    id: "crispy-tofu-buddha",
    tag: "plant", tagLabel: "Tofu",
    title: "Crispy Tofu Buddha Bowl with Tahini Dressing",
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
    ]
  },

  {
    id: "sweet-potato-black-bean-tacos",
    tag: "plant", tagLabel: "Legumes",
    title: "Mexican-Style Sweet Potato & Black Bean Tacos",
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
    ]
  },

  {
    id: "black-bean-burrito-bowl",
    tag: "plant", tagLabel: "Legumes",
    title: "Black Bean & Roasted Veggie Burrito Bowl",
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
    ]
  },

  {
    id: "red-lentil-dal",
    tag: "plant", tagLabel: "Legumes",
    title: "Red Lentil Dal with Cauliflower & Spinach",
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
    ]
  },

  {
    id: "smoky-aubergine-chickpea",
    tag: "plant", tagLabel: "Legumes",
    title: "Smoky Aubergine & Chickpea Stew",
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
    ]
  },

  {
    id: "miso-tofu-greens-noodles",
    tag: "plant", tagLabel: "Tofu",
    title: "Miso Tofu with Stir-Fried Greens & Rice Noodles",
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
    ]
  },

  {
    id: "roasted-veggie-chickpea-bowl",
    tag: "plant", tagLabel: "Legumes",
    title: "Roasted Veggie & Chickpea Grain Bowl",
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
    ]
  },

  {
    id: "pea-spinach-tofu-soup",
    tag: "plant", tagLabel: "Tofu",
    title: "Pea & Spinach Soup with Crispy Tofu",
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
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ EGG (7) ━━━━━
  {
    id: "tofu-egg-stir-fry",
    tag: "egg", tagLabel: "Eggs + Tofu",
    title: "Tofu & Egg Veggie Stir-Fry with Rice",
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
    ]
  },

  {
    id: "egg-veggie-frittata",
    tag: "egg", tagLabel: "Eggs",
    title: "Egg & Veggie Frittata with Roasted Potatoes",
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
    ]
  },

  {
    id: "black-bean-egg-stuffed-peppers",
    tag: "egg", tagLabel: "Eggs + Legumes",
    title: "Black Bean & Egg Stuffed Peppers",
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
    ]
  },

  {
    id: "shakshuka",
    tag: "egg", tagLabel: "Eggs",
    title: "Shakshuka with GF Toast",
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
    ]
  },

  {
    id: "egg-fried-rice",
    tag: "egg", tagLabel: "Eggs",
    title: "Egg Fried Rice with Vegetables & Edamame",
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
    ]
  },

  {
    id: "huevos-rancheros-bowl",
    tag: "egg", tagLabel: "Eggs + Legumes",
    title: "Huevos Rancheros Bowl",
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
    ]
  },

  {
    id: "egg-sweet-potato-hash",
    tag: "egg", tagLabel: "Eggs",
    title: "Egg & Sweet Potato Hash with Avocado",
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
    desc: "Season with salt, pepper, lemon, and herbs. Grill or pan-sear until cooked through. Slice when cool and refrigerate.",
    time: "15 min"
  },
  "Turkey mince": {
    title: "Make turkey meatballs",
    desc: "Mix 400g turkey mince with 1 egg, garlic, oregano, salt, pepper. Form ~10 meatballs. Bake at 200°C for 18 min.",
    time: "10 min prep + 18 min oven"
  },
  "Quinoa (dry)": {
    title: "Cook quinoa",
    desc: "Simmer quinoa in 2× water for 15 min until fluffy. Cool and refrigerate.",
    time: "15 min"
  },
  "Sweet potato": {
    title: "Roast sweet potatoes",
    desc: "Dice, toss with olive oil, salt, and cumin. Roast at 200°C for 25 min.",
    time: "5 min prep + 25 min oven"
  },
  "Red lentils (dry)": {
    title: "Cook red lentils",
    desc: "Simmer lentils in 2× water for 15 min until soft. Drain, cool, refrigerate.",
    time: "15 min"
  },
  "Eggs (free range)": {
    title: "Hard-boil eggs",
    desc: "Boil 6 eggs for 10 min. Transfer to ice water. Refrigerate in shells.",
    time: "12 min"
  },
  "Brown rice": {
    title: "Cook brown rice",
    desc: "Simmer brown rice in 2.5× water for 25-30 min. Fluff and refrigerate.",
    time: "30 min"
  },
  "White rice": {
    title: "Cook white rice",
    desc: "Simmer rice in 1.5× water for 12 min, rest 5 min covered. Refrigerate.",
    time: "17 min"
  },
  "Firm tofu": {
    title: "Press and cube tofu",
    desc: "Press each block for 15 min under a heavy pan. Cut into cubes, refrigerate uncovered to dry out (improves crispiness).",
    time: "15 min (passive)"
  },
  "Cauliflower": {
    title: "Roast cauliflower",
    desc: "Cut into florets, toss with olive oil, cumin, salt. Roast at 200°C for 20-22 min.",
    time: "5 min prep + 22 min oven"
  }
};
