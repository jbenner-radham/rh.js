rh.js
=====

### A Radioactive Hamster approved JavaScript (and maybe CoffeeScript again someday...) helper utility library.

This is all very hacky and in development at the moment. However it's got some pretty handy utilities in it at the moment
and it's iterating all the time :)

## Methods

Strings
-------

#### .wordLast

```JS
RH(string).wordLast()
```

Returns the last word in a string.

```JS
RH('Hello world!').wordLast()
// returns 'world!'
```

Data Interchange
----------------

#### RH.getJson

```JS
RH.getJson()
```

Fetches a JSON file and allows for data handling with a lambda.  

```js
RH.getJson(function(json) {
    // Do something with code here...
});
```

HTTP
----

#### RH.getQueryString

```JS
RH.getQueryString()
```

Returns an object populated with the window's query string arguments.

```JS
// example.com/?hello=world&how=areyou
RH.getQueryString()
// returns {hello: "world", how: "areyou"}
```

## License

This code is released under the [MIT license](http://opensource.org/licenses/MIT). See the included **LICENSE.txt** file for reference.
