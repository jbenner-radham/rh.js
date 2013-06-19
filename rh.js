// Random thought, SQL style object/array queries?
// -----
// RH(objNme).where('objProp is x')


var RH = (function() {

  var RH = {}, _self = RH;

  _self = function(selector) {

    // Random object size function...
    this.size = function() {
        
      var size = 0,
          obj  = selector;
      
      for (var prop in obj) obj.hasOwnProperty(prop) && ++size;

      return size;
    }; // size


    if (typeof selector === 'string') {

      if (selector[0] === '#') return document.getElementById(selector.slice(1))

      var _parent = this;

      this.trim = {

        right: function() { 
            
          var i = selector.length - 1;

          for (; selector[i] === ' '; --i);

          return selector.slice(0, ++i);

        },

        left: function() {

          var i, len = selector.length - 1;

          for (i = 0; selector[i] === ' '; ++i);

          return selector.slice(i);

        }

      }; // psuedo-method trim
      
      // aliases for trim{}...
      this.trimR = function() { return this.trim.right() };
      this.trimL = function() { return this.trim.left() };

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
      this.wordLast        = function() { return this.word.last()      }
      this.automagicSpaces = function() { return this.word.spaceCaps() }
      this.each            = function(l) { return this.word.each(l)     }


      this.code = {

        brackets: {

          match: function() {

            // Synopsis:
            // Supply a string and return the matching end bracket.

            // To do: Handle nested brackets via the nested int/bool var.  

            var nested = false

            for (var i = 0, len = selector.length; i < len; ++i)
              if (selector[i] === '}')
                if (!nested)
                  return i

            //_parent.each(function(c) {
            //  var nested = false
            //  if (c === '}')
            //    if (!nested)
            //})

          }

        }

      },

      this.character = {

        init: function() {

          if (!isNaN(selector) || '~`!#$%^&*+=-[]\\\';,/{}|":<>?'.indexOf(selector) !== -1) //_parent.character.special.is()) << This doesn't work because it goes on a recursive loop, duh me!
              return false

          return selector.length === 1? selector : selector[0]
        },

        upper: {

          is: function() {

            var c = _parent.character.init()

            return c && c === c.toUpperCase()
          }

        },

        lower: {

          is: function() {

            var c = _parent.character.init()

            return c && c === c.toLowerCase()
          } // psuedo-method - is

        }, // object - lower

        special: {

          is: function() {
              
            var c = _parent.character.init()

            if (!c) return false
            
            return '~`!#$%^&*+=-[]\\\';,/{}|":<>?'.indexOf(c) !== -1
          } // psuedo-method - is

        } // object - special

      };

      this.isUC  = function() { return this.character.upper.is()   }
      this.isLC  = function() { return this.character.lower.is()   }
      this.isSpc = function() { return this.character.special.is() }

      this.html = {

        elements: {

          // Array of void elements 
          // a.k.a. informally "self-closing tags."
          arVoid: [
              'area',
              'base',
              'br',
              'col',
              'command',
              'emed',
              'hr',
              'img',
              'input',
              'keygen',
              'link',
              'meta',
              'param',
              'source',
              'track',
              'wbr'
          ]

        },

        tag: {

          builder: function(objAttribs) {
              
            var html    = '<',
                notVoid = objAttribs.name && !(objAttribs.name in _parent.html.elements.arVoid)? objAttribs.name : false 

            objAttribs.name && (html += objAttribs.name)
                            && delete objAttribs.name 
                            && (html += _self(objAttribs).size() >= 1? ' ':'')

            for (var prop in objAttribs) {
                // .hasOwnProperty may be un-needed but just in case...
                if (objAttribs.hasOwnProperty(prop)) {
                    console.log(prop + ' - ' + objAttribs[prop]);
                    html += prop + '="' + objAttribs[prop] + '" '
                }
            }

            html = _self(html).trim.right();

            return html += (notVoid? ' /' : '</' + notVoid) + '>'
          }

        },

        link: {

          less: function() {
              
            return _parent.html.tag.builder({
              name: 'link',
              rel:  "stylesheet/less", 
              type: 'text/css',
              src:  selector + '.less'
            })

          } // psuedo-method - less

        } // object - link

      }; // parent object - html

    } // End of string methods.

    else if (typeof selector === 'object') {

      this.get = function(search) {
          
        // If no search term is submitted bail out.
        if (!search) return false
          
        // If the search object is in the first dimension
        // return that dim immediately.
        if (search in selector) return selector[search]
          
          // Now try searching the second dimension... (Pigs) in space!!!
          for (var obj in selector)
            for (var key in selector[obj])
              if (selector[obj].hasOwnProperty(key) && key == search)
                return selector[obj][key] // <- Value
          
      } // psuedo-method - get

    } // End of object methods.

    return this;
  } // End of object methods.

  return _self;
})();