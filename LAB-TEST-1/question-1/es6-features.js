const lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(array)) {
        return reject('The input is not an array');
      }

      const result = array.filter(item => typeof item === 'string').map(item => item.toLowerCase());
      resolve(result);
    });
};

// I used the same example as in the document.
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
console.log(lowerCaseWords(mixedArray));