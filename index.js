'use strict'

var slice = Array.prototype.slice;

module.exports = function (num, one, several, many, modifyNumber) {
    var args = slice.call(arguments);

    if (args.length < 3 && typeof args[2] !== 'function') {
        throw new TypeError('Not enough arguments passed');
    }

    if (typeof args[2] === 'function') {
        modifyNumber = args[2];
        args[3] = args[2] = args[1];
    }

    if (!args[3]) {
        args[3] = args[2];
    }

    if (typeof many === 'function') {
        modifyNumber = many;
        args[3] = args[2];
    }

    var str = args[plural(num)];

    if (modifyNumber) {
        num = modifyNumber(num);
    }

    return parse(str, num);
}

function parse(str, num) {
    var args = slice.call(arguments, 1);
    var i = 0;

    return str.replace(/%d/g, num);
}

function plural(a) {
    if (a % 10 === 1 && a % 100 !== 11) {
        return 1;
    } else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)) {
        return 2;
    } else {
        return 3;
    }
}
