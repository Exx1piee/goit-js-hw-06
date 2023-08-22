const counterValueEl = document.getElementById("value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});