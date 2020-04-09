
const mySort = (arr = [], func) => {
  return () => {
    return arr.sort((value, next) => {
      return typeof func === 'function'
        ? func(value, next)
        : value > next
          ? 1
          : value < next
            ? -1
            : 0;
    });
  };
};
const arr = [ 1, 6, 15, 32 ];

const sortFunc1 = mySort([ ...arr ]);
const sortFunc2 = mySort([ ...arr ], (value, next) => {
  return value > next
    ? -1
    : value < next
      ? 1
      : 0;
});

console.log('sortFunc', sortFunc1(), sortFunc2());
