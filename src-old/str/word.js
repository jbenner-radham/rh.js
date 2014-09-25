      this.word = {

        last: function() {
        
          var i, str = _parent.trim.right();

          // Added a safety to handle if the string doesn't have a space.
          for (i = str.length - 1; str[i] !== ' ' && i > 0; --i);

          // The accompanying ternary statement for the no space scenario.
          return str.slice(i? ++i : 0);

        },

        spaceCaps: function() {

          var str = _parent.trim.left(), rtrnStr = ''

          for (var i = 0, len = str.length; i < len; ++i)
            rtrnStr += (_self(str[i]).isUC() && i !== 0? ' ' : '') + str[i]

          return rtrnStr;

        },

        each: function(lambda) {

          // Synopsis:
          // Each character in a string is returned via loop back to
          // the supplied lambda argv.

          // To do: Look into optionally returning key/value pairs.

          for (var i = 0, len = selector.length; i < len; ++i)
            lambda.apply(this, [selector[i]])

        } // psuedo-method each

      }; // object - word

      // aliases for word{}...
      this.wordLast        = function()  { return this.word.last()      }
      this.automagicSpaces = function()  { return this.word.spaceCaps() }
      this.each            = function(l) { return this.word.each(l)     }
      