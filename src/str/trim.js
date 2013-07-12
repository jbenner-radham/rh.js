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
      this.trimL = function() { return this.trim.left()  };
