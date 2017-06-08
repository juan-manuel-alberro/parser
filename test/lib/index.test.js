import test from 'ava';
import * as lib from '../../lib/index';

test('it exists the library', (t) => {
  t.truthy(lib);
});

test('it should exists parser() function', (t) => {
  t.is(typeof lib.parser, 'function');
});

test('it should return undefined if nothing is set as parameter', (t) => {
  t.is(lib.parser()(), undefined);
});

test('it should return the object if path is not a string', (t) => {
  let obj = { foo: 'bar' };
  let path = 7;
  t.deepEqual(lib.parser(7)(obj), obj);
});

test('it should return undefined if parameters are empty', (t) => {
  let obj = {};
  let path = '';
  t.is(lib.parser(path)(obj), undefined);
});

test('it should return undefined if object is empty', (t) => {
  let obj;
  let path = 'a.b';
  t.is(lib.parser(path)(obj), undefined);
});

test('it should return the object if the path is empty', (t) => {
  let obj = {
    foo: {
      bar: 1
    }
  };
  let path;
  t.is(lib.parser(path)(obj), obj);
});

test('it should return undefined if path doesn\'t exists', (t) => {
  let obj = {
    foo: 1
  };
  let path = 'foo.bar.drink';
  t.is(lib.parser(path)(obj), undefined);
});

test('it should return the proper value for the path #1', (t) => {
  let obj = {
    foo: {
      bar: [1, 2, 3]
    }
  };
  let path = 'foo.bar';
  t.deepEqual(lib.parser(path)(obj), [1, 2, 3]);
});

test('it should return the proper value for the path #2', (t) => {
  let obj = {
    foo: {
      bar: {
        fn: function() {
          // do something
        }
      }
    }
  };
  let path = 'foo.bar.fn';
  t.deepEqual(lib.parser(path)(obj), obj.foo.bar.fn);
});
