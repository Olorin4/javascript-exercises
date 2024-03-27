const removeFromArray = function (array, ...num) {
    num.forEach(item => {
        while (array.includes(item)) {
            array.splice(array.indexOf(item), 1);
        }
    });
    return array;
};
removeFromArray([1, 2, 2, 3], 2); // should remove 3 and return [1,3]

// Do not edit below this line
module.exports = removeFromArray;
