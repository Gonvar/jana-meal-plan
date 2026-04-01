// ─────────────────────────────────────────────────────────────
//  Jana's Meal Plan — Recipe & Shopping Data
//  Edit this file to change meals, ingredients, or the shopping list.
//  Each entry in mealPlan follows this shape:
//
//  {
//    day: "Monday",
//    totalCal, totalP, totalF, totalC   ← daily macro totals
//    meals: [
//      {
//        label: "Lunch" | "Dinner",
//        tag: "meat" | "fish" | "plant" | "egg",
//        tagLabel: string,
//        title: string,
//        cal, protein, fat, carbs,
//        time: string,
//        ingredients: string[],
//        steps: string[]
//      }
//    ]
//  }
// ─────────────────────────────────────────────────────────────

const mealPlan = [
  {
    day: "Monday",
    totalCal: 1280, totalP: 112, totalF: 42, totalC: 102,
    meals: [
      {
        label: "Lunch", tag: "meat", tagLabel: "Chicken",
        title: "Chicken & Quinoa Power Bowl",
        cal: 580, protein: 52, fat: 22, carbs: 44, time: "10 min (prepped)",
        ingredients: [
          "150g grilled chicken breast (batch prep)",
          "80g cooked quinoa (batch prep)",
          "½ avocado (60g)",
          "80g cherry tomatoes",
          "60g cucumber",
          "Handful mixed greens",
          "1 tbsp olive oil + lemon juice"
        ],
        steps: [
          "Assemble greens in bowl.",
          "Top with sliced chicken, quinoa, diced avocado, halved tomatoes, and cucumber.",
          "Drizzle with olive oil and lemon. Season with salt & pepper."
        ]
      },
      {
        label: "Dinner", tag: "meat", tagLabel: "Chicken",
        title: "Lemon Herb Chicken with Sweet Potato & Green Beans",
        cal: 700, protein: 60, fat: 20, carbs: 58, time: "10 min (prepped)",
        ingredients: [
          "180g grilled chicken breast (batch prep)",
          "200g roasted sweet potato (batch prep)",
          "120g green beans",
          "1 tbsp olive oil",
          "Lemon zest, garlic, herbs (thyme/rosemary)"
        ],
        steps: [
          "Steam or sauté green beans for 4-5 min until tender-crisp.",
          "Plate with reheated chicken and sweet potato.",
          "Drizzle with olive oil, lemon zest, and herbs."
        ]
      }
    ]
  },
  {
    day: "Tuesday",
    totalCal: 1310, totalP: 98, totalF: 48, totalC: 108,
    meals: [
      {
        label: "Lunch", tag: "fish", tagLabel: "Salmon",
        title: "Salmon Poke Bowl",
        cal: 650, protein: 42, fat: 26, carbs: 62, time: "15 min",
        ingredients: [
          "140g fresh salmon fillet (diced)",
          "100g cooked rice",
          "60g edamame (shelled)",
          "½ avocado (60g)",
          "50g cucumber (diced)",
          "1 tbsp tamari (GF soy sauce)",
          "1 tsp sesame oil",
          "Sesame seeds, spring onion"
        ],
        steps: [
          "Cook rice if not prepped. Dice salmon into 2cm cubes.",
          "Marinate salmon in tamari + sesame oil for 5 min.",
          "Assemble bowl: rice base, salmon, edamame, avocado, cucumber.",
          "Top with sesame seeds and sliced spring onion."
        ]
      },
      {
        label: "Dinner", tag: "egg", tagLabel: "Eggs + Tofu",
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
        steps: [
          "Press tofu, cut into cubes. Scramble eggs in a wok, set aside.",
          "Sauté tofu in sesame oil until golden (5 min).",
          "Add chopped veggies, garlic, ginger. Stir-fry 4-5 min.",
          "Return eggs, add tamari. Toss well.",
          "Serve over rice."
        ]
      }
    ]
  },
  {
    day: "Wednesday",
    totalCal: 1290, totalP: 108, totalF: 44, totalC: 96,
    meals: [
      {
        label: "Lunch", tag: "plant", tagLabel: "Legumes",
        title: "Spiced Lentil & Sweet Potato Soup + Boiled Eggs",
        cal: 620, protein: 42, fat: 18, carbs: 64, time: "10 min (prepped)",
        ingredients: [
          "200g cooked lentils (batch prep)",
          "150g roasted sweet potato (batch prep)",
          "3 boiled eggs",
          "400ml vegetable broth",
          "1 tsp cumin, 1 tsp smoked paprika, ½ tsp turmeric",
          "1 tbsp olive oil",
          "Squeeze of lemon"
        ],
        steps: [
          "Combine lentils, diced sweet potato, and broth in a pot.",
          "Add spices, simmer 8-10 min. Blend half for creaminess.",
          "Serve with halved boiled eggs on top, drizzle of olive oil, lemon."
        ]
      },
      {
        label: "Dinner", tag: "meat", tagLabel: "Turkey",
        title: "Turkey Meatballs with Roasted Veggies & Quinoa",
        cal: 670, protein: 66, fat: 26, carbs: 32, time: "10 min (prepped)",
        ingredients: [
          "200g turkey meatballs (batch prep, ~5 meatballs)",
          "80g cooked quinoa (batch prep)",
          "120g roasted Mediterranean veggies (courgette, pepper, aubergine)",
          "1 tbsp olive oil",
          "Fresh basil, balsamic glaze"
        ],
        steps: [
          "Reheat turkey meatballs and roasted veggies.",
          "Plate with quinoa.",
          "Drizzle with olive oil and balsamic. Top with fresh basil."
        ]
      }
    ]
  },
  {
    day: "Thursday",
    totalCal: 1300, totalP: 92, totalF: 46, totalC: 114,
    meals: [
      {
        label: "Lunch", tag: "egg", tagLabel: "Eggs",
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
        steps: [
          "Parboil diced potatoes 8 min. Drain.",
          "Sauté onion and pepper in olive oil. Add spinach, wilt.",
          "Beat eggs with seasoning, pour over veggies.",
          "Cook on medium-low 5 min, then under grill/broiler 3-4 min until set.",
          "Serve with roasted potatoes alongside."
        ]
      },
      {
        label: "Dinner", tag: "plant", tagLabel: "Legumes",
        title: "Chickpea & Spinach Coconut Curry with Rice",
        cal: 680, protein: 54, fat: 18, carbs: 62, time: "25 min",
        ingredients: [
          "240g cooked chickpeas (1 can, drained)",
          "100g spinach",
          "150ml coconut milk (light)",
          "100g cooked rice",
          "1 onion, 3 garlic cloves, 1 tsp ginger",
          "2 tsp curry powder, 1 tsp garam masala",
          "100g canned tomatoes",
          "150g silken tofu (blended into curry for protein boost)"
        ],
        steps: [
          "Sauté onion, garlic, ginger. Add spices, cook 1 min.",
          "Add canned tomatoes and coconut milk. Simmer 5 min.",
          "Blend silken tofu and stir in (adds creaminess + protein).",
          "Add chickpeas, cook 8 min. Stir in spinach until wilted.",
          "Serve over rice."
        ]
      }
    ]
  },
  {
    day: "Friday",
    totalCal: 1310, totalP: 118, totalF: 42, totalC: 94,
    meals: [
      {
        label: "Lunch", tag: "meat", tagLabel: "Chicken",
        title: "Chicken Lettuce Wraps with Peanut Sauce",
        cal: 590, protein: 52, fat: 28, carbs: 32, time: "15 min",
        ingredients: [
          "160g chicken breast (diced)",
          "1 large gem/iceberg lettuce",
          "80g carrot (julienned)",
          "60g cucumber (julienned)",
          "40g peanuts (crushed)",
          "Sauce: 2 tbsp peanut butter, 1 tbsp tamari, 1 tsp lime juice, 1 tsp sesame oil, splash of water"
        ],
        steps: [
          "Sauté diced chicken until cooked through (6-7 min).",
          "Whisk peanut sauce ingredients until smooth.",
          "Fill lettuce cups with chicken, carrot, cucumber.",
          "Drizzle with peanut sauce, top with crushed peanuts."
        ]
      },
      {
        label: "Dinner", tag: "egg", tagLabel: "Eggs + Legumes",
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
        steps: [
          "Preheat oven to 200°C. Halve peppers, remove seeds.",
          "Mix beans, rice, tomatoes, spices. Fill pepper halves.",
          "Bake 15 min. Crack an egg into each pepper.",
          "Bake another 12-15 min until egg is set.",
          "Top with coriander and lime juice."
        ]
      }
    ]
  },
  {
    day: "Saturday",
    totalCal: 1290, totalP: 96, totalF: 48, totalC: 104,
    meals: [
      {
        label: "Lunch", tag: "fish", tagLabel: "Salmon",
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
        steps: [
          "Mix teriyaki sauce ingredients.",
          "Pan-sear salmon skin-side down 4 min, flip, brush with teriyaki.",
          "Cook 3-4 min more, basting with sauce.",
          "Sauté broccoli in sesame oil until tender-crisp.",
          "Serve salmon over rice with broccoli. Sprinkle sesame seeds."
        ]
      },
      {
        label: "Dinner", tag: "plant", tagLabel: "Tofu",
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
        steps: [
          "Press tofu, cut into cubes. Toss with cornstarch and salt.",
          "Pan-fry in a little oil until crispy on all sides (8 min).",
          "Assemble bowl: quinoa base, sweet potato, edamame, cabbage, carrot.",
          "Top with crispy tofu.",
          "Drizzle with tahini dressing."
        ]
      }
    ]
  },
  {
    day: "Sunday",
    totalCal: 1280, totalP: 94, totalF: 40, totalC: 110,
    meals: [
      {
        label: "Lunch", tag: "egg", tagLabel: "Eggs",
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
        steps: [
          "Sauté onion and pepper in olive oil 5 min.",
          "Add garlic and spices, cook 1 min.",
          "Add canned tomatoes, simmer 8 min until thickened.",
          "Make 4 wells, crack eggs in. Cover and cook 5-6 min.",
          "Serve with toasted GF bread and parsley."
        ]
      },
      {
        label: "Dinner", tag: "plant", tagLabel: "Legumes",
        title: "Mexican-Style Sweet Potato & Black Bean Tacos",
        cal: 720, protein: 60, fat: 16, carbs: 62, time: "25 min",
        ingredients: [
          "200g sweet potato (diced small)",
          "200g black beans (canned, drained)",
          "6 small corn tortillas",
          "80g corn kernels",
          "½ avocado (60g)",
          "Lime juice, cumin, smoked paprika, chili",
          "Fresh coriander, pickled red onion"
        ],
        steps: [
          "Roast diced sweet potato with cumin and paprika at 200°C for 20 min.",
          "Heat beans with spices in a small pan.",
          "Warm corn tortillas in a dry pan.",
          "Fill tacos with sweet potato, beans, corn, avocado.",
          "Top with coriander, pickled onion, lime juice."
        ]
      }
    ]
  }
];

