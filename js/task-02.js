const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const fragment = document.createDocumentFragment();


ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  fragment.appendChild(li);
});


const ingredientsList = document.querySelector('#ingredients');


ingredientsList.appendChild(fragment);