// const date = new Date();
// let userMounth, userYear, userAgeYear, userAgeMounth;
// let currentDay = date.getDay();
// let currentMounth = date.getMonth() + 1;
// let currentYear = 1900 + date.getYear();
// //Проверка на ввод не корректных данных************************
// let check = () => {
//     userMounth = prompt('Введите месяц рождения');
//     if (userMounth > 12 || userMounth < 1 || isNaN(userMounth)) {
//         alert('Введите число меньше 13 и больше 0!');
//     } else {
//         userYear = prompt('Введите год рождения');
//         if (userYear > currentYear || userYear < 1 || isNaN(userYear)) {
//             alert('Введена неправильная дата!');
//         } else {
//             userAge();
//             out();
//             accurateFormat();
//         };
//     };
// };
// //Подсчет месяцев и годов***************************************
// let userAge = () => {
//     if (userMounth > currentMounth) {
//         userAgeYear = currentYear - Number(userYear) - 1;
//         userAgeMounth = 20 - currentMounth - Number(userMounth);
//     } else {
//         userAgeYear = currentYear - userYear;
//         userAgeMounth = currentMounth - userMounth;
//     }
// };
// //Вывод возраста*********************************************
// let out = () => {
//     let outMounth;
//     if (userAgeMounth === 1) {
//         outMounth = 'месяц';
//     } else if (userAgeMounth > 1 && userAgeMounth < 5) {
//         outMounth = 'месяца';
//     } else {
//         outMounth = 'месяцев';
//     };
//     let outYear;
//     if (userAgeYear < 5 && userAgeYear > 1) {
//         outYear = 'года';
//     } else if (userAgeYear === 1) {
//         outYear = 'год';
//     } else {
//         outYear = 'лет';
//     };
//     console.log('Вам ' + userAgeYear + ' ' + outYear + ' ' + userAgeMounth + ' ' + outMounth);
// };
// //Вывод текущей даты******************************************************
// let accurateFormat = () => {
//     if (currentMounth <= 9) {
//         currentMounth = '0' + currentMounth;
//     }
//     if (currentDay <= 9) {
//         currentDay = '0' + currentDay;
//     }
//     console.log('Cейчас ' + currentDay + '.' + currentMounth + '.' + currentYear);
// };
// check();


const date = new Date();
let currentData = date.getDate();
let currentMounth = date.getMonth() + 1;
let currentMinutes = date.getMinutes();
let currentSeconds = date.getSeconds();
let currentHours = date.getHours();
if (currentHours < 10) {
    currentHours = '0' + currentHours;
}
if (currentMounth < 10) {
    currentMounth = '0' + currentMounth;
}
if (currentSeconds < 10) {
    currentSeconds = '0' + currentSeconds;
}
if (currentMinutes < 10) {
    currentMinutes = '0' + currentMinutes;
}

// let trueSeconds = (currentSeconds >= 30 && currentSeconds <= 59);

const userInput = prompt('Введите данные');
//Пункт 4
if ((currentHours + ':' + currentMinutes) === userInput) {
    alert('Yes time is ' + userInput);
}
//Пункт 1
else if (Number(userInput) === currentMinutes) {
    alert('Yes ' + userInput + ' minutes');
}
//Пункт 2 
else if (Number(userInput) === currentMinutes && (Number(userInput) === 35 || Number(userInput) === 45 || Number(userInput) === 55)) {
    alert('Yes, begin ' + currentHours + 1 + ' minutes');
}
//Пункт 3 
else if ((userInput === currentMinutes) && currentMinutes >= 59 && currentSeconds <= 45) {
    alert('Yes interval in ' + userInput);
}
//Пункт 5
else if ((currentHours + ':' + currentMinutes + ':' + currentSeconds) === userInput) {
    alert('Yes time is ' + userInput);
}
//Пункт 6
else if ((currentData + '.' + currentMounth) === userInput || ('0' + currentData + '.' + currentMounth) === userInput) {
    alert('Yes, now is ' + userInput);
} else if ('15.12 14|00|30' === userInput && currentSeconds >= 30 && currentSeconds <= 59) {
    alert('Yes ' + userInput + ' is correct');

} else {
    alert('Нечего не совпало!!!');
}
console.log(currentData + '.' + currentMounth + ' ' + currentHours + '|' + currentMinutes + '|' + currentSeconds);
console.log(userInput);