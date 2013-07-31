rh.js
=====

A Radioactive Hamster approved JavaScript (and CoffeeScript) helper utility library.
------------------------------------------------------------------------------------

This is all very hacky and in development at the moment.  As such, it's pretty much useless in it's current state to anyone but me :)

## String Methods
### .wordLast
```
.wordLast()
```
Returns the last word in a string.
```
RH('Hello world!').wordLast()
// returns 'world!'
```

## Data Interchange Methods
### RH.getJson
```
RH.getJson
```
Fetches a JSON file and allows for data handling with a lambda.  
```
RH.getJson(function(json) {
    // Do something with code here...
});
```

## License
This code is released under the [MIT license](http://opensource.org/licenses/MIT). See the included **LICENSE.txt** file for reference.
