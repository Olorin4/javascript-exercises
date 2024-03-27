const sumAll = function (int1, int2) {
    if (int1 < 0 || int2 <  0 || (typeof int1 !== 'number') || (typeof int2 !== 'number')) {
        return 'ERROR';
    } else {
        let sum = 0;
        if (int1 < int2) {
            for (let i =int1; i <= int2; i++) {
                sum +=  i ;
            } 
        } else if (int1 > int2) {
            for (let i = int2; i <= int1; i++) {
                sum += i;
            }
        } else {
            sum = int1 + int2;
        }
        return sum;
    }
}
    

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
