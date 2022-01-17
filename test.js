const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }
  
    // this.potions.push(newPotion);
// },

  addPotion(newPotion) {
    for (const potion of this.potions){
    if (potion.name === newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

    
    
    
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
    
    removePotion(potionName) {
    for (potion of this.potions){
      if (potion.name === potionName){
        const potionIndex = this.potions.indexOf(potion);
        const remove = this.potions.splice(potionIndex, 1)
        return remove;
      }
    }
    },
        
        
        
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
    
    
    updatePotionName(oldName, newName) {
    for (const potion of this.potions){
      if (oldName === potion.name){
        const oldIndex = this.potions.indexOf(potion);
        this.potions[oldIndex].name = newName;
      }
    }
  },
  // Change code above this line
};


console.log (atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));

