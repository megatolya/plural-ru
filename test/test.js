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

    it('Several and many (noun)', function() {
        const one = 'Один файл';
        const several = 'Два файла';
        const many = 'Много файлов';
        assert.equal(one, plural.noun(1, one, several, many));
        assert.equal(several, plural.noun(2, one, several, many));
        assert.equal(several, plural.noun(3, one, several, many));
        assert.equal(several, plural.noun(4, one, several, many));
        assert.equal(many, plural.noun(5, one, several, many));
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

    it('Several and many (verb)', function() {
        const one = 'Нашлась %d';
        const several = 'Нашлись %d';
        const many = 'Нашлось %d';
        assert.equal('Нашлась 1', plural.verb(1, one, several, many));
        assert.equal('Нашлись 2', plural.verb(2, one, several, many));
        assert.equal('Нашлись 3', plural.verb(3, one, several, many));
        assert.equal('Нашлись 4', plural.verb(4, one, several, many));
        assert.equal('Нашлось 5', plural.verb(5, one, several, many));
        assert.equal('Нашлось 6', plural.verb(6, one, several, many));
        assert.equal('Нашлось 7', plural.verb(7, one, several, many));
        assert.equal('Нашлось 8', plural.verb(8, one, several, many));
        assert.equal('Нашлось 9', plural.verb(9, one, several, many));
        assert.equal('Нашлось 10', plural.verb(10, one, several, many));
        assert.equal('Нашлось 11', plural.verb(11, one, several, many));
        assert.equal('Нашлось 12', plural.verb(12, one, several, many));
        assert.equal('Нашлась 1000', plural.verb(1000, one, several, many));
        assert.equal('Нашлась 21000', plural.verb(21000, one, several, many));
        assert.equal('Нашлись 2000', plural.verb(2000, one, several, many));
        assert.equal('Нашлись 3000', plural.verb(3000, one, several, many));
        assert.equal('Нашлись 4000', plural.verb(4000, one, several, many));
        assert.equal('Нашлось 5000', plural.verb(5000, one, several, many));
        assert.equal('Нашлось 6000', plural.verb(6000, one, several, many));
        assert.equal('Нашлось 7000', plural.verb(7000, one, several, many));
        assert.equal('Нашлось 8000', plural.verb(8000, one, several, many));
        assert.equal('Нашлось 9000', plural.verb(9000, one, several, many));
        assert.equal('Нашлось 10000', plural.verb(10000, one, several, many));
        assert.equal('Нашлось 1000000', plural.verb(1000000, one, several, many));
        assert.equal('Нашлось 1001000', plural.verb(1001000, one, several, many));
    });
});
