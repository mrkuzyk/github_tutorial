function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line

const newObject = { category: "General", priority: "Normal", ...data, completed: false};
    
    return newObject
    
  // Change code above this line
}


console.log(makeTask({}));
console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
console.log(makeTask({ category: "Finance", text: "Take interest" }));
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
console.log(makeTask({ text: "Buy bread" }));


// у нас є об'єкт. Ми створюємо новий для того, щоб не змінювати
// старий напряму. ТОму внього ми закидаємо всі параметри з старого,
// а також додаємо "спред на з старої вункції, бо там вставляються нові дані"
// Відповідно якщо нові дані будуть такіж то перезапишуть старі, в іншому
// разі будуть дані по замовчуванню. 
