const date = new Date();
const userEnter = prompt("Введите минуты или время");



const currentMinutes = date.getMinutes();
const currentSeconds = date.getSeconds();
const currentHours = date.getHours();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

let date2 = new Date(currentYear, currentMonth, currentDate + 1);
let diff = Math.round((date2 - date) / 1000);

let alertMessage = '';

if (userEnter == parseInt(userEnter, 10)) {
    let userMinutes = +userEnter;
    if (currentMinutes === userMinutes) {
        alertMessage = `${userMinutes} минут!`;
    } else if ((functionTen())) {
        alertMessage = 'Количество минут больше или равно 35 и кратно 10!'
    } else if (diff === 1) {
        alertMessage = 'Последняя секунда суток';
    } else if ((currentMinutes === 59) && (currentSeconds <= 45)) {
        alertMessage = 'Последние секунды часа';
    }else{
        alertMessage = 'Соответствия по минутам не найдено';
    }
} else {
    let timeArray = userEnter.split(':');
    console.log(timeArray);
    if(timeArray.length) {
        let userHours = timeArray[0];
        let userMinutes = timeArray[1];
        let userSeconds = timeArray[2];
        if (userSeconds) {
            if ((userHours == currentHours) && (userMinutes == currentMinutes) && (userSeconds == currentSeconds)) {
                alertMessage = `${userHours} часов ${userMinutes} минут ${userSeconds} секунд`
            }
        } else {
            if ((userHours == currentHours) && (userMinutes == currentMinutes)) {
                alertMessage = `${userHours} часов ${userMinutes} минут`;
            }
        }
    } else {
        if ((currentDate === 14) && (currentMonth === 0)) {
            alertMessage = 'Сегодня 14.01!'
        } else if ((currentDate === 15) && (currentMonth === 11) && (functionTwelve())) {
            alertMessage = 'Вам сказочно повезло!'
        }
    }
}


function functionTen() {
    let result = false;
    for (let i = 35; i < 59; i = i + 10) {
        if (currentMinutes === i) {
            // console.log(i);
            result = true;
            break;
        }
    }

    return result;
}


function functionTwelve() {
    let result = false;
    for (let i = 30; i >= 1; i = i - 12) {

        if (currentSeconds === i) {
            console.log(i);
            result = true;
            break;
        }

    }

    return result;
}


//console.log([currentYear, currentMonth, currentDate, currentHours, currentMinutes, currentSeconds]);
if(!alertMessage){
    alertMessage = 'Не повезло';
}
alert(alertMessage);

// // const inputData = prompt('Введите дату:');
// //
// // console.log(inputData);
// //
// // switch (currentMinutes) {
// // 	case 44:
// // 	case 47:
// // 		console.log('Это 44!');
// // 		break;
// //
// // 	case 45:
// // 		console.log('Это 45!');
// // 		break;
// //
// // 	case 50:
// // 		console.log('Это 50!');
// // 		break;
// //
// // 	default:
// // 		console.log('Все остальное');
// // 		break;
// // }
