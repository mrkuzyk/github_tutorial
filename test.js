const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    const indexOfElement = this.potions.indexOf(potionName);
    this.potions.splice(indexOfElement, 1);
    

    // Change code above this line
  },
};


// Добавлено метод який видаляє зілля за індексом. Спочатку ми шукаємо
// індекс, а потім його видаляємо