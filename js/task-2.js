"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const createliElement = (ingredients) => {
  const li =document.createElement('li')
  li.textContent = ingredients
  return li
}

const ingredientsListItems = ingredients.map(createliElement)
const ingredientsEl = document.querySelector('#ingredients')
ingredientsEl.append(...ingredientsListItems) 