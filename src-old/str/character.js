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
      