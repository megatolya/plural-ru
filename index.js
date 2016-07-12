'use strict'

var slice = Array.prototype.slice;

module.exports = function (num) {
    var forms = slice.call(arguments, 1);
    var modifyNumber;

    if (typeof forms[forms.length - 1] === 'function') {
        modifyNumber = forms.pop();
    }

    var str;

    switch (forms.length) {
        case 1:
            str = forms[0];
            break;

        case 2:
            str = num > 1 ? forms[1] : forms[0];
            break;

        default:
            str = forms[plural(num)];
            break;
    }

    if (modifyNumber) {
        num = modifyNumber(num);
    }

    return str.replace(/%d/g, num);
};

function plural(a) {
    if (a % 10 === 1 && a % 100 !== 11) {
        return 0;
    } else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)) {
        return 1;
    } else {
        return 2;
    }
}