// ─────────────────────────────────────────────────────────────
//  Shopping List
//  Edit qty or add/remove items freely.
// ─────────────────────────────────────────────────────────────

const shoppingList = {
  "🥩 Proteins": [
    { name: "Chicken breast", qty: "~650g" },
    { name: "Turkey mince (for meatballs)", qty: "400g" },
    { name: "Fresh salmon fillets", qty: "2 × 150g" },
    { name: "Eggs (free range)", qty: "18" },
    { name: "Firm tofu", qty: "2 blocks (500g)" },
    { name: "Silken tofu", qty: "1 block (150g)" }
  ],
  "🥬 Vegetables & Herbs": [
    { name: "Sweet potatoes", qty: "~800g" },
    { name: "Broccoli", qty: "350g" },
    { name: "Spinach (baby)", qty: "250g" },
    { name: "Bell peppers (mixed)", qty: "6" },
    { name: "Courgette / zucchini", qty: "2" },
    { name: "Cherry tomatoes", qty: "250g" },
    { name: "Cucumber", qty: "2" },
    { name: "Carrots", qty: "3" },
    { name: "Red cabbage", qty: "¼ head" },
    { name: "Green beans", qty: "200g" },
    { name: "Gem / iceberg lettuce", qty: "1 head" },
    { name: "Onions", qty: "3" },
    { name: "Garlic", qty: "1 bulb" },
    { name: "Ginger (fresh)", qty: "1 small piece" },
    { name: "Spring onions", qty: "1 bunch" },
    { name: "Fresh parsley & coriander", qty: "1 bunch each" },
    { name: "Fresh basil", qty: "1 small bunch" },
    { name: "Baby potatoes", qty: "200g" },
    { name: "Aubergine", qty: "1 small" },
    { name: "Mixed salad greens", qty: "1 bag" },
    { name: "Limes", qty: "3" },
    { name: "Lemons", qty: "2" },
    { name: "Corn kernels (frozen/canned)", qty: "100g" }
  ],
  "🫘 Legumes & Grains": [
    { name: "Red lentils (dry)", qty: "150g" },
    { name: "Chickpeas (canned)", qty: "1 can (400g)" },
    { name: "Black beans (canned)", qty: "2 cans (400g)" },
    { name: "Quinoa (dry)", qty: "200g" },
    { name: "White / jasmine rice", qty: "300g" },
    { name: "Corn tortillas (small)", qty: "1 pack (6)" },
    { name: "Gluten-free bread", qty: "1 small loaf" },
    { name: "Edamame (frozen, shelled)", qty: "200g" }
  ],
  "🥑 Fats & Sauces": [
    { name: "Avocados", qty: "3" },
    { name: "Extra virgin olive oil", qty: "check stock" },
    { name: "Sesame oil", qty: "1 small bottle" },
    { name: "Peanut butter (natural)", qty: "1 jar" },
    { name: "Tahini", qty: "1 jar" },
    { name: "Tamari (GF soy sauce)", qty: "1 bottle" },
    { name: "Coconut milk (light, canned)", qty: "1 can" },
    { name: "Canned chopped tomatoes", qty: "2 cans (400g)" },
    { name: "Peanuts (unsalted)", qty: "50g" },
    { name: "Sesame seeds", qty: "small bag" },
    { name: "Maple syrup", qty: "check stock" },
    { name: "Rice vinegar", qty: "check stock" },
    { name: "Balsamic glaze", qty: "check stock" },
    { name: "Cornstarch", qty: "check stock" },
    { name: "Vegetable broth", qty: "500ml" }
  ],
  "🧂 Spice Check (buy if low)": [
    { name: "Cumin", qty: "" },
    { name: "Smoked paprika", qty: "" },
    { name: "Turmeric", qty: "" },
    { name: "Curry powder", qty: "" },
    { name: "Garam masala", qty: "" },
    { name: "Dried oregano", qty: "" },
    { name: "Dried thyme / rosemary", qty: "" },
    { name: "Chili flakes", qty: "" }
  ]
};

