
const arr = [
	110,
	3,
	1,
	'qwjfie',
	2,
	18,
	24,
	4,
	13,
];
const notSorts = [];

const func = (prevValue, nextValue) => {
	if (prevValue === nextValue) {
		return 0;
	}
	if (prevValue < nextValue) {
		return -1;
	}
	if (prevValue > nextValue) {
		return 1;
	}
};

const sortNumbers = arr
	.filter((value) => {
		if (typeof value === 'number') {
			return true;
		}
		return false;
	})
	.sort(func);

console.log('lqwjfijwq', sortNumbers.concat(notSorts));