const categoriesList = document.querySelector('#categories');


const categoryItems = categoriesList.children;

console.log(`Number of categories: ${categoryItems.length}`);


for (const categoryItem of categoryItems) {

  const categoryTitle = categoryItem.firstElementChild.textContent;

  const categoryElements = categoryItem.lastElementChild.children;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
}