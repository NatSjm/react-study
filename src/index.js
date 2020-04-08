//решение задачи от 8.04 - ниже, вывод решения - в консоли

//Для тестирования, тк пользовательские данные сверяются с текущим временем
//const date = new Date(2020, 3, 5, 9, 15, 42);
const date = new Date();
const userEnter = prompt("Введите минуты, или время, или дату, или время и дату в формате '15.12 14|00|30'");

const currentMinutes = date.getMinutes();
const currentSeconds = date.getSeconds();
const currentHours = date.getHours();
const currentDate = date.getDate();
const currentMonth = date.getMonth();

let alertMessage = '';

if (userEnter) {
    //пользователь ввел минуты
    if (userEnter == parseInt(userEnter, 10)) {
        let userMinutes = +userEnter;
        //4 (минут number) ( ===)
        if ((userMinutes === 4) && (currentMinutes === 4)) {
            alertMessage = `Четыре минуты!`;
            // 59 (минут number) (  первые 45 сек после старта 59й минуты)
        } else if ((userMinutes === 59) && (currentMinutes === 59) && (currentSeconds <= 45)) {
            alertMessage = 'Мы приближаемся к окончанию часа';
            // 35 (минут number) ( >= каждые 10 мин, которые блоьше 35, напр. 45, 55)
            // отсчет начинается с введенного пользователем кол-ва минут
        } else if ((functionTen(userMinutes))) {
            alertMessage = `Количество минут равно ${userMinutes} или ${userMinutes} + 10!`;
        } else {
            alertMessage = 'Соответствия по минутам не найдены';
        }
    } else {//другой формат данных, один из допустимых
        // пользователь вводит данные в формате с ':', проверяем текущее время на соответствие введенной строке
        let timeArray = userEnter.split(':');
        if ((timeArray.length === 2) || (timeArray.length === 3)) {
            let [userHours, userMinutes, userSeconds] = timeArray;
            if ((userHours == currentHours) && (userMinutes == currentMinutes)) {
                // пользователь ввел секунды - выводим и их, если нет - только часы и минуты
                alertMessage = userSeconds ? `${userHours} часов ${userMinutes} минут ${userSeconds} секунд` :
                    `${userHours} часов ${userMinutes} минут`;
            }
        } else {
            if (userEnter.match(/\./g)) {
                // пользователь ввел данные в  формате "15.12 14|00|30"
                if ((userEnter.match(/\|/g) && (userEnter.match(/\|/g).length === 2))) {
                    let timeArray2 = userEnter.split('|');
                    let [, userMinutes, userSeconds] = timeArray2;
                    // каждые 12 сек после 30 секунды, и до начала первой минуты
                    // отсчет начинается с введенных пользователем секунд и до старта следующей минуты
                    if (functionTwelve(userMinutes, userSeconds)) {
                        alertMessage = 'Вам удивительно повезло! Магия числа 12 принесла удачу';
                    }
                } else {
                    // пользователь ввел данные в  формате "15.12", проверяем на соответствие сегодняшней дате
                    let timeArray3 = userEnter.split('.');
                    let [userDate, userMonth] = timeArray3;
                    if ((userDate == currentDate) && (userMonth == (currentMonth + 1))) {
                        alertMessage = `Сегодня ${userEnter}`;
                    }
                }
            }
        }
    }
}

//Не нашло соответствий
if (!alertMessage) {
    alertMessage = 'Нет совпадений';
}

alert(alertMessage);

function functionTen(userMinutes) {
    let result = false;
    for (let i = userMinutes; i <= 59; i = i + 10) {
        if (currentMinutes === i) {
            return result = true;
        }
    }
    return result;
}

function functionTwelve(userMinutes, userSeconds) {
    let result = false;
    if (currentMinutes === +userMinutes) {
        for (let i = +userSeconds; i <= 59; i = i + 12) {
            if (currentSeconds === i) {
                return result = true;
            }
        }
    }
    return result;
}
// Решение задачи от 8.04
const arr = [
    110,
    3,
    1,
    1,
    'qwjfie',
    2,
    18,
    24,
    4,
    13,
];


const func = (prevValue, nextValue) => {
    if (prevValue === nextValue) {
        return 0;
    }
    if ((prevValue < nextValue) || (typeof nextValue === 'string')) {
        return -1;
    }
    if (prevValue > nextValue) {
        return 1;
    }
};

const sortNumbers = arr.sort(func);

console.log('SortedArray', sortNumbers);
