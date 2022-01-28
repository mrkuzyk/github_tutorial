
class Storage {
    constructor (items){
      this.items = items;
    }

getItems(){
  return this.items;
  }

addItem (newItem){
 return this.items.push(newItem)
  }

removeItem(itemToRemove){
  this.items = this.items.filter(item => item !== itemToRemove)
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// Написано клас "сторедж", який створює об'єкти для управління складом
// товарів. Клас має один аргумент "ітемс". Далі створені 3 методи класа:
// 1 - повертає масив товарів "айтемс"
// 2 - приймає новий товар і добавляє його в масив.
// 3 - приймає товар і видаляє його з масиву товарів
// Це все робить по черзі в класі