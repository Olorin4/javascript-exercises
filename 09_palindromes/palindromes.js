const palindromes = function (str) {
    let alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedStr = alphanumericStr.split('').reverse().join('');
        return alphanumericStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
