
class StringBuilder{

    constructor (initialValue){
        this.value = initialValue;
    }

    getValue(){
        return this.value;
    }    

    padEnd(str) {
        this.value += str;
    }

    padStart(str){
        this.value = str + this.value;
    }

    padBoth(str){
        this.value = str + this.value + str;

    }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


// Створено клас "стрінгБілдер"
// Клас приймає один параметр "інітіалВелю", який ми записали в об'єкт
// "велю" і створили 4 методи класу:
// 1 - повертає значення "велю"
// 2 - отримує "стр" і добавляє в кінець
// 3 - отрмує "стр" і добавляє на початок
// 4 - отримує "стр" і добавляє з двох боків