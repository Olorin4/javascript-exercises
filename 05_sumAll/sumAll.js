const sumAll = function (int1, int2) {
    if (int1 < 0 || int2 <  0 || (typeof int1 !== 'number') || (typeof int2 !== 'number')) {
        return 'ERROR';
    } else {
        const smaller = Math.min(int1, int2);
        const larger = Math.max(int1, int2);
        let sum = 0;
        for (let i = smaller; i <= larger; i++) {
            sum += i;
        }
        return sum;
    }
}

// Do not edit below this line
module.exports = sumAll;
