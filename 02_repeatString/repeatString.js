function repeatString(string, num) {
    let finalScript;
    if (num < 0) {
        return finalScript = 'ERROR';
    } else {
        return finalScript= string.repeat(num);
    }
};

repeatString('hey', 3)
console.log(repeatString);

// Do not edit below this line
module.exports = repeatString;
