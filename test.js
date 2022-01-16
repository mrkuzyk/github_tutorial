const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
  const indexOldElement = this.potions.indexOf(oldName);
  const addOldElement = this.potions.splice(indexOldElement, 1, newName);

  return this.potions;
    // Change code above this line
  },
};


// мінємо назву зілля