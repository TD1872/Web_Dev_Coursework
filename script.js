// script.js
const recipes = [
    { name: "Spaghetti Carbonara", ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan cheese", "Black pepper"] },
    { name: "Chicken Alfredo", ingredients: ["Chicken breasts", "Fettuccine pasta", "Heavy cream", "Butter", "Parmesan cheese"] },
    { name: "Vegetable Stir-Fry", ingredients: ["Broccoli", "Carrots", "Bell peppers", "Onions", "Soy sauce"] },
    { name: "Mushroom Risotto", ingredients: ["Arborio rice", "Mushrooms", "Vegetable broth", "White wine", "Onion", "Parmesan cheese"] },
    { name: "Grilled Salmon", ingredients: ["Salmon fillets", "Olive oil", "Lemon", "Garlic", "Salt", "Black pepper"] }
]
;
const spinButton = document.getElementById('spinButton');
const recipeDisplay = document.getElementById('recipeDisplay');

spinButton.addEventListener('click', spinRecipe);

function spinRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];
    recipeDisplay.innerHTML = `<p>Today's Recipe: <a href="recipe.html?recipe=${randomIndex}">${randomRecipe.name}</a></p>`;
}
