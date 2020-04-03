const date = new Date();
let userMounth, userYear, userAgeYear, userAgeMounth, outMounth;
let currentDay = date.getDay();
let currentMounth = date.getMonth() + 1;
let currentYear = 1900 + date.getYear();

let check = () => {
    userMounth = prompt('Введите месяц рождения');
    if (userMounth > 12 || userMounth < 1) {
        alert('Введите число меньше 13 и больше 0');
    } else {
        userYear = prompt('Введите год рождения');
        if (userYear > currentYear) {
            alert('Введена неправильная дата!');
        } else {
            userAge();
            out();
            accurateFormat();
        };
    };
};
let userAge = () => {
    if (userMounth > currentMounth) {
        userAgeYear = currentYear - Number(userYear) - 1;
        userAgeMounth = 20 - currentMounth - Number(userMounth);
    } else {
        userAgeYear = currentYear - userYear;
        userAgeMounth = currentMounth - userMounth;
    }
};

let out = () => {
    if (userAgeMounth === 1) {
        outMounth = 'месяц';
    } else if (userAgeMounth > 1 && userAgeMounth < 5) {
        outMounth = 'месяца';
    } else {
        outMounth = 'месяцев';
    };
    let outYear;
    if (userAgeYear < 5 && userAgeYear > 1) {
        outYear = 'года';
    } else if (userAgeYear === 1) {
        outYear = 'год';
    } else {
        outYear = 'лет';

    };
    console.log('Вам ' + userAgeYear + ' ' + outYear + ' ' + userAgeMounth + ' ' + outMounth);
}

let accurateFormat = () => {
    if (currentMounth < 9) {
        currentMounth = '0' + currentMounth;
    }
    if (currentDay < 9) {
        currentDay = '0' + currentDay;
    }
    console.log('Cейчас ' + currentDay + '.' + currentMounth + '.' + currentYear);
}
check();