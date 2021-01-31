const itemsEl = document.querySelectorAll('.item')
console.log(`В списку ${itemsEl.length} категорій`);

 itemsEl.forEach(item => {
  const headerCategorie = item.querySelector('h2').textContent;
  const subCategoriesElements = item.querySelector('ul').children.length
  console.log(
    `Категорія: ${headerCategorie} \n Кількість категорій ${subCategoriesElements}`
  )
})
