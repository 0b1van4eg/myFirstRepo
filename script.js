let title = "lesson2"
let screens = "Простые, Сложные, Интерактивные"
let screenPrice = 5
let rollback = 15
let fullPrice = 55555555555
let adaptive = true

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
let conc = "Стоимость верстки экранов" + " " + (screenPrice) + " " + "рублей / долларов / гривен / юани"
console.log(conc);
let price = "Стоимость разработки сайта" + " " + (fullPrice) + " " + "рублей/ долларов/гривен/юани"
console.log(price);
console.log(screens.toLowerCase());
console.log(screens.split(" "));
console.log(fullPrice * (rollback / 100));