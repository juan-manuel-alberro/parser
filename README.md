# Parser

A parser library to read complex objects

## What's in the package?

Well, let me tell you!

* `ava` and `sinon` for tests
* `nyc` for code coverage
* `eslint-watch` for linting
* `npm run` scripts for the above, so you won't have to install any global packages while authoring your module (I hate global modules, *grr*)
* `.travis.yml` for CI

## `npm run` scripts

* `npm run test`: Runs tests once
* `npm run test:watch`: Runs tests in watch-mode
* `npm run lint`: Lints the code once
* `npm run lint:watch`: Lints the code in watch-mode
* `npm run cover`: Runs code coverage using `nyc` (`istanbul`)
* `npm run coveralls`: Used by coveralls
* `npm run do-publish`: Used when publishing the package.

## Getting started

Instead of having long validations like

```js
let myObj = {
  some: {
    useless: {
      value: 7
    }
  }
};
if (myObj && 
    myObj.some && 
    myObj.some.useless && 
    myObj.some.useless.value) {
    doSomething(myObj.some.useless.value)
}
```
Just use the parser in this simple way and avoid any issue if the object is not valid
```js
let myObj = {
  some: {
    useless: {
      value: 7
    }
  }
};
if (parse('myObj.some.useless.value')(myObj)) {
  doSomething(myObj.some.useless.value)
}
```

## Tests & Coverage

Just run `npm test` to run all the test, 100% coverage guaranteed.

## To Do
- [ ] Publish the library in NPM repository.

# Author

Juan Manuel Alberro - [Alberro.XYZ](https://alberro.xyz)
