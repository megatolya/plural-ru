# plural-ru

Pluralize russian words like never before 😏

Like [pluralize-ru](https://github.com/kulakowka/pluralize-ru) but with features and tests!

Examples:

```js
var plural = require('plural-ru');

// most common use:

plural(1, '%d файл', '%d файла', '% файлов')); // 1 файл

plural(2, '%d файл', '%d файла', '% файлов')); // 2 файла

// rare case (one or several of smth):

plural(2, 'Купить товар', 'Оформить товары')); // Оформить товары

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
