
const date = new Date();
const currentMinutes = date.getMinutes();

const inputData = prompt('Введите дату:');

console.log(inputData);

switch (currentMinutes) {
	case 44:
	case 47:
		console.log('Это 44!');
		break;

	case 45:
		console.log('Это 45!');
		break;

	case 50:
		console.log('Это 50!');
		break;

	default:
		console.log('Все остальное');
		break;
}
