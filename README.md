# plural-ru

Pluralize russian words like never before 😏

Like [pluralize-ru](https://github.com/kulakowka/pluralize-ru) but with features and tests!

Examples:

```js
var plural = require('plural-ru');

// common and simple use:
plural(1, 'файл', 'файла', 'файлов')); // файл
plural(2, 'файл', 'файла', 'файлов')); // файла
plural(5, 'файл', 'файла', 'файлов')); // файлов

// common use:
plural(1, '%d файл', '%d файла', '%d файлов')); // 1 файл
plural(2, '%d файл', '%d файла', '%d файлов')); // 2 файла
plural(5, '%d файл', '%d файла', '%d файлов')); // 5 файлов

// rare case (one or several of smth):
plural(1, 'Оформить товар', 'Оформить товары')); // Оформить товар
plural(21, 'Оформить товар', 'Оформить товары')); // Оформить товары


// godmode example with number modification:

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

plural(1000000, '%d доллар', '%d доллара', '%d долларов', numberWithSpaces); // 1 000 000 долларов
```

### Installation

```
npm install --save plural-ru
```
