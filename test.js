const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings };

console.log(finalSettings)


// розпилення налаштувань тесту і накладання один на одного.
// Так, як перший тест є стандартний і по ньому робиться другий, то
// при розпиленні з накладанням ми його ставим першим і на нього 
// наклааємо другий. Тоді зміни перезаписують стандартні значення.