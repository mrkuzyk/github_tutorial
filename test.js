const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

const {
  yesterday: highYesterday,
  today: highToday,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  tomorrow: highTomorrow,
  } = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

console.log(highToday);
console.log(highTomorrow);
console.log(highYesterday);
console.log(meanTemperature);

// зміна імені при деструктуризації