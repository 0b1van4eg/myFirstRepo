'use strict'

let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?')
let screenPrice = +prompt('Сколько будет стоить данная работа?')
const adaptive = confirm('Нужен ли адаптив на сайте?')

let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

const bonus = +prompt('Сумма отката посреднику?')
const servicePercentPrice = fullPrice - bonus

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%"
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%"
    } else if (price < 15000 && price >= 0) {
        return "Скидка не предусмотрена"
    } else {
        return "Что то пошло не так"
    }
}


const getAllServicePrices = function (a, b) {
    return a + b
}
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2)


function getFullPrice(a, b) {
    return a + b
}
fullPrice = getFullPrice(screenPrice, allServicePrices)


const getTitle = function (title) {
    console.log("долгожданный title", title)
    const trimmedTitle = title.trim();
    const formattedTitle = trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1).toLowerCase();
    return formattedTitle;
}

const getServicePercentPrices = function (a, b) {
    return a - b
}
servicePercentPrice = getServicePercentPrices(fullPrice, bonus)


showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log('что отдает getTtile', getTitle(title))
console.log(getRollbackMessage(fullPrice));
console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);

console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(Math.ceil(servicePercentPrice));
console.log(fullPrice);
console.log(allServicePrices);