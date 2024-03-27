const removeFromArray = function (array, ...num) {
    for (let i = num.length - 1; i >= 0; i--) {
        let index = array.indexOf(num[i]) ;
        if (index !== -1) {
            array.splice(index, 1);
        }
        while ((index = array.indexOf(num[i])) !== -1) {
            array.splice(index, 1);
        }
    }
    return array;
};
removeFromArray([1, 2, 2, 3], 2); // should remove 3 and return [1,3]

// Do not edit below this line
module.exports = removeFromArray;
