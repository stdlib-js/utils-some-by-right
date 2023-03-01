<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# someByRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether a collection contains at least `n` elements which pass a test implemented by a predicate function, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-some-by-right
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var someByRight = require( '@stdlib/utils-some-by-right' );
```

#### someByRight( collection, n, predicate\[, thisArg ] )

Tests whether a `collection` contains at least `n` elements which pass a test implemented by a `predicate` function, iterating from right to left.

```javascript
function isNegative( value ) {
    return ( value < 0 );
}

var arr = [ -1, 1, -2, 3, 4 ];

var bool = someByRight( arr, 2, isNegative );
// returns true
```

Once the function finds `n` successful elements, the function **immediately** returns `true`.

```javascript
function isNegative( value ) {
    if ( value > 0 ) {
        throw new Error( 'should never reach this line' );
    }
    return ( value < 0 );
}

var arr = [ -1, 2, -3, -4 ];

var bool = someByRight( arr, 2, isNegative );
// returns true
```

The invoked `function` is provided three arguments:

-   `value`: collection element
-   `index`: collection index
-   `collection`: input collection

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    this.sum += value;
    this.count += 1;
    return ( value < 0 );
}

var arr = [ -5, 1, 2, 3, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

var bool = someByRight( arr, 1, sum, context );
// returns true

var mean = context.sum / context.count;
// returns 1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   If provided an empty collection, the function returns `false`.

    ```javascript
    function alwaysTrue() {
        return true;
    }
    var bool = someByRight( [], 1, alwaysTrue );
    // returns false
    ```

-   The function does **not** skip `undefined` elements.

    <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

    ```javascript
    function log( value, index ) {
        console.log( '%s: %s', index, value );
        return ( value < 0 );
    }

    var arr = [ -1, 1, , , 4 ];

    var bool = someByRight( arr, 1, log );
    /* =>
        4: 4
        3: undefined
        2: undefined
        1: 1
        0: -1
    */
    ```

-   The function provides limited support for dynamic collections (i.e., collections whose `length` changes during execution). Note, however, that index incrementation is **not** guaranteed to be monotonically **decreasing**.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var someByRight = require( '@stdlib/utils-some-by-right' );

function threshold( value ) {
    return ( value > 0.95 );
}

var bool;
var arr;
var i;

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = randu();
}

bool = someByRight( arr, 5, threshold );
// returns <boolean>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-any-by-right`][@stdlib/utils/any-by-right]</span><span class="delimiter">: </span><span class="description">test whether at least one element in a collection passes a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-every-by-right`][@stdlib/utils/every-by-right]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection pass a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-for-each-right`][@stdlib/utils/for-each-right]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-none-by-right`][@stdlib/utils/none-by-right]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection fail a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-some-by`][@stdlib/utils/some-by]</span><span class="delimiter">: </span><span class="description">test whether a collection contains at least `n` elements which pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-async/some-by-right`][@stdlib/utils/async/some-by-right]</span><span class="delimiter">: </span><span class="description">test whether a collection contains at least `n` elements which pass a test implemented by a predicate function, iterating from right to left.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-some-by-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-some-by-right

[test-image]: https://github.com/stdlib-js/utils-some-by-right/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-some-by-right/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-some-by-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-some-by-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-some-by-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-some-by-right/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-some-by-right/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-some-by-right/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-some-by-right/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-some-by-right/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-some-by-right/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/any-by-right]: https://github.com/stdlib-js/utils-any-by-right

[@stdlib/utils/every-by-right]: https://github.com/stdlib-js/utils-every-by-right

[@stdlib/utils/for-each-right]: https://github.com/stdlib-js/utils-for-each-right

[@stdlib/utils/none-by-right]: https://github.com/stdlib-js/utils-none-by-right

[@stdlib/utils/some-by]: https://github.com/stdlib-js/utils-some-by

[@stdlib/utils/async/some-by-right]: https://github.com/stdlib-js/utils-async-some-by-right

<!-- </related-links> -->

</section>

<!-- /.links -->
