const categoriesElement = document.querySelector('#categories');

const categoryItems = categoriesElement.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('ul li');
  console.log(`\nCategory: ${title}`);
  console.log(`Elements: ${elements.length}`);
});