// ─────────────────────────────────────────────────────────────
//  Batch Prep
// ─────────────────────────────────────────────────────────────

const batchPrep = [
  {
    title: "Cook quinoa",
    desc: "250g dry → ~600g cooked. Cool and refrigerate.",
    time: "15 min"
  },
  {
    title: "Grill chicken breasts",
    desc: "Season 500g chicken with salt, pepper, lemon, herbs. Grill or pan-sear until cooked through. Slice when cool.",
    time: "15 min"
  },
  {
    title: "Roast sweet potatoes",
    desc: "Dice 600g sweet potato, toss with olive oil, salt, cumin. Roast at 200°C for 25 min.",
    time: "5 min prep + 25 min oven"
  },
  {
    title: "Make turkey meatballs",
    desc: "Mix 400g turkey mince with 1 egg, garlic, oregano, salt, pepper. Form ~10 meatballs. Bake at 200°C for 18 min.",
    time: "10 min prep + 18 min oven"
  },
  {
    title: "Cook lentils",
    desc: "Simmer 150g red lentils in 400ml water for 15 min until soft.",
    time: "15 min"
  },
  {
    title: "Boil eggs",
    desc: "Hard-boil 6 eggs (10 min). Cool in ice water. Refrigerate.",
    time: "12 min"
  },
  {
    title: "Roast Mediterranean veggies",
    desc: "Dice courgette, pepper, aubergine. Toss with olive oil. Roast alongside sweet potatoes.",
    time: "0 min extra (shared oven)"
  }
];
