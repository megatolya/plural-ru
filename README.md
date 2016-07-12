# plural-ru

Pluralize russian words like never before 😏

Like [pluralize-ru](https://github.com/kulakowka/pluralize-ru) but with features and tests!

Examples:

```js
var plural = require('plural-ru');

plural(1, '%d файл', '%d файла', '% файлов')); // 1 файл

plural(2, '%d файл', '%d файла', '% файлов')); // 2 файла

plural(2, 'файл', 'файлы')); // файлы

plural(1000, 'файл', 'файлы')); // файлы

// godmode example:

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

plural(1000000, '%d доллар', '%d доллара', '%d долларов', numberWithSpaces); // 1 000 000 долларов
```
