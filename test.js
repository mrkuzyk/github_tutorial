class Car {
  // Change code below this line
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand(){
    return this.#brand;
  }

  changeBrand(newBrand){
    return this.#brand = newBrand;
  }

  // Change code above this line
}


// Зроблено "бренд" приватним