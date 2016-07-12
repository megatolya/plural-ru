var assert = require('chai').assert;
var plural = require('../');

describe('plural-ru', function() {
    it('Zero', function () {
        const one = '%d файл';
        const several = '%d файла';
        const many = '%d файлов';

        assert.equal('0 файл', plural(0, one, many));
        assert.equal('0 файлов', plural(0, one, several, many));
    });

    it('Several or one', function() {
        const one = 'Скачать файл';
        const many = 'Скачать файлы';

        assert.equal(one, plural(1, one, many));
        assert.equal(many, plural(2, one, many));
        assert.equal(many, plural(10, one, many));
        assert.equal(many, plural(21, one, many));
        assert.equal(one, plural(1, one, many, many));
        assert.equal(many, plural(2, one, many, many));
        assert.equal(many, plural(3, one, many, many));
        assert.equal(one, plural(21, one, many, many));
    });

    it('Several and many', function() {
        const one = 'Один файл';
        const several = 'Два файла';
        const many = 'Много файлов';
        assert.equal(one, plural(1, one, several, many));
        assert.equal(several, plural(2, one, several, many));
        assert.equal(several, plural(3, one, several, many));
        assert.equal(several, plural(4, one, several, many));
        assert.equal(many, plural(5, one, several, many));
    });

    it('Templating', function () {
        const one = '%d файл %d';
        const several = '%d файла %d';
        const many = '%d файлов %d';

        assert.equal('1 файл 1', plural(1, one, several, many));
        assert.equal('2 файла 2', plural(2, one, several, many));
        assert.equal('3 файла 3', plural(3, one, several, many));
        assert.equal('4 файла 4', plural(4, one, several, many));
        assert.equal('5 файлов 5', plural(5, one, several, many));
        assert.equal('101 файл 101', plural(101, one, several, many));
        assert.equal('110 файлов 110', plural(110, one, several, many));
        assert.equal('1000000 файлов 1000000', plural(1000000, one, several, many));
    });

    it('Modyfing number', function () {
        assert.equal('Вы заработали $1', plural(1, 'Вы заработали %d', function (num) { return '$' + num }));
        assert.equal('Вы богат :) Заработали $3', plural(3, 'Вы заработали %d', 'Вы богат :) Заработали %d', function (num) { return '$' + num }));
        assert.equal('Вы супер богат :) Заработали $10', plural(10, 'Вы заработали %d', 'Вы супер богат :) Заработали %d', function (num) { return '$' + num }));
    });
});
