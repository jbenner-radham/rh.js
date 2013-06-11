var RH = (function() {

  var RH = {}, _self = RH;

  _self = function(selector) {

    // Random object size function...
    this.size = function() {
        
      var size = 0,
          obj  = selector;
      
      for (var prop in obj)
        obj.hasOwnProperty(prop) && ++size;

      return size;
    }; // size


    if (typeof selector === 'string') {

      if (selector[0] === '#')
        return document.getElementById(selector.slice(1));

      var _methodSelf = this;

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
        
          var i, str = _methodSelf.trim.right();

          // Added a safety to handle if the string doesn't have a space.
          for (i = str.length - 1; str[i] !== ' ' && i > 0; --i);

          // The accompanying ternary statement for the no space scenario.
          return str.slice(i? ++i : 0);

        },

        spaceCaps: function() {

          var str = _methodSelf.trim.left(), rtrnStr = ''

          for (var i = 0, len = str.length; i < len; ++i)
            rtrnStr += (_self(str[i]).isUC() && i !== 0? ' ' : '') + str[i]

          return rtrnStr;

        }

      }; // object - word

      // aliases for word{}...
      this.wordLast        = function() { return this.word.last()      }
      this.automagicSpaces = function() { return this.word.spaceCaps() }

      this.character = {

        init: function() {

          if (!isNaN(selector) || '~`!#$%^&*+=-[]\\\';,/{}|":<>?'.indexOf(selector) !== -1) //_methodSelf.character.special.is()) << This doesn't work because it goes on a recursive loop, duh me!
              return false

          return selector.length === 1? selector : selector[0]
        },

        upper: {

          is: function() {

            var c = _methodSelf.character.init()

            return c && c === c.toUpperCase()
          }

        },

        lower: {

          is: function() {

            var c = _methodSelf.character.init()

            return c && c === c.toLowerCase()
          } // psuedo-method - is

        }, // object - lower

        special: {

          is: function() {
              
            var c = _methodSelf.character.init()

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
                notVoid = objAttribs.name && !(objAttribs.name in _methodSelf.html.elements.arVoid)? objAttribs.name : false 

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
              
            return _methodSelf.html.tag.builder({
              name: 'link',
              rel:  "stylesheet/less", 
              type: 'text/css',
              src:  selector + '.less'
            })

          } // psuedo-method - less

        } // object - link

      }; // parent object - html

    } // End of string methods.

    return this;
  };

  return _self;
})();